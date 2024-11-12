"use client";

import { useCartStore } from "../store/cart";
import Link from "next/link";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tu carrito está vacío
        </h2>
        <Link
          href="/"
          className="text-green-600 hover:text-green-700 font-medium"
        >
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Carrito de Compras
      </h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="relative w-24 h-24">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="96px"
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
                className="border border-gray-300 rounded-md px-3 py-1.5 bg-white text-gray-700 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeItem(item.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold text-gray-900">Total:</span>
          <span className="text-2xl font-bold text-gray-900">
            ${total.toFixed(2)}
          </span>
        </div>
        <Link
          href="/checkout"
          className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          Proceder al pago
        </Link>
      </div>
    </div>
  );
}
