import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <article className="rune-panel grid gap-4 rounded p-4 sm:grid-cols-[220px_1fr] sm:p-6">
      <div
        className="min-h-52 rounded border border-border bg-cover bg-center"
        style={{ backgroundImage: `url('${product.cover}')` }}
        aria-hidden
      />
      <div className="flex flex-col">
        <h2 className="section-title text-2xl text-accent">{product.title}</h2>
        <p className="mt-2 text-sm text-muted">{product.subtitle}</p>
        <p className="mt-4 text-sm leading-6 text-foreground/90">{product.description}</p>
        <p className="mt-4 text-xl font-semibold text-accent">${product.priceUsd} USD</p>

        <div className="mt-5 flex flex-wrap gap-3">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value={product.paypalHostedButtonId} />
            <button
              type="submit"
              className="gold-hover rounded border border-accent/70 bg-accent/15 px-4 py-2 text-sm font-semibold text-accent"
            >
              Comprar con PayPal
            </button>
          </form>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-hover rounded border border-border bg-black/40 px-4 py-2 text-sm font-semibold text-foreground"
          >
            Comprar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
