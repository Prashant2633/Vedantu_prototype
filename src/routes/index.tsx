import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({
      to: "/prototype",
      replace: true,
    });
  },
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-8 pt-8">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-vermillion" />
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            PM Intern Submission · Vedantu
          </span>
        </div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          July 2026
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-8 pt-24 pb-16">
        <p className="text-sm uppercase tracking-[0.22em] text-vermillion">
          A case study on India's DPDP Act
        </p>
        <h1 className="mt-6 font-display text-[112px] leading-[0.95] tracking-[-0.03em] text-balance">
          Consent,
          <br />
          <em className="italic text-vermillion">by design.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate text-pretty">
          Vedantu teaches millions of learners under eighteen. India's DPDP Act now
          requires verifiable parental consent, purpose-bound data use, and real user
          rights. This submission redesigns Vedantu's consent experience so that
          compliance becomes a moment of trust — not a moment of drop-off.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <LinkCard
            to="/deck"
            eyebrow="Deliverable 1"
            title="Product Thinking Deck"
            meta="11 slides · press → to navigate · ⌘P to export"
          />
          <LinkCard
            to="/prototype"
            eyebrow="Deliverable 2"
            title="Clickable Prototype"
            meta="Mobile flow · age gate → parental consent → preference center"
          />
        </div>

        <section className="mt-24 grid grid-cols-2 gap-x-12 gap-y-10 border-t border-hairline pt-12 md:grid-cols-4">
          <Stat kpi="~65%" label="Vedantu learners aged under 18 (est.)" />
          <Stat kpi="₹250 Cr" label="Max DPDP penalty per violation" />
          <Stat kpi="1 tap" label="Current 'consent' at signup today" />
          <Stat kpi="9 purposes" label="Data uses we unbundle in the redesign" />
        </section>

        <footer className="mt-24 flex items-center justify-between border-t border-hairline pt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>Built for the Vedantu PM Intern hiring assignment</span>
          <span>Assumptions & mock data disclosed inside</span>
        </footer>
      </main>
    </div>
  );
}

function LinkCard({
  to,
  eyebrow,
  title,
  meta,
}: {
  to: string;
  eyebrow: string;
  title: string;
  meta: string;
}) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-hairline bg-card p-8 transition-all hover:border-ink hover:-translate-y-0.5"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-vermillion">{eyebrow}</p>
        <h3 className="mt-3 font-display text-4xl tracking-tight">{title}</h3>
      </div>
      <div className="mt-16 flex items-end justify-between">
        <p className="text-sm text-muted-foreground">{meta}</p>
        <ArrowUpRight className="h-6 w-6 text-ink transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div>
      <div className="font-display text-5xl tracking-tight">{kpi}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
