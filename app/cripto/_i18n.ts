/* All UI copy for the onchain / crypto world, EN (default) + PT.
   The language itself is shared with the main site via useLanguage(). */

import type { Lang } from "@/lib/dictionaries";

export type Stat = { value: number; suffix?: string; label: string };

const en = {
  nav: {
    links: [
      { label: "Builds", href: "#builds" },
      { label: "What I do", href: "#faco" },
      { label: "NFTs", href: "#nfts" },
      { label: "Contact", href: "#contato" },
    ],
    backToPortfolio: "← Portfolio",
    backToPortfolioLong: "← Back to portfolio",
    switchLang: "Mudar para português",
    toggleTheme: "Toggle onchain theme",
    menu: "Menu",
  },
  hero: {
    label: "onchain builder · open source",
    h1Line1: "I BUILD FOR",
    h1Line2Pre: "THE ",
    description:
      "Fullstack dev contributing to open-source web3 and digital-culture projects — from community platforms to onchain tools. This is where the crypto side of my work lives.",
    viewBuilds: "View builds →",
  },
  intro: {
    label: "[ 01 — manifesto ]",
    titleLine1: "Not an agency.",
    titlePre: "A dev who ",
    titleWord: "contributes",
    titlePost: " for real.",
    description:
      "Years across .NET back ends and React front ends, with one foot planted in web3 open source. I don't collect templates — I collect commits, reviews and things that shipped and stayed up.",
    stats: [
      { value: 6, suffix: "+", label: "Repos contributed to" },
      { value: 40, suffix: "+", label: "PRs & commits" },
      { value: 3, suffix: "", label: "Communities" },
      { value: 2020, suffix: "", label: "Onchain since" },
    ] as Stat[],
  },
  builds: {
    label: "[ 02 — selected builds ]",
    title: "The portfolio is the point.",
    hoverHint: "hover to open ↗",
    roles: { contributor: "Contributor", dev: "Dev" },
  },
  whatIDo: {
    label: "[ 03 — two sides ]",
    title: "Two worlds, one dev.",
    onchain: {
      title: "Onchain Dev",
      accent: "--c-blue",
      items: [
        "Wallet integrations (wallet connect)",
        "Onchain reads & contracts",
        "dApps with Next.js + React",
        "APIs & data indexing",
        "Automation & bots",
      ],
    },
    community: {
      title: "Open Source & Community",
      accent: "--c-red",
      items: [
        "Contributing to open projects",
        "Tools for communities",
        "SkateHive & web3 culture",
        "Tooling & DX",
        "Docs & reviews",
      ],
    },
  },
  nfts: {
    label: "[ 04 — wallet ]",
    title: "The onchain gallery.",
    sampleTag: "◆ sample data — plug wallet",
    notePre: "> This grid uses sample data. To display real NFTs, wire the ",
    noteBold: "louzoshi.eth",
    notePost:
      " wallet to an API (Alchemy / OpenSea / Zora) — the layout is ready to receive items dynamically.",
  },
  contact: {
    label: "[ 05 — reach_out.sh ]",
    titleLine1: "Let's",
    titleLine2: "build?",
    description:
      "Collaboration, a contribution or an onchain idea? Find me on Farcaster — or on any of the channels right there.",
  },
  footer: {
    backToPortfolio: "← Portfolio",
  },
};

export type CriptoDictionary = typeof en;

const pt: CriptoDictionary = {
  nav: {
    links: [
      { label: "Builds", href: "#builds" },
      { label: "O que faço", href: "#faco" },
      { label: "NFTs", href: "#nfts" },
      { label: "Contato", href: "#contato" },
    ],
    backToPortfolio: "← Portfólio",
    backToPortfolioLong: "← Voltar ao portfólio",
    switchLang: "Switch to English",
    toggleTheme: "Alternar tema do modo onchain",
    menu: "Menu",
  },
  hero: {
    label: "onchain builder · open source",
    h1Line1: "CONSTRUO PARA",
    h1Line2Pre: "O ",
    description:
      "Dev fullstack contribuindo com projetos open-source de web3 e cultura digital — de plataformas de comunidade a ferramentas onchain. Aqui vive o lado cripto do meu trabalho.",
    viewBuilds: "Ver builds →",
  },
  intro: {
    label: "[ 01 — manifesto ]",
    titleLine1: "Não é agência.",
    titlePre: "É um dev que ",
    titleWord: "contribui",
    titlePost: " de verdade.",
    description:
      "Anos entre back-end .NET e front-end React, com um pé fincado no open-source web3. Não coleciono templates — coleciono commits, reviews e coisas que foram pro ar e ficaram de pé.",
    stats: [
      { value: 6, suffix: "+", label: "Repos contribuídos" },
      { value: 40, suffix: "+", label: "PRs & commits" },
      { value: 3, suffix: "", label: "Comunidades" },
      { value: 2020, suffix: "", label: "Onchain desde" },
    ] as Stat[],
  },
  builds: {
    label: "[ 02 — selected builds ]",
    title: "O portfólio é o ponto.",
    hoverHint: "hover p/ abrir ↗",
    roles: { contributor: "Contribuidor", dev: "Dev" },
  },
  whatIDo: {
    label: "[ 03 — dois lados ]",
    title: "Dois mundos, um dev.",
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
  },
  nfts: {
    label: "[ 04 — wallet ]",
    title: "A galeria onchain.",
    sampleTag: "◆ dados de exemplo — plugar wallet",
    notePre: "> Esta grade usa dados de exemplo. Para exibir NFTs reais, ligue a wallet ",
    noteBold: "louzoshi.eth",
    notePost:
      " a uma API (Alchemy / OpenSea / Zora) — o layout já está pronto para receber os itens dinamicamente.",
  },
  contact: {
    label: "[ 05 — reach_out.sh ]",
    titleLine1: "Bora",
    titleLine2: "construir?",
    description:
      "Colaboração, contribuição ou uma ideia onchain? Me acha no Farcaster — ou em qualquer um dos canais aí do lado.",
  },
  footer: {
    backToPortfolio: "← Portfólio",
  },
};

export const criptoDict: Record<Lang, CriptoDictionary> = { en, pt };
