"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/lib/useTheme";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" />
      <line x1="12" y1="1.5" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22.5" />
      <line x1="1.5" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22.5" y2="12" />
      <line x1="4.2" y1="4.2" x2="6" y2="6" />
      <line x1="18" y1="18" x2="19.8" y2="19.8" />
      <line x1="4.2" y1="19.8" x2="6" y2="18" />
      <line x1="18" y1="6" x2="19.8" y2="4.2" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z" fill="currentColor" />
    </svg>
  );
}

function Logo() {
  return (
    <Link href="#top" aria-label="Início" className="group flex items-center gap-2.5">
      <span className="grid place-items-center w-[34px] h-[34px] rounded-[11px] bg-fg text-bg font-bold text-[13px] tracking-[-0.03em] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
        ML
      </span>
      <span className="hidden sm:block font-semibold text-[15px] tracking-[-0.01em] text-fg">
        Matheus Louzada
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-[var(--nav-bg)] backdrop-blur-xl backdrop-saturate-150">
      <div className="max-w-[1120px] mx-auto px-6 h-[58px] grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* left — logo */}
        <div className="flex justify-start min-w-0">
          <Logo />
        </div>

        {/* center — nav links (stays in place; content hidden on mobile) */}
        <div className="flex justify-center">
          <div className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-[14px] py-2 rounded-pill text-[14px] text-muted hover:text-fg hover:bg-elev transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* right — actions */}
        <div className="flex justify-end items-center gap-2">
          <Link
            href="/cripto"
            className="group hidden sm:inline-flex items-center gap-2 pl-3 pr-3.5 py-2 rounded-pill text-[13.5px] font-medium text-accent bg-accent-soft border border-transparent hover:border-accent/30 transition-colors"
          >
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-accent" />
            </span>
            Cripto
          </Link>

          <button
            onClick={toggle}
            aria-label="Alternar tema"
            className="w-9 h-9 rounded-full border border-line text-fg flex items-center justify-center hover:bg-elev transition-colors"
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>

          <a
            href="mailto:louzoshi.eth@gmail.com"
            className="hidden md:inline-flex px-[18px] py-2 rounded-pill bg-fg text-bg text-[14px] font-medium hover:opacity-80 transition-opacity"
          >
            Email
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden w-9 h-9 rounded-full border border-line text-fg flex items-center justify-center hover:bg-elev transition-colors"
          >
            {open ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line px-4 pb-4 pt-2 flex flex-col gap-0.5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3.5 rounded-xl text-[17px] font-medium text-fg hover:bg-elev transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/cripto"
            onClick={() => setOpen(false)}
            className="px-3 py-3.5 rounded-xl text-[17px] font-medium text-accent bg-accent-soft mt-1 inline-flex items-center gap-2.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Cripto ↗
          </Link>
          <a
            href="mailto:louzoshi.eth@gmail.com"
            onClick={() => setOpen(false)}
            className="px-3 py-3.5 rounded-xl text-[17px] font-medium text-bg bg-fg mt-1 text-center"
          >
            Email
          </a>
        </div>
      )}
    </nav>
  );
}
