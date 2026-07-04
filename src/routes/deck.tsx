import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Download,
  Printer,
  X,
} from "lucide-react";

export const Route = createFileRoute("/deck")({
  head: () => ({
    meta: [
      { title: "Deck — Consent, by design (Vedantu × DPDP)" },
      {
        name: "description",
        content:
          "11-slide product thinking deck: reimagining Vedantu's consent architecture under DPDP.",
      },
    ],
  }),
  component: DeckPage,
});

/* ------------------------------------------------------------------ */
/*  Slides                                                            */
/* ------------------------------------------------------------------ */

const SLIDES: { id: string; label: string; render: () => ReactNode }[] = [
  { id: "cover", label: "Cover", render: () => <SlideCover /> },
  { id: "problem", label: "Problem", render: () => <SlideProblem /> },
  { id: "user", label: "User", render: () => <SlideUser /> },
  { id: "current", label: "Current experience", render: () => <SlideCurrent /> },
  { id: "insights", label: "Insight & opportunity", render: () => <SlideInsights /> },
  { id: "solution", label: "Solution", render: () => <SlideSolution /> },
  { id: "ux", label: "UX & prototype", render: () => <SlideUX /> },
  { id: "metrics", label: "Metrics", render: () => <SlideMetrics /> },
  { id: "dashboard", label: "Dashboard", render: () => <SlideDashboard /> },
  { id: "diagnostic", label: "Diagnostic", render: () => <SlideDiagnostic /> },
  { id: "rollout", label: "Rollout", render: () => <SlideRollout /> },
  { id: "risks", label: "Risks & vision", render: () => <SlideRisks /> },
];

/* Shared slide chrome */
function Slide({
  index,
  eyebrow,
  children,
  bg = "paper",
}: {
  index: number;
  eyebrow: string;
  children: ReactNode;
  bg?: "paper" | "ink";
}) {
  const isInk = bg === "ink";
  return (
    <div
      className="slide-frame"
      style={{
        background: isInk ? "var(--ink)" : "var(--paper)",
        color: isInk ? "var(--paper)" : "var(--ink)",
      }}
    >
      {/* Header rule */}
      <div
        className="absolute inset-x-16 top-10 flex items-center justify-between text-[11px] uppercase tracking-[0.22em]"
        style={{ color: isInk ? "oklch(0.75 0.02 260)" : "var(--slate)" }}
      >
        <div className="flex items-center gap-3">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--vermillion)" }}
          />
          <span>{eyebrow}</span>
        </div>
        <div className="flex items-center gap-8">
          <span>Vedantu · DPDP · PM Intern</span>
          <span className="tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </div>
      <div
        className="absolute inset-x-16 top-16 h-px"
        style={{ background: isInk ? "oklch(1 0 0 / 0.12)" : "var(--hairline)" }}
      />
      <div className="absolute inset-x-16 top-24 bottom-14">{children}</div>
      <div
        className="absolute inset-x-16 bottom-6 flex items-center justify-between text-[10px] uppercase tracking-[0.22em]"
        style={{ color: isInk ? "oklch(0.6 0.02 260)" : "var(--muted-foreground)" }}
      >
        <span>Consent, by design</span>
        <span>Mock data · assumptions disclosed</span>
      </div>
    </div>
  );
}

/* --- 1. Cover ---------------------------------------------------- */
function SlideCover() {
  return (
    <div
      className="slide-frame flex flex-col justify-between px-16 py-14"
      style={{ background: "var(--ink)", color: "var(--paper)" }}
    >
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/60">
        <div className="flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-vermillion" />
          <span>Vedantu · Product Intern hiring assignment</span>
        </div>
        <span>July 2026</span>
      </div>

      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-vermillion">
          India's DPDP Act, 2023 · a redesign
        </p>
        <h1 className="mt-6 font-display text-[132px] leading-[0.9] tracking-[-0.03em] text-white">
          Consent,
          <br />
          <em className="italic text-vermillion">by design.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
          Turning DPDP compliance into a moment of trust — the first product surface
          Vedantu's parents ever see, and the reason they stay.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8 border-t border-white/15 pt-6 text-white/80">
        <Kv k="Product" v="Vedantu · K-12 learning" />
        <Kv k="Focus" v="Children's data + consent" />
        <Kv k="Regulation" v="DPDP Act, 2023 (India)" />
        <Kv k="Deliverables" v="Deck + clickable prototype" />
      </div>
    </div>
  );
}
function Kv({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-white/50">{k}</div>
      <div className="mt-1 text-base text-white">{v}</div>
    </div>
  );
}

/* --- 2. Problem -------------------------------------------------- */
function SlideProblem() {
  return (
    <Slide index={1} eyebrow="Problem">
      <div className="grid h-full grid-cols-12 gap-10">
        <div className="col-span-7 flex flex-col justify-between">
          <div>
            <h2 className="font-display text-[68px] leading-[0.98] tracking-[-0.025em] text-balance">
              Vedantu's consent surface was built for a world{" "}
              <em className="italic text-vermillion">before DPDP.</em>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate text-pretty">
              A single checkbox at signup covers marketing, analytics, third-party SDKs,
              WhatsApp nudges, live-class recordings, and personalisation — for learners
              who are, on our estimate, majority minors. DPDP now demands purpose-bound,
              revocable, and (for minors) parent-verified consent.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 border-t border-hairline pt-6">
            <BigStat k="~65%" v="learners under 18 (assumed)" />
            <BigStat k="1" v="blanket consent checkbox today" />
            <BigStat k="₹250 Cr" v="max penalty per DPDP breach" />
          </div>
        </div>

        <div className="col-span-5 rounded-2xl border border-hairline bg-card p-8">
          <div className="text-[11px] uppercase tracking-[0.2em] text-vermillion">
            Why it matters
          </div>
          <ul className="mt-5 space-y-5">
            <Reason
              t="Legal exposure"
              d="Consent for minors without verifiable parental consent is invalid under DPDP §9."
            />
            <Reason
              t="Trust & retention"
              d="Parents are the payer. A creepy first impression kills renewals more than any UX bug."
            />
            <Reason
              t="Vendor risk"
              d="~40 third-party SDKs share a single implicit consent. One leak, one headline."
            />
            <Reason
              t="Growth cost"
              d="Blanket consent is fragile — one regulator notice can pause ads, analytics, and ML overnight."
            />
          </ul>

          <div className="mt-6 rounded-lg bg-muted p-4 text-[11px] leading-relaxed text-muted-foreground">
            <span className="font-medium text-ink">Assumptions.</span> User-age mix from
            public Vedantu disclosures + BYJU'S / Unacademy comparables; SDK count from
            AppFigures-style teardowns. Not internal data.
          </div>
        </div>
      </div>
    </Slide>
  );
}
function BigStat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-5xl tracking-tight">{k}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {v}
      </div>
    </div>
  );
}
function Reason({ t, d }: { t: string; d: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-vermillion" />
      <div>
        <div className="text-sm font-medium">{t}</div>
        <div className="text-sm leading-relaxed text-muted-foreground">{d}</div>
      </div>
    </li>
  );
}

