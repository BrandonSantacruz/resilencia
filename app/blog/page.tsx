import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">Blog</p>
      <h1 className="section-title mt-2 text-4xl">Bitácora de guerra interna</h1>

      <div className="mt-8 grid gap-4">
        {posts.map((post) => (
          <article key={post.slug} className="rune-panel rounded p-5">
            <p className="text-xs text-muted">
              {post.date} · {post.readingTime}
            </p>
            <h2 className="mt-2 section-title text-xl text-accent">{post.title}</h2>
            <p className="mt-2 text-sm text-foreground/90">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="gold-hover mt-4 inline-block text-sm text-accent">
              Leer artículo →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
