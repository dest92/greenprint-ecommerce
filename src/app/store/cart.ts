import { create } from 'zustand';
import { CartStore, Product } from '../types';

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,
  
  addItem: (product: Product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      
      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          items: updatedItems,
          total: updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
        };
      }
      
      const newItems = [...state.items, { ...product, quantity: 1 }];
      return {
        items: newItems,
        total: newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };
    });
  },
  
  removeItem: (productId: string) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== productId);
      return {
        items: newItems,
        total: newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };
    });
  },
  
  updateQuantity: (productId: string, quantity: number) => {
    set((state) => {
      const newItems = state.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      return {
        items: newItems,
        total: newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };
    });
  },
  
  clearCart: () => {
    set({ items: [], total: 0 });
  },
}));