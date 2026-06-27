export default function TimelineDiagram() {
  return (
    <div className="mt-12 mb-2 bg-white border border-grid rounded-[3px] px-6 py-7">
      <svg viewBox="0 0 820 140" className="w-full h-auto block" aria-hidden="true">
        <text x="0" y="30" fontFamily="var(--font-mono)" fontSize="11" fill="#2B4C7E" fontWeight={600}>
          REQUEST A
        </text>
        <path className="path-a" d="M 100 38 L 360 38 L 410 70" />
        <circle className="diagram-dot" cx="160" cy="38" r="3.5" fill="#2B4C7E" style={{ animationDelay: "0.4s" }} />
        <circle className="diagram-dot" cx="280" cy="38" r="3.5" fill="#2B4C7E" style={{ animationDelay: "1s" }} />

        <text x="0" y="112" fontFamily="var(--font-mono)" fontSize="11" fill="#1F7A6C" fontWeight={600}>
          REQUEST B
        </text>
        <path className="path-b" d="M 100 104 L 360 104 L 410 70" />
        <circle className="diagram-dot" cx="190" cy="104" r="3.5" fill="#1F7A6C" style={{ animationDelay: "0.6s" }} />
        <circle className="diagram-dot" cx="300" cy="104" r="3.5" fill="#1F7A6C" style={{ animationDelay: "1.2s" }} />

        <circle className="collision-ring" cx="410" cy="70" r="14" fill="none" stroke="#D64545" strokeWidth={2} />
        <circle className="collision-dot" cx="410" cy="70" r="5" fill="#D64545" />

        <path d="M 410 70 L 720 70" fill="none" stroke="#D7DEE6" strokeWidth={2.5} strokeDasharray="4 4" />
        <g className="lock-glyph" transform="translate(700,58)">
          <rect x="0" y="6" width="16" height="13" rx="2" fill="#161B22" />
          <path d="M3,6 V3 a5,5 0 0 1 10,0 V6" fill="none" stroke="#161B22" strokeWidth={2} />
        </g>
      </svg>
      <p className="font-mono text-[11px] text-ink-soft mt-2.5 tracking-wide">
        two concurrent requests, one shared row — the{" "}
        <span className="text-collision font-semibold">collision</span> is the bug; the lock is the fix.
      </p>
    </div>
  );
}
