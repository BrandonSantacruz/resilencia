export type Product = {
  id: string;
  title: string;
  subtitle: string;
  priceUsd: number;
  description: string;
  cover: string;
  fileUrl?: string;
  paypalHostedButtonId: string;
  whatsappMessage: string;
};

export const products: Product[] = [
  {
    id: "ebook-camino-de-hierro",
    title: "Ebook: Camino de Hierro",
    subtitle: "De adicción y ruina a disciplina y soberanía",
    priceUsd: 21,
    description:
      "Guía directa para romper hábitos que te vacían, construir estructura diaria y recuperar respeto propio en 90 días de guerra interna.",
    cover: "/covers/ebook-camino-de-hierro.svg",
    fileUrl: "/ebooks/camino-de-hierro.pdf",
    paypalHostedButtonId: "YOUR_PAYPAL_HOSTED_BUTTON_ID",
    whatsappMessage: "Hola, quiero comprar el ebook Camino de Hierro.",
  },
  {
    id: "ebook-codigo-del-lobo",
    title: "Ebook: Código del Lobo",
    subtitle: "Límites, respeto y autoridad personal",
    priceUsd: 19,
    description:
      "Manual práctico para dejar de negociar contigo mismo, blindar tu enfoque y sostener disciplina en días malos.",
    cover: "/covers/ebook-codigo-del-lobo.svg",
    fileUrl: "/ebooks/codigo-del-lobo.pdf",
    paypalHostedButtonId: "YOUR_PAYPAL_HOSTED_BUTTON_ID",
    whatsappMessage: "Hola, quiero comprar el ebook Código del Lobo.",
  },
  {
    id: "ebook-fuego-frio",
    title: "Ebook: Fuego Frío",
    subtitle: "Control emocional para guerra diaria",
    priceUsd: 27,
    description:
      "Sistema para transformar rabia, ansiedad y ruido mental en ejecución fría, decisiones limpias y constancia real.",
    cover: "/covers/ebook-fuego-frio.svg",
    fileUrl: "/ebooks/fuego-frio.pdf",
    paypalHostedButtonId: "YOUR_PAYPAL_HOSTED_BUTTON_ID",
    whatsappMessage: "Hola, quiero comprar el ebook Fuego Frío.",
  },
];
