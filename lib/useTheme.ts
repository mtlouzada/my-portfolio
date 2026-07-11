"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

/* Theme toggle with a matrix-style reveal (View Transitions API).
   The new theme expands from the toggle button as a smooth circle, and every
   grid cell the frontier has just engulfed flashes a random glyph in the
   incoming theme's accent color — like the new theme being decoded at the
   wavefront. Browsers without the API, and users with prefers-reduced-motion,
   get the plain instant toggle. */

const BLOCK = 32; // px — glyph grid cell size
const DURATION = 1100; // ms — total reveal time
const GLYPHS = "ｱｲｳｴｵｶｷｸｹｺﾊﾋﾌﾍﾎ0123456789<>/*+=";
const GLYPH_LIFE = 380; // ms — how long each frontier glyph lives
const GLYPH_DENSITY = 0.55; // chance a frontier cell shows a glyph

/* Matrix-style glyph wave: as the pixel frontier expands, grid cells it has
   just engulfed flash a random character in the theme accent color and fade —
   like the new theme being decoded. Runs on a fixed canvas that lives inside
   the (clipped) new view-transition snapshot, so glyphs only ever appear on
   the revealed side. */
let activeGlyphCanvas: HTMLCanvasElement | null = null;

function spawnGlyphWave(x: number, y: number, R: number) {
  activeGlyphCanvas?.remove();

  const w = window.innerWidth;
  const h = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const canvas = document.createElement("canvas");
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.cssText =
    "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999";
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);
  activeGlyphCanvas = canvas;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    canvas.remove();
    return;
  }
  ctx.scale(dpr, dpr);
  ctx.font = `600 ${Math.round(BLOCK * 0.62)}px ui-monospace, monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  // Read the accent AFTER the theme flips so glyphs match the incoming theme.
  const accent =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim() || "#5b5bd6";

  type Glyph = { cx: number; cy: number; ch: string; born: number };
  const seen = new Set<string>();
  let glyphs: Glyph[] = [];
  const start = performance.now();

  const frame = (now: number) => {
    const p = Math.min(1, (now - start) / DURATION);
    const r = (1 - Math.pow(1 - p, 3)) * R;
    const inner = Math.max(0, r - BLOCK * 1.6);

    // spawn glyphs in the ring band (inner, r] — walk columns, few cells each
    if (p < 1) {
      const gx0 = Math.floor((x - r) / BLOCK);
      const gx1 = Math.ceil((x + r) / BLOCK);
      for (let gx = gx0; gx <= gx1; gx++) {
        const cx = gx * BLOCK + BLOCK / 2;
        if (cx < -BLOCK || cx > w + BLOCK) continue;
        const dx = Math.abs(cx - x);
        if (dx > r) continue;
        const yOuter = Math.sqrt(r * r - dx * dx);
        const yInner = dx >= inner ? 0 : Math.sqrt(inner * inner - dx * dx);
        for (const sign of [1, -1]) {
          const gy0 = Math.floor((y + sign * yInner) / BLOCK);
          const gy1 = Math.ceil((y + sign * yOuter) / BLOCK);
          const lo = Math.min(gy0, gy1);
          const hi = Math.max(gy0, gy1);
          for (let gy = lo; gy <= hi; gy++) {
            const key = `${gx},${gy}`;
            if (seen.has(key)) continue;
            const cy = gy * BLOCK + BLOCK / 2;
            if (cy < -BLOCK || cy > h + BLOCK) continue;
            const d = Math.hypot(cx - x, cy - y);
            if (d > r || d <= inner) continue;
            seen.add(key);
            if (Math.random() < GLYPH_DENSITY) {
              glyphs.push({
                cx,
                cy,
                ch: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
                born: now,
              });
            }
          }
        }
      }
    }

    ctx.clearRect(0, 0, w, h);
    glyphs = glyphs.filter((g) => now - g.born < GLYPH_LIFE);
    ctx.fillStyle = accent;
    for (const g of glyphs) {
      ctx.globalAlpha = 1 - (now - g.born) / GLYPH_LIFE;
      ctx.fillText(g.ch, g.cx, g.cy);
    }
    ctx.globalAlpha = 1;

    if (p < 1 || glyphs.length > 0) {
      requestAnimationFrame(frame);
    } else {
      canvas.remove();
      if (activeGlyphCanvas === canvas) activeGlyphCanvas = null;
    }
  };
  requestAnimationFrame(frame);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  // Sync with whatever the inline layout script already applied.
  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") ??
      "light") as Theme;
    setTheme(current);
  }, []);

  const applyTheme = (next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("ml-theme", next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  };

  /** `origin` = viewport point the reveal expands from (the button center). */
  const toggle = (origin?: { x: number; y: number }) => {
    // Read the source of truth from the DOM so a stale state can't flip wrong.
    const current =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    const next: Theme = current === "dark" ? "light" : "dark";

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!doc.startViewTransition || reduce) {
      applyTheme(next);
      return;
    }

    const x = origin?.x ?? window.innerWidth - 40;
    const y = origin?.y ?? 30;
    // Farthest viewport corner, padded so the circle always covers the screen.
    const cover = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    const R = cover + BLOCK;

    const transition = doc.startViewTransition(() => {
      // Force the re-render inside the callback so the "new" snapshot is final.
      flushSync(() => applyTheme(next));
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${R}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: DURATION,
            // easeOutCubic — the exact curve the glyph wave uses, so the
            // characters ride the clip frontier instead of drifting off it
            easing: "cubic-bezier(0.33, 1, 0.68, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
        spawnGlyphWave(x, y, R);
      })
      .catch(() => {
        /* transition skipped (e.g. rapid toggling) — theme is applied anyway */
      });
  };

  return { theme, toggle };
}
