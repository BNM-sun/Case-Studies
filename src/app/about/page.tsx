import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="max-w-[920px] mx-auto px-6">
      <Nav />
      <section className="pt-14 pb-16 max-w-[680px]">
        <div className="font-mono text-xs tracking-[0.08em] uppercase text-process-b mb-6">
          about
        </div>
        <h1 className="font-serif font-semibold text-[30px] sm:text-[36px] leading-[1.2] mb-10">
          Backend diagnostic practice — race conditions and auth/session deadlocks.
        </h1>

        <div className="font-serif text-[17px] leading-[1.7] text-ink space-y-6">
          <p>
            I run bnm — a specialist diagnostic practice for mid-market SaaS teams hitting backend
            failure modes they can&apos;t pin down. The work is narrow by design: race conditions,
            auth/session deadlocks, and the timing gaps that open up between a check and a write.
            Node and TypeScript on Postgres, deployed to Vercel or Railway. That&apos;s the stack
            I work in, and it&apos;s the one I know at the level where these bugs actually live.
          </p>
          <p>
            Most of the engagements start the same way — something is wrong intermittently, the
            logs are clean, and the staging environment refuses to reproduce it. I trace the
            execution path, find where the world was allowed to change between the read and the
            write, and show you the specific line. Then we fix it and verify the fix holds under
            load, not just in a test.
          </p>
          <p>
            If you&apos;re seeing duplicate charges, phantom inventory, session collisions, or
            anything else that only happens under concurrency, reach out:{" "}
            <a
              href="mailto:bathomakgau4@gmail.com"
              className="text-process-a underline underline-offset-2 decoration-grid hover:decoration-process-a transition-colors"
            >
              bathomakgau4@gmail.com
            </a>
            . I&apos;ll tell you quickly whether it fits what I do.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
