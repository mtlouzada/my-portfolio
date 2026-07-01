import type { Metadata } from "next";
import "./cripto.css";

export const metadata: Metadata = {
  title: "Louzoshi — Onchain",
  description:
    "Portfólio onchain de Matheus Louzada (louzoshi.eth) — contribuições open-source web3, integrações e NFTs.",
};

export default function CriptoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="cripto-root">{children}</div>;
}
