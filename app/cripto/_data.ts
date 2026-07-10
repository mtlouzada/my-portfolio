/* Non-translatable content for the onchain / crypto world.
   Edit here — every section reads from this file.
   Translatable copy lives in _i18n.ts (EN + PT). */

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

export type BuildSlug = "skatehive" | "community-org" | "gnars" | "builderdao";

// A screenshot or GIF that shows real contribution. Files live in
// /public/cripto/builds/<slug>/… — leave `media` empty to render ready-to-fill
// slots on the detail page instead.
export type BuildMedia = {
  src: string;
  alt: string;
  kind: "image" | "gif";
};

// A real pull request, shown as verifiable proof of contribution.
export type BuildPr = {
  title: string;
  repo: string; // e.g. "skatehive3.0"
  number: number;
  url: string;
  merged?: boolean;
};

// Optional per-build detail treatment. Only skatehive uses it today; the other
// builds render the plain (paper) header. Keeps the shared component generic.
export type BuildFlavor = {
  header?: "matrix" | "noggles"; // special header treatment (else plain paper)
  titleParts?: [string, string]; // two-font split, e.g. ["Skate", "Hive"]
  poweredBy?: "hive" | "nouns"; // subtle "Built on X / Powered by X" glyph line
  evidenceSlots?: number; // number of empty media slots when `media` is empty
  media?: BuildMedia[]; // real screenshots / gifs (replaces the empty slots)
  prStats?: { total: number; merged: number }; // "27 PRs · 12 merged"
  prs?: BuildPr[]; // curated real PRs (proof of work)
};

export type Contribution = {
  index: string;
  slug: BuildSlug; // internal detail page: /cripto/builds/[slug]
  title: string;
  meta: string;
  role: "contributor" | "dev"; // translated via _i18n.ts
  href: string; // external project link (shown on the detail page)
  accent: string; // css var name
  font: "display" | "serif" | "mono";
  stack: string[]; // tech tags (not translated)
  flavor?: BuildFlavor;
};

