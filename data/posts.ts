export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "soledad-como-arma",
    title: "Soledad como arma, no como castigo",
    excerpt:
      "Cuando dejas de correr detrás de atención, escuchas por fin tu voz real.",
    date: "2026-05-07",
    readingTime: "6 min",
    content: [
      "La soledad me asustaba porque me obligaba a verme sin filtros. Sin ruido, apareció todo lo que evitaba: miedo, vergüenza y hambre de aprobación.",
      "El giro vino cuando dejé de tratarla como condena y la tomé como entrenamiento. La soledad bien usada no te encierra: te afila.",
      "Hoy no huyo de quedarme solo. Lo busco para planear, escribir, entrenar y recordar quién soy cuando nadie aplaude.",
    ],
  },
  {
    slug: "disciplina-despues-del-caos",
    title: "Disciplina después del caos",
    excerpt: "No necesitas otra charla motivacional; necesitas una estructura que no negocie.",
    date: "2026-05-03",
    readingTime: "7 min",
    content: [
      "Mi vida cambió cuando convertí promesas grandes en acciones pequeñas repetidas hasta el cansancio.",
      "Dormir mejor, entrenar, cortar estímulos basura y escribir una página diaria fue más poderoso que cualquier discurso alfa.",
      "La disciplina no te hace perfecto. Te hace confiable. Y eso, en un mundo de máscaras, vale oro viejo.",
    ],
  },
  {
    slug: "verdad-brutal-respeto-propio",
    title: "Verdad brutal y respeto propio",
    excerpt: "Si te mientes para encajar, te abandonas por dentro.",
    date: "2026-04-27",
    readingTime: "5 min",
    content: [
      "El respeto propio empieza cuando dices la verdad aunque te deje solo por un tiempo.",
      "Mentirte para agradar es una deuda silenciosa. Siempre se cobra con ansiedad, rabia y vacío.",
      "Elegí pagar el precio de ser incómodo antes que volver a vivir de rodillas ante la opinión ajena.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
