import type { Metadata } from "next";
import "./cripto.css";

export const metadata: Metadata = {
  title: "Louzoshi — Onchain",
  description:
    "Portfólio onchain de Matheus Louzada (louzoshi.eth) — contribuições open-source web3, integrações e NFTs.",
};

// Apply the crypto theme before paint to avoid a flash on hard loads.
const themeScript = `(function(){try{var t=localStorage.getItem('cripto-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-ctheme',t);}catch(e){}})();`;

export default function CriptoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <div className="cripto-root">{children}</div>
    </>
  );
}
