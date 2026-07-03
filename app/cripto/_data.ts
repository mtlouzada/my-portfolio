/* Content for the onchain / crypto world.
   Edit here — every section reads from this file. */

export const services = [
  "SMART CONTRACTS",
  "WALLET CONNECT",
  "REACT",
  "NEXT.JS",
  "OPEN SOURCE",
  "THE GRAPH",
  "NFTs",
  "NODE.JS",
  "TYPESCRIPT",
  "WEB3",
];

export const stack = [
  "SOLIDITY",
  "ETHERS",
  "WAGMI",
  "VIEM",
  "HARDHAT",
  "IPFS",
  "HIVE",
  "DISCORD API",
  "VERCEL",
];

export type Stat = { value: number; suffix?: string; label: string };
export const stats: Stat[] = [
  { value: 6, suffix: "+", label: "Repos contribuídos" },
  { value: 40, suffix: "+", label: "PRs & commits" },
  { value: 3, suffix: "", label: "Comunidades" },
  { value: 2020, suffix: "", label: "Onchain desde" },
];

export type Contribution = {
  index: string;
  title: string;
  meta: string;
  role: string;
  href: string;
  accent: string; // css var name
  font: "display" | "serif" | "mono";
};

export const contributions: Contribution[] = [
  {
    index: "01",
    title: "SkateHive",
    meta: "OPEN SOURCE · WEB3",
    role: "Contribuidor",
    href: "https://skatehive.app/",
    accent: "--c-red",
    font: "serif",
  },
  {
    index: "02",
    title: "Community Org",
    meta: "PLATFORM · 2025",
    role: "Dev",
    href: "https://community-org-beta.vercel.app/",
    accent: "--c-blue",
    font: "mono",
  },
  {
    index: "03",
    title: "Gnars",
    meta: "SKATE DAO · ONCHAIN",
    role: "Contribuidor",
    href: "https://gnars.com",
    accent: "--c-teal",
    font: "display",
  },
  {
    index: "04",
    title: "BuilderDAO",
    meta: "NOUNS BUILDER · DAO",
    role: "Contribuidor",
    href: "https://nouns.build",
    accent: "--c-lime",
    font: "mono",
  },
];

export type Nft = {
  name: string;
  collection: string;
  tokenId: string;
  bg: string; // css var name
};

// Placeholder — troque por dados reais da wallet (Alchemy/OpenSea) depois.
export const nfts: Nft[] = [
  { name: "Noun #4021", collection: "Nouns", tokenId: "4021", bg: "--c-red" },
  { name: "Glitch Sk8", collection: "SkateHive", tokenId: "007", bg: "--c-teal" },
  { name: "Pixel Deck", collection: "SkateHive", tokenId: "042", bg: "--c-blue" },
  { name: "Onchain Grind", collection: "Zora", tokenId: "128", bg: "--c-lime" },
];

export const disciplines = {
  onchain: {
    title: "Onchain Dev",
    accent: "--c-blue",
    items: [
      "Integração de carteiras (wallet connect)",
      "Leitura on-chain & contratos",
      "dApps com Next.js + React",
      "APIs e indexação de dados",
      "Automação & bots",
    ],
  },
  community: {
    title: "Open Source & Comunidade",
    accent: "--c-red",
    items: [
      "Contribuição em projetos abertos",
      "Ferramentas para comunidades",
      "SkateHive & cultura web3",
      "Tooling e DX",
      "Documentação e reviews",
    ],
  },
};

// Onchain-native socials (used in the crypto contact terminal + footer).
export const contactSocials = [
  { label: "GitHub", handle: "mtlouzada", href: "https://github.com/mtlouzada" },
  // TODO: confirmar handle do X (assumido: louzoshi)
  { label: "X", handle: "@louzoshi", href: "https://x.com/louzoshi" },
  // TODO: confirmar handle do Farcaster (assumido: louzoshi)
  {
    label: "Farcaster",
    handle: "@louzoshi",
    href: "https://warpcast.com/louzoshi",
  },
  { label: "PeakD", handle: "@louzoshi", href: "https://peakd.com/@louzoshi" },
];
