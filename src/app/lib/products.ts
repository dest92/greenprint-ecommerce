import { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Sistema Hidropónico Básico",
    description:
      "Sistema hidropónico modular impreso en 3D ideal para comenzar con el cultivo en casa. Perfecto para principiantes, incluye sistema de riego automático y capacidad para 4-6 plantas.",
    price: 299.99,
    image: "/images/hidropon1.jpg",
    details: {
      capacity: "4-6 plantas",
      dimensions: "60cm x 30cm x 45cm",
      waterCapacity: "5 litros",
      features: [
        "Sistema de riego automático",
        "Fabricado con materiales reciclados",
        "Módulos expandibles",
        "Bajo consumo de energía",
      ],
      includes: [
        "Estructura principal",
        "Sistema de bombeo",
        "Temporizador automático",
        "Manual de usuario",
        "Kit de nutrientes inicial",
      ],
    },
  },
  {
    id: "2",
    name: "Kit Profesional Hidropónico",
    description:
      "Sistema completo con automatización y sensores para cultivo profesional. Ideal para producción a mediana escala con monitoreo inteligente.",
    price: 899.99,
    image: "/images/hidropon2.jpg",
    details: {
      capacity: "12-16 plantas",
      dimensions: "120cm x 60cm x 180cm",
      waterCapacity: "15 litros",
      features: [
        "Control de pH automático",
        "Monitoreo de nutrientes",
        "Conectividad WiFi",
        "App de control",
        "Sistema de iluminación LED",
      ],
      includes: [
        "Estructura completa",
        "Sistema de control automático",
        "Sensores de pH y EC",
        "Sistema de iluminación",
        "Kit de nutrientes profesional",
      ],
    },
  },
  {
    id: "3",
    name: "Torre Vertical de Cultivo",
    description:
      "Sistema vertical para maximizar el espacio de cultivo en interiores. Perfecto para espacios reducidos con máximo aprovechamiento vertical.",
    price: 499.99,
    image: "/images/hidropon3.jpg",
    details: {
      capacity: "20-24 plantas",
      dimensions: "50cm x 50cm x 200cm",
      waterCapacity: "12 litros",
      features: [
        "Diseño vertical optimizado",
        "Sistema de riego por gravedad",
        "Iluminación LED integrada",
        "Rotación ajustable",
        "Múltiples niveles de cultivo",
      ],
      includes: [
        "Torre vertical completa",
        "Sistema de iluminación por niveles",
        "Sistema de riego",
        "Kit de montaje",
        "Manual de operación",
      ],
    },
  },
  {
    id: "4",
    name: "Sistema Hidropónico Compacto",
    description:
      "Solución compacta y eficiente para espacios pequeños. Ideal para cocinas y apartamentos.",
    price: 199.99,
    image: "/images/hidropon4.jpg",
    details: {
      capacity: "2-4 plantas",
      dimensions: "40cm x 25cm x 35cm",
      waterCapacity: "3 litros",
      features: [
        "Diseño compacto",
        "Operación silenciosa",
        "Bajo consumo energético",
        "Ideal para hierbas aromáticas",
      ],
      includes: [
        "Unidad compacta",
        "Mini bomba de agua",
        "Timer básico",
        "Kit de inicio",
        "Guía rápida",
      ],
    },
  },
];
