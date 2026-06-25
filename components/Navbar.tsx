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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-[var(--nav-bg)] backdrop-blur-xl backdrop-saturate-150">
      <div className="max-w-[1120px] mx-auto px-6 h-[54px] flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-mono text-lg tracking-tight text-fg hover:opacity-70 transition-opacity"
        >
          ⌐◨-◨
        </a>

        <div className="flex items-center gap-1.5">
          <div className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-[13px] py-2 rounded-pill text-sm text-muted hover:text-fg hover:bg-elev transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggle}
            aria-label="Alternar tema"
            className="w-9 h-9 rounded-full border border-line text-fg flex items-center justify-center hover:bg-elev transition-colors"
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>

          <a
            href="mailto:louzoshi.eth@gmail.com"
            className="hidden md:block px-4 py-2 rounded-pill bg-fg text-bg text-sm font-medium hover:opacity-80 transition-opacity"
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
        </div>
      )}
    </nav>
  );
}
