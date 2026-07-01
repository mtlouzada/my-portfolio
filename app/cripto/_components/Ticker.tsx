import type { CSSProperties } from "react";

type TickerProps = {
  items: string[];
  reverse?: boolean;
  duration?: number; // seconds
  className?: string;
  sep?: string;
};

/** Infinite CSS marquee. Items are duplicated so the loop is seamless. */
export default function Ticker({
  items,
  reverse = false,
  duration = 26,
  className = "",
  sep = "✦",
}: TickerProps) {
  const style = { ["--dur" as string]: `${duration}s` } as CSSProperties;
  const row = (
    <div className="ticker-track" aria-hidden style={style}>
      {[...items, ...items].map((item, i) => (
        <span key={i} className="inline-flex items-center">
          <span className="c-mono text-[13px] tracking-[0.14em] px-6">
            {item}
          </span>
          <span className="opacity-50 text-[11px]">{sep}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`ticker ${reverse ? "ticker-rev" : ""} ${className}`}>
      {row}
    </div>
  );
}
