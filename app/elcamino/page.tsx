const principios = [
  "Verdad sin maquillaje: lo que no nombras, te gobierna.",
  "Disciplina antes que motivación: la emoción no paga deudas internas.",
  "Cuerpo fuerte, mente clara: entrenamiento como ritual de limpieza.",
  "Soledad útil: dejar de mendigar pertenencia para construir carácter.",
  "Responsabilidad radical: ni victimismo ni excusas heredadas.",
];

export default function ElCaminoPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">El Camino</p>
      <h1 className="section-title mt-2 text-4xl">Filosofía de ceniza y hierro</h1>

      <div className="mt-8 grid gap-4">
        {principios.map((principio) => (
          <article key={principio} className="rune-panel rounded p-5">
            <p className="text-sm text-foreground/95">{principio}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
