"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/useLanguage";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="scroll-mt-20 py-28 px-6 border-t border-line">
      <div className="max-w-[1120px] mx-auto">
        <Reveal>
          <p className="label-mono">{t.about.label}</p>
        </Reveal>

        <Reveal delay={0.06} className="mt-7">
          <h2 className="text-[clamp(28px,4.2vw,48px)] font-semibold tracking-[-0.025em] leading-[1.14] max-w-[920px] text-fg text-balance">
            {t.about.headline}
          </h2>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-7 mt-[72px]">
          {t.about.groups.map((group, i) => (
            <Reveal key={group.label} delay={0.04 + i * 0.08}>
              <p className="font-mono text-xs tracking-[0.04em] text-muted mb-[18px]">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-[7px] rounded-[9px] bg-elev border border-line font-mono text-[13px] text-fg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
