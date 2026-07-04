import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  ChevronRight,
  Download,
  FileText,
  Home,
  Info,
  Lock,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  Signal,
  Sparkles,
  Trash2,
  User,
  Wifi,
  X,
} from "lucide-react";

export const Route = createFileRoute("/prototype")({
  head: () => ({
    meta: [
      { title: "Prototype — Vedantu consent flow (DPDP)" },
      {
        name: "description",
        content:
          "Clickable happy-path prototype: age gate, verifiable parental consent, granular purposes, preference center, export & delete.",
      },
    ],
  }),
  component: PrototypePage,
});

/* ---------------- Purpose model ---------------- */
type Purpose = {
  id: string;
  title: string;
  desc: string;
  why: string;
  required?: boolean;
  defaultOn: boolean;
  category: "Essential" | "Learning" | "Communication" | "Growth";
};

const PURPOSES: Purpose[] = [
  {
    id: "essential",
    title: "Run the classroom",
    desc: "Account, class attendance, homework, doubt-solving.",
    why: "The service cannot function without this.",
    required: true,
    defaultOn: true,
    category: "Essential",
  },
  {
    id: "personalise",
    title: "Personalise lessons",
    desc: "Adapt difficulty, remember weak topics, suggest revision.",
    why: "Uses your child's test scores and time-on-task only.",
    defaultOn: true,
    category: "Learning",
  },
  {
    id: "recommend",
    title: "Recommend new courses",
    desc: "In-app suggestions based on grade and progress.",
    why: "Purely in-app. Nothing shared with third parties.",
    defaultOn: false,
    category: "Learning",
  },
  {
    id: "recording",
    title: "Session recordings",
    desc: "Save live-class recordings for later revision.",
    why: "Stored 90 days. Only you and your teacher can view.",
    defaultOn: true,
    category: "Learning",
  },
  {
    id: "whatsapp",
    title: "WhatsApp class reminders",
    desc: "Get class links and homework nudges on WhatsApp.",
    why: "One number per family. You can pause anytime.",
    defaultOn: false,
    category: "Communication",
  },
  {
    id: "marketing",
    title: "Marketing calls & SMS",
    desc: "Occasional offers and new-course launches.",
    why: "Never more than 2 per month. Never to the learner.",
    defaultOn: false,
    category: "Growth",
  },
  {
    id: "analytics",
    title: "Product analytics",
    desc: "Anonymised usage data to improve the app.",
    why: "No name, phone, or class content — just crash reports and clicks.",
    defaultOn: true,
    category: "Growth",
  },
  {
    id: "sdks",
    title: "Third-party SDKs",
    desc: "Ads, retargeting, and social-login libraries.",
    why: "Off by default. Turning on shares device ID with partners.",
    defaultOn: false,
    category: "Growth",
  },
  {
    id: "research",
    title: "Academic research",
    desc: "Anonymised patterns shared with education researchers.",
    why: "Opt-in only. Never contains identifiable data.",
    defaultOn: false,
    category: "Growth",
  },
];

type Step =
  | "splash"
  | "age"
  | "askParent"
  | "otp"
  | "digilocker"
  | "learnerCard"
  | "purposes"
  | "reviewOne"
  | "receipt"
  | "home"
  | "settings"
  | "manageData"
  | "exportRunning"
  | "exportDone"
  | "deleteConfirm"
  | "deleteDone";

