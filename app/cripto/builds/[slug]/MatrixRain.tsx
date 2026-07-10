"use client";

import { useEffect, useRef } from "react";

/* Digital "matrix" rain on a canvas, sized to its container.
   - Kept calm (~16fps, translucent trails) so it reads as texture, not noise.
   - Honors prefers-reduced-motion: paints one static frame and stops.
   - Purely decorative → aria-hidden. */

type MatrixRainProps = {
  /** glyph colour (defaults to the palette lime) */
  color?: string;
  className?: string;
};

const GLYPHS =
  "ｱｲｳｴｵｶｷｸｹｺﾊﾋﾌﾍﾎ0123456789ABCDEF<>/\\=+*".split("");
const FONT_SIZE = 14;
const DARK = "#0b0a07"; // panel background (matches the matrix panel)

export default function MatrixRain({
  color = "#b7e51f",
  className = "",
}: MatrixRainProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let drops: number[] = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.ceil(width / FONT_SIZE);
      // start columns staggered above the top so the rain eases in
      drops = Array.from({ length: cols }, () => Math.random() * -30);
      ctx.fillStyle = DARK;
      ctx.fillRect(0, 0, width, height);
    };

    const draw = () => {
      // translucent wash = fading trails
      ctx.fillStyle = "rgba(11,10,7,0.10)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = color;
      ctx.font = `${FONT_SIZE}px ui-monospace, monospace`;
      for (let i = 0; i < drops.length; i++) {
        const ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const y = drops[i] * FONT_SIZE;
        ctx.fillText(ch, i * FONT_SIZE, y);
        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };

    resize();

    if (reduce) {
      draw();
      return;
    }

    let raf = 0;
    let last = 0;
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (t - last < 60) return; // ~16fps
      last = t;
      draw();
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [color]);

  return <canvas ref={ref} aria-hidden className={className} />;
}
