"use client";

import { useEffect, useRef } from "react";

/**
 * AmbientParticles — a lightweight, performant decorative background.
 *
 * - Fixed, full-viewport, z-[-10], pointer-events-none, opacity 0.4.
 * - Slow-moving glowing micro-particles in a subtle blue/violet hue.
 * - Subtle magnetic pull toward the mouse cursor.
 * - Guards: caps DPR, scales particle count by viewport, pauses when tab
 *   hidden, renders a static field when prefers-reduced-motion.
 * - No-JS safe: with JS disabled nothing renders; the existing site is
 *   unchanged because all content lives above this layer.
 *
 * No external 3D libraries. Pure Canvas2D + rAF.
 */

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number; // blue ~225, violet ~270
  alpha: number;
};

const BLUE_VIOLET_HUES = [225, 240, 260, 275];

export function AmbientParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let rafId = 0;
    let running = true;

    const mouse = { x: -9999, y: -9999, active: false };

    const buildParticles = () => {
      // Scale count by viewport area; cap for mobile perf.
      const area = width * height;
      const base = Math.min(90, Math.max(28, Math.floor(area / 22000)));
      const count = width < 640 ? Math.floor(base * 0.55) : base;
      const arr: Particle[] = [];
      for (let i = 0; i < count; i++) {
        arr.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: Math.random() * 1.8 + 0.6,
          hue:
            BLUE_VIOLET_HUES[
              Math.floor(Math.random() * BLUE_VIOLET_HUES.length)
            ],
          alpha: Math.random() * 0.5 + 0.25,
        });
      }
      particles = arr;
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        // Drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around viewport edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Magnetic pull toward cursor (very subtle)
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist2 = dx * dx + dy * dy;
          const radius = 180;
          if (dist2 < radius * radius) {
            const dist = Math.sqrt(dist2) || 1;
            const force = (1 - dist / radius) * 0.35;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Glow
        const glow = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.r * 6
        );
        glow.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${p.alpha})`);
        glow.addColorStop(1, `hsla(${p.hue}, 80%, 70%, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `hsla(${p.hue}, 90%, 80%, ${Math.min(
          p.alpha + 0.3,
          1
        )})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (running) rafId = requestAnimationFrame(draw);
    };

    const drawStatic = () => {
      // One frame only — for reduced-motion users.
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        const glow = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.r * 6
        );
        glow.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${p.alpha})`);
        glow.addColorStop(1, `hsla(${p.hue}, 80%, 70%, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!reducedMotion) {
        running = true;
        rafId = requestAnimationFrame(draw);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseout", onMouseLeave, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    if (reducedMotion) {
      drawStatic();
    } else {
      rafId = requestAnimationFrame(draw);
    }

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
        pointerEvents: "none",
        opacity: 0.4,
      }}
    />
  );
}
