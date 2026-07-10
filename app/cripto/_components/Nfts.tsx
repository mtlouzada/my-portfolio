"use client";

import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";
import Window from "./Window";
import type { Nft } from "../_data";
import { useLanguage } from "@/lib/useLanguage";
import { criptoDict } from "../_i18n";

type NftsProps = {
  items: Nft[];
  isLive: boolean;
};

export default function Nfts({ items, isLive }: NftsProps) {
  const { lang } = useLanguage();
  const t = criptoDict[lang].nfts;

  return (
    <section
      id="nfts"
      className="scroll-mt-24 border-b-2 border-[var(--c-ink)] bg-[var(--c-void)] text-[var(--c-white)]"
    >
      <div className="max-w-[1160px] mx-auto px-5 py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="c-label mb-3 !text-[var(--c-white)]/60">{t.label}</p>
            <h2 className="c-display text-[clamp(30px,5vw,58px)]">{t.title}</h2>
          </div>
          <span className="c-tag !border-[var(--c-white)]/40 !bg-transparent !text-[var(--c-white)]/70">
            {isLive ? t.liveTag : t.sampleTag}
          </span>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((nft, i) => (
            <Reveal key={`${nft.chain ?? "x"}-${nft.collection}-${nft.tokenId}-${i}`} delay={i * 0.06}>
              <NftCard nft={nft} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <Window
            title="readme.txt"
            accent="--c-red"
            bodyClassName="p-5 bg-[var(--c-paper)] text-[var(--c-ink)]"
          >
            <p className="c-mono text-[12px] leading-[1.7]">
              {isLive ? t.liveNotePre : t.notePre}
              <b>{t.noteBold}</b>
              {isLive ? t.liveNotePost : t.notePost}
            </p>
          </Window>
        </Reveal>
      </div>
    </section>
  );
}

function NftCard({ nft }: { nft: Nft }) {
  const bright = nft.bg === "--c-lime";

  const card = (
    <div className="nft-card h-full border-2 border-[var(--c-white)] bg-[var(--c-paper)] text-[var(--c-ink)] shadow-[5px_5px_0_var(--c-white)]">
      <div
        className="relative aspect-square overflow-hidden border-b-2 border-[var(--c-ink)]"
        style={
          nft.image
            ? undefined
            : ({ background: `var(${nft.bg})` } as CSSProperties)
        }
      >
        {nft.image ? (
          // NFT art comes from arbitrary CDNs / IPFS gateways, so next/image
          // (which needs an allowlist of hosts) isn't practical here.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={nft.image}
            alt={nft.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
        ) : (
          <>
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
          </>
        )}
        <span
          className={
            nft.image
              ? "absolute top-2 left-2 c-mono text-[9px] tracking-[0.12em] px-1.5 py-0.5 bg-[var(--c-ink)] text-[var(--c-white)]"
              : `absolute top-2 left-2 c-mono text-[9px] tracking-[0.12em] ${
                  bright ? "text-[var(--c-on-bright)]" : "text-[var(--c-white)]"
                }`
          }
        >
          {nft.collection.toUpperCase()}
        </span>
      </div>
      <div className="p-3 flex items-center justify-between gap-2">
        <span className="c-mono text-[11px] font-semibold truncate">
          {nft.name}
        </span>
        <span className="c-mono text-[11px] text-[var(--c-ink-soft)]">↗</span>
      </div>
    </div>
  );

  if (!nft.href) return card;

  return (
    <a
      href={nft.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
      aria-label={`${nft.name} — view on OpenSea`}
    >
      {card}
    </a>
  );
}
