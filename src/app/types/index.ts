export interface ProductDetails {
  capacity: string;
  dimensions: string;
  waterCapacity: string;
  features: string[];
  includes: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  details: ProductDetails;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}
