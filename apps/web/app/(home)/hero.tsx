"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "./motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 lg:pb-28 lg:pt-24">
      {/* decorative color field — three drifting blobs, one per accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -left-24 -top-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
        <div
          className="animate-blob animate-blob-delay-1 absolute -right-16 top-4 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "color-mix(in oklch, var(--accent) 35%, transparent)" }}
        />
        <div
          className="animate-blob animate-blob-delay-2 absolute left-1/3 top-64 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "color-mix(in oklch, var(--marker-sky) 40%, transparent)" }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <motion.h1 variants={fadeUp} className="font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl">
            Say it once.
            <br />
            Watch it get drawn.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Thinkspace puts your call and your canvas in the same room. Talk through an idea and the
            AI sketches it live — flows, diagrams, wireframes — so the meeting ends with something
            built, not just notes.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] hover:opacity-90"
            >
              Start free
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
              </svg>
              Watch the demo
            </a>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-4 text-xs text-muted-foreground">
            No install. No credit card. Just open a link.
          </motion.p>
        </div>

        {/* product mockup */}
        <motion.div variants={scaleIn} className="mt-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_12px_40px_-12px_rgba(90,60,220,0.3)]">
            {/* browser chrome */}
            <div className="flex items-center gap-3 border-b border-border bg-secondary/60 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--marker-pink)" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--marker-yellow)" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--marker-sky)" }} />
              </div>
              <div className="flex flex-1 justify-center">
                <div className="rounded-full border border-border bg-background px-4 py-1 text-xs text-muted-foreground">
                  auboard.app/r/onboarding-flow
                </div>
              </div>
            </div>

            {/* room header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-3 sm:px-6">
              <div>
                <p className="text-sm font-medium">Q3 onboarding flow</p>
                <p className="text-xs text-muted-foreground">4 people in this room</p>
              </div>
              <div className="flex items-center -space-x-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[11px] font-medium text-primary-foreground ring-2 ring-card">
                  MA
                </span>
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-medium text-white ring-2 ring-card"
                  style={{ background: "var(--marker-sky)" }}
                >
                  DV
                </span>
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-medium text-white ring-2 ring-card"
                  style={{ background: "var(--accent)" }}
                >
                  RS
                </span>
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-medium text-white ring-2 ring-card"
                  style={{ background: "var(--marker-pink)" }}
                >
                  +1
                </span>
              </div>
            </div>

            {/* canvas */}
            <div className="dotted-canvas relative h-[340px] sm:h-[420px] lg:h-[480px]">
              {/* sticky notes — gently bobbing */}
              <div
                className="animate-float absolute left-[6%] top-[14%] w-28 -rotate-3 rounded-md px-3 py-2 text-[11px] leading-snug text-foreground shadow-sm"
                style={{ background: "var(--marker-yellow)" }}
              >
                Rate limit on signup?
              </div>
              <div
                className="animate-float animate-float-delay absolute right-[8%] top-[10%] w-28 rotate-2 rounded-md px-3 py-2 text-[11px] leading-snug text-foreground shadow-sm"
                style={{ background: "var(--marker-sky)" }}
              >
                v2 launch — Sept
              </div>

              {/* connector lines */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 480" preserveAspectRatio="none" fill="none">
                <path className="sketch-path" d="M180 260 C 260 200, 300 200, 340 240" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                <path className="sketch-path" d="M420 250 C 470 210, 500 210, 540 245" stroke="var(--marker-sky)" strokeWidth="2" strokeLinecap="round" />
                <path className="sketch-path" d="M620 255 C 660 300, 660 320, 630 350" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
              </svg>

              {/* flow boxes */}
              <div className="absolute left-[10%] top-[46%] w-32 rounded-lg border border-border bg-background px-3 py-2.5 text-xs font-medium shadow-sm">
                Sign up
              </div>
              <div className="absolute left-[38%] top-[42%] w-32 rounded-lg border border-border bg-background px-3 py-2.5 text-xs font-medium shadow-sm">
                Verify email
              </div>

              <div
                className="absolute left-[63%] top-[44%] w-36 rounded-lg border-2 border-dashed bg-background px-3 py-2.5 text-xs font-medium shadow-sm"
                style={{ borderColor: "var(--accent)" }}
              >
                Onboarding
                <span
                  className="ai-badge animate-pulse-ring absolute -top-8 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium text-accent-foreground shadow-sm"
                  style={{ background: "var(--accent)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z" />
                  </svg>
                  Sketched by AI
                </span>
              </div>

              <div className="absolute left-[58%] top-[68%] w-32 rounded-lg border border-border bg-background px-3 py-2.5 text-xs font-medium shadow-sm">
                Dashboard
              </div>

              {/* live cursors */}
              <div className="cursor-tag c1 animate-float absolute left-[35%] top-[30%] flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--primary)" }} />
                <span className="rounded px-1.5 py-0.5 text-[10px] text-white" style={{ background: "var(--primary)" }}>
                  Maya
                </span>
              </div>
              <div className="cursor-tag c2 animate-float animate-float-delay absolute left-[70%] top-[62%] flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--accent)" }} />
                <span className="rounded px-1.5 py-0.5 text-[10px] text-accent-foreground" style={{ background: "var(--accent)" }}>
                  Devon
                </span>
              </div>

              {/* floating toolbar */}
              <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-xl border border-border bg-background px-1.5 py-1.5 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M4 20l3-1 11-11-2-2L5 17l-1 3Z" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ color: "var(--marker-sky)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="16.5" cy="16.5" r="3.5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ color: "var(--marker-pink)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ background: "color-mix(in oklch, var(--accent) 25%, transparent)", color: "var(--accent)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </span>
              </div>

              {/* mic/cam bar */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full px-3 py-2 text-[11px] text-white shadow-sm" style={{ background: "var(--primary)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="2" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M5 11a7 7 0 0 0 14 0M12 18v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M16 10l6-3v10l-6-3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                22:14
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
