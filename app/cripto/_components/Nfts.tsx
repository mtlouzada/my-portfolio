import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";
import Window from "./Window";
import { nfts } from "../_data";

export default function Nfts() {
  return (
    <section
      id="nfts"
      className="scroll-mt-24 border-b-2 border-[var(--c-ink)] bg-[var(--c-void)] text-[var(--c-white)]"
    >
      <div className="max-w-[1160px] mx-auto px-5 py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="c-label mb-3 !text-[var(--c-white)]/60">
              [ 04 — wallet ]
            </p>
            <h2 className="c-display text-[clamp(30px,5vw,58px)]">
              A galeria onchain.
            </h2>
          </div>
          <span className="c-tag !border-[var(--c-white)]/40 !bg-transparent !text-[var(--c-white)]/70">
            ◆ dados de exemplo — plugar wallet
          </span>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {nfts.map((nft, i) => {
            const bright = nft.bg === "--c-lime";
            return (
            <Reveal key={nft.name} delay={i * 0.06}>
              <div className="nft-card border-2 border-[var(--c-white)] bg-[var(--c-paper)] text-[var(--c-ink)] shadow-[5px_5px_0_var(--c-white)]">
                <div
                  className="relative aspect-square overflow-hidden border-b-2 border-[var(--c-ink)]"
                  style={{ background: `var(${nft.bg})` } as CSSProperties}
                >
                  <div
                    className="halftone absolute inset-0 opacity-30"
                    style={{ ["--dot" as string]: "var(--c-ink)" }}
                  />
                  <span
                    className={`absolute inset-0 grid place-items-center c-display text-[clamp(30px,7vw,56px)] ${
                      bright
                        ? "text-[var(--c-on-bright)] opacity-80"
                        : "text-[var(--c-white)] mix-blend-overlay"
                    }`}
                  >
                    #{nft.tokenId}
                  </span>
                  <span
                    className={`absolute top-2 left-2 c-mono text-[9px] tracking-[0.12em] ${
                      bright ? "text-[var(--c-on-bright)]" : "text-[var(--c-white)]"
                    }`}
                  >
                    {nft.collection.toUpperCase()}
                  </span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="c-mono text-[11px] font-semibold truncate">
                    {nft.name}
                  </span>
                  <span className="c-mono text-[11px] text-[var(--c-ink-soft)]">
                    ↗
                  </span>
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <Window
            title="readme.txt"
            accent="--c-red"
            bodyClassName="p-5 bg-[var(--c-paper)] text-[var(--c-ink)]"
          >
            <p className="c-mono text-[12px] leading-[1.7]">
              &gt; Esta grade usa dados de exemplo. Para exibir NFTs reais, ligue
              a wallet <b>louzoshi.eth</b> a uma API (Alchemy / OpenSea / Zora) —
              o layout já está pronto para receber os itens dinamicamente.
            </p>
          </Window>
        </Reveal>
      </div>
    </section>
  );
}
