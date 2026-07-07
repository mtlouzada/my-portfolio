"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/useLanguage";

export default function Contact() {
  const { t } = useLanguage();

  const socials = [
    {
      label: "LinkedIn ↗",
      href: "https://www.linkedin.com/in/matheus-louzadaa/",
      primary: true,
    },
    { label: "WhatsApp ↗", href: t.contact.whatsappHref, primary: false },
    { label: "GitHub ↗", href: "https://github.com/mtlouzada", primary: false },
  ];

  return (
    <section
      id="contato"
      className="scroll-mt-20 py-[150px] px-6 border-t border-line text-center"
    >
      <Reveal className="max-w-[760px] mx-auto">
        <p className="label-mono">{t.contact.label}</p>
        <h2 className="text-[clamp(40px,7.5vw,86px)] font-semibold tracking-[-0.035em] leading-[1.02] mt-6 text-fg">
          {t.contact.title}
        </h2>
        <p className="mt-7 text-[clamp(17px,2.4vw,21px)] leading-[1.55] text-muted max-w-[520px] mx-auto text-pretty">
          {t.contact.description}
        </p>
        <div className="flex gap-3 justify-center flex-wrap mt-[46px]">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                s.primary
                  ? "px-7 py-3 rounded-pill bg-accent text-white font-medium text-[15px] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(91,91,214,0.55)]"
                  : "px-[22px] py-3 rounded-pill border border-line text-fg text-[15px] transition-all duration-300 hover:bg-elev hover:-translate-y-0.5"
              }
            >
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
