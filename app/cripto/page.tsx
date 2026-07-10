import CriptoNav from "./_components/CriptoNav";
import CriptoHero from "./_components/CriptoHero";
import Ticker from "./_components/Ticker";
import Intro from "./_components/Intro";
import Contributions from "./_components/Contributions";
import Nfts from "./_components/Nfts";
import CriptoContact from "./_components/CriptoContact";
import CriptoFooter from "./_components/CriptoFooter";
import { services, stack } from "./_data";
import { getGallery } from "./_nfts";

// Re-pull the wallet at most once an hour (ISR).
export const revalidate = 3600;

export default async function CriptoPage() {
  const gallery = await getGallery();

  return (
    <>
      <CriptoNav />
      <main>
        <CriptoHero />

        <div className="bg-[var(--c-lime)] text-[var(--c-on-bright)] border-b-2 border-[var(--c-ink)] py-2.5">
          <Ticker items={services} duration={28} sep="+" />
        </div>

        <Intro />
        <Contributions />

        <div className="bg-[var(--c-red)] text-[var(--c-white)] border-b-2 border-[var(--c-ink)] py-2.5">
          <Ticker items={stack} duration={24} reverse sep="✦" />
        </div>

        <Nfts items={gallery.items} isLive={gallery.isLive} />
        <CriptoContact />
      </main>
      <CriptoFooter />
    </>
  );
}
