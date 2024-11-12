"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "../store/cart";

export default function CheckoutPage() {
  const router = useRouter();
  const { total, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    clearCart();
    router.push("/");
    alert("¡Compra realizada con éxito! Gracias por tu pedido.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Finalizar Compra
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Información Personal
          </h2>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Nombre Completo
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Dirección de Envío
            </label>
            <input
              type="text"
              name="address"
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Información de Pago
          </h2>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Número de Tarjeta
            </label>
            <input
              type="text"
              name="cardNumber"
              required
              maxLength={16}
              className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Fecha de Vencimiento
              </label>
              <input
                type="text"
                name="expiryDate"
                required
                placeholder="MM/YY"
                className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                required
                maxLength={3}
                className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-semibold text-gray-900">
              Total a Pagar:
            </span>
            <span className="text-2xl font-bold text-gray-900">
              ${total.toFixed(2)}
            </span>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-green-600 text-white py-3 rounded-lg font-medium
              ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-700 transition-colors"
              }`}
          >
            {loading ? "Procesando..." : "Confirmar Pedido"}
          </button>
        </div>
      </form>
    </div>
  );
}
