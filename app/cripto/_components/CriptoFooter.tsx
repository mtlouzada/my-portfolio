import Link from "next/link";
import Ticker from "./Ticker";
import { contactSocials } from "../_data";

const footerItems = [
  "LET'S BUILD SOMETHING",
  "SKATE OR DAO",
  "LOUZOSHI.ETH",
  "ART",
  "TECH",
  "WEB3",
];

export default function CriptoFooter() {
  return (
    <footer className="bg-[var(--c-void)] text-[var(--c-white)]">
      <div className="border-b-2 border-[var(--c-white)]/20 py-3">
        <Ticker items={footerItems} duration={30} sep="+" />
      </div>
      <div className="max-w-[1160px] mx-auto px-5 py-10 flex flex-wrap items-center justify-between gap-6">
        <Link href="/cripto" className="c-display text-2xl flex items-center gap-2">
          <span className="text-[var(--c-red)]">◆</span>LOUZOSHI
        </Link>
        <div className="flex flex-wrap gap-5 c-mono text-[11px] tracking-[0.08em] uppercase">
          <Link href="/" className="hover:text-[var(--c-lime)] transition-colors">
            ← Portfólio
          </Link>
          {contactSocials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--c-lime)] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="c-mono text-[10px] tracking-[0.1em] text-[var(--c-white)]/50 w-full md:w-auto">
          © {new Date().getFullYear()} MATHEUS LOUZADA · ONCHAIN MODE
        </p>
      </div>
    </footer>
  );
}
