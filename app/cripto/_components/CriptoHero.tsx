"use client";

import Link from "next/link";
import EthLogo from "./EthLogo";
import { useLanguage } from "@/lib/useLanguage";
import { criptoDict } from "../_i18n";

export default function CriptoHero() {
  const { lang } = useLanguage();
  const { hero } = criptoDict[lang];

  return (
    <section className="relative border-b-2 border-[var(--c-ink)] overflow-hidden">
      {/* floating background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-[12%] left-[6%] w-16 h-16 border-2 border-[var(--c-ink)] rotate-12 float-y opacity-40" />
        <div
          className="absolute bottom-[18%] right-[10%] w-10 h-10 rounded-full bg-[var(--c-blue)] float-y opacity-60"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="absolute top-[30%] right-[24%] w-0 h-0 float-y opacity-50"
          style={{
            animationDelay: "0.6s",
            borderLeft: "14px solid transparent",
            borderRight: "14px solid transparent",
            borderBottom: "24px solid var(--c-lime)",
          }}
        />
      </div>

      <div className="relative max-w-[1160px] mx-auto px-5 py-16 md:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* left: copy */}
        <div>
          <p className="c-label mb-6 flex items-center gap-2">
            <span className="text-[var(--c-red)]">●</span> {hero.label}
          </p>

          <h1 className="c-display text-[clamp(44px,8.5vw,92px)]">
            {hero.h1Line1}
            <br />
            {hero.h1Line2Pre}
            <span className="glitch" data-text="ONCHAIN">
              ONCHAIN
            </span>
            <br />
            <span className="blink">UNDERGROUND</span>
          </h1>

          <p className="c-mono text-[13px] leading-[1.7] mt-7 max-w-[440px] text-[var(--c-ink-soft)]">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-3.5 mt-9">
            <a href="#builds" className="c-btn c-btn-red">
              {hero.viewBuilds}
            </a>
            <a
              href="https://github.com/mtlouzada"
              target="_blank"
              rel="noopener noreferrer"
              className="c-btn"
            >
              GitHub ↗
            </a>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-8">
            {["SOLIDITY", "REACT", "WEB3", "NFTs"].map((t) => (
              <span key={t} className="c-tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* right: geometric halftone panel */}
        <div className="relative aspect-[5/4] w-full border-2 border-[var(--c-ink)] bg-[var(--c-red)] overflow-hidden shadow-[6px_6px_0_var(--c-ink)]">
          <div
            className="halftone absolute inset-0 opacity-40"
            style={{ ["--dot" as string]: "var(--c-ink)" }}
          />
          {/* rotating dashed ring */}
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="spin-slow w-[62%] aspect-square rounded-full border-2 border-dashed border-[var(--c-white)]/70"
            />
          </div>
          {/* pulsing circle — Ethereum mark */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="pulse-dot relative w-[46%] aspect-square rounded-full border-[3px] border-[var(--c-white)] bg-[var(--c-white)] grid place-items-center">
              <EthLogo className="holo h-[58%] w-auto" />
            </div>
          </div>
          {/* blue block */}
          <div className="absolute bottom-5 left-5 w-16 h-8 bg-[var(--c-blue)] border-2 border-[var(--c-ink)]" />
          {/* corner label */}
          <span className="absolute top-3 left-3 c-mono text-[10px] tracking-[0.14em] text-[var(--c-white)]">
            SYS://ONCHAIN
          </span>
          <Link
            href="#builds"
            className="absolute bottom-3 right-3 c-mono text-[10px] tracking-[0.14em] text-[var(--c-white)] hover:underline"
          >
            SCROLL ↓
          </Link>
        </div>
      </div>
    </section>
  );
}
