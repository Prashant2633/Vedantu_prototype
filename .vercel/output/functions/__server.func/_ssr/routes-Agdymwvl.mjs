import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Agdymwvl.js
var import_jsx_runtime = require_jsx_runtime();
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground grain",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-8 pt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-vermillion" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
					children: "Case Study & Redesign · Vedantu"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
				children: "July 2026"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-8 pt-24 pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm uppercase tracking-[0.22em] text-vermillion",
					children: "A case study on India's DPDP Act"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 font-display text-[112px] leading-[0.95] tracking-[-0.03em] text-balance",
					children: [
						"Consent,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-vermillion",
							children: "by design."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-2xl text-lg leading-relaxed text-slate text-pretty",
					children: "Vedantu teaches millions of learners under eighteen. India's DPDP Act now requires verifiable parental consent, purpose-bound data use, and real user rights. This submission redesigns Vedantu's consent experience so that compliance becomes a moment of trust — not a moment of drop-off."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-4 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkCard, {
						to: "/deck",
						eyebrow: "Deliverable 1",
						title: "Product Thinking Deck",
						meta: "11 slides · press → to navigate · ⌘P to export"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkCard, {
						to: "/prototype",
						eyebrow: "Deliverable 2",
						title: "Clickable Prototype",
						meta: "Mobile flow · age gate → parental consent → preference center"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-24 grid grid-cols-2 gap-x-12 gap-y-10 border-t border-hairline pt-12 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							kpi: "~65%",
							label: "Vedantu learners aged under 18 (est.)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							kpi: "₹250 Cr",
							label: "Max DPDP penalty per violation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							kpi: "1 tap",
							label: "Current 'consent' at signup today"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							kpi: "9 purposes",
							label: "Data uses we unbundle in the redesign"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-24 flex items-center justify-between border-t border-hairline pt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vedantu India DPDP Onboarding & Consent Redesign" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Assumptions & mock data disclosed inside" })]
				})
			]
		})]
	});
}
function LinkCard({ to, eyebrow, title, meta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-hairline bg-card p-8 transition-all hover:border-ink hover:-translate-y-0.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-[0.2em] text-vermillion",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-3 font-display text-4xl tracking-tight",
			children: title
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: meta
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-6 w-6 text-ink transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" })]
		})]
	});
}
function Stat({ kpi, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-display text-5xl tracking-tight",
		children: kpi
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground",
		children: label
	})] });
}
//#endregion
export { Landing as component };
