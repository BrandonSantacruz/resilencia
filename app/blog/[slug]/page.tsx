import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs text-muted">
        {post.date} · {post.readingTime}
      </p>
      <h1 className="section-title mt-2 text-4xl text-accent">{post.title}</h1>

      <div className="mt-8 space-y-5 text-sm leading-7 text-foreground/95">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
