"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import type { CSSProperties } from "react";
import CriptoNav from "../../_components/CriptoNav";
import CriptoFooter from "../../_components/CriptoFooter";
import { contributions, type BuildSlug } from "../../_data";
import { criptoDict } from "../../_i18n";
import { useLanguage } from "@/lib/useLanguage";
import MatrixRain from "./MatrixRain";

// three.js is heavy — mount it lazily, client-only, and only on pages whose
// flavor asks for it (the #153 lesson: keep wallet/3D stacks off shared routes)
const NogglesRail3D = dynamic(() => import("./NogglesRail3D"), {
  ssr: false,
  loading: () => null,
});

const fontClass: Record<string, string> = {
  display: "c-display",
  serif: "c-serif",
  mono: "c-mono font-semibold uppercase tracking-tight",
};

// `learned` only exists on builds that define it (skatehive today).
type DetailCopy = {
  overview: string;
  points: string[];
  learned?: string[];
};

export default function BuildDetail({ slug }: { slug: BuildSlug }) {
  const { lang } = useLanguage();
  const b = criptoDict[lang].builds;
  const build = contributions.find((c) => c.slug === slug)!;
  const detail = b.details[slug] as DetailCopy;
  const flavor = build.flavor;
  // bright accents (lime/gold) wash out as small text on paper — render small
  // marks in ink and fill the PR badge instead (mirrors Contributions' fg rule)
  const bright = build.accent === "--c-lime" || build.accent === "--c-gold";
  const accent = { color: `var(${build.accent})` } as CSSProperties;
  const markStyle = bright ? undefined : accent;
  const badgeStyle = bright
    ? ({
        background: `var(${build.accent})`,
        borderColor: "var(--c-ink)",
        color: "var(--c-on-bright)",
      } as CSSProperties)
    : ({
        borderColor: `var(${build.accent})`,
        color: `var(${build.accent})`,
      } as CSSProperties);

  const metaLine = `${build.meta} · ${b.roles[build.role]}`;

  // subtle "Built on / Powered by" glyph line
  const poweredBy =
    flavor?.poweredBy === "hive"
      ? { glyph: "⬡", label: b.builtOnHive }
      : flavor?.poweredBy === "nouns"
        ? { glyph: "⌐◨-◨", label: b.builtOnNouns }
        : null;

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

          {flavor?.header === "matrix" ? (
            /* dark "matrix" header — SkateHive flavor */
            <div className="relative isolate p-6 md:p-10 min-h-[240px] md:min-h-[300px] flex flex-col justify-end bg-[#0b0a07]">
              <MatrixRain className="absolute inset-0 -z-10 h-full w-full opacity-55" />
              {/* gradient so the title stays readable over the rain */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b0a07] via-[#0b0a07]/70 to-transparent" />

              <div className="flex items-center gap-4">
                <span className="c-mono text-[13px] text-[var(--c-white)]/50">
                  {build.index}
                </span>
                <span className="c-mono text-[10px] tracking-[0.14em] uppercase text-[var(--c-white)]/50">
                  {metaLine}
                </span>
              </div>

              <h1 className="mt-4 text-[clamp(40px,9vw,88px)] leading-[0.95]">
                <span className="c-serif text-[var(--c-white)]">
                  {flavor.titleParts?.[0] ?? build.title}
                </span>
                <span className="c-display text-[var(--c-lime)]">
                  {flavor.titleParts?.[1] ?? ""}
                </span>
                <span
                  aria-hidden
                  className="c-caret ml-1 inline-block align-baseline text-[var(--c-lime)]"
                >
                  ▮
                </span>
              </h1>

              {poweredBy && (
                <p className="mt-4 c-mono text-[10px] tracking-[0.16em] uppercase text-[var(--c-white)]/55 flex items-center gap-2">
                  <span aria-hidden className="text-[var(--c-lime)] text-[13px]">
                    {poweredBy.glyph}
                  </span>
                  {poweredBy.label}
                </p>
              )}
            </div>
          ) : flavor?.header === "noggles" ? (
            /* light "noggles" header — Gnars flavor */
            <div className="relative isolate overflow-hidden p-6 md:p-10 min-h-[240px] md:min-h-[320px] flex flex-col justify-end bg-[var(--c-paper-2)]">
              {/* tiled noggles watermark */}
              <div
                aria-hidden
                className="absolute inset-0 -z-10 overflow-hidden select-none opacity-[0.13]"
              >
                <div
                  className="c-mono text-[24px] leading-[1.9] tracking-[0.12em] break-all"
                  style={{ color: `var(${build.accent})` }}
                >
                  {"⌐◨-◨ ".repeat(240)}
                </div>
              </div>
              {/* bottom fade so the title reads cleanly */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--c-paper-2)] via-[var(--c-paper-2)]/50 to-transparent" />

              {/* 3D NogglesRail — desktop: floats over the right half */}
              <div className="absolute right-0 top-0 bottom-0 w-[55%] hidden md:block">
                <NogglesRail3D accentVar={build.accent} className="h-full w-full" />
              </div>

              {/* 3D NogglesRail — mobile: in flow, above the title */}
              <div className="h-[190px] -mx-4 mb-2 md:hidden">
                <NogglesRail3D accentVar={build.accent} className="h-full w-full" />
              </div>

              <div className="flex items-center gap-4">
                <span className="c-mono text-[13px] text-[var(--c-ink-soft)]">
                  {build.index}
                </span>
                <span className="c-mono text-[10px] tracking-[0.14em] uppercase text-[var(--c-ink-soft)]">
                  {metaLine}
                </span>
              </div>

              <h1 className="mt-4 text-[clamp(40px,9vw,88px)] leading-[0.95]">
                <span className="c-display text-[var(--c-ink)]">
                  {flavor.titleParts?.[0] ?? build.title}
                </span>
                {flavor.titleParts?.[1] && (
                  <span
                    className="c-display"
                    style={{ color: `var(${build.accent})` }}
                  >
                    {flavor.titleParts[1]}
                  </span>
                )}
              </h1>

              {poweredBy && (
                <p className="mt-4 c-mono text-[10px] tracking-[0.16em] uppercase text-[var(--c-ink-soft)] flex items-center gap-2">
                  <span
                    aria-hidden
                    className="text-[13px]"
                    style={{ color: `var(${build.accent})` }}
                  >
                    {poweredBy.glyph}
                  </span>
                  {poweredBy.label}
                </p>
              )}

              {/* drag hint for the 3D model */}
              <span className="absolute bottom-3 right-4 c-mono text-[9px] tracking-[0.14em] uppercase text-[var(--c-ink-soft)] pointer-events-none hidden md:block">
                {b.dragHint}
              </span>
            </div>
          ) : (
            /* default paper header */
            <div className="p-6 md:p-10 bg-[var(--c-paper)]">
              <div className="flex items-center gap-4">
                <span className="c-mono text-[13px] text-[var(--c-ink-soft)]">
                  {build.index}
                </span>
                <span className="c-mono text-[10px] tracking-[0.14em] uppercase text-[var(--c-ink-soft)]">
                  {metaLine}
                </span>
              </div>
              <h1
                className={`mt-4 text-[clamp(40px,9vw,88px)] leading-[0.95] ${fontClass[build.font]}`}
              >
                {build.title}
              </h1>
            </div>
          )}
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
                  <span className="mt-[2px]" style={markStyle}>
                    ▸
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            {/* merged PRs — verifiable proof of work */}
            {flavor?.prs?.length ? (
              <div className="max-w-[620px]">
                <div className="flex items-baseline justify-between gap-4 mb-4 mt-10">
                  <p className="c-label">{b.prsLabel}</p>
                  {flavor.prStats && (
                    <span className="c-mono text-[11px] text-[var(--c-ink-soft)] whitespace-nowrap">
                      {flavor.prStats.total} PRs ·{" "}
                      <span className="font-semibold" style={markStyle}>
                        {flavor.prStats.merged} merged
                      </span>
                    </span>
                  )}
                </div>
                <ul className="flex flex-col gap-2">
                  {flavor.prs.map((pr) => (
                    <li key={pr.url}>
                      <a
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 border-2 border-[var(--c-ink)] bg-[var(--c-paper)] px-3 py-2.5 shadow-[3px_3px_0_var(--c-ink)] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_var(--c-ink)]"
                      >
                        <span
                          className="c-mono text-[8px] tracking-[0.12em] uppercase px-1.5 py-1 border-2 whitespace-nowrap"
                          style={badgeStyle}
                        >
                          {pr.merged ? "merged" : "pr"}
                        </span>
                        <span className="c-mono text-[12px] leading-snug flex-1">
                          {pr.title}
                        </span>
                        <span className="c-mono text-[10px] text-[var(--c-ink-soft)] whitespace-nowrap group-hover:text-[var(--c-ink)]">
                          {pr.repo}#{pr.number} ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* what I learned — transferable, JD-ready takeaways */}
            {detail.learned?.length ? (
              <div className="max-w-[620px] mt-10">
                <p className="c-label mb-4">{b.learnedLabel}</p>
                <ul className="flex flex-col gap-3">
                  {detail.learned.map((l) => (
                    <li
                      key={l}
                      className="c-mono text-[13px] leading-[1.6] flex items-start gap-3"
                    >
                      <span className="mt-[2px] font-semibold" style={markStyle}>
                        →
                      </span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
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

        {/* evidence — screenshots & gifs of the work */}
        {(flavor?.media?.length || flavor?.evidenceSlots) && (
          <section className="mt-16">
            <p className="c-label mb-1">{b.evidenceLabel}</p>
            <p className="c-mono text-[12px] text-[var(--c-ink-soft)] mb-5">
              {b.evidenceHint}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {flavor.media?.length
                ? flavor.media.map((m, i) => (
                    <figure
                      key={m.src}
                      className={`${
                        i === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                      } border-2 border-[var(--c-ink)] shadow-[4px_4px_0_var(--c-ink)] overflow-hidden bg-[var(--c-void)]`}
                    >
                      {/* NFT/asset art from arbitrary sources — plain <img>. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={m.src}
                        alt={m.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </figure>
                  ))
                : Array.from({ length: flavor.evidenceSlots ?? 0 }).map(
                    (_, i) => (
                      <div
                        key={i}
                        className={`${
                          i === 0
                            ? "sm:col-span-2 aspect-[16/9]"
                            : "aspect-[4/3]"
                        } border-2 border-dashed border-[var(--c-ink)]/30 grid place-items-center text-center`}
                      >
                        <div className="c-mono text-[11px] tracking-[0.1em] uppercase text-[var(--c-ink-soft)]">
                          <div className="text-[22px] mb-1 opacity-40">＋</div>
                          {b.evidenceEmpty}
                        </div>
                      </div>
                    ),
                  )}
            </div>
          </section>
        )}
      </main>
      <CriptoFooter />
    </>
  );
}
