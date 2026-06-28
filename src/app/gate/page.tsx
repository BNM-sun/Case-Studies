type Props = {
  searchParams: Promise<{ next?: string; error?: string }>;
};

export default async function Gate({ searchParams }: Props) {
  const { next = "/", error } = await searchParams;

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-[400px]">
        {/* wordmark */}
        <div className="font-mono font-semibold text-[15px] tracking-tight text-ink mb-12">
          bnm<span className="text-collision">_</span>
        </div>

        <h1 className="font-serif font-semibold text-[24px] leading-[1.25] mb-3">
          Enter your email to continue
        </h1>
        <p className="font-mono text-sm text-ink-soft mb-8 leading-relaxed">
          One-time only. No newsletters, no sequences — just a record of who&apos;s reading.
        </p>

        <form method="POST" action="/api/gate" className="flex flex-col gap-3">
          <input type="hidden" name="next" value={next} />
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            autoFocus
            className="w-full font-mono text-sm bg-paper border border-grid rounded px-4 py-3 text-ink placeholder:text-ink-soft focus:outline-none focus:border-process-a transition-colors"
          />
          {error && (
            <p className="font-mono text-xs text-collision">
              That doesn&apos;t look like a valid email.
            </p>
          )}
          <button
            type="submit"
            className="w-full font-mono text-sm bg-ink text-paper rounded px-4 py-3 hover:bg-process-a transition-colors"
          >
            Continue →
          </button>
        </form>

        <p className="font-mono text-[11px] text-ink-soft mt-8 leading-relaxed">
          Your email is collected once and stored privately. It will not be shared or used for marketing.
        </p>
      </div>
    </div>
  );
}
