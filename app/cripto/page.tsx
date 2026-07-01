import CriptoNav from "./_components/CriptoNav";
import CriptoHero from "./_components/CriptoHero";
import Ticker from "./_components/Ticker";
import Intro from "./_components/Intro";
import Contributions from "./_components/Contributions";
import WhatIDo from "./_components/WhatIDo";
import Nfts from "./_components/Nfts";
import CriptoContact from "./_components/CriptoContact";
import CriptoFooter from "./_components/CriptoFooter";
import { services, stack } from "./_data";

export default function CriptoPage() {
  return (
    <>
      <CriptoNav />
      <main>
        <CriptoHero />

        <div className="bg-[var(--c-lime)] text-[var(--c-ink)] border-b-2 border-[var(--c-ink)] py-2.5">
          <Ticker items={services} duration={28} sep="+" />
        </div>

        <Intro />
        <Contributions />

        <div className="bg-[var(--c-red)] text-[var(--c-white)] border-b-2 border-[var(--c-ink)] py-2.5">
          <Ticker items={stack} duration={24} reverse sep="✦" />
        </div>

        <WhatIDo />
        <Nfts />
        <CriptoContact />
      </main>
      <CriptoFooter />
    </>
  );
}
