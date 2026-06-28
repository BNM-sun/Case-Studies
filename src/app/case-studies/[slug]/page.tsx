import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let meta, content;
  try {
    ({ meta, content } = getCaseStudyBySlug(slug));
  } catch {
    notFound();
  }

  return (
    <div className="max-w-[920px] mx-auto px-6">
      <Nav />
      <article className="pt-14 pb-10">
        <div className="font-mono text-xs tracking-[0.08em] uppercase text-process-b mb-4 flex items-center gap-3">
          <span>{meta!.tag} &nbsp;·&nbsp; {meta!.stack}</span>
          {meta!.illustrative && (
            <span className="border border-grid text-ink-soft px-2 py-0.5 rounded text-[10px] uppercase tracking-widest">
              illustrative scenario
            </span>
          )}
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
