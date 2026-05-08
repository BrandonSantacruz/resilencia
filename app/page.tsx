import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-border/70">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1800')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-background" />
        <div className="mx-auto flex min-h-[78svh] w-full max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">AshVein // Forja real</p>
          <h1 className="section-title max-w-4xl text-4xl leading-tight text-foreground sm:text-6xl">
            Deja la máscara.
            <span className="block text-accent">Camina con hambre, no con excusas.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted sm:text-lg">
            Yo también fui ese hombre roto: adicciones, pornografía extrema, traiciones, rabia,
            y una soledad que elegí para no volver a mendigar respeto. Este no es un refugio
            suave. Es una forja para los que ya no quieren vivir de rodillas.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/tienda"
              className="gold-hover rounded border border-accent/60 bg-accent/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent"
            >
              Entrar a la Tienda
            </Link>
            <Link
              href="/micamino"
              className="gold-hover rounded border border-border bg-card/80 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground"
            >
              Leer Mi Camino
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:grid-cols-3 sm:px-6">
        {[
          {
            title: "Sin personajes",
            text: "Aquí no vendemos energía alfa de cartón. Si tiemblas, lo dices. Si caes, te levantas.",
          },
          {
            title: "Disciplina de guerra",
            text: "La paz no te la da una frase bonita. Te la da cumplir tu palabra cuando nadie te mira.",
          },
          {
            title: "Soledad elegida",
            text: "Cuando dejas de perseguir validación, aparece tu fuerza más peligrosa: claridad brutal.",
          },
        ].map((item) => (
          <article key={item.title} className="rune-panel rounded p-6">
            <h2 className="section-title text-lg text-accent">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="border-y border-border/70 bg-card/50">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6">
          <h2 className="section-title text-2xl text-foreground">Juramento del Camino</h2>
          <p className="max-w-4xl text-muted">
            No culpo al mundo por mis ruinas. Las usé de leña. No busco ser amado por todos,
            busco ser respetado por mí cuando cae la noche. Si tu pasado te persigue, perfecto:
            úsalo de perro de guerra hasta que deje de morderte.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/elcamino" className="gold-hover rounded border border-border px-4 py-2">
              Ver filosofía
            </Link>
            <Link href="/blog" className="gold-hover rounded border border-border px-4 py-2">
              Ir al blog
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="rune-panel rounded p-6 sm:p-8">
          <h2 className="section-title text-xl text-accent">Únete al fuego</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Formulario listo para futuro email marketing con Formspree. Cambia el endpoint y
            empieza a capturar tu tribu.
          </p>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              name="email"
              required
              placeholder="tu-correo@dominio.com"
              className="w-full rounded border border-border bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="gold-hover rounded border border-accent/60 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent"
            >
              Unirme
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