export const contributions: Contribution[] = [
  {
    index: "01",
    slug: "skatehive",
    title: "SkateHive",
    meta: "OPEN SOURCE · WEB3",
    role: "contributor",
    href: "https://skatehive.app/",
    accent: "--c-red",
    font: "serif",
    stack: ["React", "TypeScript", "Next.js", "wagmi", "viem", "Hive", "Keychain"],
    flavor: {
      header: "matrix",
      titleParts: ["Skate", "Hive"],
      poweredBy: "hive",
      evidenceSlots: 3, // 1 hero screenshot + 2 gifs — fill via `media` later
      prStats: { total: 27, merged: 12 },
      // Curated merged PRs (proof of work). Full history: github.com/mtlouzada
      prs: [
        {
          title: "Multi-account Hive login (PeakD-style)",
          repo: "skatehive3.0",
          number: 140,
          url: "https://github.com/SkateHive/skatehive3.0/pull/140",
          merged: true,
        },
        {
          title: "Graceful errors for user-rejected swap transactions",
          repo: "skatehive3.0",
          number: 86,
          url: "https://github.com/SkateHive/skatehive3.0/pull/86",
          merged: true,
        },
        {
          title: "Fix connector.getChainId on ERC-20 swap",
          repo: "skatehive3.0",
          number: 83,
          url: "https://github.com/SkateHive/skatehive3.0/pull/83",
          merged: true,
        },
        {
          title: "Fix upload false-positive health check (All servers failed)",
          repo: "skatehive3.0",
          number: 90,
          url: "https://github.com/SkateHive/skatehive3.0/pull/90",
          merged: true,
        },
        {
          title: "Resizable modals + popular commands in search",
          repo: "skatehive3.0",
          number: 78,
          url: "https://github.com/SkateHive/skatehive3.0/pull/78",
          merged: true,
        },
        {
          title: "Report command in the global search overlay",
          repo: "skatehive3.0",
          number: 76,
          url: "https://github.com/SkateHive/skatehive3.0/pull/76",
          merged: true,
        },
        {
          title: "Improve session/profile modal UX on desktop",
          repo: "skatehive3.0",
          number: 87,
          url: "https://github.com/SkateHive/skatehive3.0/pull/87",
          merged: true,
        },
        {
          title: "Redirect posting rewards to the SkateHive account",
          repo: "nextskateapp",
          number: 102,
          url: "https://github.com/SkateHive/nextskateapp/pull/102",
          merged: true,
        },
      ],
    },
  },
  {
    index: "02",
    slug: "community-org",
    title: "Community Org",
    meta: "PLATFORM · 2025",
    role: "dev",
    href: "https://community-org-beta.vercel.app/",
    accent: "--c-blue",
    font: "mono",
    stack: ["Next.js", "TypeScript", "Vercel"],
  },
  {
    index: "03",
    slug: "gnars",
    title: "Gnars",
    meta: "SKATE DAO · ONCHAIN",
    role: "contributor",
    href: "https://gnars.com",
    accent: "--c-gold",
    font: "display",
    stack: ["React", "Next.js", "wagmi", "viem", "Nouns", "IPFS", "three.js"],
    flavor: {
      header: "noggles",
      poweredBy: "nouns",
      evidenceSlots: 3,
      prStats: { total: 13, merged: 10 },
      // Curated merged PRs in r4topunk/gnars-website (the gnars.com repo).
      prs: [
        {
          title: "Multi-select NFTs in the send-NFTs proposal form",
          repo: "gnars-website",
          number: 107,
          url: "https://github.com/r4topunk/gnars-website/pull/107",
          merged: true,
        },
        {
          title: "Render proposal descriptions as Markdown (duplicate-banner fix)",
          repo: "gnars-website",
          number: 110,
          url: "https://github.com/r4topunk/gnars-website/pull/110",
          merged: true,
        },
        {
          title: "Inline validation errors in the proposal template form",
          repo: "gnars-website",
          number: 124,
          url: "https://github.com/r4topunk/gnars-website/pull/124",
          merged: true,
        },
        {
          title: "Restore archive images via IPFS / Pinata migration",
          repo: "gnars-website",
          number: 125,
          url: "https://github.com/r4topunk/gnars-website/pull/125",
          merged: true,
        },
        {
          title: "3D noggles on mobile, with a globe fallback",
          repo: "gnars-website",
          number: 103,
          url: "https://github.com/r4topunk/gnars-website/pull/103",
          merged: true,
        },
        {
          title: "Unified FooterBar across the app",
          repo: "gnars-website",
          number: 104,
          url: "https://github.com/r4topunk/gnars-website/pull/104",
          merged: true,
        },
        {
          title: "Rich home footer — nav, socials, noggles",
          repo: "gnars-website",
          number: 102,
          url: "https://github.com/r4topunk/gnars-website/pull/102",
          merged: true,
        },
        {
          title: "Interactive hero TV → /tv",
          repo: "gnars-website",
          number: 101,
          url: "https://github.com/r4topunk/gnars-website/pull/101",
          merged: true,
        },
      ],
    },
  },
  {
    index: "04",
    slug: "builderdao",
    title: "BuilderDAO",
    meta: "NOUNS BUILDER · DAO",
    role: "contributor",
    href: "https://nouns.build",
    accent: "--c-lime",
    font: "mono",
    stack: ["Next.js", "TypeScript", "Solidity"],
  },
];

export type Nft = {
  name: string;
  collection: string;
  tokenId: string;
  bg: string; // css var name
  image?: string; // real artwork; absent → renders the colored placeholder box
  href?: string; // marketplace link (OpenSea)
  chain?: string; // e.g. "base"
};

// Fallback grid — shown when the wallet fetch is off (no ALCHEMY_API_KEY) or
// fails. Live data is pulled by _nfts.ts (getGallery).
export const nfts: Nft[] = [
  { name: "Noun #4021", collection: "Nouns", tokenId: "4021", bg: "--c-red" },
  { name: "Glitch Sk8", collection: "SkateHive", tokenId: "007", bg: "--c-teal" },
  { name: "Pixel Deck", collection: "SkateHive", tokenId: "042", bg: "--c-blue" },
  { name: "Onchain Grind", collection: "Zora", tokenId: "128", bg: "--c-lime" },
];

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
