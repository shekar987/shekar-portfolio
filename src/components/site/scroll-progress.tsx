"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgress — a 2px emerald bar pinned to the very top of the viewport
 * that fills as the reader scrolls. Decorative; aria-hidden.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.4,
  });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-[oklch(0.76_0.13_190)] to-primary"
    />
  );
}
