"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a1a] bg-[#080808]/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-base text-white hover:text-[#888] transition-colors"
        >
          ⌐◨-◨
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase text-[#666] hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="mailto:louzoshi.eth@gmail.com"
          className="hidden md:block text-xs tracking-widest uppercase text-[#666] hover:text-white transition-colors"
        >
          Email
        </a>

        <button
          className="md:hidden text-[#888] hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="toggle menu"
        >
          <span className="font-mono text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#080808] px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase text-[#666] hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:louzoshi.eth@gmail.com"
            className="text-xs tracking-widest uppercase text-[#666] hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      )}
    </header>
  );
}
