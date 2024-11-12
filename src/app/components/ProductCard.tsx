"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "../types";
import { useCartStore } from "../store/cart";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <Link href={`/products/${product.id}`} className="cursor-pointer">
        <div className="relative w-full h-48">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <p className="text-gray-600 mt-2 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>
      <div className="px-6 pb-6">
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
