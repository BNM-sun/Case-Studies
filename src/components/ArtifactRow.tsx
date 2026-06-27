import Link from "next/link";

type ArtifactRowProps = {
  href: string;
  title: string;
  tag: string;
  meta: string;
};

export default function ArtifactRow({ href, title, tag, meta }: ArtifactRowProps) {
  return (
    <Link
      href={href}
      className="group flex items-baseline justify-between gap-4 py-5 border-t border-grid last:border-b text-ink"
    >
      <div className="flex flex-col gap-1.5">
        <div className="font-serif font-semibold text-[18px] group-hover:text-process-a transition-colors">
          {title}
        </div>
        <div className="font-mono text-[11.5px] text-ink-soft tracking-wide">
          <span className="text-process-b">{tag}</span> &nbsp;·&nbsp; {meta}
        </div>
      </div>
      <div className="font-mono text-sm text-ink-soft shrink-0">→</div>
    </Link>
  );
}
