export type Status = "Live" | "Live in demo" | "In development" | "Planned";

const styles: Record<Status, string> = {
  Live: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  "Live in demo": "bg-sky-400/10 text-sky-400 border-sky-400/20",
  "In development": "bg-amber-400/10 text-amber-400 border-amber-400/20",
  Planned: "bg-foreground/5 text-foreground/45 border-foreground/10",
};

// Small pill used across product sections to mark what ships today vs. roadmap.
export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      data-status={status}
      className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[9px] font-mono uppercase tracking-wider whitespace-nowrap shrink-0 ${styles[status]}`}
    >
      {status}
    </span>
  );
}
