"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animates "40K+", "1,200+", "12 sec" style values by counting the
 * leading number up from 0 once the element scrolls into view, then
 * re-appending whatever suffix/formatting followed the digits.
 */
export function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value.replace(/[0-9,]/g, (c) => (c === "," ? "" : "0")));

  useEffect(() => {
    if (!inView) return;

    const match = value.match(/^([\d,]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, numPart, suffix] = match;
    const target = parseInt(numPart.replace(/,/g, ""), 10);
    const hasComma = numPart.includes(",");
    const duration = 1100;
    const start = performance.now();

    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${hasComma ? current.toLocaleString() : current}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}
