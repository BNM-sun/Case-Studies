import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArtifactRow from "@/components/ArtifactRow";
import { getAllWriting } from "@/lib/writing";

export default function WritingIndex() {
  const posts = getAllWriting();
  return (
    <div className="max-w-[920px] mx-auto px-6">
      <Nav />
      <section className="pt-14 pb-4">
        <h1 className="font-serif font-semibold text-[28px] mb-2">Writing</h1>
        <p className="font-mono text-sm text-ink-soft">Long-form research on backend failure modes — sourced, linked, and unpadded.</p>
      </section>
      <div className="mt-8">
        {posts.map((post) => (
          <ArtifactRow
            key={post.slug}
            href={`/writing/${post.slug}`}
            title={post.title}
            tag={post.tag}
            meta={post.date}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
