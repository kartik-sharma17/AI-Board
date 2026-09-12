"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "./motion";

const cases = [
  {
    title: "Product & design",
    desc: "Turn a feature discussion into a flow diagram or a rough wireframe without leaving the call, then hand it straight to engineering.",
    color: "var(--primary)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 20l3-1 11-11-2-2L5 17l-1 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Engineering",
    desc: "Whiteboard system architecture live during a design review, and let AU Board keep the diagram tidy while you talk through trade-offs.",
    color: "var(--marker-sky)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.5" cy="16.5" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Research & strategy",
    desc: "Map out a workshop, a customer journey or a decision tree as the conversation happens, instead of writing it up afterward.",
    color: "var(--accent)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Teaching & training",
    desc: "Explain a concept out loud and let the board illustrate it in real time, so remote students see the idea build, not a static slide.",
    color: "var(--marker-pink)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function UseCases() {
  return (
    <section id="solutions" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl">Built for the way your team already works.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Different teams use the same room for very different conversations.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {cases.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border p-8 lg:p-10"
            >
              <span
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-10 transition-transform duration-500 ease-out group-hover:scale-150"
                style={{ background: c.color }}
              />
              <span
                className="relative flex h-10 w-10 items-center justify-center rounded-lg text-white"
                style={{ background: c.color }}
              >
                {c.icon}
              </span>
              <h3 className="relative mt-5 text-xl font-semibold">{c.title}</h3>
              <p className="relative mt-3 leading-relaxed text-muted-foreground">{c.desc}</p>
              <a
                href="#"
                className="relative mt-5 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4"
                style={{ color: c.color }}
              >
                Learn more
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
