"use client";

import { useEffect, useRef } from "react";

/* Pixel-waveform homage to the base.org hero: quantized pill bars mirrored
   around a center line in the Base palette (Base Blue #0000FF + pastels),
   with the amplitude swelling near the cursor. Plain canvas, no deps.
   Renders a single static frame under prefers-reduced-motion. */

const CELL = 10;
const GAP = 4;
const PITCH = CELL + GAP;

type Palette = {
  core: [string, string];
  mid: string;
  soft: [string, string];
  accent: [string, string, string];
};

const LIGHT: Palette = {
  core: ["#0000ff", "#3c8aff"],
  mid: "#8fa8ff",
  soft: ["#ccd6ff", "#dee1e7"],
  accent: ["#66c800", "#ffd12f", "#fea8cd"],
};

const DARK: Palette = {
  core: ["#3c8aff", "#5c73f2"],
  mid: "#8fa8ff",
  soft: ["#333f6e", "#2a3350"],
  accent: ["#66c800", "#ffd12f", "#fea8cd"],
};

// deterministic per-column randomness, stable across frames
const hash = (n: number) => {
  const s = Math.sin(n * 127.1) * 43758.5453;
  return s - Math.floor(s);
};

// smooth layered-sine noise in [0, 1]
const n01 = (x: number) => {
  const v =
    Math.sin(x) * 0.55 +
    Math.sin(x * 0.37 + 2.3) * 0.3 +
    Math.sin(x * 2.3 + 4.7) * 0.15;
  return 0.5 + 0.5 * v;
};

export default function BaseWave() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let mouseX: number | null = null;
    let boost: number[] = [];

    const pill = (x: number, y: number, pw: number, ph: number, c: string) => {
      ctx.fillStyle = c;
      ctx.beginPath();
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(x, y, pw, ph, CELL / 2);
      } else {
        ctx.rect(x, y, pw, ph);
      }
      ctx.fill();
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const pal =
        document.documentElement.getAttribute("data-ctheme") === "dark"
          ? DARK
          : LIGHT;
      const cy = h / 2;
      const cols = boost.length;
      const offsetX = (w - cols * PITCH) / 2;
      const maxAmp = h * 0.3;

      for (let i = 0; i < cols; i++) {
        const x = offsetX + i * PITCH + GAP / 2;
        const cx = x + CELL / 2;

        const target =
          mouseX === null
            ? 0
            : Math.exp(-((cx - mouseX) ** 2) / (2 * 80 ** 2));
        boost[i] += (target - boost[i]) * 0.12;

        // slow drifting envelope so bars cluster instead of filling the row
        const env = 0.22 + 0.78 * n01(i * 0.14 + t * 0.35);
        const amp = maxAmp * env * (1 + boost[i] * 1.3);
        const up =
          Math.max(1, Math.round((amp * (0.2 + 0.8 * n01(i * 0.5 + t * 1.1))) / PITCH)) *
            PITCH -
          GAP;
        const dn =
          Math.max(1, Math.round((amp * (0.2 + 0.8 * n01(i * 0.5 - 7.7 + t * 0.9))) / PITCH)) *
            PITCH -
          GAP;

        const r = hash(i);
        const color =
          r < 0.48
            ? pal.core[0]
            : r < 0.78
              ? pal.core[1]
              : r < 0.9
                ? pal.mid
                : pal.soft[Math.floor(hash(i + 9) * pal.soft.length)];
        pill(x, cy - up, CELL, up + dn, color);

        // detached accent "sparks" drifting past some bar tips
        const s = hash(i * 3 + 1);
        if (s < 0.22 && n01(i * 1.7 + t * 0.6) > 0.62) {
          const off = PITCH * (1 + (Math.floor(s * 18) % 2));
          const ay = s < 0.11 ? cy - up - off - CELL : cy + dn + off;
          pill(x, ay, CELL, CELL, pal.accent[Math.floor(hash(i + 5) * 3)]);
        }
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      boost = new Array(Math.max(1, Math.floor(w / PITCH))).fill(0);
      if (reduced) draw(7.3);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX - canvas.getBoundingClientRect().left;
    };
    const onLeave = () => {
      mouseX = null;
    };

    if (!reduced) {
      canvas.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerleave", onLeave);
      const loop = (ts: number) => {
        draw(ts / 1000);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" />;
}
