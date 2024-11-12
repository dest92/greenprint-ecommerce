'use client';

import { useCartStore } from '../store/cart';
import { Product } from '../types';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      onClick={() => addItem(product)}
      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium mt-6"
    >
      Agregar al carrito
    </button>
  );
}