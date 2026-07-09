"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import CriptoNav from "../../_components/CriptoNav";
import CriptoFooter from "../../_components/CriptoFooter";
import { contributions, type BuildSlug } from "../../_data";
import { criptoDict } from "../../_i18n";
import { useLanguage } from "@/lib/useLanguage";

const fontClass: Record<string, string> = {
  display: "c-display",
  serif: "c-serif",
  mono: "c-mono font-semibold uppercase tracking-tight",
};

export default function BuildDetail({ slug }: { slug: BuildSlug }) {
  const { lang } = useLanguage();
  const b = criptoDict[lang].builds;
  const build = contributions.find((c) => c.slug === slug)!;
  const detail = b.details[slug];
  const accent = { color: `var(${build.accent})` } as CSSProperties;

  return (
    <>
      <CriptoNav />
      <main className="max-w-[1160px] mx-auto px-5 py-14 md:py-20">
        <Link
          href="/cripto#builds"
          className="c-mono text-[11px] tracking-[0.1em] uppercase hover:text-[var(--c-red)] transition-colors"
        >
          {b.backToBuilds}
        </Link>

        {/* header card with accent bar */}
        <div className="mt-8 border-2 border-[var(--c-ink)] shadow-[6px_6px_0_var(--c-ink)] overflow-hidden">
          <div
            className="h-2"
            style={{ background: `var(${build.accent})` } as CSSProperties}
          />
          <div className="p-6 md:p-10 bg-[var(--c-paper)]">
            <div className="flex items-center gap-4">
              <span className="c-mono text-[13px] text-[var(--c-ink-soft)]">
                {build.index}
              </span>
              <span className="c-mono text-[10px] tracking-[0.14em] uppercase text-[var(--c-ink-soft)]">
                {build.meta} · {b.roles[build.role]}
              </span>
            </div>
            <h1
              className={`mt-4 text-[clamp(40px,9vw,88px)] leading-[0.95] ${fontClass[build.font]}`}
            >
              {build.title}
            </h1>
          </div>
        </div>

        {/* body */}
        <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-10 md:gap-14 mt-12">
          <div>
            <p className="c-label mb-3">{b.overviewLabel}</p>
            <p className="c-mono text-[14px] leading-[1.8] text-[var(--c-ink-soft)] max-w-[620px]">
              {detail.overview}
            </p>

            <p className="c-label mb-4 mt-10">{b.contributionsLabel}</p>
            <ul className="flex flex-col gap-3 max-w-[620px]">
              {detail.points.map((p) => (
                <li
                  key={p}
                  className="c-mono text-[13px] flex items-start gap-3 border-b border-[var(--c-ink)]/15 pb-3 last:border-0"
                >
                  <span className="mt-[2px]" style={accent}>
                    ▸
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="c-label mb-3">{b.stackLabel}</p>
            <div className="flex flex-wrap gap-2.5">
              {build.stack.map((s) => (
                <span key={s} className="c-tag">
                  {s}
                </span>
              ))}
            </div>

            <a
              href={build.href}
              target="_blank"
              rel="noopener noreferrer"
              className="c-btn c-btn-red mt-8 w-full justify-center"
            >
              {b.visitSite}
            </a>
          </div>
        </div>
      </main>
      <CriptoFooter />
    </>
  );
}
