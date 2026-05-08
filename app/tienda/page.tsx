import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export default function TiendaPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Tienda</p>
        <h1 className="section-title mt-2 text-4xl text-foreground">Armas para el alma</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Nada de humo. Contenido para personas que están hartas de autoengañarse y están listas
          para ejecutar.
        </p>
      </header>

      <section className="grid gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
