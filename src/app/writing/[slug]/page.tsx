import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getWritingBySlug, getAllWriting } from "@/lib/writing";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllWriting().map((post) => ({ slug: post.slug }));
}

export default async function WritingArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let meta, content;
  try {
    ({ meta, content } = getWritingBySlug(slug));
  } catch {
    notFound();
  }

  return (
    <div className="max-w-[920px] mx-auto px-6">
      <Nav />
      <article className="pt-14 pb-10">
        <div className="font-mono text-xs tracking-[0.08em] uppercase text-process-b mb-4">
          {meta!.tag} &nbsp;·&nbsp; {meta!.date}
        </div>
        <h1 className="font-serif font-semibold text-[30px] sm:text-[36px] leading-[1.2] mb-4 max-w-[680px]">
          {meta!.title}
        </h1>
        <p className="font-mono text-sm text-ink-soft max-w-[600px] mb-10">{meta!.excerpt}</p>

        <div className="prose-article">
          <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </article>
      <Footer />
    </div>
  );
}
