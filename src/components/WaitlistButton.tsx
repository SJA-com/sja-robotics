"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type WaitlistProduct = "Fari" | "MOUS" | "SAM" | "Autonomous";

type Status = "idle" | "sending" | "done" | "error";

// Sign-ups are stored by the site worker (worker/index.js → /api/waitlist).
export default function WaitlistButton({
  product,
  className,
  children,
}: {
  product: WaitlistProduct;
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    dialogRef.current?.querySelector<HTMLInputElement>("input[name=name]")?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, product, page: window.location.pathname }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Something went wrong — please try again.");
      setStatus("done");
      setMessage(body.already ? "You're already on the list — we'll be in touch." : "You're on the list! We'll email you when it launches.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong — please try again.");
    }
  }

  const input =
    "w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent";

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          setOpen(true);
          setStatus("idle");
          setMessage("");
        }}
      >
        {children}
      </button>

      {open && (
        <div
          className="fade-in fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            className="pop-in w-full max-w-md rounded-2xl bg-surface border border-border p-6 text-left shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 mb-1">
              <h2 id="waitlist-title" className="text-xl font-bold text-foreground">
                Join the {product} waitlist
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="text-foreground/50 hover:text-foreground text-xl leading-none"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-foreground/60 mb-5">
              Be first to know when {product} launches. No spam.
            </p>

            {status === "done" ? (
              <div className="py-6 text-center">
                <p className="text-3xl mb-2">✓</p>
                <p className="text-foreground">{message}</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-5 px-5 py-2 rounded-lg border border-border text-sm hover:border-accent"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-3">
                <input name="name" required maxLength={100} placeholder="Your name" className={input} aria-label="Your name" />
                <input name="email" type="email" required maxLength={200} placeholder="Email" className={input} aria-label="Email" />
                <input name="company" maxLength={120} placeholder="Company (optional)" className={input} aria-label="Company" />
                <textarea
                  name="note"
                  maxLength={500}
                  rows={2}
                  placeholder="What would you use it for? (optional)"
                  className={input}
                  aria-label="What would you use it for?"
                />
                {/* Honeypot: humans never see or fill this */}
                <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                {status === "error" && <p className="text-sm text-red-400">{message}</p>}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-2.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-2 transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Joining…" : "Join waitlist"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
