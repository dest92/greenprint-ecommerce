import ProductGrid from "../components/ProductGrid";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Sistemas Hidropónicos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra línea completa de sistemas hidropónicos
            innovadores, diseñados para adaptarse a tus necesidades de cultivo
          </p>
        </div>

        <ProductGrid />
      </div>
    </div>
  );
}
