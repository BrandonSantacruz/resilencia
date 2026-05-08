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
];
