"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport  } from "./motion";
import { AnimatedCounter } from "./animated-counter";

const stats = [
  { value: "40K+", label: "rooms opened this year", color: "var(--primary)" },
  { value: "250K+", label: "diagrams sketched by AI", color: "var(--accent)" },
  { value: "12 sec", label: "average time to first sketch", color: "var(--marker-sky)" },
  { value: "1,200+", label: "teams onboarded", color: "var(--marker-pink)" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <h2 className="font-display text-4xl sm:text-5xl">The board, in numbers.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            AU Board has been quietly turning meetings into diagrams for teams who&apos;d rather
            build than take notes.
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_14px_34px_-20px_rgba(0,0,0,0.3)]"
              style={{ borderTop: `3px solid ${s.color}` }}
            >
              <p className="font-display text-4xl">
                <AnimatedCounter value={s.value} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
