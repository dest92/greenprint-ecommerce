"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/cart";
import LogoPic from "../../../public/images/logo.png";

export default function Header() {
  const { items } = useCartStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src={LogoPic}
              alt="GreenPrint Logo"
              width={200}
              height={100}
              className="object-contain"
              priority
            />
          </Link>
          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-green-600 font-medium"
            >
              Productos
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-green-600" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
