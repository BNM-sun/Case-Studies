import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TimelineDiagram from "@/components/TimelineDiagram";
import ArtifactRow from "@/components/ArtifactRow";

export default function Home() {
  return (
    <div className="max-w-[920px] mx-auto px-6">
      <Nav />

      <section className="pt-16 pb-12">
        <div className="font-mono text-xs tracking-[0.08em] uppercase text-process-b mb-4 flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-process-b inline-block" />
          node / typescript / postgres &nbsp;·&nbsp; vercel / railway
        </div>
        <h1 className="font-serif font-semibold text-[34px] sm:text-[40px] leading-[1.18] tracking-tight max-w-[640px] mb-4">
          Race conditions and auth/session deadlocks — found, reproduced, fixed.
        </h1>
        <p className="font-mono text-sm text-ink-soft max-w-[520px] leading-relaxed">
          A specialist backend diagnostic practice for mid-market SaaS teams. I read the check, find the gap, and
          show you the line where the world changed underneath it.
        </p>

        <TimelineDiagram />
      </section>

      <div className="font-mono text-xs tracking-[0.08em] uppercase text-ink-soft mt-16 mb-5">featured</div>

      <ArtifactRow
        href="/writing/the-blind-spot"
        title="The Blind Spot — why race conditions keep beating teams who should know better"
        tag="research"
        meta="5,400 words · 37 sources"
      />
      <ArtifactRow
        href="/case-studies/duplicate-stripe-charges"
        title="$25,300 in duplicate Stripe charges on a Vercel + Postgres stack"
        tag="post-mortem"
        meta="illustrative diagnostic · node / prisma / stripe"
      />
      <ArtifactRow
        href="/case-studies/common-errors-sequelize"
        title="COMMON_ERRORS.md — Sequelize transactions and row-level locking"
        tag="reference"
        meta="reproduced & verified · sequelize / sqlite"
      />

      <Footer />
    </div>
  );
}
