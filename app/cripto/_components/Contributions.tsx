"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";
import { contributions } from "../_data";
import { useLanguage } from "@/lib/useLanguage";
import { criptoDict } from "../_i18n";

const fontClass: Record<string, string> = {
  display: "c-display",
  serif: "c-serif text-[clamp(24px,4vw,42px)]",
  mono: "c-mono font-semibold uppercase tracking-tight",
};

export default function Contributions() {
  const { lang } = useLanguage();
  const { builds } = criptoDict[lang];

  return (
    <section id="builds" className="scroll-mt-24 border-b-2 border-[var(--c-ink)]">
      <div className="max-w-[1160px] mx-auto px-5 py-20">
        <Reveal className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="c-label mb-3">{builds.label}</p>
            <h2 className="c-display text-[clamp(30px,5vw,58px)]">
              {builds.title}
            </h2>
          </div>
          <span className="c-mono text-[11px] text-[var(--c-ink-soft)] hidden sm:block">
            {builds.hoverHint}
          </span>
        </Reveal>

        <div className="border-t-2 border-[var(--c-ink)]">
          {contributions.map((c) => (
            <Reveal key={c.title}>
              <Link
                href={`/cripto/builds/${c.slug}`}
                className="row-link group flex items-center gap-4 md:gap-8 py-5 md:py-6 px-2 md:px-4 border-b-2 border-[var(--c-ink)]"
                style={
                  {
                    ["--row-accent" as string]: `var(${c.accent})`,
                    ["--row-fg" as string]:
                      c.accent === "--c-lime"
                        ? "var(--c-on-bright)"
                        : "var(--c-white)",
                  } as CSSProperties
                }
              >
                <span className="c-mono text-[11px] w-7 shrink-0 group-hover:text-[var(--row-fg)] transition-colors">
                  {c.index}
                </span>
                <span
                  className={`flex-1 min-w-0 text-[clamp(22px,4vw,42px)] leading-none group-hover:text-[var(--row-fg)] transition-colors ${fontClass[c.font]}`}
                >
                  {c.title}
                </span>
                <span className="c-mono text-[10px] tracking-[0.1em] uppercase text-right text-[var(--c-ink-soft)] group-hover:text-[var(--row-fg)] transition-colors hidden sm:block">
                  {builds.roles[c.role]}
                  <br />
                  {c.meta}
                </span>
                <span className="row-arrow c-mono text-lg group-hover:text-[var(--row-fg)] transition-colors">
                  ↗
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
