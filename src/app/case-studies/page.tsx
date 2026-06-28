import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArtifactRow from "@/components/ArtifactRow";
import { getAllCaseStudies } from "@/lib/case-studies";

export default function CaseStudiesIndex() {
  const studies = getAllCaseStudies();
  return (
    <div className="max-w-[920px] mx-auto px-6">
      <Nav />
      <section className="pt-14 pb-4">
        <h1 className="font-serif font-semibold text-[28px] mb-2">Case Studies</h1>
        <p className="font-mono text-sm text-ink-soft">
          Reproduced diagnostics and post-mortems on backend failure modes — Node, Postgres, and the timing gaps between them.
        </p>
      </section>
      <div className="mt-8">
        {studies.map((study) => (
          <ArtifactRow
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            title={study.title}
            tag={study.tag}
            meta={study.stack}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
