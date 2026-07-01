import Reveal from "@/components/Reveal";
import Window from "./Window";
import { disciplines } from "../_data";

const cards = [disciplines.onchain, disciplines.community];

export default function WhatIDo() {
  return (
    <section
      id="faco"
      className="scroll-mt-24 border-b-2 border-[var(--c-ink)] bg-[var(--c-teal)] text-[var(--c-white)]"
    >
      <div className="max-w-[1160px] mx-auto px-5 py-20">
        <Reveal>
          <p className="c-label mb-3 !text-[var(--c-white)]/70">
            [ 03 — dois lados ]
          </p>
          <h2 className="c-display text-[clamp(30px,5vw,58px)]">
            Dois mundos, um dev.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-7 mt-12">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <Window
                title={`${card.title.toLowerCase().replace(/\s+/g, "_")}.exe`}
                accent={card.accent}
                bodyClassName="p-6 bg-[var(--c-paper)] text-[var(--c-ink)]"
              >
                <h3 className="c-display text-[22px] mb-5">{card.title}</h3>
                <ul className="flex flex-col gap-3">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="c-mono text-[13px] flex items-start gap-3 border-b border-[var(--c-ink)]/15 pb-3 last:border-0"
                    >
                      <span
                        className="text-[var(--c-red)] mt-[2px]"
                        style={{ color: `var(${card.accent})` }}
                      >
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Window>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
