import Link from "next/link";
import ProductGrid from "./components/ProductGrid";
import { LeafyGreen, Recycle, Sprout } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="flex justify-center">
            {" "}
            {/* Contenedor centrado para la imagen */}
            {/* <Image
              src={LogoPic}
              width={200}
              height={300}
              alt="logo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-110"
              priority
            /> */}
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Cultiva un futuro verde,{" "}
            <span className="text-green-600">una impresión a la vez</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistemas hidropónicos sostenibles impresos en 3D con materiales
            reciclados, diseñados para revolucionar la agricultura urbana
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link href="/products" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Explorar Productos
            </Link>
            <Link
              href="https://greenprint.dev.ar"
              className="bg-white text-green-600 px-8 py-3 rounded-lg border-2 border-green-600 hover:bg-green-400  transition-colors font-medium"
            >
              Conocer más
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <LeafyGreen className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Sostenibilidad
            </h3>
            <p className="text-gray-600">
              Nuestros sistemas están fabricados con plásticos reciclados,
              contribuyendo a la economía circular
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Sprout className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Cultivo Eficiente
            </h3>
            <p className="text-gray-600">
              Tecnología hidropónica avanzada que optimiza el uso de agua y
              nutrientes
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Recycle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Personalización
            </h3>
            <p className="text-gray-600">
              Diseños modulares adaptables a diferentes espacios y necesidades
              de cultivo
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 bg-green-600 rounded-lg p-8 text-white">
          <div>
            <h4 className="text-3xl font-bold">20%</h4>
            <p className="text-green-100">Ahorro de agua</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">100%</h4>
            <p className="text-green-100">Materiales reciclados</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">+1000</h4>
            <p className="text-green-100">Sistemas instalados</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">+50</h4>
            <p className="text-green-100">Diseños personalizados</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600">
            Descubre nuestra línea de sistemas hidropónicos innovadores
          </p>
        </div>
        <ProductGrid />
      </section>
    </div>
  );
}
