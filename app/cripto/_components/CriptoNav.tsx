"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Builds", href: "#builds" },
  { label: "O que faço", href: "#faco" },
  { label: "NFTs", href: "#nfts" },
  { label: "Contato", href: "#contato" },
];

export default function CriptoNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* fake OS menu bar */}
      <div className="c-mono text-[10.5px] tracking-[0.06em] bg-[var(--c-ink)] text-[var(--c-white)] px-3 py-1 flex items-center gap-4">
        <span className="opacity-70">File</span>
        <span className="opacity-70">Edit</span>
        <span className="opacity-70">View</span>
        <span className="ml-auto opacity-70">louzoshi.eth</span>
        <span className="opacity-70">online ●</span>
      </div>

      {/* main nav */}
      <nav className="bg-[var(--c-paper)] border-b-2 border-[var(--c-ink)]">
        <div className="max-w-[1160px] mx-auto px-5 h-[52px] flex items-center justify-between gap-4">
          <Link
            href="/cripto"
            className="c-display text-[19px] flex items-center gap-2"
          >
            <span className="text-[var(--c-red)]">◆</span>LOUZOSHI
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="c-mono text-[11px] tracking-[0.1em] uppercase px-3 py-2 hover:text-[var(--c-red)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/"
              className="c-mono text-[11px] tracking-[0.1em] uppercase px-3 py-2 border-2 border-[var(--c-ink)] ml-2 bg-[var(--c-lime)] hover:-translate-y-0.5 transition-transform"
            >
              ← Portfólio
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden w-9 h-9 border-2 border-[var(--c-ink)] flex items-center justify-center bg-[var(--c-paper)]"
          >
            <span className="c-mono text-sm">{open ? "✕" : "≡"}</span>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t-2 border-[var(--c-ink)] px-5 py-3 flex flex-col gap-1 bg-[var(--c-paper)]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="c-mono text-[13px] tracking-[0.08em] uppercase py-2.5"
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="c-mono text-[13px] tracking-[0.08em] uppercase py-2.5 mt-1 border-2 border-[var(--c-ink)] bg-[var(--c-lime)] text-center"
            >
              ← Voltar ao portfólio
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
