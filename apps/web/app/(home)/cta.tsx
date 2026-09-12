"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "./motion";

export function Cta() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="animate-gradient rounded-3xl px-8 py-16 text-center text-white sm:px-16 sm:py-20"
          style={{
            backgroundImage:
              "linear-gradient(120deg, var(--primary) 0%, color-mix(in oklch, var(--primary) 40%, var(--marker-sky) 60%) 35%, color-mix(in oklch, var(--accent) 70%, var(--marker-pink) 30%) 100%)",
          }}
        >
          <h2 className="font-display mx-auto max-w-2xl text-4xl sm:text-5xl">
            Stop screen-sharing a blank canvas.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Open a room, start talking, and let the board keep up with you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-105"
            >
              Start free
            </a>
            <a
              href="#"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
            >
              Talk to sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
