"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

/**
 * CardGlow — a mouse-tracking dynamic glow wrapper for cards.
 *
 * Non-destructive: wraps existing card markup without changing it.
 * On mousemove over the card, a radial accent glow follows the cursor;
 * on leave it fades out. Uses --primary (emerald) to stay on-brand.
 *
 * Usage: <CardGlow className="…existing card classes…">{children}</CardGlow>
 */
export function CardGlow({
  children,
  className,
  /** Glow radius in px. */
  radius = 220,
}: {
  children: ReactNode;
  className?: string;
  radius?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--glow-x", `${x}px`);
    el.style.setProperty("--glow-y", `${y}px`);
    el.style.setProperty("--glow-opacity", "1");
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--glow-opacity", "0");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("relative isolate", className)}
      style={{
        // Defaults so the ::before glow has a stable starting state.
        ["--glow-x" as string]: "50%",
        ["--glow-y" as string]: "50%",
        ["--glow-opacity" as string]: "0",
        ["--glow-radius" as string]: `${radius}px`,
      }}
    >
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-[var(--glow-opacity)] transition-opacity duration-300"
        style={{
          background: `radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y), color-mix(in oklch, var(--primary) 18%, transparent), transparent 70%)`,
        }}
      />
    </div>
  );
}
