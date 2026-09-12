"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "./motion";

const steps = [
  { n: "1", title: "Open a room", desc: "Share one link. No installs, no accounts required for guests.", color: "var(--primary)" },
  { n: "2", title: "Talk through the idea", desc: "AU Board listens in the background while you and your team discuss.", color: "var(--marker-sky)" },
  { n: "3", title: "Watch it get sketched", desc: "Flows, architecture and wireframes appear on the canvas as you speak.", color: "var(--accent)" },
  { n: "4", title: "Edit together", desc: "Drag, redraw, comment or override anything the AI put down.", color: "var(--marker-pink)" },
  { n: "5", title: "Hand it off", desc: "Export as PNG or PDF, or leave a live link for async review.", color: "var(--marker-yellow)" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden border-y border-border bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl">From conversation to diagram, in one sitting.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Five steps, one browser tab, zero exported screenshots pasted into a doc afterward.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* animated progress line, desktop only */}
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-border lg:block">
            <motion.div
              className="h-full origin-left"
              style={{ background: "linear-gradient(90deg, var(--primary), var(--marker-sky), var(--accent), var(--marker-pink), var(--marker-yellow))" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          >
            {steps.map((s) => (
              <motion.div
                key={s.n}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.3)]"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full font-display text-sm text-white"
                  style={{ background: s.color }}
                >
                  {s.n}
                </span>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
