import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Bell, a as Sparkles, b as ArrowLeft, d as Info, f as House, g as Check, h as ChevronRight, i as Trash2, l as MessageCircle, m as Download, n as Wifi, o as Signal, p as FileText, r as User, s as ShieldCheck, u as Lock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prototype-BUz0edXr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PURPOSES = [
	{
		id: "essential",
		title: "Run the classroom",
		desc: "Account, class attendance, homework, doubt-solving.",
		why: "The service cannot function without this.",
		required: true,
		defaultOn: true,
		category: "Essential"
	},
	{
		id: "personalise",
		title: "Personalise lessons",
		desc: "Adapt difficulty, remember weak topics, suggest revision.",
		why: "Uses your child's test scores and time-on-task only.",
		defaultOn: true,
		category: "Learning"
	},
	{
		id: "recommend",
		title: "Recommend new courses",
		desc: "In-app suggestions based on grade and progress.",
		why: "Purely in-app. Nothing shared with third parties.",
		defaultOn: false,
		category: "Learning"
	},
	{
		id: "recording",
		title: "Session recordings",
		desc: "Save live-class recordings for later revision.",
		why: "Stored 90 days. Only you and your teacher can view.",
		defaultOn: true,
		category: "Learning"
	},
	{
		id: "whatsapp",
		title: "WhatsApp class reminders",
		desc: "Get class links and homework nudges on WhatsApp.",
		why: "One number per family. You can pause anytime.",
		defaultOn: false,
		category: "Communication"
	},
	{
		id: "marketing",
		title: "Marketing calls & SMS",
		desc: "Occasional offers and new-course launches.",
		why: "Never more than 2 per month. Never to the learner.",
		defaultOn: false,
		category: "Growth"
	},
	{
		id: "analytics",
		title: "Product analytics",
		desc: "Anonymised usage data to improve the app.",
		why: "No name, phone, or class content — just crash reports and clicks.",
		defaultOn: true,
		category: "Growth"
	},
	{
		id: "sdks",
		title: "Third-party SDKs",
		desc: "Ads, retargeting, and social-login libraries.",
		why: "Off by default. Turning on shares device ID with partners.",
		defaultOn: false,
		category: "Growth"
	},
	{
		id: "research",
		title: "Academic research",
		desc: "Anonymised patterns shared with education researchers.",
		why: "Opt-in only. Never contains identifiable data.",
		defaultOn: false,
		category: "Growth"
	}
];
function PrototypePage() {
	const [step, setStep] = (0, import_react.useState)("splash");
	console.log("[PrototypePage] Rendering step:", step);
	(0, import_react.useEffect)(() => {
		console.log("[PrototypePage] Hydrated successfully on the client!");
	}, []);
	const [history, setHistory] = (0, import_react.useState)([]);
	const [purposes, setPurposes] = (0, import_react.useState)(Object.fromEntries(PURPOSES.map((p) => [p.id, p.defaultOn])));
	const [reviewIdx, setReviewIdx] = (0, import_react.useState)(0);
	const go = (s) => {
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
	const optedIn = (0, import_react.useMemo)(() => Object.values(purposes).filter(Boolean).length, [purposes]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-[oklch(0.94_0.005_85)] text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto grid max-w-6xl grid-cols-12 gap-6 md:gap-10 px-3 py-6 md:px-6 md:py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "col-span-12 md:col-span-8 md:col-start-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
					step,
					go,
					back,
					purposes,
					setPurposes,
					reviewIdx,
					setReviewIdx,
					optedIn
				}) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "col-span-12 md:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Narrator, {
					step,
					optedIn
				})
			})]
		})
	});
}
function Phone({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-[380px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative rounded-[40px] md:rounded-[52px] border border-ink/20 bg-ink p-2 md:p-3 shadow-[0_30px_60px_-15px_rgba(24,24,40,0.3)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[32px] md:rounded-[42px] bg-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-6 pt-3 text-[10px] md:text-[11px] text-ink select-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono tabular-nums",
							children: "9:41"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-ink/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, { className: "h-3 w-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "h-3 w-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-1 rounded-sm border border-ink/40 px-1 text-[9px]",
									children: "92"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1 h-4 md:h-5 w-20 md:w-24 -translate-x-1/2 rounded-full bg-ink" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[600px] md:h-[700px] overflow-y-auto overscroll-contain px-4 md:px-6 pb-6 md:pb-8 pt-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
						children
					})
				]
			})
		})
	});
}
function Screen({ step, go, back, purposes, setPurposes, reviewIdx, setReviewIdx, optedIn }) {
	const setP = (id, v) => setPurposes({
		...purposes,
		[id]: v
	});
	switch (step) {
		case "splash": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 md:min-h-[640px] flex-1 flex-col items-center justify-between py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-ink text-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl italic",
								children: "V"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 font-display text-4xl leading-none tracking-tight",
							children: "Vedantu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-[13px] text-muted-foreground",
							children: "Learning, with your permission."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
						onClick: () => {
							console.log("[PrototypePage] Clicked Get Started!");
							go("age");
						},
						children: "Get started"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-center text-[11px] text-muted-foreground",
						children: "By continuing you'll see exactly what we ask for, and why."
					})]
				})
			]
		});
		case "age": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			back,
			title: "Before we begin",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: "Who is the learner?" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "DPDP requires we handle a minor's data differently. Your answer sets the rules — nothing else." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-2.5",
					children: [
						{
							l: "Under 13",
							d: "Full parent-managed account",
							to: "askParent"
						},
						{
							l: "13 – 17",
							d: "Parent verifies, learner uses the app",
							to: "askParent"
						},
						{
							l: "18 or older",
							d: "Learner manages their own consent",
							to: "purposes"
						}
					].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => go(o.to),
						className: "group flex w-full items-center justify-between rounded-xl border border-hairline bg-card p-4 text-left transition-all hover:border-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[15px] font-medium",
							children: o.l
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[12px] text-muted-foreground",
							children: o.d
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" })]
					}, o.l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TrustPill, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), " This choice is stored, but never shared with third parties."] })
			]
		});
		case "askParent": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			back,
			title: "Ask a parent",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-vermillion/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-7 w-7 text-vermillion" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: "We need a grown-up." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "We'll send a secure link to your parent's mobile. It expires in 15 minutes and only they can approve." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mt-6 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
					children: "Parent's mobile number"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center gap-2 rounded-xl border border-hairline bg-card px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[13px] text-muted-foreground",
						children: "+91"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[15px] tracking-wide",
						children: "98•••••210"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center gap-2 text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-3 w-3" }), " We never store this without their consent."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
						onClick: () => go("otp"),
						children: "Send secure link"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
						onClick: back,
						children: "I don't have a parent nearby"
					})]
				})
			]
		});
		case "otp": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			back,
			title: "Verify parent",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: "Enter the 6-digit code" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "Sent to +91 98••••••210 · valid for 15 min" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-between gap-2",
					children: [
						"2",
						"9",
						"0",
						"4",
						"1",
						"7"
					].map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-14 flex-1 items-center justify-center rounded-lg border border-ink bg-card font-display text-2xl",
						children: n
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between text-[12px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Didn't get it?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-vermillion",
						children: "Resend in 42s"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
						onClick: () => go("digilocker"),
						children: "Verify"
					})
				})
			]
		});
		case "digilocker": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			back,
			title: "One more signal",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: "Confirm you're the parent." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "We match one extra signal so no one else can consent on your child's behalf. Pick whichever is easier." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }),
							t: "Continue with DigiLocker",
							d: "Government-issued · recommended",
							onClick: () => go("learnerCard"),
							highlight: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" }),
							t: "Match saved payment method",
							d: "If you've paid on Vedantu before",
							onClick: () => go("learnerCard")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }),
							t: "Verify via video call (15 min)",
							d: "For families without either of the above",
							onClick: () => go("learnerCard")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TrustPill, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), " Vedantu never stores your Aadhaar. Only a yes/no verification token."] })
			]
		});
		case "learnerCard": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			back,
			title: "About the learner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: "Meet Aarav." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "Confirm what we'll use to run the classroom. Everything else is optional and you'll approve it, one purpose at a time." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-2xl border border-hairline bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv2, {
							k: "Name",
							v: "Aarav Menon"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv2, {
							k: "Age",
							v: "14 years"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv2, {
							k: "Class · Board",
							v: "Class 9 · CBSE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv2, {
							k: "Preferred language",
							v: "English + Hindi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv2, {
							k: "Data retention",
							v: "Until 30 days after account closes",
							last: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-start gap-2 rounded-lg bg-muted p-3 text-[12px] leading-snug text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-vermillion" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"This data is used ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "only" }),
						" to run classes, mark attendance, and grade homework. Nothing here is shared."
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
						onClick: () => go("purposes"),
						children: "Looks right · continue"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
						onClick: back,
						children: "Edit details"
					})]
				})
			]
		});
		case "purposes": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			back,
			title: "Your permissions",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: "Nine choices. All plain-language." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "Nothing outside \"Essential\" is required. Toggle anything, anytime. We show one purpose deep-dive next." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-2",
					children: PURPOSES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurposeRow, {
						p,
						on: purposes[p.id],
						onToggle: (v) => setP(p.id, v)
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 rounded-lg border border-hairline bg-card p-3 text-[12px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "You've allowed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono",
							children: [
								optedIn,
								" / ",
								PURPOSES.length,
								" purposes"
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
						onClick: () => go("reviewOne"),
						children: "See one in detail"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
						onClick: () => go("receipt"),
						children: "Save & continue"
					})]
				})
			]
		});
		case "reviewOne": {
			const p = PURPOSES[reviewIdx];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				back,
				title: `Purpose ${reviewIdx + 1} of ${PURPOSES.length}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block h-1.5 w-1.5 rounded-full",
							style: { background: "var(--vermillion)" }
						}), p.category]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: p.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: p.desc }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-xl border border-hairline bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.18em] text-vermillion",
							children: "Why we ask"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-[13px] leading-snug",
							children: p.why
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 rounded-xl border border-hairline bg-card p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] font-medium",
								children: p.required ? "Required to use the app" : "Your choice"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-muted-foreground",
								children: p.required ? "Cannot be turned off · service depends on it" : "Turn on / off anytime from Settings"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								on: purposes[p.id],
								disabled: p.required,
								onChange: (v) => setP(p.id, v)
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setReviewIdx(Math.max(0, reviewIdx - 1)),
							className: "flex-1 rounded-xl border border-hairline bg-card py-3 text-[13px]",
							disabled: reviewIdx === 0,
							children: "Previous"
						}), reviewIdx < PURPOSES.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setReviewIdx(reviewIdx + 1),
							className: "flex-1 rounded-xl bg-ink py-3 text-[13px] text-paper",
							children: "Next purpose"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go("receipt"),
							className: "flex-1 rounded-xl bg-vermillion py-3 text-[13px] text-paper",
							children: "Save all"
						})]
					})
				]
			});
		}
		case "receipt": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			back,
			title: "Consent receipt",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-moss/15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-6 w-6 text-moss" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: "All set, Priya." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "We saved a signed receipt of what you approved. You'll get a copy on email and can change anything, anytime, from Settings › Your data." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-2xl border border-hairline bg-card p-4 font-mono text-[11px] leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-vermillion",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RECEIPT · VDNT-2026-07-02" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "v1.0" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 text-muted-foreground",
						children: [
							"Learner · Aarav M. (14)",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Verified by · Priya M. (DigiLocker)",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Purposes ON · ",
							optedIn,
							" / ",
							PURPOSES.length,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Purposes OFF · ",
							PURPOSES.length - optedIn,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Retention · 30 days post-closure",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Withdraw · Settings › Your data"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
						onClick: () => go("home"),
						children: "Enter Vedantu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
						onClick: () => go("manageData"),
						children: "Manage my data now"
					})]
				})
			]
		});
		case "home": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 md:min-h-[640px] flex flex-col justify-between h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[12px] text-muted-foreground",
						children: "Good evening,"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl",
						children: "Aarav"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go("settings"),
						className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-2xl border border-hairline bg-ink p-5 text-paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.18em] text-vermillion",
							children: "Next class · 6:00 PM"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-display text-2xl leading-tight",
							children: "Trigonometry — Chapter 9"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-[12px] text-white/60",
							children: "with Ravi Sir · 60 min · recording enabled"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "mt-4 w-full rounded-lg bg-vermillion py-2.5 text-[13px] font-medium text-paper",
							children: "Join class"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						title: "Homework",
						v: "2 pending"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						title: "Streak",
						v: "14 days"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 rounded-2xl border border-hairline bg-vermillion/8 p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 h-4 w-4 text-vermillion" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[13px] font-medium",
									children: "Your privacy is up to date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] leading-snug text-muted-foreground",
									children: [
										optedIn,
										" of ",
										PURPOSES.length,
										" data purposes are on. You can review or withdraw anytime."
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go("manageData"),
								className: "text-[11px] font-medium text-vermillion",
								children: "Manage"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-around border-t border-hairline pt-4 text-[10px] uppercase tracking-widest text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavIcon, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-4 w-4" }),
							label: "Home",
							active: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavIcon, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }),
							label: "Learn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavIcon, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }),
							label: "Doubts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => go("settings"),
							className: "flex flex-col items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Me" })]
						})
					]
				})
			]
		});
		case "settings": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			back: () => go("home"),
			title: "Settings",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: "Settings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }),
						t: "Your data & consent",
						d: "Review, export, or delete anything we hold.",
						onClick: () => go("manageData"),
						accent: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }),
						t: "Notifications",
						d: "WhatsApp, SMS, email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }),
						t: "Learner profile",
						d: "Class, board, language"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" }),
						t: "Login & security",
						d: "OTP, devices"
					})
				]
			})]
		});
		case "manageData": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			back: () => go("settings"),
			title: "Your data",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: "Your data." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "Everything Vedantu holds about Aarav — in one place." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-2",
					children: PURPOSES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl border border-hairline bg-card p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] font-medium",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-muted-foreground",
								children: purposes[p.id] ? "Currently on" : "Currently off"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							on: purposes[p.id],
							disabled: p.required,
							onChange: (v) => setP(p.id, v)
						})]
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }),
						t: "Export all my data",
						d: "JSON + PDF · ready in ~10 min",
						onClick: () => go("exportRunning")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-vermillion" }),
						t: "Delete my account & data",
						d: "Erased within 30 days · irreversible",
						onClick: () => go("deleteConfirm"),
						danger: true
					})]
				})
			]
		});
		case "exportRunning": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			back: () => go("manageData"),
			title: "Exporting…",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col items-center py-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-16 w-16 items-center justify-center rounded-full bg-vermillion/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-6 w-6 text-vermillion" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full border-2 border-vermillion/40" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: "Packing up your data…" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "We'll email a secure download link to priya@example.com." })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
					onClick: () => go("exportDone"),
					children: "Simulate complete →"
				})
			})]
		});
		case "exportDone": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			back: () => go("manageData"),
			title: "Export ready",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-moss/15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-6 w-6 text-moss" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: "Your data is ready." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "One JSON archive (machine-readable) and one PDF (human-readable). The link expires in 48 hours." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 rounded-xl border border-hairline bg-card p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-vermillion" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] font-medium",
								children: "vedantu-aarav-2026-07-02.zip"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-muted-foreground",
								children: "2.4 MB · signed · SHA-256 verified"
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
						onClick: () => go("home"),
						children: "Back to home"
					})
				})
			]
		});
		case "deleteConfirm": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			back: () => go("manageData"),
			title: "Delete data",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-vermillion/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-6 w-6 text-vermillion" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: "Delete Aarav's account?" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { children: "We'll erase his profile, class history, recordings, and every purpose you approved. This cannot be undone." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-2",
					children: [
						"Learner profile & progress",
						"Class recordings & homework",
						"All consent records (kept 30 days for audit)",
						"Anonymised analytics (aggregate only, cannot be tied back)"
					].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2 rounded-lg bg-card px-3 py-2 text-[12px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 font-mono text-vermillion",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l })]
					}, l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go("manageData"),
						className: "rounded-xl border border-hairline bg-card py-3 text-[13px]",
						children: "Keep account"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go("deleteDone"),
						className: "rounded-xl bg-vermillion py-3 text-[13px] text-paper",
						children: "Delete"
					})]
				})
			]
		});
		case "deleteDone": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			back: () => go("home"),
			title: "Scheduled",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col items-center py-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-moss/15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-7 w-7 text-moss" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H1, { children: "Deletion scheduled." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sub, { children: [
							"We'll fully erase Aarav's data by ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "text-ink",
								children: "1 Aug 2026"
							}),
							". You can cancel from your email up to that date."
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 rounded-xl border border-hairline bg-card p-4 text-[12px] leading-relaxed",
					children: [
						"A signed erasure receipt has been sent to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "priya@example.com" }),
						". Under DPDP §11, you have the right to a copy of this record at any time."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
						onClick: () => go("splash"),
						children: "Start over"
					})
				})
			]
		});
	}
}
var NOTES = {
	splash: {
		t: "Signals trust in 4 seconds.",
		d: "The tagline sets the emotional promise before a single field appears.",
		pm: "No 'Skip' — but no wall either. The user still moves forward in one tap."
	},
	age: {
		t: "DPDP §9 begins here.",
		d: "Age gate is short, honest, and states why we're asking.",
		pm: "Under 18 branches. Adult flow keeps its own agency."
	},
	askParent: {
		t: "Handoff, not a wall.",
		d: "The learner is not blocked — a parent is invited.",
		pm: "Micro-copy admits fallibility: 'no parent nearby' is a valid exit."
	},
	otp: {
		t: "Standard, but scoped.",
		d: "OTP is one signal — never the only signal.",
		pm: "Timer + resend prevents lock-out anxiety."
	},
	digilocker: {
		t: "Three verification paths.",
		d: "DigiLocker · payment match · video. Meets every income tier.",
		pm: "We never store Aadhaar — only a yes/no token. This is the audit-friendly path."
	},
	learnerCard: {
		t: "Data minimisation, made visible.",
		d: "Parent sees exactly what runs the classroom — nothing more.",
		pm: "Retention window shown up-front, not buried."
	},
	purposes: {
		t: "9 purposes · none pre-selected beyond essentials.",
		d: "Symmetry of choice is enforced. No dark patterns.",
		pm: "Symmetry of choice is enforced. Essential purposes are separated from optional features."
	},
	reviewOne: {
		t: "Progressive disclosure.",
		d: "Every purpose has a 'why we ask' card — plain language, no jargon.",
		pm: "Ships as a swipeable modal in production for one-thumb operation."
	},
	receipt: {
		t: "Consent as an artefact.",
		d: "A signed, exportable receipt turns compliance into evidence of trust.",
		pm: "Same object powers our audit log — one source of truth."
	},
	home: {
		t: "Trust surface, always visible.",
		d: "A privacy tile on Home keeps consent alive, not out-of-sight.",
		pm: "This tile is the entry point for withdrawal — where dark patterns usually hide."
	},
	settings: {
		t: "'Your data' is the first row.",
		d: "Placement signals status, not shame.",
		pm: "Above notifications, above profile — because DPDP §11 says so."
	},
	manageData: {
		t: "Every purpose is one tap to reverse.",
		d: "Withdrawal is exactly as easy as giving consent. That's the DPDP §6(4) test.",
		pm: "Export and delete live on the same screen — no scavenger hunt."
	},
	exportRunning: {
		t: "Async, but honest.",
		d: "The user knows an email will arrive, and roughly when.",
		pm: "SLA: 72h max under DPDP."
	},
	exportDone: {
		t: "Both formats, both audiences.",
		d: "JSON for portability, PDF for humans. Signed for integrity.",
		pm: "Link expires — reduces credential-stuffing blast radius."
	},
	deleteConfirm: {
		t: "Full transparency on what leaves.",
		d: "And what stays — the 30-day audit copy — is disclosed.",
		pm: "Two-column button layout so 'Keep' is never smaller than 'Delete'."
	},
	deleteDone: {
		t: "Right to erasure, honoured.",
		d: "With a receipt, so the user can prove it later.",
		pm: "Grace window (30d) protects against regretted deletes and legal holds."
	}
};
function Narrator({ step, optedIn }) {
	const n = NOTES[step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sticky top-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-[0.22em] text-vermillion",
				children: "Speaker notes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 font-display text-2xl leading-tight tracking-tight text-balance",
				children: n.t
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[13px] leading-relaxed text-muted-foreground",
				children: n.d
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-lg border border-hairline bg-card p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-[0.18em] text-vermillion",
					children: "PM note"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-[12px] leading-snug",
					children: n.pm
				})]
			})
		]
	});
}
function Frame({ back, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-0 md:min-h-[640px] flex flex-col justify-between h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: back,
					className: "flex h-9 w-9 items-center justify-center rounded-full bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-9 w-9" })
			]
		}), children] })
	});
}
function H1({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mt-4 font-display text-[30px] leading-[1.05] tracking-tight text-balance",
		children
	});
}
function Sub({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 text-[13px] leading-relaxed text-muted-foreground text-pretty",
		children
	});
}
function PrimaryBtn({ children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: "w-full rounded-xl bg-ink py-3.5 text-[14px] font-medium text-paper transition-transform active:scale-[0.99]",
		children
	});
}
function GhostBtn({ children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: "mt-2 w-full rounded-xl py-3 text-[13px] text-muted-foreground hover:text-ink",
		children
	});
}
function TrustPill({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6 flex items-center gap-2 rounded-full bg-muted px-3 py-2 text-[11px] text-muted-foreground",
		children
	});
}
function OptionRow({ icon, t, d, onClick, highlight }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: `flex w-full items-center gap-3 rounded-xl border p-3.5 text-left transition-all ${highlight ? "border-vermillion bg-vermillion/5" : "border-hairline bg-card hover:border-ink"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${highlight ? "bg-vermillion text-paper" : "bg-muted"}`,
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[13px] font-medium",
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] text-muted-foreground",
					children: d
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-muted-foreground" })
		]
	});
}
function Kv2({ k, v, last }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center justify-between py-2 text-[13px] ${last ? "" : "border-b border-hairline"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v })]
	});
}
function PurposeRow({ p, on, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3 rounded-xl border border-hairline bg-card p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[13px] font-medium",
					children: p.title
				}), p.required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-muted px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-muted-foreground",
					children: "Required"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 text-[11px] leading-snug text-muted-foreground",
				children: p.desc
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
			on,
			disabled: p.required,
			onChange: onToggle
		})]
	});
}
function Toggle({ on, onChange, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => !disabled && onChange(!on),
		disabled,
		"aria-pressed": on,
		className: `relative mt-1 inline-flex h-[22px] w-[38px] shrink-0 items-center rounded-full p-[2px] transition-colors duration-200 ${on ? "bg-vermillion" : "bg-slate/25"} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-[18px] w-[18px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-transform duration-200 ${on ? "translate-x-[16px]" : "translate-x-0"}` })
	});
}
function Tile({ title, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-hairline bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 font-display text-2xl tracking-tight",
			children: v
		})]
	});
}
function NavIcon({ icon, label, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex flex-col items-center gap-1 ${active ? "text-vermillion" : ""}`,
		children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
function SettingRow({ icon, t, d, onClick, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: `flex w-full items-center gap-3 rounded-xl border p-3.5 text-left ${accent ? "border-vermillion bg-vermillion/5" : "border-hairline bg-card"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `flex h-9 w-9 items-center justify-center rounded-lg ${accent ? "bg-vermillion text-paper" : "bg-muted"}`,
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[13px] font-medium",
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] text-muted-foreground",
					children: d
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-muted-foreground" })
		]
	});
}
function ActionBtn({ icon, t, d, onClick, danger }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: `flex w-full items-center gap-3 rounded-xl border p-3.5 text-left ${danger ? "border-vermillion/40" : "border-hairline"} bg-card`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-9 w-9 items-center justify-center rounded-lg bg-muted",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `text-[13px] font-medium ${danger ? "text-vermillion" : ""}`,
				children: t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] text-muted-foreground",
				children: d
			})]
		})]
	});
}
//#endregion
export { PrototypePage as component };
