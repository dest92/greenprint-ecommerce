import { products } from "../../lib/products";
import AddToCartButton from "@/app/components/AddToCartButton";
import Image from "next/image";
import { Check } from "lucide-react";
import { notFound } from "next/navigation";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Imagen del producto */}
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-xl text-gray-600">{product.description}</p>
            <div className="text-3xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </div>

            {/* Especificaciones */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Especificaciones
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-gray-600">
                    Capacidad: {product.details.capacity}
                  </p>
                  <p className="text-gray-600">
                    Dimensiones: {product.details.dimensions}
                  </p>
                  <p className="text-gray-600">
                    Capacidad de agua: {product.details.waterCapacity}
                  </p>
                </div>
              </div>
            </div>

            {/* Características */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Características
              </h2>
              <ul className="grid grid-cols-1 gap-2">
                {product.details.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Incluye */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Incluye</h2>
              <ul className="grid grid-cols-1 gap-2">
                {product.details.includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botón de compra */}
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
