import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as YAxis, c as Line, d as Pie, f as Cell, i as LineChart, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
import { b as ArrowLeft, c as Printer, g as Check, h as ChevronRight, m as Download, t as X, v as ArrowUpRight, y as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/deck-DzJDUaiP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SLIDES = [
	{
		id: "cover",
		label: "Cover",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideCover, {})
	},
	{
		id: "problem",
		label: "Problem",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideProblem, {})
	},
	{
		id: "user",
		label: "User",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideUser, {})
	},
	{
		id: "current",
		label: "Current experience",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideCurrent, {})
	},
	{
		id: "insights",
		label: "Insight & opportunity",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideInsights, {})
	},
	{
		id: "solution",
		label: "Solution",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideSolution, {})
	},
	{
		id: "ux",
		label: "UX & prototype",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideUX, {})
	},
	{
		id: "metrics",
		label: "Metrics",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideMetrics, {})
	},
	{
		id: "dashboard",
		label: "Dashboard",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideDashboard, {})
	},
	{
		id: "diagnostic",
		label: "Diagnostic",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideDiagnostic, {})
	},
	{
		id: "rollout",
		label: "Rollout",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideRollout, {})
	},
	{
		id: "risks",
		label: "Risks & vision",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideRisks, {})
	}
];
function Slide({ index, eyebrow, children, bg = "paper" }) {
	const isInk = bg === "ink";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-frame",
		style: {
			background: isInk ? "var(--ink)" : "var(--paper)",
			color: isInk ? "var(--paper)" : "var(--ink)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-16 top-10 flex items-center justify-between text-[11px] uppercase tracking-[0.22em]",
				style: { color: isInk ? "oklch(0.75 0.02 260)" : "var(--slate)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block h-1.5 w-1.5 rounded-full",
						style: { background: "var(--vermillion)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: eyebrow })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vedantu · DPDP · PM Intern" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums",
						children: [
							String(index + 1).padStart(2, "0"),
							" / ",
							String(SLIDES.length).padStart(2, "0")
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-16 top-16 h-px",
				style: { background: isInk ? "oklch(1 0 0 / 0.12)" : "var(--hairline)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-16 top-24 bottom-14",
				children
			})
		]
	});
}
function SlideCover() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-frame flex flex-col justify-between px-16 py-14",
		style: {
			background: "var(--ink)",
			color: "var(--paper)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-vermillion" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vedantu · Product Intern hiring assignment" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "July 2026" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm uppercase tracking-[0.24em] text-vermillion",
					children: "India's DPDP Act, 2023 · a redesign"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 font-display text-[132px] leading-[0.9] tracking-[-0.03em] text-white",
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
					className: "mt-8 max-w-2xl text-lg leading-relaxed text-white/70",
					children: "Turning DPDP compliance into a moment of trust — the first product surface Vedantu's parents ever see, and the reason they stay."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-4 gap-8 border-t border-white/15 pt-6 text-white/80",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
						k: "Product",
						v: "Vedantu · K-12 learning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
						k: "Focus",
						v: "Children's data + consent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
						k: "Regulation",
						v: "DPDP Act, 2023 (India)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
						k: "Deliverables",
						v: "Deck + clickable prototype"
					})
				]
			})
		]
	});
}
function Kv({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[10px] uppercase tracking-[0.22em] text-white/50",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 text-base text-white",
		children: v
	})] });
}
function SlideProblem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
		index: 1,
		eyebrow: "Problem",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-12 gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-7 flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-[68px] leading-[0.98] tracking-[-0.025em] text-balance",
					children: [
						"Vedantu's consent surface was built for a world",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-vermillion",
							children: "before DPDP."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-base leading-relaxed text-slate text-pretty",
					children: "A single checkbox at signup covers marketing, analytics, third-party SDKs, WhatsApp nudges, live-class recordings, and personalisation — for learners who are, on our estimate, majority minors. DPDP now demands purpose-bound, revocable, and (for minors) parent-verified consent."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-6 border-t border-hairline pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigStat, {
							k: "~65%",
							v: "learners under 18 (assumed)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigStat, {
							k: "1",
							v: "blanket consent checkbox today"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigStat, {
							k: "₹250 Cr",
							v: "max penalty per DPDP breach"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-5 rounded-2xl border border-hairline bg-card p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-[0.2em] text-vermillion",
						children: "Why it matters"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reason, {
								t: "Legal exposure",
								d: "Consent for minors without verifiable parental consent is invalid under DPDP §9."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reason, {
								t: "Trust & retention",
								d: "Parents are the payer. A creepy first impression kills renewals more than any UX bug."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reason, {
								t: "Vendor risk",
								d: "~40 third-party SDKs share a single implicit consent. One leak, one headline."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reason, {
								t: "Growth cost",
								d: "Blanket consent is fragile — one regulator notice can pause ads, analytics, and ML overnight."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-lg bg-muted p-4 text-[11px] leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-ink",
							children: "Assumptions."
						}), " User-age mix from public Vedantu disclosures + BYJU'S / Unacademy comparables; SDK count from AppFigures-style teardowns. Not internal data."]
					})
				]
			})]
		})
	});
}
function BigStat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-display text-5xl tracking-tight",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground",
		children: v
	})] });
}
function Reason({ t, d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-vermillion" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm font-medium",
			children: t
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm leading-relaxed text-muted-foreground",
			children: d
		})] })]
	});
}
function SlideUser() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
		index: 2,
		eyebrow: "User",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-12 gap-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Persona, {
					className: "col-span-5",
					name: "Priya Menon",
					role: "Parent · payer · gatekeeper",
					age: "39 · Bengaluru · works in HR",
					quote: "I signed him up in five minutes. I never read what I agreed to. Now I keep getting WhatsApp calls from tutors.",
					jobs: [
						"Make sure my kid learns without being tracked or spammed",
						"Understand what the app knows about my child",
						"Feel in control without becoming an IT admin"
					],
					pains: [
						"No visibility into what data is collected",
						"Marketing calls to child's number",
						"No easy way to delete data if we churn"
					],
					accent: "ink"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Persona, {
					className: "col-span-5",
					name: "Aarav Menon",
					role: "Learner · 14 · Class 9",
					age: "Studies 2 hrs/day · uses parent's phone + own tablet",
					quote: "I just want the class to start. Every pop-up feels like homework.",
					jobs: [
						"Attend live class quickly, without friction",
						"Get recommendations that feel relevant, not creepy",
						"Not feel spied on by teachers or friends"
					],
					pains: [
						"Cannot legally give consent under DPDP",
						"Doesn't understand what he's agreeing to",
						"Session recordings shared without clear notice"
					],
					accent: "vermillion"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-2 flex flex-col justify-between rounded-2xl border border-hairline bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.2em] text-vermillion",
						children: "Design principle"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-2xl leading-tight tracking-tight",
						children: "Design for the parent. Delight the learner."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 text-xs leading-relaxed text-muted-foreground",
						children: "The parent decides. The child feels the friction. Both must be respected in every screen we ship."
					})]
				})
			]
		})
	});
}
function Persona({ className = "", name, role, age, quote, jobs, pains, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${className} rounded-2xl border border-hairline bg-card p-7`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-14 w-14 items-center justify-center rounded-full font-display text-2xl",
					style: {
						background: accent === "ink" ? "var(--ink)" : "var(--vermillion)",
						color: "var(--paper)"
					},
					children: name[0]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-3xl leading-tight",
						children: name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground",
						children: age
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-5 border-l-2 border-vermillion pl-4 font-display text-lg italic leading-snug text-ink",
				children: [
					"\"",
					quote,
					"\""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-2 gap-5 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
					children: "Jobs to be done"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-1.5",
					children: jobs.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2 text-[13px] leading-snug",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-moss" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: j })]
					}, j))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
					children: "Pain points"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-1.5",
					children: pains.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2 text-[13px] leading-snug",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-vermillion" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
					}, p))
				})] })]
			})
		]
	});
}
function SlideCurrent() {
	const steps = [
		{
			t: "Install",
			d: "App store · no privacy summary"
		},
		{
			t: "Signup",
			d: "Phone OTP · age not asked"
		},
		{
			t: "One checkbox",
			d: "'I agree to Terms & Privacy'"
		},
		{
			t: "Onboarding",
			d: "Grade, board, goals — used for ads too"
		},
		{
			t: "Live class",
			d: "Recording begins · no fresh notice"
		},
		{
			t: "WhatsApp",
			d: "Marketing enabled by default"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
		index: 3,
		eyebrow: "Current experience",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-12 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-5xl leading-[1.02] tracking-tight",
						children: [
							"One tap today collects ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-vermillion",
								children: "nine"
							}),
							" ",
							"distinct purposes' worth of data."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground",
						children: "The current signup journey — reconstructed from a fresh install — bundles consent with the \"Continue\" button, then never surfaces it again."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-2xl border border-hairline bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
								children: "First-run journey (assumed)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid grid-cols-6 gap-2",
								children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg border border-hairline bg-background p-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[10px] font-mono tabular-nums text-vermillion",
												children: ["0", i + 1]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-2 text-[13px] font-medium leading-tight",
												children: s.t
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-[11px] leading-snug text-muted-foreground",
												children: s.d
											})
										]
									}), i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" })]
								}, s.t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
										children: "Consent-fatigue heatmap · attention decay per step"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 flex gap-1",
										children: [
											.95,
											.7,
											.35,
											.55,
											.4,
											.25
										].map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-8 flex-1 rounded",
											style: { background: `color-mix(in oklab, var(--vermillion) ${v * 100}%, var(--muted))` },
											title: `Step ${i + 1}: ${Math.round(v * 100)}% attention`
										}, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 flex justify-between text-[10px] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "High attention" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "By step 3 we've lost the room" })]
									})
								]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-5 rounded-2xl border border-hairline bg-ink p-7 text-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.22em] text-vermillion",
						children: "Where we fall short of DPDP"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 divide-y divide-white/10",
						children: [
							{
								s: "§6 · Notice",
								g: "No itemised, plain-language notice at collection"
							},
							{
								s: "§7 · Purpose limitation",
								g: "Learning data reused for retargeting ads"
							},
							{
								s: "§9 · Children",
								g: "No age gate → no verifiable parental consent"
							},
							{
								s: "§11 · Right to access & erase",
								g: "No self-serve data export or delete"
							},
							{
								s: "§6(4) · Withdrawal",
								g: "Consent easy to give, hard to take back"
							}
						].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[11px] uppercase tracking-widest text-white/60",
									children: g.s
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5 text-vermillion" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[14px] leading-snug text-white",
								children: g.g
							})]
						}, g.s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-[11px] leading-relaxed text-white/60",
						children: "Section refs: DPDP Act, 2023. Findings from black-box teardown of current Android app + public policy pages."
					})
				]
			})]
		})
	});
}
function SlideInsights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
		index: 4,
		eyebrow: "Insight & opportunity",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-12 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-5 flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-[64px] leading-[0.98] tracking-[-0.025em] text-balance",
					children: [
						"Consent is a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-vermillion",
							children: "product"
						}),
						", not a legal form."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-base leading-relaxed text-slate",
					children: [
						"Every platform that has ever tried to bury consent has paid for it — in churn, in fines, in reputation. Every platform that made consent",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "tangible"
						}),
						" converted it into trust, and trust into retention."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-vermillion/30 bg-vermillion/5 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.22em] text-vermillion",
						children: "The opportunity for Vedantu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-2xl leading-tight tracking-tight",
						children: "Be the first Indian EdTech that treats a parent's consent like a product feature — not a footer link."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-7 grid grid-cols-2 gap-4",
				children: [
					{
						c: "Apple · App Tracking Transparency",
						p: "Just-in-time, single purpose, plain-language.",
						l: "Trust > opt-in rate. ~75% opt-out and Apple still won."
					},
					{
						c: "Google · Family Link",
						p: "Parent as first-class account holder for minors.",
						l: "Give parents a real dashboard, not a legal PDF."
					},
					{
						c: "GDPR / DMA cookie banners",
						p: "Bundled 'Accept all' with dark patterns.",
						l: "Cautionary tale — enforcement caught up. Don't repeat."
					},
					{
						c: "WhatsApp · 2021 policy",
						p: "Confusing forced consent → mass exodus to Signal.",
						l: "Consent copy is a growth surface. Get it wrong once."
					},
					{
						c: "Spotify · privacy settings",
						p: "Granular but buried five taps deep.",
						l: "Discoverability matters as much as granularity."
					},
					{
						c: "Uber · Privacy Center",
						p: "Single hub for data, deletion, export.",
						l: "Users trust products that show their own homework."
					}
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-hairline bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.18em] text-vermillion",
							children: p.c
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm font-medium leading-snug",
							children: p.p
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 text-[13px] leading-snug text-muted-foreground",
							children: ["→ ", p.l]
						})
					]
				}, p.c))
			})]
		})
	});
}
function SlideSolution() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
		index: 5,
		eyebrow: "Proposed solution",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-12 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-[56px] leading-[0.98] tracking-tight",
						children: [
							"Three layers.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"One promise: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-vermillion",
								children: "no data without a reason."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted-foreground",
						children: "An age-aware consent architecture that unbundles purposes, elevates parents, and makes every data right one tap away."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid grid-cols-2 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								k: "Data minimisation",
								v: "Collect only what a purpose demands"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								k: "Purpose binding",
								v: "Toggle-level control per use"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								k: "Verifiable consent",
								v: "DigiLocker + OTP + payment signal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								k: "Full user rights",
								v: "Access · export · erase · withdraw"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-8 grid grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillar, {
						n: "01",
						t: "Parent Vault",
						d: "A parent-owned account that supervises up to 4 child profiles. Parents verify once via Aadhaar-linked OTP + DigiLocker signal (fallback: payment-instrument match).",
						bullets: [
							"Verifiable parental consent (DPDP §9)",
							"Portable across siblings",
							"Auto-expires at learner's 18th birthday"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillar, {
						n: "02",
						t: "Purpose-Bound Consent",
						d: "Nine data purposes, each with a plain-language card, a preview of what it enables, and a live toggle. Nothing is pre-selected except what the service literally cannot run without.",
						bullets: [
							"Essential · Personalisation · Recommendations",
							"Marketing · WhatsApp · Session recording",
							"Analytics · Third-party SDKs · Research"
						],
						highlight: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillar, {
						n: "03",
						t: "Rights Console",
						d: "A single 'Your Data' screen inside Settings. Download in JSON+PDF, delete within 30 days, or pause specific purposes with one tap. Every state change emits a receipt.",
						bullets: [
							"Self-serve export & erase",
							"Consent receipts (audit-grade)",
							"Withdrawal is as easy as giving consent"
						]
					})
				]
			})]
		})
	});
}
function Chip({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-hairline bg-card p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-[0.18em] text-vermillion",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-[12px] leading-snug text-ink",
			children: v
		})]
	});
}
function Pillar({ n, t, d, bullets, highlight }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex h-full flex-col rounded-2xl border p-6 ${highlight ? "border-vermillion bg-ink text-paper" : "border-hairline bg-card"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `font-mono text-[11px] tracking-widest ${highlight ? "text-vermillion" : "text-vermillion"}`,
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 font-display text-3xl leading-tight tracking-tight",
				children: t
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-3 text-[13px] leading-relaxed ${highlight ? "text-white/75" : "text-muted-foreground"}`,
				children: d
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-auto space-y-1.5 pt-5",
				children: bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2 text-[12px] leading-snug",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full ${highlight ? "bg-vermillion" : "bg-ink"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
				}, b))
			})
		]
	});
}
function SlideUX() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
		index: 6,
		eyebrow: "UX · prototype preview",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-12 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-4 flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-[52px] leading-[0.98] tracking-tight",
					children: ["Built for the moment a parent is about to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "italic text-vermillion",
						children: "tap Skip."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm leading-relaxed text-muted-foreground",
					children: "Progressive disclosure, plain language (English + Hindi), and micro-copy that treats the parent as an adult. No dark patterns, no pre-ticked boxes, no scare tactics."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-hairline bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.2em] text-vermillion",
							children: "Design principles"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-[13px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Just-in-time · never at signup wall" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "One purpose per card · one decision at a time" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Symmetry of choice · \"Accept\" ≡ \"Not now\"" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Preview the value before asking" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/prototype",
							className: "mt-5 inline-flex items-center gap-2 text-sm font-medium text-vermillion",
							children: ["Open live prototype ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-8 grid grid-cols-3 gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneMini, {
						title: "Age gate",
						subtitle: "Fair, unmissable, once",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-[10px] font-display italic text-slate",
							children: "How old is the learner?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 space-y-1.5",
							children: [
								"Under 13",
								"13 – 17",
								"18 or older"
							].map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `rounded border px-2 py-1.5 text-[9px] ${i === 1 ? "border-vermillion bg-vermillion/10 text-ink" : "border-hairline"}`,
								children: o
							}, o))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneMini, {
						title: "Ask a parent",
						subtitle: "Handoff, not a wall",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-[10px] font-display italic text-slate",
								children: "We need a grown-up"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 rounded bg-muted p-2 text-[9px] leading-snug",
								children: "We'll SMS a secure link to your parent's phone. It expires in 15 min."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 rounded border border-hairline px-2 py-1.5 text-[9px]",
								children: "+91 · Parent's mobile"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1.5 rounded bg-ink px-2 py-1.5 text-center text-[9px] text-paper",
								children: "Send secure link"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMini, {
						title: "Purpose toggles",
						subtitle: "One card at a time",
						children: [
							{
								l: "Personalise lessons",
								on: true,
								req: true
							},
							{
								l: "WhatsApp reminders",
								on: false
							},
							{
								l: "Marketing calls",
								on: false
							},
							{
								l: "Share with partners",
								on: false
							}
						].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center justify-between rounded border border-hairline px-2 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[9px] font-medium",
								children: r.l
							}), r.req && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[7px] uppercase tracking-widest text-muted-foreground",
								children: "Required"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-3 w-6 rounded-full p-0.5 ${r.on ? "bg-vermillion" : "bg-muted"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-2 w-2 rounded-full bg-white transition-all ${r.on ? "translate-x-3" : ""}` })
							})]
						}, r.l))
					})
				]
			})]
		})
	});
}
function PhoneMini({ title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-[190px] rounded-[28px] border border-ink/15 bg-white p-2 shadow-[0_20px_40px_-20px_rgba(24,24,40,0.25)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-[22px] bg-paper p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-2 h-1 w-10 rounded-full bg-ink/15" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[9px] uppercase tracking-widest text-vermillion",
						children: "Vedantu"
					}),
					children
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-medium",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] text-muted-foreground",
				children: subtitle
			})]
		})]
	});
}
function SlideMetrics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
		index: 7,
		eyebrow: "Metrics · success criteria",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-12 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-5 flex flex-col justify-between rounded-2xl border border-hairline bg-ink p-7 text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.22em] text-vermillion",
						children: "North Star"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-[52px] leading-[0.98] tracking-tight",
						children: "Valid Consent Coverage"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 font-mono text-xs text-white/60",
						children: "VCC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-[13px] leading-relaxed text-white/75",
						children: [
							"Share of monthly active learners whose current data use is backed by a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "valid, fresh, purpose-matched"
							}),
							" consent — and, for minors, a verified parent."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-white/10 p-3 font-mono text-[11px] leading-relaxed text-white",
					children: [
						"VCC = (MAUs with valid consent for every active purpose) / (Total MAUs)",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Target: 92% by Q4 · Floor: 85% · Failure: <80%"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid grid-cols-3 gap-3 text-[11px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white/50",
							children: "Leading"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white",
							children: "Consent-flow completion"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white/50",
							children: "Lagging"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white",
							children: "Renewal · complaint volume"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white/50",
							children: "Cadence"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white",
							children: "Daily · segment-weekly"
						})] })
					]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-7 grid grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						tier: "Supporting",
						k: "Purpose-level opt-in rate",
						f: "Opt-ins ÷ eligible prompts (per purpose)",
						w: "Tells us which purposes users actually want — informs data-minimisation calls."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						tier: "Supporting",
						k: "Parent verification success rate",
						f: "Verified parents ÷ minor signups reaching parent step",
						w: "Guards against a broken handoff killing minor onboarding."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						tier: "Supporting",
						k: "Time-to-first-class after consent",
						f: "Median seconds from consent submit → class join",
						w: "Consent should not slow learning down. Ever."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						tier: "Guardrail",
						k: "Signup → 1st-class conversion",
						f: "Conversion delta vs. control cohort",
						w: "Red-line at −3pp. Anything worse pauses rollout.",
						danger: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						tier: "Guardrail",
						k: "Support tickets citing 'consent' / 'privacy'",
						f: "Weekly count, normalised per 10k MAU",
						w: "Rising tickets = confusing UX or dark-pattern smell. Investigate within 48h.",
						danger: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						tier: "Guardrail",
						k: "Consent-withdrawal rate",
						f: "Toggles switched off ÷ toggles ever on",
						w: "Healthy is 2–5%. A spike signals a trust event we must diagnose.",
						danger: true
					})
				]
			})]
		})
	});
}
function MetricCard({ tier, k, f, w, danger }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-hairline bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `text-[10px] uppercase tracking-[0.2em] ${danger ? "text-vermillion" : "text-slate"}`,
				children: tier
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-[15px] font-medium leading-snug",
				children: k
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 rounded bg-muted px-2 py-1 font-mono text-[10px] text-ink",
				children: f
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-[12px] leading-snug text-muted-foreground",
				children: w
			})
		]
	});
}
var trend = [
	{
		w: "W1",
		vcc: 71,
		target: 92
	},
	{
		w: "W2",
		vcc: 74,
		target: 92
	},
	{
		w: "W3",
		vcc: 79,
		target: 92
	},
	{
		w: "W4",
		vcc: 83,
		target: 92
	},
	{
		w: "W5",
		vcc: 86,
		target: 92
	},
	{
		w: "W6",
		vcc: 88,
		target: 92
	},
	{
		w: "W7",
		vcc: 90,
		target: 92
	},
	{
		w: "W8",
		vcc: 91,
		target: 92
	}
];
var funnel = [
	{
		s: "Age gate seen",
		v: 96
	},
	{
		s: "Parent SMS sent",
		v: 71
	},
	{
		s: "Parent verified",
		v: 58
	},
	{
		s: "Purposes seen",
		v: 57
	},
	{
		s: "Consent submitted",
		v: 55
	}
];
var segments = [
	{
		name: "Android",
		value: 68
	},
	{
		name: "iOS",
		value: 22
	},
	{
		name: "Web",
		value: 10
	}
];
var purposes = [
	{
		p: "Essential",
		on: 100
	},
	{
		p: "Personalise",
		on: 82
	},
	{
		p: "Recommend",
		on: 64
	},
	{
		p: "WhatsApp",
		on: 41
	},
	{
		p: "Marketing",
		on: 12
	},
	{
		p: "3P SDKs",
		on: 9
	}
];
var COLORS = [
	"oklch(0.62 0.19 32)",
	"oklch(0.185 0.02 260)",
	"oklch(0.52 0.09 155)"
];
function SlideDashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
		index: 8,
		eyebrow: "Dashboard · consent health",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-12 gap-3",
			style: { gridTemplateRows: "minmax(0, 108px) minmax(0, 240px) minmax(0, 1fr)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-12 grid grid-cols-4 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiTile, {
							k: "Valid Consent Coverage",
							v: "91.4%",
							delta: "+3.1 wk/wk",
							tone: "up",
							note: "vs. 92% target"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiTile, {
							k: "Parent verification rate",
							v: "82%",
							delta: "+1.4 wk/wk",
							tone: "up",
							note: "minor cohort"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiTile, {
							k: "Time-to-1st-class",
							v: "47s",
							delta: "−6s wk/wk",
							tone: "up",
							note: "p50, post-consent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiTile, {
							k: "Withdrawal rate",
							v: "3.1%",
							delta: "+0.4 wk/wk",
							tone: "warn",
							note: "watch bucket"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-7 rounded-xl border border-hairline bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHead, {
						k: "VCC — weekly trend",
						note: "% MAU · rollout weeks 1–8"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-full min-h-[110px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: trend,
							margin: {
								top: 5,
								right: 10,
								left: -20,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "v",
									x1: "0",
									x2: "0",
									y1: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "oklch(0.62 0.19 32)",
										stopOpacity: .35
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "oklch(0.62 0.19 32)",
										stopOpacity: 0
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "2 4",
									stroke: "oklch(0.88 0.01 85)",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "w",
									tick: { fontSize: 10 },
									stroke: "var(--slate)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									domain: [60, 100],
									tick: { fontSize: 10 },
									stroke: "var(--slate)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									background: "var(--ink)",
									border: "none",
									color: "var(--paper)",
									fontSize: 11,
									borderRadius: 8
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "target",
									stroke: "var(--slate)",
									strokeDasharray: "4 4",
									fill: "transparent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "vcc",
									stroke: "var(--vermillion)",
									strokeWidth: 2,
									fill: "url(#v)"
								})
							]
						}) })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-5 rounded-xl border border-hairline bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHead, {
						k: "Consent funnel",
						note: "cohort · minors · last 7d"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 space-y-1.5",
						children: [funnel.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-[11px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.s }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-muted-foreground",
								children: [f.v, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 h-2 rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 rounded-full",
								style: {
									width: `${f.v}%`,
									background: i === 2 || i === 3 ? "var(--vermillion)" : "var(--ink)"
								}
							})
						})] }, f.s)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 rounded-md bg-vermillion/8 p-2 text-[11px] text-vermillion",
							children: "Alert · 18pt drop at \"Parent verified\" — investigate SMS deliverability."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-4 rounded-xl border border-hairline bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHead, {
						k: "Purpose opt-in mix",
						note: "% of eligible users"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-full min-h-[110px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: purposes,
							layout: "vertical",
							margin: {
								top: 0,
								right: 10,
								left: 10,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									type: "number",
									domain: [0, 100],
									hide: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									type: "category",
									dataKey: "p",
									tick: { fontSize: 10 },
									width: 70,
									stroke: "var(--slate)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "on",
									fill: "var(--vermillion)",
									radius: [
										0,
										4,
										4,
										0
									]
								})
							]
						}) })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-4 rounded-xl border border-hairline bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHead, {
						k: "Platform split",
						note: "active users w/ valid consent"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex h-full min-h-[110px] items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
							data: segments,
							dataKey: "value",
							innerRadius: 40,
							outerRadius: 65,
							paddingAngle: 2,
							children: segments.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: COLORS[i] }, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
							background: "var(--ink)",
							border: "none",
							color: "var(--paper)",
							fontSize: 11,
							borderRadius: 8
						} })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ml-2 space-y-1 text-[11px]",
							children: segments.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-2 w-2 rounded-sm",
										style: { background: COLORS[i] }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-16",
										children: s.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted-foreground",
										children: [s.value, "%"]
									})
								]
							}, s.name))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-4 rounded-xl border border-hairline bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHead, {
						k: "Withdrawals · daily",
						note: "rolling 14d · per 10k MAU"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-full min-h-[110px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: Array.from({ length: 14 }, (_, i) => ({
								d: i + 1,
								v: [
									22,
									20,
									19,
									24,
									21,
									18,
									20,
									23,
									26,
									29,
									34,
									31,
									30,
									33
								][i]
							})),
							margin: {
								top: 5,
								right: 5,
								left: -25,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "2 4",
									stroke: "oklch(0.88 0.01 85)",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "d",
									tick: { fontSize: 10 },
									stroke: "var(--slate)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									tick: { fontSize: 10 },
									stroke: "var(--slate)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									background: "var(--ink)",
									border: "none",
									color: "var(--paper)",
									fontSize: 11,
									borderRadius: 8
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "v",
									stroke: "var(--vermillion)",
									strokeWidth: 2,
									dot: false
								})
							]
						}) })
					})]
				})
			]
		})
	});
}
function KpiTile({ k, v, delta, tone, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-hairline bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
				children: k
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-baseline justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-[38px] leading-none tracking-tight",
					children: v
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `text-[11px] ${tone === "up" ? "text-moss" : "text-ochre"}`,
					children: delta
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-[11px] text-muted-foreground",
				children: note
			})
		]
	});
}
function ChartHead({ k, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[12px] font-medium",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
			children: note
		})]
	});
}
function SlideDiagnostic() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
		index: 9,
		eyebrow: "Diagnostic thinking",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-12 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-4 flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-[0.2em] text-vermillion",
						children: "Scenario"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-[46px] leading-[1.02] tracking-tight",
						children: "VCC drops 15% in week 3 — with no release."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: "\"No release\" is a hypothesis, not a fact. First step is to falsify it: pull deploy log, config-flag history, SDK version diffs, vendor status. Then structure the search."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-hairline bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.2em] text-vermillion",
						children: "Playbook (first 24h)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-3 list-decimal space-y-1.5 pl-4 text-[13px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Segment the drop: platform × geo × cohort × age." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Diff pipelines + configs vs. last known-good." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ping vendor status pages (SMS, DigiLocker, CDN)." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sample 30 support tickets qualitatively." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Compute counterfactual — did MAU move, or just numerator?" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "If unclear at 24h, invoke privacy incident protocol." })
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-hairline bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
						children: "Hypothesis tree · prior probability shown"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-4 gap-4",
						children: [
							{
								c: "Measurement",
								p: "20%",
								items: [
									"Consent-event pipeline dropping rows",
									"Timezone bug at rollover",
									"New client not emitting receipts"
								]
							},
							{
								c: "Supply — external",
								p: "35%",
								items: [
									"SMS/OTP vendor outage → parent verification failing",
									"DigiLocker rate-limits triggered",
									"Play Store forced update rolled out silently"
								]
							},
							{
								c: "Demand — user side",
								p: "30%",
								items: [
									"Board-exam cohort churn (seasonal, ~ May–July)",
									"Media event about EdTech privacy → withdrawals",
									"Competitor launched aggressive campaign"
								]
							},
							{
								c: "Product",
								p: "15%",
								items: [
									"Config change flipped a default toggle",
									"Silent SDK update expanded data scope",
									"A/B experiment on adjacent flow leaked"
								]
							}
						].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-hairline p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[13px] font-medium",
									children: b.c
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[11px] text-vermillion",
									children: b.p
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2 text-[12px] leading-snug",
								children: b.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i })]
								}, i))
							})]
						}, b.c))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-3 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextCard, {
							t: "If measurement",
							a: "Freeze dashboard, replay events, publish correction — no user-facing action."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextCard, {
							t: "If external",
							a: "Fail over SMS vendor, degrade gracefully to email-link, extend consent grace window.",
							highlight: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextCard, {
							t: "If product / config",
							a: "Roll back within 30 min. Post-mortem within 7 days. Notify DPO."
						})
					]
				})]
			})]
		})
	});
}
function NextCard({ t, a, highlight }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl border p-4 ${highlight ? "border-vermillion bg-vermillion/5" : "border-hairline bg-card"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-[10px] uppercase tracking-[0.2em] text-vermillion",
			children: ["Next step · ", t]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-[13px] leading-snug",
			children: a
		})]
	});
}
function SlideRollout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
		index: 10,
		eyebrow: "Rollout · validation",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-12 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-[46px] leading-[1.02] tracking-tight",
						children: [
							"Ship in ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-vermillion",
								children: "phases"
							}),
							". Rollback in ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-vermillion",
								children: "minutes"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: "Consent copy for minors is not fully A/B-testable — we cannot legally give \"worse\" consent to a control group. So we split the world into what we can experiment on, and what we can only observe."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpCard, {
								t: "Safe to A/B test",
								d: "Micro-copy, screen order, illustration presence, plain-language layer, notification cadence.",
								good: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpCard, {
								t: "Not A/B-testable",
								d: "Whether consent is asked. Whether parent verification is required. Data scope of a purpose."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpCard, {
								t: "Method for the untestable",
								d: "Pre-post analysis, synthetic control (unaffected geo), qualitative research with 20 parents per phase.",
								good: true
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-hairline bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
						children: "Phased rollout · gates advance only on green"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 space-y-3",
						children: [
							{
								p: "Week 0",
								n: "Dogfood",
								d: "Vedantu employees + kids · full flow",
								ga: "Zero P0/P1 defects"
							},
							{
								p: "Week 1",
								n: "Internal QA + legal",
								d: "DPO + external counsel sign-off",
								ga: "DPIA published"
							},
							{
								p: "Week 2",
								n: "1% shadow",
								d: "New signups only · Bengaluru + Hyd.",
								ga: "VCC ≥ baseline − 2pp"
							},
							{
								p: "Week 3",
								n: "5% ramp",
								d: "Add existing minor cohort · re-consent",
								ga: "Complaint rate flat"
							},
							{
								p: "Week 5",
								n: "20% ramp",
								d: "All new signups nationwide",
								ga: "Time-to-class delta ≤ +5s"
							},
							{
								p: "Week 8",
								n: "100% GA",
								d: "Migrate legacy accounts · 30-day window",
								ga: "VCC ≥ 85%"
							}
						].map((ph, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-12 items-center gap-3 rounded-lg border border-hairline bg-background p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-2 flex items-center gap-2 font-mono text-[11px] text-vermillion",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-6 w-6 items-center justify-center rounded-full text-[10px] text-paper",
										style: { background: "var(--ink)" },
										children: i + 1
									}), ph.p]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3 text-[14px] font-medium",
									children: ph.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-4 text-[12px] text-muted-foreground",
									children: ph.d
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-3 text-right text-[11px] uppercase tracking-[0.14em] text-moss",
									children: ["Gate · ", ph.ga]
								})
							]
						}, ph.p))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-3 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
							k: "Rollback SLA",
							v: "< 15 min",
							note: "single feature-flag"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
							k: "Kill switch",
							v: "Server-side",
							note: "no app update needed"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
							k: "Consent grace",
							v: "30 days",
							note: "for legacy migration"
						})
					]
				})]
			})]
		})
	});
}
function ExpCard({ t, d, good }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-hairline bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [good ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-moss" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5 text-vermillion" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[12px] font-medium",
				children: t
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1.5 text-[12px] leading-snug text-muted-foreground",
			children: d
		})]
	});
}
function MiniStat({ k, v, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-hairline bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
				children: k
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 font-display text-2xl tracking-tight",
				children: v
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] text-muted-foreground",
				children: note
			})
		]
	});
}
function SlideRisks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
		index: 11,
		eyebrow: "Risks · trade-offs · vision",
		bg: "ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-12 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-5 flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-[0.22em] text-vermillion",
						children: "Trade-off we accept"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-display text-[54px] leading-[0.98] tracking-tight text-white",
						children: ["A slower signup, in exchange for a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-vermillion",
							children: "longer relationship."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-[14px] leading-relaxed text-white/70",
						children: "Every EdTech in India will eventually be forced here by regulation. The only question is whether we arrive as a defendant or as the category's trust benchmark."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-white/15 bg-white/5 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-[0.22em] text-vermillion",
						children: "12-month vision"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-[14px] text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Parent Vault becomes the account primitive." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Consent receipts exportable to DigiLocker." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· \"Vedantu Trust\" — a public transparency report, quarterly." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· A privacy score in-app, visible to every parent." })
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-7 grid grid-cols-2 gap-3",
				children: [
					{
						c: "Business",
						r: "Adding a parent step could shave 2–4pp off minor signup conversion.",
						m: "Reserve 30-day grace + one-tap resume; measure LTV, not just conversion."
					},
					{
						c: "Engineering",
						r: "Consent must propagate to ~40 SDKs and back-end services in real time.",
						m: "Central Consent Service (CCS) with pub-sub; hard fail-closed on unknown state."
					},
					{
						c: "Privacy dark-pattern risk",
						r: "Product/growth teams pressure to pre-tick, pre-nudge, pre-select.",
						m: "Design review + external counsel gate; auditable receipts make cheating expensive."
					},
					{
						c: "Child safety",
						r: "Bad actor could pose as parent via SMS spoofing.",
						m: "Payment-instrument match + device pairing + anomaly detection on verification."
					},
					{
						c: "Accessibility & literacy",
						r: "Plain-language copy still assumes reading fluency.",
						m: "Voice-over consent (Hindi/English), 11 Indic language rollout by Q4."
					},
					{
						c: "International expansion",
						r: "GDPR / COPPA thresholds differ from DPDP §9.",
						m: "Locale-aware purpose registry; consent artefacts portable to EU / US standards."
					}
				].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-white/15 bg-white/5 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.2em] text-vermillion",
							children: r.c
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-[13px] font-medium leading-snug text-white",
							children: r.r
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 text-[12px] leading-snug text-white/70",
							children: ["→ ", r.m]
						})
					]
				}, r.c))
			})]
		})
	});
}
function DeckPage() {
	const [i, setI] = (0, import_react.useState)(0);
	const [printing, setPrinting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const h = (e) => {
			if (e.key === "ArrowRight" || e.key === " ") setI((v) => Math.min(SLIDES.length - 1, v + 1));
			if (e.key === "ArrowLeft") setI((v) => Math.max(0, v - 1));
		};
		window.addEventListener("keydown", h);
		return () => window.removeEventListener("keydown", h);
	}, []);
	(0, import_react.useEffect)(() => {
		document.title = `${String(i + 1).padStart(2, "0")} · ${SLIDES[i].label} — Consent, by design`;
	}, [i]);
	const [scale, setScale] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		const compute = () => {
			const w = window.innerWidth - 120;
			const h = window.innerHeight - 180;
			setScale(Math.min(w / 1280, h / 720, 1));
		};
		compute();
		window.addEventListener("resize", compute);
		return () => window.removeEventListener("resize", compute);
	}, []);
	if (printing) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-white",
		children: SLIDES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "print-page",
			children: s.render()
		}, s.id))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[oklch(0.94_0.005_85)] text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "no-print sticky top-0 z-20 flex items-center justify-between border-b border-hairline bg-background/80 px-6 py-3 backdrop-blur",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono tabular-nums text-muted-foreground",
							children: [
								String(i + 1).padStart(2, "0"),
								" / ",
								String(SLIDES.length).padStart(2, "0")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-muted-foreground md:inline",
							children: SLIDES[i].label
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setPrinting(true);
								setTimeout(() => {
									window.print();
									setPrinting(false);
								}, 200);
							},
							className: "inline-flex items-center gap-1.5 rounded-md border border-hairline bg-background px-3 py-1.5 text-xs hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "h-3.5 w-3.5" }), " Print / PDF"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/prototype",
							className: "inline-flex items-center gap-1.5 rounded-md bg-ink px-3 py-1.5 text-xs text-paper hover:opacity-90",
							children: ["Prototype ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center px-10 pt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						width: 1280 * scale,
						height: 720 * scale
					},
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							transform: `scale(${scale})`,
							transformOrigin: "top left",
							width: 1280,
							height: 720
						},
						className: "rounded-xl shadow-[0_40px_80px_-30px_rgba(24,24,40,0.35)] ring-1 ring-hairline",
						children: SLIDES[i].render()
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print mt-6 flex items-center justify-center gap-4 pb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setI(Math.max(0, i - 1)),
						className: "inline-flex items-center gap-1 rounded-md border border-hairline bg-background px-3 py-1.5 text-xs disabled:opacity-40",
						disabled: i === 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Prev"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1",
						children: SLIDES.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setI(idx),
							className: `h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-vermillion" : "w-2 bg-hairline hover:bg-ink/30"}`,
							"aria-label": s.label
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setI(Math.min(SLIDES.length - 1, i + 1)),
						className: "inline-flex items-center gap-1 rounded-md border border-hairline bg-background px-3 py-1.5 text-xs disabled:opacity-40",
						disabled: i === SLIDES.length - 1,
						children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print pb-10 text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 inline h-3 w-3" }), " Tip · press ⌘/Ctrl + P for a pixel-perfect PDF export"]
			})
		]
	});
}
//#endregion
export { DeckPage as component };
