"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "./motion";

const features = [
  {
    title: "Talk it through",
    desc: "Live video and audio for the whole team, docked to the side so it never covers the board. Screen share when you need it.",
    color: "var(--primary)",
    fg: "white",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16 10l6-3v10l-6-3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Sketch anything",
    desc: "An infinite canvas for fast, rough thinking — shapes, arrows, sticky notes and freehand drawing, built for keyboard and stylus alike.",
    color: "var(--marker-sky)",
    fg: "white",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 20l3-1 11-11-2-2L5 17l-1 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI that keeps up",
    desc: "Describe what you mean and AU Board turns it into a diagram in seconds — fully editable, just like anything you'd draw yourself.",
    color: "var(--accent)",
    fg: "var(--accent-foreground)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="product" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl">One room. Three things happening at once.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No tab-switching between your call and your notes app. Everything you need to think
            through a problem lives in the same window.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-2xl border border-border p-8 transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)]"
              style={{ ["--card-color" as string]: f.color }}
            >
              <div
                className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                style={{ background: f.color, color: f.fg }}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