function PrototypePage() {
  const [step, setStep] = useState<Step>("splash");
  console.log("[PrototypePage] Rendering step:", step);
  useEffect(() => {
    console.log("[PrototypePage] Hydrated successfully on the client!");
  }, []);
  const [history, setHistory] = useState<Step[]>([]);
  const [purposes, setPurposes] = useState(
    Object.fromEntries(PURPOSES.map((p) => [p.id, p.defaultOn])) as Record<
      string,
      boolean
    >,
  );
  const [reviewIdx, setReviewIdx] = useState(0);
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const go = (s: Step) => {
    console.log("[PrototypePage] go() called, target step:", s);
    setHistory((h) => [...h, step]);
    setStep(s);
  };
  const back = () => {
    if (!history.length) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setStep(prev);
  };
  const reset = () => {
    setHistory([]);
    setStep("splash");
    setPurposes(
      Object.fromEntries(PURPOSES.map((p) => [p.id, p.defaultOn])) as Record<
        string,
        boolean
      >,
    );
  };

  const optedIn = useMemo(
    () => Object.values(purposes).filter(Boolean).length,
    [purposes],
  );

  const currentLabel: Record<Step, string> = {
    splash: "1 · Splash",
    age: "2 · Age gate",
    askParent: "3 · Ask a parent",
    otp: "4 · Verify OTP",
    digilocker: "5 · DigiLocker signal",
    learnerCard: "6 · About this learner",
    purposes: "7 · Purpose consent",
    reviewOne: "7a · One purpose at a time",
    receipt: "8 · Consent receipt",
    home: "9 · Home",
    settings: "10 · Settings",
    manageData: "11 · Your data",
    exportRunning: "12 · Export",
    exportDone: "13 · Export ready",
    deleteConfirm: "14 · Delete data",
    deleteDone: "15 · Deletion scheduled",
  };

  return (
    <div className="min-h-screen bg-[oklch(0.94_0.005_85)] text-ink">
      <main className="mx-auto grid max-w-6xl grid-cols-12 md:gap-10 md:px-6 md:py-12 p-0 h-screen md:h-auto overflow-hidden md:overflow-visible">
        {/* Phone */}
        <section className="col-span-12 md:col-span-8 md:col-start-2 h-full md:h-auto w-full">
          <Phone>
            <Screen
              step={step}
              go={go}
              back={back}
              purposes={purposes}
              setPurposes={setPurposes}
              reviewIdx={reviewIdx}
              setReviewIdx={setReviewIdx}
              optedIn={optedIn}
            />
          </Phone>
        </section>

        {/* Right rail — narrator (Desktop only) */}
        <aside className="hidden md:block col-span-12 md:col-span-3">
          <Narrator step={step} optedIn={optedIn} />
        </aside>
      </main>

      {/* Floating Design Notes button on mobile */}
      <button
        onClick={() => setIsNotesOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-xs font-semibold uppercase tracking-wider text-paper shadow-2xl transition-transform active:scale-[0.97]"
      >
        <Sparkles className="h-4 w-4 text-vermillion animate-pulse" />
        <span>Design Notes</span>
      </button>

      {/* Mobile Design Notes Bottom Drawer */}
      {isNotesOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setIsNotesOpen(false)}
            className="md:hidden fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
          />
          {/* Bottom Sheet */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-paper p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.15)] border-t border-hairline transition-all duration-300 ease-out">
            <div className="flex items-center justify-between border-b border-hairline pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-vermillion" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Product Thinking Notes</span>
              </div>
              <button
                onClick={() => setIsNotesOpen(false)}
                className="rounded-full bg-muted p-1.5 hover:bg-muted/80"
              >
                <X className="h-4 w-4 text-ink" />
              </button>
            </div>
            <div className="py-4">
              <div className="font-display text-2xl leading-tight tracking-tight text-ink">
                {NOTES[step].t}
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{NOTES[step].d}</p>
              <div className="mt-4 rounded-xl border border-hairline bg-card p-4">
                <div className="text-[10px] uppercase tracking-[0.18em] text-vermillion">
                  PM note
                </div>
                <div className="mt-1.5 text-[12px] leading-snug">{NOTES[step].pm}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ---------------- Phone frame ---------------- */
function Phone({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full md:w-[380px] h-screen md:h-auto">
      <div className="relative h-full md:h-auto md:rounded-[52px] md:border md:border-ink/20 md:bg-ink md:p-3 md:shadow-[0_50px_100px_-40px_rgba(24,24,40,0.5)]">
        <div className="relative h-full overflow-hidden bg-paper md:rounded-[42px] flex flex-col">
          {/* Status bar */}
          <div className="hidden md:flex items-center justify-between px-6 pt-3 text-[11px] text-ink">
            <span className="font-mono tabular-nums">9:41</span>
            <div className="flex items-center gap-1.5 text-ink/70">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <span className="ml-1 rounded-sm border border-ink/40 px-1 text-[9px]">
                92
              </span>
            </div>
          </div>
          {/* Notch */}
          <div className="hidden md:block absolute left-1/2 top-1 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
          <div className="flex-1 overflow-y-auto overscroll-contain px-6 pb-8 pt-6 md:h-[700px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Screen router ---------------- */
function Screen({
  step,
  go,
  back,
  purposes,
  setPurposes,
  reviewIdx,
  setReviewIdx,
  optedIn,
}: {
  step: Step;
  go: (s: Step) => void;
  back: () => void;
  purposes: Record<string, boolean>;
  setPurposes: (v: Record<string, boolean>) => void;
  reviewIdx: number;
  setReviewIdx: (n: number) => void;
  optedIn: number;
}) {
  const setP = (id: string, v: boolean) => setPurposes({ ...purposes, [id]: v });

  switch (step) {
    case "splash":
      return (
        <div className="flex min-h-0 md:min-h-[640px] flex-1 flex-col items-center justify-between py-8">
          <div />
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-ink text-paper">
              <span className="font-display text-4xl italic">V</span>
            </div>
            <div className="mt-6 font-display text-4xl leading-none tracking-tight">
              Vedantu
            </div>
            <div className="mt-2 text-[13px] text-muted-foreground">
              Learning, with your permission.
            </div>
          </div>
          <div className="w-full">
            <PrimaryBtn onClick={() => { console.log("[PrototypePage] Clicked Get Started!"); go("age"); }}>Get started</PrimaryBtn>
            <div className="mt-3 text-center text-[11px] text-muted-foreground">
              By continuing you'll see exactly what we ask for, and why.
            </div>
          </div>
        </div>
      );

    case "age":
      return (
        <Frame back={back} title="Before we begin">
          <H1>Who is the learner?</H1>
          <Sub>
            DPDP requires we handle a minor's data differently. Your answer sets the
            rules — nothing else.
          </Sub>
          <div className="mt-6 space-y-2.5">
            {[
              { l: "Under 13", d: "Full parent-managed account", to: "askParent" as Step },
              { l: "13 – 17", d: "Parent verifies, learner uses the app", to: "askParent" as Step },
              { l: "18 or older", d: "Learner manages their own consent", to: "purposes" as Step },
            ].map((o) => (
              <button
                key={o.l}
                onClick={() => go(o.to)}
                className="group flex w-full items-center justify-between rounded-xl border border-hairline bg-card p-4 text-left transition-all hover:border-ink"
              >
                <div>
                  <div className="text-[15px] font-medium">{o.l}</div>
                  <div className="text-[12px] text-muted-foreground">{o.d}</div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </button>
            ))}
          </div>
          <TrustPill>
            <Lock className="h-3 w-3" /> This choice is stored, but never shared with
            third parties.
          </TrustPill>
        </Frame>
      );

    case "askParent":
      return (
        <Frame back={back} title="Ask a parent">
          <div className="mt-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-vermillion/10">
            <ShieldCheck className="h-7 w-7 text-vermillion" />
          </div>
          <H1>We need a grown-up.</H1>
          <Sub>
            We'll send a secure link to your parent's mobile. It expires in 15 minutes and
            only they can approve.
          </Sub>
          <label className="mt-6 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Parent's mobile number
          </label>
          <div className="mt-2 flex items-center gap-2 rounded-xl border border-hairline bg-card px-3 py-3">
            <span className="text-[13px] text-muted-foreground">+91</span>
            <div className="text-[15px] tracking-wide">98•••••210</div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
            <Info className="h-3 w-3" /> We never store this without their consent.
          </div>
          <div className="mt-8">
            <PrimaryBtn onClick={() => go("otp")}>Send secure link</PrimaryBtn>
            <GhostBtn onClick={back}>I don't have a parent nearby</GhostBtn>
          </div>
        </Frame>
      );

    case "otp":
      return (
        <Frame back={back} title="Verify parent">
          <H1>Enter the 6-digit code</H1>
          <Sub>Sent to +91 98••••••210 · valid for 15 min</Sub>
          <div className="mt-6 flex justify-between gap-2">
            {["2", "9", "0", "4", "1", "7"].map((n, i) => (
              <div
                key={i}
                className="flex h-14 flex-1 items-center justify-center rounded-lg border border-ink bg-card font-display text-2xl"
              >
                {n}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-[12px] text-muted-foreground">
            <span>Didn't get it?</span>
            <button className="text-vermillion">Resend in 42s</button>
          </div>
          <div className="mt-8">
            <PrimaryBtn onClick={() => go("digilocker")}>Verify</PrimaryBtn>
          </div>
        </Frame>
      );

    case "digilocker":
      return (
        <Frame back={back} title="One more signal">
          <H1>Confirm you're the parent.</H1>
          <Sub>
            We match one extra signal so no one else can consent on your child's behalf.
            Pick whichever is easier.
          </Sub>
          <div className="mt-6 space-y-2.5">
            <OptionRow
              icon={<ShieldCheck className="h-4 w-4" />}
              t="Continue with DigiLocker"
              d="Government-issued · recommended"
              onClick={() => go("learnerCard")}
              highlight
            />
            <OptionRow
              icon={<FileText className="h-4 w-4" />}
              t="Match saved payment method"
              d="If you've paid on Vedantu before"
              onClick={() => go("learnerCard")}
            />
            <OptionRow
              icon={<User className="h-4 w-4" />}
              t="Verify via video call (15 min)"
              d="For families without either of the above"
              onClick={() => go("learnerCard")}
            />
          </div>
          <TrustPill>
            <Lock className="h-3 w-3" /> Vedantu never stores your Aadhaar. Only a
            yes/no verification token.
          </TrustPill>
        </Frame>
      );

    case "learnerCard":
      return (
        <Frame back={back} title="About the learner">
          <H1>Meet Aarav.</H1>
          <Sub>
            Confirm what we'll use to run the classroom. Everything else is optional and
            you'll approve it, one purpose at a time.
          </Sub>
          <div className="mt-6 rounded-2xl border border-hairline bg-card p-4">
            <Kv2 k="Name" v="Aarav Menon" />
            <Kv2 k="Age" v="14 years" />
            <Kv2 k="Class · Board" v="Class 9 · CBSE" />
            <Kv2 k="Preferred language" v="English + Hindi" />
            <Kv2 k="Data retention" v="Until 30 days after account closes" last />
          </div>
          <div className="mt-3 flex items-start gap-2 rounded-lg bg-muted p-3 text-[12px] leading-snug text-muted-foreground">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-vermillion" />
            <span>
              This data is used <em>only</em> to run classes, mark attendance, and grade
              homework. Nothing here is shared.
            </span>
          </div>
          <div className="mt-6">
            <PrimaryBtn onClick={() => go("purposes")}>Looks right · continue</PrimaryBtn>
            <GhostBtn onClick={back}>Edit details</GhostBtn>
          </div>
        </Frame>
      );

    case "purposes":
      return (
        <Frame back={back} title="Your permissions">
          <H1>Nine choices. All plain-language.</H1>
          <Sub>
            Nothing outside "Essential" is required. Toggle anything, anytime. We show one
            purpose deep-dive next.
          </Sub>
          <div className="mt-5 space-y-2">
            {PURPOSES.map((p) => (
              <PurposeRow
                key={p.id}
                p={p}
                on={purposes[p.id]}
                onToggle={(v) => setP(p.id, v)}
              />
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-hairline bg-card p-3 text-[12px]">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">You've allowed</span>
              <span className="font-mono">
                {optedIn} / {PURPOSES.length} purposes
              </span>
            </div>
          </div>
          <div className="mt-4">
            <PrimaryBtn onClick={() => go("reviewOne")}>See one in detail</PrimaryBtn>
            <GhostBtn onClick={() => go("receipt")}>Save & continue</GhostBtn>
          </div>
        </Frame>
      );

    case "reviewOne": {
      const p = PURPOSES[reviewIdx];
      return (
        <Frame back={back} title={`Purpose ${reviewIdx + 1} of ${PURPOSES.length}`}>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--vermillion)" }}
            />
            {p.category}
          </div>
          <H1>{p.title}</H1>
          <Sub>{p.desc}</Sub>
          <div className="mt-5 rounded-xl border border-hairline bg-card p-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-vermillion">
              Why we ask
            </div>
            <div className="mt-2 text-[13px] leading-snug">{p.why}</div>
          </div>
          <div className="mt-4 rounded-xl border border-hairline bg-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[13px] font-medium">
                  {p.required ? "Required to use the app" : "Your choice"}
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {p.required
                    ? "Cannot be turned off · service depends on it"
                    : "Turn on / off anytime from Settings"}
                </div>
              </div>
              <Toggle
                on={purposes[p.id]}
                disabled={p.required}
                onChange={(v) => setP(p.id, v)}
              />
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <button
              onClick={() => setReviewIdx(Math.max(0, reviewIdx - 1))}
              className="flex-1 rounded-xl border border-hairline bg-card py-3 text-[13px]"
              disabled={reviewIdx === 0}
            >
              Previous
            </button>
            {reviewIdx < PURPOSES.length - 1 ? (
              <button
                onClick={() => setReviewIdx(reviewIdx + 1)}
                className="flex-1 rounded-xl bg-ink py-3 text-[13px] text-paper"
              >
                Next purpose
              </button>
            ) : (
              <button
                onClick={() => go("receipt")}
                className="flex-1 rounded-xl bg-vermillion py-3 text-[13px] text-paper"
              >
                Save all
              </button>
            )}
          </div>
        </Frame>
      );
    }

    case "receipt":
      return (
        <Frame back={back} title="Consent receipt">
          <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-moss/15">
            <Check className="h-6 w-6 text-moss" />
          </div>
          <H1>All set, Priya.</H1>
          <Sub>
            We saved a signed receipt of what you approved. You'll get a copy on email and
            can change anything, anytime, from Settings › Your data.
          </Sub>
          <div className="mt-5 rounded-2xl border border-hairline bg-card p-4 font-mono text-[11px] leading-relaxed">
            <div className="flex justify-between text-vermillion">
              <span>RECEIPT · VDNT-2026-07-02</span>
              <span>v1.0</span>
            </div>
            <div className="mt-2 text-muted-foreground">
              Learner · Aarav M. (14)
              <br />
              Verified by · Priya M. (DigiLocker)
              <br />
              Purposes ON · {optedIn} / {PURPOSES.length}
              <br />
              Purposes OFF · {PURPOSES.length - optedIn}
              <br />
              Retention · 30 days post-closure
              <br />
              Withdraw · Settings › Your data
            </div>
          </div>
          <div className="mt-6">
            <PrimaryBtn onClick={() => go("home")}>Enter Vedantu</PrimaryBtn>
            <GhostBtn onClick={() => go("manageData")}>Manage my data now</GhostBtn>
          </div>
        </Frame>
      );

    case "home":
      return (
        <div className="min-h-0 md:min-h-[640px] flex flex-col justify-between h-full">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[12px] text-muted-foreground">Good evening,</div>
              <div className="font-display text-2xl">Aarav</div>
            </div>
            <button
              onClick={() => go("settings")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted"
            >
              <User className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-hairline bg-ink p-5 text-paper">
            <div className="text-[11px] uppercase tracking-[0.18em] text-vermillion">
              Next class · 6:00 PM
            </div>
            <div className="mt-2 font-display text-2xl leading-tight">
              Trigonometry — Chapter 9
            </div>
            <div className="mt-1 text-[12px] text-white/60">
              with Ravi Sir · 60 min · recording enabled
            </div>
            <button className="mt-4 w-full rounded-lg bg-vermillion py-2.5 text-[13px] font-medium text-paper">
              Join class
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Tile title="Homework" v="2 pending" />
            <Tile title="Streak" v="14 days" />
          </div>

          <div className="mt-4 rounded-2xl border border-hairline bg-vermillion/8 p-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-vermillion" />
              <div className="flex-1">
                <div className="text-[13px] font-medium">
                  Your privacy is up to date
                </div>
                <div className="text-[11px] leading-snug text-muted-foreground">
                  {optedIn} of {PURPOSES.length} data purposes are on. You can review or
                  withdraw anytime.
                </div>
              </div>
              <button
                onClick={() => go("manageData")}
                className="text-[11px] font-medium text-vermillion"
              >
                Manage
              </button>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-around border-t border-hairline pt-4 text-[10px] uppercase tracking-widest text-muted-foreground">
            <NavIcon icon={<Home className="h-4 w-4" />} label="Home" active />
            <NavIcon icon={<Sparkles className="h-4 w-4" />} label="Learn" />
            <NavIcon icon={<MessageCircle className="h-4 w-4" />} label="Doubts" />
            <button
              onClick={() => go("settings")}
              className="flex flex-col items-center gap-1"
            >
              <User className="h-4 w-4" />
              <span>Me</span>
            </button>
          </div>
        </div>
      );

    case "settings":
      return (
        <Frame back={() => go("home")} title="Settings">
          <H1>Settings</H1>
          <div className="mt-5 space-y-2">
            <SettingRow
              icon={<ShieldCheck className="h-4 w-4" />}
              t="Your data & consent"
              d="Review, export, or delete anything we hold."
              onClick={() => go("manageData")}
              accent
            />
            <SettingRow icon={<Bell className="h-4 w-4" />} t="Notifications" d="WhatsApp, SMS, email" />
            <SettingRow icon={<User className="h-4 w-4" />} t="Learner profile" d="Class, board, language" />
            <SettingRow icon={<Lock className="h-4 w-4" />} t="Login & security" d="OTP, devices" />
          </div>
        </Frame>
      );

    case "manageData":
      return (
        <Frame back={() => go("settings")} title="Your data">
          <H1>Your data.</H1>
          <Sub>Everything Vedantu holds about Aarav — in one place.</Sub>

          <div className="mt-5 space-y-2">
            {PURPOSES.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between rounded-xl border border-hairline bg-card p-3"
              >
                <div className="flex-1">
                  <div className="text-[13px] font-medium">{p.title}</div>
                  <div className="text-[11px] text-muted-foreground">
                    {purposes[p.id] ? "Currently on" : "Currently off"}
                  </div>
                </div>
                <Toggle
                  on={purposes[p.id]}
                  disabled={p.required}
                  onChange={(v) => setP(p.id, v)}
                />
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2">
            <ActionBtn
              icon={<Download className="h-4 w-4" />}
              t="Export all my data"
              d="JSON + PDF · ready in ~10 min"
              onClick={() => go("exportRunning")}
            />
            <ActionBtn
              icon={<Trash2 className="h-4 w-4 text-vermillion" />}
              t="Delete my account & data"
              d="Erased within 30 days · irreversible"
              onClick={() => go("deleteConfirm")}
              danger
            />
          </div>
        </Frame>
      );

    case "exportRunning":
      return (
        <Frame back={() => go("manageData")} title="Exporting…">
          <div className="mt-6 flex flex-col items-center py-10 text-center">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-vermillion/10">
              <Download className="h-6 w-6 text-vermillion" />
              <span className="absolute inset-0 animate-ping rounded-full border-2 border-vermillion/40" />
            </div>
            <H1>Packing up your data…</H1>
            <Sub>We'll email a secure download link to priya@example.com.</Sub>
          </div>
          <div className="mt-4">
            <PrimaryBtn onClick={() => go("exportDone")}>Simulate complete →</PrimaryBtn>
          </div>
        </Frame>
      );

    case "exportDone":
      return (
        <Frame back={() => go("manageData")} title="Export ready">
          <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-moss/15">
            <Check className="h-6 w-6 text-moss" />
          </div>
          <H1>Your data is ready.</H1>
          <Sub>
            One JSON archive (machine-readable) and one PDF (human-readable). The link
            expires in 48 hours.
          </Sub>
          <div className="mt-5 rounded-xl border border-hairline bg-card p-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-vermillion" />
              <div className="flex-1">
                <div className="text-[13px] font-medium">vedantu-aarav-2026-07-02.zip</div>
                <div className="text-[11px] text-muted-foreground">
                  2.4 MB · signed · SHA-256 verified
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <PrimaryBtn onClick={() => go("home")}>Back to home</PrimaryBtn>
          </div>
        </Frame>
      );

    case "deleteConfirm":
      return (
        <Frame back={() => go("manageData")} title="Delete data">
          <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-vermillion/10">
            <Trash2 className="h-6 w-6 text-vermillion" />
          </div>
          <H1>Delete Aarav's account?</H1>
          <Sub>
            We'll erase his profile, class history, recordings, and every purpose you
            approved. This cannot be undone.
          </Sub>
          <div className="mt-4 space-y-2">
            {[
              "Learner profile & progress",
              "Class recordings & homework",
              "All consent records (kept 30 days for audit)",
              "Anonymised analytics (aggregate only, cannot be tied back)",
            ].map((l, i) => (
              <div
                key={l}
                className="flex items-start gap-2 rounded-lg bg-card px-3 py-2 text-[12px]"
              >
                <span className="mt-0.5 font-mono text-vermillion">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{l}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2">
            <button
              onClick={() => go("manageData")}
              className="rounded-xl border border-hairline bg-card py-3 text-[13px]"
            >
              Keep account
            </button>
            <button
              onClick={() => go("deleteDone")}
              className="rounded-xl bg-vermillion py-3 text-[13px] text-paper"
            >
              Delete
            </button>
          </div>
        </Frame>
      );

    case "deleteDone":
      return (
        <Frame back={() => go("home")} title="Scheduled">
          <div className="mt-6 flex flex-col items-center py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-moss/15">
              <Check className="h-7 w-7 text-moss" />
            </div>
            <H1>Deletion scheduled.</H1>
            <Sub>
              We'll fully erase Aarav's data by <b className="text-ink">1 Aug 2026</b>.
              You can cancel from your email up to that date.
            </Sub>
          </div>
          <div className="mt-2 rounded-xl border border-hairline bg-card p-4 text-[12px] leading-relaxed">
            A signed erasure receipt has been sent to <b>priya@example.com</b>. Under
            DPDP §11, you have the right to a copy of this record at any time.
          </div>
          <div className="mt-6">
            <PrimaryBtn onClick={() => go("splash")}>Start over</PrimaryBtn>
          </div>
        </Frame>
      );
  }
}

/* ---------------- Narrator notes ---------------- */
const NOTES: Record<Step, { t: string; d: string; pm: string }> = {
  splash: {
    t: "Signals trust in 4 seconds.",
    d: "The tagline sets the emotional promise before a single field appears.",
    pm: "No 'Skip' — but no wall either. The user still moves forward in one tap.",
  },
  age: {
    t: "DPDP §9 begins here.",
    d: "Age gate is short, honest, and states why we're asking.",
    pm: "Under 18 branches. Adult flow keeps its own agency.",
  },
  askParent: {
    t: "Handoff, not a wall.",
    d: "The learner is not blocked — a parent is invited.",
    pm: "Micro-copy admits fallibility: 'no parent nearby' is a valid exit.",
  },
  otp: {
    t: "Standard, but scoped.",
    d: "OTP is one signal — never the only signal.",
    pm: "Timer + resend prevents lock-out anxiety.",
  },
  digilocker: {
    t: "Three verification paths.",
    d: "DigiLocker · payment match · video. Meets every income tier.",
    pm: "We never store Aadhaar — only a yes/no token. This is the audit-friendly path.",
  },
  learnerCard: {
    t: "Data minimisation, made visible.",
    d: "Parent sees exactly what runs the classroom — nothing more.",
    pm: "Retention window shown up-front, not buried.",
  },
  purposes: {
    t: "9 purposes · none pre-selected beyond essentials.",
    d: "Symmetry of choice is enforced. No dark patterns.",
    pm: "Symmetry of choice is enforced. Essential purposes are separated from optional features.",
  },
  reviewOne: {
    t: "Progressive disclosure.",
    d: "Every purpose has a 'why we ask' card — plain language, no jargon.",
    pm: "Ships as a swipeable modal in production for one-thumb operation.",
  },
  receipt: {
    t: "Consent as an artefact.",
    d: "A signed, exportable receipt turns compliance into evidence of trust.",
    pm: "Same object powers our audit log — one source of truth.",
  },
  home: {
    t: "Trust surface, always visible.",
    d: "A privacy tile on Home keeps consent alive, not out-of-sight.",
    pm: "This tile is the entry point for withdrawal — where dark patterns usually hide.",
  },
  settings: {
    t: "'Your data' is the first row.",
    d: "Placement signals status, not shame.",
    pm: "Above notifications, above profile — because DPDP §11 says so.",
  },
  manageData: {
    t: "Every purpose is one tap to reverse.",
    d: "Withdrawal is exactly as easy as giving consent. That's the DPDP §6(4) test.",
    pm: "Export and delete live on the same screen — no scavenger hunt.",
  },
  exportRunning: {
    t: "Async, but honest.",
    d: "The user knows an email will arrive, and roughly when.",
    pm: "SLA: 72h max under DPDP.",
  },
  exportDone: {
    t: "Both formats, both audiences.",
    d: "JSON for portability, PDF for humans. Signed for integrity.",
    pm: "Link expires — reduces credential-stuffing blast radius.",
  },
  deleteConfirm: {
    t: "Full transparency on what leaves.",
    d: "And what stays — the 30-day audit copy — is disclosed.",
    pm: "Two-column button layout so 'Keep' is never smaller than 'Delete'.",
  },
  deleteDone: {
    t: "Right to erasure, honoured.",
    d: "With a receipt, so the user can prove it later.",
    pm: "Grace window (30d) protects against regretted deletes and legal holds.",
  },
};

/* ---------------- Narrator ---------------- */
function Narrator({ step, optedIn }: { step: Step; optedIn: number }) {
  const n = NOTES[step];
  return (
    <div className="sticky top-24">
      <div className="text-[10px] uppercase tracking-[0.22em] text-vermillion">
        Speaker notes
      </div>
      <div className="mt-3 font-display text-2xl leading-tight tracking-tight text-balance">
        {n.t}
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{n.d}</p>
      <div className="mt-4 rounded-lg border border-hairline bg-card p-3">
        <div className="text-[10px] uppercase tracking-[0.18em] text-vermillion">
          PM note
        </div>
        <div className="mt-1 text-[12px] leading-snug">{n.pm}</div>
      </div>
    </div>
  );
}

/* ---------------- UI atoms ---------------- */
function Frame({
  back,
  title,
  children,
}: {
  back: () => void;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-0 md:min-h-[640px] flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between">
          <button
            onClick={back}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {title}
          </div>
          <div className="h-9 w-9" />
        </div>
        {children}
      </div>
    </div>
  );
}
function H1({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 font-display text-[30px] leading-[1.05] tracking-tight text-balance">
      {children}
    </h2>
  );
}
function Sub({ children }: { children: ReactNode }) {
  return (
    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground text-pretty">
      {children}
    </p>
  );
}
function PrimaryBtn({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl bg-ink py-3.5 text-[14px] font-medium text-paper transition-transform active:scale-[0.99]"
    >
      {children}
    </button>
  );
}
function GhostBtn({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="mt-2 w-full rounded-xl py-3 text-[13px] text-muted-foreground hover:text-ink"
    >
      {children}
    </button>
  );
}
function TrustPill({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 flex items-center gap-2 rounded-full bg-muted px-3 py-2 text-[11px] text-muted-foreground">
      {children}
    </div>
  );
}
function OptionRow({
  icon,
  t,
  d,
  onClick,
  highlight,
}: {
  icon: ReactNode;
  t: string;
  d: string;
  onClick: () => void;
  highlight?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl border p-3.5 text-left transition-all ${highlight
          ? "border-vermillion bg-vermillion/5"
          : "border-hairline bg-card hover:border-ink"
        }`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${highlight ? "bg-vermillion text-paper" : "bg-muted"
          }`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-[13px] font-medium">{t}</div>
        <div className="text-[11px] text-muted-foreground">{d}</div>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </button>
  );
}
function Kv2({ k, v, last }: { k: string; v: string; last?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between py-2 text-[13px] ${last ? "" : "border-b border-hairline"
        }`}
    >
      <span className="text-muted-foreground">{k}</span>
      <span>{v}</span>
    </div>
  );
}
function PurposeRow({
  p,
  on,
  onToggle,
}: {
  p: Purpose;
  on: boolean;
  onToggle: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-hairline bg-card p-3">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="text-[13px] font-medium">{p.title}</div>
          {p.required && (
            <span className="rounded-full bg-muted px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-muted-foreground">
              Required
            </span>
          )}
        </div>
        <div className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
          {p.desc}
        </div>
      </div>
      <Toggle on={on} disabled={p.required} onChange={onToggle} />
    </div>
  );
}
function Toggle({
  on,
  onChange,
  disabled,
}: {
  on: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(!on)}
      disabled={disabled}
      aria-pressed={on}
      className={`relative mt-1 inline-flex h-[22px] w-[38px] shrink-0 items-center rounded-full p-[2px] transition-colors duration-200 ${on ? "bg-vermillion" : "bg-slate/25"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`block h-[18px] w-[18px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-transform duration-200 ${on ? "translate-x-[16px]" : "translate-x-0"
          }`}
      />
    </button>
  );
}
function Tile({ title, v }: { title: string; v: string }) {
  return (
    <div className="rounded-xl border border-hairline bg-card p-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </div>
      <div className="mt-1 font-display text-2xl tracking-tight">{v}</div>
    </div>
  );
}
function NavIcon({
  icon,
  label,
  active,
}: {
  icon: ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-1 ${active ? "text-vermillion" : ""
        }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
function SettingRow({
  icon,
  t,
  d,
  onClick,
  accent,
}: {
  icon: ReactNode;
  t: string;
  d: string;
  onClick?: () => void;
  accent?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl border p-3.5 text-left ${accent ? "border-vermillion bg-vermillion/5" : "border-hairline bg-card"
        }`}
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${accent ? "bg-vermillion text-paper" : "bg-muted"
          }`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-[13px] font-medium">{t}</div>
        <div className="text-[11px] text-muted-foreground">{d}</div>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </button>
  );
}
function ActionBtn({
  icon,
  t,
  d,
  onClick,
  danger,
}: {
  icon: ReactNode;
  t: string;
  d: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl border p-3.5 text-left ${danger ? "border-vermillion/40" : "border-hairline"
        } bg-card`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
        {icon}
      </div>
      <div className="flex-1">
        <div
          className={`text-[13px] font-medium ${danger ? "text-vermillion" : ""}`}
        >
          {t}
        </div>
        <div className="text-[11px] text-muted-foreground">{d}</div>
      </div>
    </button>
  );
}
