import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-7 border-b border-grid">
      <Link href="/" className="font-mono font-semibold text-[15px] tracking-tight text-ink">
        bnm<span className="text-collision">_</span>
      </Link>
      <div className="flex gap-7 font-mono text-[13px] text-ink-soft">
        <Link href="/writing" className="hover:text-ink transition-colors">writing</Link>
        <Link href="/case-studies" className="hover:text-ink transition-colors">case studies</Link>
        <Link href="/about" className="hover:text-ink transition-colors">about</Link>
        <a
          href="https://github.com/BNM-sun"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ink transition-colors"
        >
          github ↗
        </a>
      </div>
    </nav>
  );
}
