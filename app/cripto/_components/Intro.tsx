import Reveal from "@/components/Reveal";
import CountUp from "./CountUp";
import { stats } from "../_data";

export default function Intro() {
  return (
    <section className="border-b-2 border-[var(--c-ink)] bg-[var(--c-paper-2)]">
      <div className="max-w-[1160px] mx-auto px-5 py-20 grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        <Reveal>
          <div
            className="halftone aspect-[4/3] border-2 border-[var(--c-ink)] shadow-[5px_5px_0_var(--c-ink)]"
            style={{
              ["--dot" as string]: "var(--c-teal)",
              background:
                "linear-gradient(120deg, var(--c-lime) 0 55%, var(--c-red) 55% 100%)",
            }}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="c-label mb-4">[ 01 — manifesto ]</p>
          <h2 className="c-display text-[clamp(28px,4.6vw,52px)]">
            Não é agência.
            <br />
            É um dev que{" "}
            <span className="c-serif normal-case text-[var(--c-red)]">
              contribui
            </span>{" "}
            de verdade.
          </h2>
          <p className="c-mono text-[13px] leading-[1.7] mt-6 max-w-[520px] text-[var(--c-ink-soft)]">
            Anos entre back-end .NET e front-end React, com um pé fincado no
            open-source web3. Não coleciono templates — coleciono commits,
            reviews e coisas que foram pro ar e ficaram de pé.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
            {stats.map((s) => (
              <div key={s.label} className="border-t-2 border-[var(--c-ink)] pt-3">
                <div className="c-display text-[clamp(28px,4vw,44px)] text-[var(--c-red)]">
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <div className="c-mono text-[10px] tracking-[0.1em] uppercase mt-1 text-[var(--c-ink-soft)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
