export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-grid flex flex-wrap items-center justify-between gap-3">
      <div className="font-mono text-xs text-ink-soft">© {new Date().getFullYear()} bnm — backend diagnostics</div>
      <div className="flex gap-5 font-mono text-[12.5px]">
        <a href="mailto:bathomakgau4@gmail.com" className="text-ink-soft hover:text-process-a transition-colors">contact</a>
        <a href="https://github.com/BNM-sun" target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-process-a transition-colors">github ↗</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-process-a transition-colors">linkedin ↗</a>
      </div>
    </footer>
  );
}
