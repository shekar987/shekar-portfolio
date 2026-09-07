"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

/**
 * CountUp — animates from 0 to `value` once the element scrolls into view.
 *
 * The final value is server-rendered so content is always present (no-JS
 * safe). The animation writes straight to the DOM text node via a ref — an
 * external-system update, so no React state churn per frame.
 * Respects prefers-reduced-motion (leaves the final value untouched).
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = numRef.current;
    if (!el || !inView || reduced) return;
    let raf = 0;
    const start = performance.now();
    const ms = duration * 1000;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      el.textContent = String(Math.round(ease(t) * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    el.textContent = "0";
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      <span ref={numRef} className="tabular-nums">
        {value}
      </span>
      {suffix}
    </span>
  );
}
