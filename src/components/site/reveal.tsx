"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "section";
};

/**
 * Scroll-triggered reveal. No-JS safe:
 * - Server renders children visible.
 * - The `.has-js` class (added by an inline script in layout) hides
 *   [data-reveal] via CSS before paint, so Framer Motion can animate in
 *   without a flash. Without JS, content stays visible.
 * - prefers-reduced-motion: CSS forces [data-reveal] visible.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      data-reveal=""
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