/* --- 3. User ----------------------------------------------------- */
function SlideUser() {
  return (
    <Slide index={2} eyebrow="User">
      <div className="grid h-full grid-cols-12 gap-8">
        <Persona
          className="col-span-5"
          name="Priya Menon"
          role="Parent · payer · gatekeeper"
          age="39 · Bengaluru · works in HR"
          quote="I signed him up in five minutes. I never read what I agreed to. Now I keep getting WhatsApp calls from tutors."
          jobs={[
            "Make sure my kid learns without being tracked or spammed",
            "Understand what the app knows about my child",
            "Feel in control without becoming an IT admin",
          ]}
          pains={[
            "No visibility into what data is collected",
            "Marketing calls to child's number",
            "No easy way to delete data if we churn",
          ]}
          accent="ink"
        />
        <Persona
          className="col-span-5"
          name="Aarav Menon"
          role="Learner · 14 · Class 9"
          age="Studies 2 hrs/day · uses parent's phone + own tablet"
          quote="I just want the class to start. Every pop-up feels like homework."
          jobs={[
            "Attend live class quickly, without friction",
            "Get recommendations that feel relevant, not creepy",
            "Not feel spied on by teachers or friends",
          ]}
          pains={[
            "Cannot legally give consent under DPDP",
            "Doesn't understand what he's agreeing to",
            "Session recordings shared without clear notice",
          ]}
          accent="vermillion"
        />

        <div className="col-span-2 flex flex-col justify-between rounded-2xl border border-hairline bg-card p-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-vermillion">
              Design principle
            </div>
            <p className="mt-3 font-display text-2xl leading-tight tracking-tight">
              Design for the parent. Delight the learner.
            </p>
          </div>
          <div className="mt-6 text-xs leading-relaxed text-muted-foreground">
            The parent decides. The child feels the friction. Both must be respected in
            every screen we ship.
          </div>
        </div>
      </div>
    </Slide>
  );
}
function Persona({
  className = "",
  name,
  role,
  age,
  quote,
  jobs,
  pains,
  accent,
}: {
  className?: string;
  name: string;
  role: string;
  age: string;
  quote: string;
  jobs: string[];
  pains: string[];
  accent: "ink" | "vermillion";
}) {
  return (
    <div className={`${className} rounded-2xl border border-hairline bg-card p-7`}>
      <div className="flex items-start gap-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full font-display text-2xl"
          style={{
            background: accent === "ink" ? "var(--ink)" : "var(--vermillion)",
            color: "var(--paper)",
          }}
        >
          {name[0]}
        </div>
        <div>
          <div className="font-display text-3xl leading-tight">{name}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {age}
          </div>
        </div>
      </div>
      <blockquote className="mt-5 border-l-2 border-vermillion pl-4 font-display text-lg italic leading-snug text-ink">
        "{quote}"
      </blockquote>
      <div className="mt-5 grid grid-cols-2 gap-5 text-sm">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Jobs to be done
          </div>
          <ul className="mt-2 space-y-1.5">
            {jobs.map((j) => (
              <li key={j} className="flex gap-2 text-[13px] leading-snug">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-moss" />
                <span>{j}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Pain points
          </div>
          <ul className="mt-2 space-y-1.5">
            {pains.map((p) => (
              <li key={p} className="flex gap-2 text-[13px] leading-snug">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-vermillion" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* --- 4. Current experience --------------------------------------- */
function SlideCurrent() {
  const steps = [
    { t: "Install", d: "App store · no privacy summary" },
    { t: "Signup", d: "Phone OTP · age not asked" },
    { t: "One checkbox", d: "'I agree to Terms & Privacy'" },
    { t: "Onboarding", d: "Grade, board, goals — used for ads too" },
    { t: "Live class", d: "Recording begins · no fresh notice" },
    { t: "WhatsApp", d: "Marketing enabled by default" },
  ];
  const gaps = [
    { s: "§6 · Notice", g: "No itemised, plain-language notice at collection" },
    { s: "§7 · Purpose limitation", g: "Learning data reused for retargeting ads" },
    { s: "§9 · Children", g: "No age gate → no verifiable parental consent" },
    { s: "§11 · Right to access & erase", g: "No self-serve data export or delete" },
    { s: "§6(4) · Withdrawal", g: "Consent easy to give, hard to take back" },
  ];
  return (
    <Slide index={3} eyebrow="Current experience">
      <div className="grid h-full grid-cols-12 gap-8">
        <div className="col-span-7">
          <h2 className="font-display text-5xl leading-[1.02] tracking-tight">
            One tap today collects <em className="italic text-vermillion">nine</em>{" "}
            distinct purposes' worth of data.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            The current signup journey — reconstructed from a fresh install — bundles
            consent with the "Continue" button, then never surfaces it again.
          </p>

          <div className="mt-8 rounded-2xl border border-hairline bg-card p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              First-run journey (assumed)
            </div>
            <div className="mt-4 grid grid-cols-6 gap-2">
              {steps.map((s, i) => (
                <div key={s.t} className="relative">
                  <div className="rounded-lg border border-hairline bg-background p-3">
                    <div className="text-[10px] font-mono tabular-nums text-vermillion">
                      0{i + 1}
                    </div>
                    <div className="mt-2 text-[13px] font-medium leading-tight">
                      {s.t}
                    </div>
                    <div className="mt-1 text-[11px] leading-snug text-muted-foreground">
                      {s.d}
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <ChevronRight className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Consent-fatigue heatmap · attention decay per step
              </div>
              <div className="mt-2 flex gap-1">
                {[0.95, 0.7, 0.35, 0.55, 0.4, 0.25].map((v, i) => (
                  <div
                    key={i}
                    className="h-8 flex-1 rounded"
                    style={{
                      background: `color-mix(in oklab, var(--vermillion) ${v * 100
                        }%, var(--muted))`,
                    }}
                    title={`Step ${i + 1}: ${Math.round(v * 100)}% attention`}
                  />
                ))}
              </div>
              <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
                <span>High attention</span>
                <span>By step 3 we've lost the room</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5 rounded-2xl border border-hairline bg-ink p-7 text-paper">
          <div className="text-[10px] uppercase tracking-[0.22em] text-vermillion">
            Where we fall short of DPDP
          </div>
          <ul className="mt-5 divide-y divide-white/10">
            {gaps.map((g) => (
              <li key={g.s} className="py-3">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-white/60">
                    {g.s}
                  </span>
                  <X className="h-3.5 w-3.5 text-vermillion" />
                </div>
                <div className="mt-1 text-[14px] leading-snug text-white">{g.g}</div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-[11px] leading-relaxed text-white/60">
            Section refs: DPDP Act, 2023. Findings from black-box teardown of current
            Android app + public policy pages.
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* --- 5. Insight -------------------------------------------------- */
function SlideInsights() {
  const patterns = [
    {
      c: "Apple · App Tracking Transparency",
      p: "Just-in-time, single purpose, plain-language.",
      l: "Trust > opt-in rate. ~75% opt-out and Apple still won.",
    },
    {
      c: "Google · Family Link",
      p: "Parent as first-class account holder for minors.",
      l: "Give parents a real dashboard, not a legal PDF.",
    },
    {
      c: "GDPR / DMA cookie banners",
      p: "Bundled 'Accept all' with dark patterns.",
      l: "Cautionary tale — enforcement caught up. Don't repeat.",
    },
    {
      c: "WhatsApp · 2021 policy",
      p: "Confusing forced consent → mass exodus to Signal.",
      l: "Consent copy is a growth surface. Get it wrong once.",
    },
    {
      c: "Spotify · privacy settings",
      p: "Granular but buried five taps deep.",
      l: "Discoverability matters as much as granularity.",
    },
    {
      c: "Uber · Privacy Center",
      p: "Single hub for data, deletion, export.",
      l: "Users trust products that show their own homework.",
    },
  ];
  return (
    <Slide index={4} eyebrow="Insight & opportunity">
      <div className="grid h-full grid-cols-12 gap-8">
        <div className="col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="font-display text-[64px] leading-[0.98] tracking-[-0.025em] text-balance">
              Consent is a <em className="italic text-vermillion">product</em>, not a
              legal form.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate">
              Every platform that has ever tried to bury consent has paid for it —
              in churn, in fines, in reputation. Every platform that made consent{" "}
              <span className="italic">tangible</span> converted it into trust, and trust
              into retention.
            </p>
          </div>
          <div className="rounded-2xl border border-vermillion/30 bg-vermillion/5 p-6">
            <div className="text-[10px] uppercase tracking-[0.22em] text-vermillion">
              The opportunity for Vedantu
            </div>
            <p className="mt-3 font-display text-2xl leading-tight tracking-tight">
              Be the first Indian EdTech that treats a parent's consent like a product
              feature — not a footer link.
            </p>
          </div>
        </div>

        <div className="col-span-7 grid grid-cols-2 gap-4">
          {patterns.map((p) => (
            <div
              key={p.c}
              className="rounded-xl border border-hairline bg-card p-4"
            >
              <div className="text-[11px] uppercase tracking-[0.18em] text-vermillion">
                {p.c}
              </div>
              <div className="mt-2 text-sm font-medium leading-snug">{p.p}</div>
              <div className="mt-2 text-[13px] leading-snug text-muted-foreground">
                → {p.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* --- 6. Solution ------------------------------------------------- */
function SlideSolution() {
  return (
    <Slide index={5} eyebrow="Proposed solution">
      <div className="grid h-full grid-cols-12 gap-8">
        <div className="col-span-4">
          <h2 className="font-display text-[56px] leading-[0.98] tracking-tight">
            Three layers.
            <br />
            One promise: <em className="italic text-vermillion">no data without a reason.</em>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            An age-aware consent architecture that unbundles purposes, elevates parents,
            and makes every data right one tap away.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <Chip k="Data minimisation" v="Collect only what a purpose demands" />
            <Chip k="Purpose binding" v="Toggle-level control per use" />
            <Chip k="Verifiable consent" v="DigiLocker + OTP + payment signal" />
            <Chip k="Full user rights" v="Access · export · erase · withdraw" />
          </div>
        </div>

        <div className="col-span-8 grid grid-cols-3 gap-4">
          <Pillar
            n="01"
            t="Parent Vault"
            d="A parent-owned account that supervises up to 4 child profiles. Parents verify once via Aadhaar-linked OTP + DigiLocker signal (fallback: payment-instrument match)."
            bullets={[
              "Verifiable parental consent (DPDP §9)",
              "Portable across siblings",
              "Auto-expires at learner's 18th birthday",
            ]}
          />
          <Pillar
            n="02"
            t="Purpose-Bound Consent"
            d="Nine data purposes, each with a plain-language card, a preview of what it enables, and a live toggle. Nothing is pre-selected except what the service literally cannot run without."
            bullets={[
              "Essential · Personalisation · Recommendations",
              "Marketing · WhatsApp · Session recording",
              "Analytics · Third-party SDKs · Research",
            ]}
            highlight
          />
          <Pillar
            n="03"
            t="Rights Console"
            d="A single 'Your Data' screen inside Settings. Download in JSON+PDF, delete within 30 days, or pause specific purposes with one tap. Every state change emits a receipt."
            bullets={[
              "Self-serve export & erase",
              "Consent receipts (audit-grade)",
              "Withdrawal is as easy as giving consent",
            ]}
          />
        </div>
      </div>
    </Slide>
  );
}
function Chip({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg border border-hairline bg-card p-3">
      <div className="text-[10px] uppercase tracking-[0.18em] text-vermillion">{k}</div>
      <div className="mt-1 text-[12px] leading-snug text-ink">{v}</div>
    </div>
  );
}
function Pillar({
  n,
  t,
  d,
  bullets,
  highlight,
}: {
  n: string;
  t: string;
  d: string;
  bullets: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-6 ${highlight
        ? "border-vermillion bg-ink text-paper"
        : "border-hairline bg-card"
        }`}
    >
      <div
        className={`font-mono text-[11px] tracking-widest ${highlight ? "text-vermillion" : "text-vermillion"
          }`}
      >
        {n}
      </div>
      <div className="mt-2 font-display text-3xl leading-tight tracking-tight">{t}</div>
      <div
        className={`mt-3 text-[13px] leading-relaxed ${highlight ? "text-white/75" : "text-muted-foreground"
          }`}
      >
        {d}
      </div>
      <ul className="mt-auto space-y-1.5 pt-5">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 text-[12px] leading-snug">
            <span
              className={`mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full ${highlight ? "bg-vermillion" : "bg-ink"
                }`}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --- 7. UX previews --------------------------------------------- */
function SlideUX() {
  return (
    <Slide index={6} eyebrow="UX · prototype preview">
      <div className="grid h-full grid-cols-12 gap-8">
        <div className="col-span-4 flex flex-col justify-between">
          <div>
            <h2 className="font-display text-[52px] leading-[0.98] tracking-tight">
              Built for the moment a parent is about to <em className="italic text-vermillion">tap Skip.</em>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Progressive disclosure, plain language (English + Hindi), and micro-copy that
              treats the parent as an adult. No dark patterns, no pre-ticked boxes, no
              scare tactics.
            </p>
          </div>
          <div className="rounded-2xl border border-hairline bg-card p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-vermillion">
              Design principles
            </div>
            <ul className="mt-3 space-y-2 text-[13px]">
              <li>Just-in-time · never at signup wall</li>
              <li>One purpose per card · one decision at a time</li>
              <li>Symmetry of choice · "Accept" ≡ "Not now"</li>
              <li>Preview the value before asking</li>
            </ul>
            <Link
              to="/prototype"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-vermillion"
            >
              Open live prototype <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="col-span-8 grid grid-cols-3 gap-5">
          <PhoneMini title="Age gate" subtitle="Fair, unmissable, once">
            <div className="mt-3 text-[10px] font-display italic text-slate">
              How old is the learner?
            </div>
            <div className="mt-2 space-y-1.5">
              {["Under 13", "13 – 17", "18 or older"].map((o, i) => (
                <div
                  key={o}
                  className={`rounded border px-2 py-1.5 text-[9px] ${i === 1
                    ? "border-vermillion bg-vermillion/10 text-ink"
                    : "border-hairline"
                    }`}
                >
                  {o}
                </div>
              ))}
            </div>
          </PhoneMini>

          <PhoneMini title="Ask a parent" subtitle="Handoff, not a wall">
            <div className="mt-3 text-[10px] font-display italic text-slate">
              We need a grown-up
            </div>
            <div className="mt-2 rounded bg-muted p-2 text-[9px] leading-snug">
              We'll SMS a secure link to your parent's phone. It expires in 15 min.
            </div>
            <div className="mt-2 rounded border border-hairline px-2 py-1.5 text-[9px]">
              +91 · Parent's mobile
            </div>
            <div className="mt-1.5 rounded bg-ink px-2 py-1.5 text-center text-[9px] text-paper">
              Send secure link
            </div>
          </PhoneMini>

          <PhoneMini title="Purpose toggles" subtitle="One card at a time">
            {[
              { l: "Personalise lessons", on: true, req: true },
              { l: "WhatsApp reminders", on: false },
              { l: "Marketing calls", on: false },
              { l: "Share with partners", on: false },
            ].map((r) => (
              <div
                key={r.l}
                className="mt-2 flex items-center justify-between rounded border border-hairline px-2 py-1.5"
              >
                <div>
                  <div className="text-[9px] font-medium">{r.l}</div>
                  {r.req && (
                    <div className="text-[7px] uppercase tracking-widest text-muted-foreground">
                      Required
                    </div>
                  )}
                </div>
                <div
                  className={`h-3 w-6 rounded-full p-0.5 ${r.on ? "bg-vermillion" : "bg-muted"
                    }`}
                >
                  <div
                    className={`h-2 w-2 rounded-full bg-white transition-all ${r.on ? "translate-x-3" : ""
                      }`}
                  />
                </div>
              </div>
            ))}
          </PhoneMini>
        </div>
      </div>
    </Slide>
  );
}
function PhoneMini({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="mx-auto w-[190px] rounded-[28px] border border-ink/15 bg-white p-2 shadow-[0_20px_40px_-20px_rgba(24,24,40,0.25)]">
        <div className="relative rounded-[22px] bg-paper p-3">
          <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-ink/15" />
          <div className="text-[9px] uppercase tracking-widest text-vermillion">
            Vedantu
          </div>
          {children}
        </div>
      </div>
      <div className="mt-3 text-center">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-[11px] text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
}

/* --- 8. Metrics -------------------------------------------------- */
function SlideMetrics() {
  return (
    <Slide index={7} eyebrow="Metrics · success criteria">
      <div className="grid h-full grid-cols-12 gap-8">
        <div className="col-span-5 flex flex-col justify-between rounded-2xl border border-hairline bg-ink p-7 text-paper">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-vermillion">
              North Star
            </div>
            <h2 className="mt-3 font-display text-[52px] leading-[0.98] tracking-tight">
              Valid Consent Coverage
            </h2>
            <div className="mt-1 font-mono text-xs text-white/60">VCC</div>
            <p className="mt-4 text-[13px] leading-relaxed text-white/75">
              Share of monthly active learners whose current data use is backed by a{" "}
              <span className="italic">valid, fresh, purpose-matched</span> consent —
              and, for minors, a verified parent.
            </p>
          </div>
          <div>
            <div className="rounded-lg bg-white/10 p-3 font-mono text-[11px] leading-relaxed text-white">
              VCC = (MAUs with valid consent for every active purpose) / (Total MAUs)
              <br />
              Target: 92% by Q4 · Floor: 85% · Failure: &lt;80%
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3 text-[11px]">
              <div>
                <div className="text-white/50">Leading</div>
                <div className="text-white">Consent-flow completion</div>
              </div>
              <div>
                <div className="text-white/50">Lagging</div>
                <div className="text-white">Renewal · complaint volume</div>
              </div>
              <div>
                <div className="text-white/50">Cadence</div>
                <div className="text-white">Daily · segment-weekly</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-7 grid grid-cols-2 gap-4">
          <MetricCard
            tier="Supporting"
            k="Purpose-level opt-in rate"
            f="Opt-ins ÷ eligible prompts (per purpose)"
            w="Tells us which purposes users actually want — informs data-minimisation calls."
          />
          <MetricCard
            tier="Supporting"
            k="Parent verification success rate"
            f="Verified parents ÷ minor signups reaching parent step"
            w="Guards against a broken handoff killing minor onboarding."
          />
          <MetricCard
            tier="Supporting"
            k="Time-to-first-class after consent"
            f="Median seconds from consent submit → class join"
            w="Consent should not slow learning down. Ever."
          />
          <MetricCard
            tier="Guardrail"
            k="Signup → 1st-class conversion"
            f="Conversion delta vs. control cohort"
            w="Red-line at −3pp. Anything worse pauses rollout."
            danger
          />
          <MetricCard
            tier="Guardrail"
            k="Support tickets citing 'consent' / 'privacy'"
            f="Weekly count, normalised per 10k MAU"
            w="Rising tickets = confusing UX or dark-pattern smell. Investigate within 48h."
            danger
          />
          <MetricCard
            tier="Guardrail"
            k="Consent-withdrawal rate"
            f="Toggles switched off ÷ toggles ever on"
            w="Healthy is 2–5%. A spike signals a trust event we must diagnose."
            danger
          />
        </div>
      </div>
    </Slide>
  );
}
function MetricCard({
  tier,
  k,
  f,
  w,
  danger,
}: {
  tier: string;
  k: string;
  f: string;
  w: string;
  danger?: boolean;
}) {
  return (
    <div className="rounded-xl border border-hairline bg-card p-4">
      <div
        className={`text-[10px] uppercase tracking-[0.2em] ${danger ? "text-vermillion" : "text-slate"
          }`}
      >
        {tier}
      </div>
      <div className="mt-2 text-[15px] font-medium leading-snug">{k}</div>
      <div className="mt-2 rounded bg-muted px-2 py-1 font-mono text-[10px] text-ink">
        {f}
      </div>
      <div className="mt-2 text-[12px] leading-snug text-muted-foreground">{w}</div>
    </div>
  );
}

/* --- 9. Dashboard ------------------------------------------------ */
const trend = [
  { w: "W1", vcc: 71, target: 92 },
  { w: "W2", vcc: 74, target: 92 },
  { w: "W3", vcc: 79, target: 92 },
  { w: "W4", vcc: 83, target: 92 },
  { w: "W5", vcc: 86, target: 92 },
  { w: "W6", vcc: 88, target: 92 },
  { w: "W7", vcc: 90, target: 92 },
  { w: "W8", vcc: 91, target: 92 },
];
const funnel = [
  { s: "Age gate seen", v: 96 },
  { s: "Parent SMS sent", v: 71 },
  { s: "Parent verified", v: 58 },
  { s: "Purposes seen", v: 57 },
  { s: "Consent submitted", v: 55 },
];
const segments = [
  { name: "Android", value: 68 },
  { name: "iOS", value: 22 },
  { name: "Web", value: 10 },
];
const purposes = [
  { p: "Essential", on: 100 },
  { p: "Personalise", on: 82 },
  { p: "Recommend", on: 64 },
  { p: "WhatsApp", on: 41 },
  { p: "Marketing", on: 12 },
  { p: "3P SDKs", on: 9 },
];
const COLORS = ["oklch(0.62 0.19 32)", "oklch(0.185 0.02 260)", "oklch(0.52 0.09 155)"];

function SlideDashboard() {
  return (
    <Slide index={8} eyebrow="Dashboard · consent health">
      <div
        className="grid h-full grid-cols-12 gap-3"
        style={{ gridTemplateRows: "minmax(0, 108px) minmax(0, 240px) minmax(0, 1fr)" }}
      >
        {/* KPI band */}
        <div className="col-span-12 grid grid-cols-4 gap-4">
          <KpiTile k="Valid Consent Coverage" v="91.4%" delta="+3.1 wk/wk" tone="up" note="vs. 92% target" />
          <KpiTile k="Parent verification rate" v="82%" delta="+1.4 wk/wk" tone="up" note="minor cohort" />
          <KpiTile k="Time-to-1st-class" v="47s" delta="−6s wk/wk" tone="up" note="p50, post-consent" />
          <KpiTile k="Withdrawal rate" v="3.1%" delta="+0.4 wk/wk" tone="warn" note="watch bucket" />
        </div>

        {/* Row 2 */}
        <div className="col-span-7 rounded-xl border border-hairline bg-card p-4">
          <ChartHead k="VCC — weekly trend" note="% MAU · rollout weeks 1–8" />
          <div className="mt-3 h-full min-h-[110px]">
            <ResponsiveContainer>
              <AreaChart data={trend} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="v" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.62 0.19 32)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="oklch(0.62 0.19 32)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="2 4" stroke="oklch(0.88 0.01 85)" vertical={false} />
                <XAxis dataKey="w" tick={{ fontSize: 10 }} stroke="var(--slate)" />
                <YAxis domain={[60, 100]} tick={{ fontSize: 10 }} stroke="var(--slate)" />
                <Tooltip
                  contentStyle={{
                    background: "var(--ink)",
                    border: "none",
                    color: "var(--paper)",
                    fontSize: 11,
                    borderRadius: 8,
                  }}
                />
                <Area type="monotone" dataKey="target" stroke="var(--slate)" strokeDasharray="4 4" fill="transparent" />
                <Area type="monotone" dataKey="vcc" stroke="var(--vermillion)" strokeWidth={2} fill="url(#v)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-5 rounded-xl border border-hairline bg-card p-4">
          <ChartHead k="Consent funnel" note="cohort · minors · last 7d" />
          <div className="mt-2 space-y-1.5">
            {funnel.map((f, i) => (
              <div key={f.s}>
                <div className="flex justify-between text-[11px]">
                  <span>{f.s}</span>
                  <span className="tabular-nums text-muted-foreground">{f.v}%</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${f.v}%`,
                      background:
                        i === 2 || i === 3 ? "var(--vermillion)" : "var(--ink)",
                    }}
                  />
                </div>
              </div>
            ))}
            <div className="mt-3 rounded-md bg-vermillion/8 p-2 text-[11px] text-vermillion">
              Alert · 18pt drop at "Parent verified" — investigate SMS deliverability.
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="col-span-4 rounded-xl border border-hairline bg-card p-4">
          <ChartHead k="Purpose opt-in mix" note="% of eligible users" />
          <div className="mt-2 h-full min-h-[110px]">
            <ResponsiveContainer>
              <BarChart data={purposes} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis type="category" dataKey="p" tick={{ fontSize: 10 }} width={70} stroke="var(--slate)" />
                <Bar dataKey="on" fill="var(--vermillion)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-span-4 rounded-xl border border-hairline bg-card p-4">
          <ChartHead k="Platform split" note="active users w/ valid consent" />
          <div className="mt-2 flex h-full min-h-[110px] items-center">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={segments} dataKey="value" innerRadius={40} outerRadius={65} paddingAngle={2}>
                  {segments.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "var(--ink)", border: "none", color: "var(--paper)", fontSize: 11, borderRadius: 8 }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="ml-2 space-y-1 text-[11px]">
              {segments.map((s, i) => (
                <div key={s.name} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-sm" style={{ background: COLORS[i] }} />
                  <span className="w-16">{s.name}</span>
                  <span className="tabular-nums text-muted-foreground">{s.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-4 rounded-xl border border-hairline bg-card p-4">
          <ChartHead k="Withdrawals · daily" note="rolling 14d · per 10k MAU" />
          <div className="mt-2 h-full min-h-[110px]">
            <ResponsiveContainer>
              <LineChart
                data={Array.from({ length: 14 }, (_, i) => ({
                  d: i + 1,
                  v: [22, 20, 19, 24, 21, 18, 20, 23, 26, 29, 34, 31, 30, 33][i],
                }))}
                margin={{ top: 5, right: 5, left: -25, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="2 4" stroke="oklch(0.88 0.01 85)" vertical={false} />
                <XAxis dataKey="d" tick={{ fontSize: 10 }} stroke="var(--slate)" />
                <YAxis tick={{ fontSize: 10 }} stroke="var(--slate)" />
                <Tooltip contentStyle={{ background: "var(--ink)", border: "none", color: "var(--paper)", fontSize: 11, borderRadius: 8 }} />
                <Line type="monotone" dataKey="v" stroke="var(--vermillion)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Slide>
  );
}
function KpiTile({
  k,
  v,
  delta,
  tone,
  note,
}: {
  k: string;
  v: string;
  delta: string;
  tone: "up" | "warn";
  note: string;
}) {
  return (
    <div className="rounded-xl border border-hairline bg-card p-4">
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {k}
      </div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className="font-display text-[38px] leading-none tracking-tight">{v}</div>
        <div
          className={`text-[11px] ${tone === "up" ? "text-moss" : "text-ochre"
            }`}
        >
          {delta}
        </div>
      </div>
      <div className="mt-2 text-[11px] text-muted-foreground">{note}</div>
    </div>
  );
}
function ChartHead({ k, note }: { k: string; note: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <div className="text-[12px] font-medium">{k}</div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {note}
      </div>
    </div>
  );
}

/* --- 10. Diagnostic --------------------------------------------- */
function SlideDiagnostic() {
  const branches = [
    {
      c: "Measurement",
      p: "20%",
      items: [
        "Consent-event pipeline dropping rows",
        "Timezone bug at rollover",
        "New client not emitting receipts",
      ],
    },
    {
      c: "Supply — external",
      p: "35%",
      items: [
        "SMS/OTP vendor outage → parent verification failing",
        "DigiLocker rate-limits triggered",
        "Play Store forced update rolled out silently",
      ],
    },
    {
      c: "Demand — user side",
      p: "30%",
      items: [
        "Board-exam cohort churn (seasonal, ~ May–July)",
        "Media event about EdTech privacy → withdrawals",
        "Competitor launched aggressive campaign",
      ],
    },
    {
      c: "Product",
      p: "15%",
      items: [
        "Config change flipped a default toggle",
        "Silent SDK update expanded data scope",
        "A/B experiment on adjacent flow leaked",
      ],
    },
  ];
  return (
    <Slide index={9} eyebrow="Diagnostic thinking">
      <div className="grid h-full grid-cols-12 gap-8">
        <div className="col-span-4 flex flex-col justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-vermillion">
              Scenario
            </div>
            <h2 className="mt-2 font-display text-[46px] leading-[1.02] tracking-tight">
              VCC drops 15% in week 3 — with no release.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              "No release" is a hypothesis, not a fact. First step is to falsify it: pull
              deploy log, config-flag history, SDK version diffs, vendor status. Then
              structure the search.
            </p>
          </div>

          <div className="rounded-2xl border border-hairline bg-card p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-vermillion">
              Playbook (first 24h)
            </div>
            <ol className="mt-3 list-decimal space-y-1.5 pl-4 text-[13px]">
              <li>Segment the drop: platform × geo × cohort × age.</li>
              <li>Diff pipelines + configs vs. last known-good.</li>
              <li>Ping vendor status pages (SMS, DigiLocker, CDN).</li>
              <li>Sample 30 support tickets qualitatively.</li>
              <li>Compute counterfactual — did MAU move, or just numerator?</li>
              <li>If unclear at 24h, invoke privacy incident protocol.</li>
            </ol>
          </div>
        </div>

        <div className="col-span-8">
          <div className="rounded-2xl border border-hairline bg-card p-6">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Hypothesis tree · prior probability shown
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              {branches.map((b) => (
                <div key={b.c} className="rounded-xl border border-hairline p-4">
                  <div className="flex items-baseline justify-between">
                    <div className="text-[13px] font-medium">{b.c}</div>
                    <div className="font-mono text-[11px] text-vermillion">{b.p}</div>
                  </div>
                  <ul className="mt-3 space-y-2 text-[12px] leading-snug">
                    {b.items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-ink" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <NextCard
              t="If measurement"
              a="Freeze dashboard, replay events, publish correction — no user-facing action."
            />
            <NextCard
              t="If external"
              a="Fail over SMS vendor, degrade gracefully to email-link, extend consent grace window."
              highlight
            />
            <NextCard
              t="If product / config"
              a="Roll back within 30 min. Post-mortem within 7 days. Notify DPO."
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
function NextCard({ t, a, highlight }: { t: string; a: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-xl border p-4 ${highlight ? "border-vermillion bg-vermillion/5" : "border-hairline bg-card"
        }`}
    >
      <div className="text-[10px] uppercase tracking-[0.2em] text-vermillion">
        Next step · {t}
      </div>
      <div className="mt-2 text-[13px] leading-snug">{a}</div>
    </div>
  );
}

/* --- 11. Rollout ------------------------------------------------ */
function SlideRollout() {
  const phases = [
    { p: "Week 0", n: "Dogfood", d: "Vedantu employees + kids · full flow", ga: "Zero P0/P1 defects" },
    { p: "Week 1", n: "Internal QA + legal", d: "DPO + external counsel sign-off", ga: "DPIA published" },
    { p: "Week 2", n: "1% shadow", d: "New signups only · Bengaluru + Hyd.", ga: "VCC ≥ baseline − 2pp" },
    { p: "Week 3", n: "5% ramp", d: "Add existing minor cohort · re-consent", ga: "Complaint rate flat" },
    { p: "Week 5", n: "20% ramp", d: "All new signups nationwide", ga: "Time-to-class delta ≤ +5s" },
    { p: "Week 8", n: "100% GA", d: "Migrate legacy accounts · 30-day window", ga: "VCC ≥ 85%" },
  ];
  return (
    <Slide index={10} eyebrow="Rollout · validation">
      <div className="grid h-full grid-cols-12 gap-8">
        <div className="col-span-4">
          <h2 className="font-display text-[46px] leading-[1.02] tracking-tight">
            Ship in <em className="italic text-vermillion">phases</em>. Rollback in <em className="italic text-vermillion">minutes</em>.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Consent copy for minors is not fully A/B-testable — we cannot legally give
            "worse" consent to a control group. So we split the world into what we can
            experiment on, and what we can only observe.
          </p>

          <div className="mt-6 space-y-3">
            <ExpCard
              t="Safe to A/B test"
              d="Micro-copy, screen order, illustration presence, plain-language layer, notification cadence."
              good
            />
            <ExpCard
              t="Not A/B-testable"
              d="Whether consent is asked. Whether parent verification is required. Data scope of a purpose."
            />
            <ExpCard
              t="Method for the untestable"
              d="Pre-post analysis, synthetic control (unaffected geo), qualitative research with 20 parents per phase."
              good
            />
          </div>
        </div>

        <div className="col-span-8">
          <div className="rounded-2xl border border-hairline bg-card p-6">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Phased rollout · gates advance only on green
            </div>
            <div className="mt-5 space-y-3">
              {phases.map((ph, i) => (
                <div
                  key={ph.p}
                  className="grid grid-cols-12 items-center gap-3 rounded-lg border border-hairline bg-background p-3"
                >
                  <div className="col-span-2 flex items-center gap-2 font-mono text-[11px] text-vermillion">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] text-paper"
                      style={{ background: "var(--ink)" }}
                    >
                      {i + 1}
                    </span>
                    {ph.p}
                  </div>
                  <div className="col-span-3 text-[14px] font-medium">{ph.n}</div>
                  <div className="col-span-4 text-[12px] text-muted-foreground">
                    {ph.d}
                  </div>
                  <div className="col-span-3 text-right text-[11px] uppercase tracking-[0.14em] text-moss">
                    Gate · {ph.ga}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <MiniStat k="Rollback SLA" v="< 15 min" note="single feature-flag" />
            <MiniStat k="Kill switch" v="Server-side" note="no app update needed" />
            <MiniStat k="Consent grace" v="30 days" note="for legacy migration" />
          </div>
        </div>
      </div>
    </Slide>
  );
}
function ExpCard({ t, d, good }: { t: string; d: string; good?: boolean }) {
  return (
    <div className="rounded-lg border border-hairline bg-card p-4">
      <div className="flex items-center gap-2">
        {good ? (
          <Check className="h-3.5 w-3.5 text-moss" />
        ) : (
          <X className="h-3.5 w-3.5 text-vermillion" />
        )}
        <div className="text-[12px] font-medium">{t}</div>
      </div>
      <div className="mt-1.5 text-[12px] leading-snug text-muted-foreground">{d}</div>
    </div>
  );
}
function MiniStat({ k, v, note }: { k: string; v: string; note: string }) {
  return (
    <div className="rounded-lg border border-hairline bg-card p-4">
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {k}
      </div>
      <div className="mt-1 font-display text-2xl tracking-tight">{v}</div>
      <div className="text-[11px] text-muted-foreground">{note}</div>
    </div>
  );
}

/* --- 12. Risks & Vision ----------------------------------------- */
function SlideRisks() {
  const risks = [
    {
      c: "Business",
      r: "Adding a parent step could shave 2–4pp off minor signup conversion.",
      m: "Reserve 30-day grace + one-tap resume; measure LTV, not just conversion.",
    },
    {
      c: "Engineering",
      r: "Consent must propagate to ~40 SDKs and back-end services in real time.",
      m: "Central Consent Service (CCS) with pub-sub; hard fail-closed on unknown state.",
    },
    {
      c: "Privacy dark-pattern risk",
      r: "Product/growth teams pressure to pre-tick, pre-nudge, pre-select.",
      m: "Design review + external counsel gate; auditable receipts make cheating expensive.",
    },
    {
      c: "Child safety",
      r: "Bad actor could pose as parent via SMS spoofing.",
      m: "Payment-instrument match + device pairing + anomaly detection on verification.",
    },
    {
      c: "Accessibility & literacy",
      r: "Plain-language copy still assumes reading fluency.",
      m: "Voice-over consent (Hindi/English), 11 Indic language rollout by Q4.",
    },
    {
      c: "International expansion",
      r: "GDPR / COPPA thresholds differ from DPDP §9.",
      m: "Locale-aware purpose registry; consent artefacts portable to EU / US standards.",
    },
  ];
  return (
    <Slide index={11} eyebrow="Risks · trade-offs · vision" bg="ink">
      <div className="grid h-full grid-cols-12 gap-8">
        <div className="col-span-5 flex flex-col justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-vermillion">
              Trade-off we accept
            </div>
            <h2 className="mt-3 font-display text-[54px] leading-[0.98] tracking-tight text-white">
              A slower signup, in exchange for a <em className="italic text-vermillion">longer relationship.</em>
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-white/70">
              Every EdTech in India will eventually be forced here by regulation. The
              only question is whether we arrive as a defendant or as the category's
              trust benchmark.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-vermillion">
              12-month vision
            </div>
            <ul className="mt-3 space-y-2 text-[14px] text-white">
              <li>· Parent Vault becomes the account primitive.</li>
              <li>· Consent receipts exportable to DigiLocker.</li>
              <li>· "Vedantu Trust" — a public transparency report, quarterly.</li>
              <li>· A privacy score in-app, visible to every parent.</li>
            </ul>
          </div>
        </div>

        <div className="col-span-7 grid grid-cols-2 gap-3">
          {risks.map((r) => (
            <div
              key={r.c}
              className="rounded-xl border border-white/15 bg-white/5 p-4"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-vermillion">
                {r.c}
              </div>
              <div className="mt-2 text-[13px] font-medium leading-snug text-white">
                {r.r}
              </div>
              <div className="mt-2 text-[12px] leading-snug text-white/70">
                → {r.m}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ------------------------------------------------------------------ */
/*  Deck shell                                                        */
/* ------------------------------------------------------------------ */

function DeckPage() {
  const [i, setI] = useState(0);
  const [printing, setPrinting] = useState(false);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ")
        setI((v) => Math.min(SLIDES.length - 1, v + 1));
      if (e.key === "ArrowLeft") setI((v) => Math.max(0, v - 1));
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  useEffect(() => {
    document.title = `${String(i + 1).padStart(2, "0")} · ${SLIDES[i].label} — Consent, by design`;
  }, [i]);

  // Fit-to-viewport scaling
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth - 120;
      const h = window.innerHeight - 180;
      setScale(Math.min(w / 1280, h / 720, 1));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  if (printing) {
    return (
      <div className="bg-white">
        {SLIDES.map((s) => (
          <div key={s.id} className="print-page">
            {s.render()}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[oklch(0.94_0.005_85)] text-ink">
      {/* Top nav */}
      <nav className="no-print sticky top-0 z-20 flex items-center justify-between border-b border-hairline bg-background/80 px-6 py-3 backdrop-blur">
        <Link
          to="/"
          className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back
        </Link>
        <div className="flex items-center gap-6 text-xs">
          <span className="font-mono tabular-nums text-muted-foreground">
            {String(i + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
          <span className="hidden text-muted-foreground md:inline">
            {SLIDES[i].label}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setPrinting(true);
              setTimeout(() => {
                window.print();
                setPrinting(false);
              }, 200);
            }}
            className="inline-flex items-center gap-1.5 rounded-md border border-hairline bg-background px-3 py-1.5 text-xs hover:bg-muted"
          >
            <Printer className="h-3.5 w-3.5" /> Print / PDF
          </button>
          <Link
            to="/prototype"
            className="inline-flex items-center gap-1.5 rounded-md bg-ink px-3 py-1.5 text-xs text-paper hover:opacity-90"
          >
            Prototype <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </nav>

      {/* Stage */}
      <div className="flex items-center justify-center px-10 pt-8">
        <div
          style={{
            width: 1280 * scale,
            height: 720 * scale,
          }}
          className="relative"
        >
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              width: 1280,
              height: 720,
            }}
            className="rounded-xl shadow-[0_40px_80px_-30px_rgba(24,24,40,0.35)] ring-1 ring-hairline"
          >
            {SLIDES[i].render()}
          </div>
        </div>
      </div>

      {/* Nav dots */}
      <div className="no-print mt-6 flex items-center justify-center gap-4 pb-8">
        <button
          onClick={() => setI(Math.max(0, i - 1))}
          className="inline-flex items-center gap-1 rounded-md border border-hairline bg-background px-3 py-1.5 text-xs disabled:opacity-40"
          disabled={i === 0}
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Prev
        </button>
        <div className="flex items-center gap-1">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-vermillion" : "w-2 bg-hairline hover:bg-ink/30"
                }`}
              aria-label={s.label}
            />
          ))}
        </div>
        <button
          onClick={() => setI(Math.min(SLIDES.length - 1, i + 1))}
          className="inline-flex items-center gap-1 rounded-md border border-hairline bg-background px-3 py-1.5 text-xs disabled:opacity-40"
          disabled={i === SLIDES.length - 1}
        >
          Next <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="no-print pb-10 text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <Download className="mr-1 inline h-3 w-3" /> Tip · press ⌘/Ctrl + P for a
        pixel-perfect PDF export
      </div>
    </div>
  );
}
