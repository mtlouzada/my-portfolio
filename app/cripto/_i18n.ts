/* All UI copy for the onchain / crypto world, EN (default) + PT.
   The language itself is shared with the main site via useLanguage(). */

import type { Lang } from "@/lib/dictionaries";

export type Stat = { value: number; suffix?: string; label: string };

const en = {
  nav: {
    links: [
      { label: "Builds", href: "#builds" },
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
    label: "[ 01 — proof ]",
    titleLine1: "Proof of",
    titlePre: "",
    titleWord: "work",
    titlePost: ".",
    description:
      "Full-stack Web3 developer specializing in React, TypeScript, Node.js, smart contracts, and wallet integrations.",
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
    hoverHint: "click to open ↗",
    roles: { contributor: "Contributor", dev: "Dev" },
    backToBuilds: "← All builds",
    visitSite: "Visit site ↗",
    overviewLabel: "Overview",
    contributionsLabel: "What I did",
    stackLabel: "Stack",
    details: {
      skatehive: {
        overview:
          "International open-source platform connecting the skateboarding community through web3. Built on Hive, it lets skaters post, earn and organize onchain.",
        points: [
          "Front-end features in React / Next.js and TypeScript",
          "Onchain interactions with the Hive blockchain",
          "Bug fixes, reviews and community tooling",
        ],
      },
      "community-org": {
        overview:
          "Website for Community Org, a tech company connecting communities and organizations through digital solutions.",
        points: [
          "Built the site with Next.js and TypeScript",
          "Responsive UI and deploy on Vercel",
        ],
      },
      gnars: {
        overview:
          "Onchain skate DAO in the Nouns ecosystem. Gnars funds skaters and creators through a treasury governed onchain.",
        points: [
          "Contributions to the dApp front end",
          "Wallet and contract reads with wagmi / viem",
        ],
      },
      builderdao: {
        overview:
          "Nouns Builder is the tooling that lets anyone launch and run an onchain DAO — open-source infrastructure for the Nouns ecosystem.",
        points: [
          "Open-source contributions to the builder app",
          "Next.js / TypeScript across the stack",
        ],
      },
    },
  },
  nfts: {
    label: "[ 03 — wallet ]",
    title: "The onchain gallery.",
    sampleTag: "◆ sample data — plug wallet",
    notePre: "> This grid uses sample data. To display real NFTs, wire the ",
    noteBold: "louzoshi.eth",
    notePost:
      " wallet to an API (Alchemy / OpenSea / Zora) — the layout is ready to receive items dynamically.",
  },
  contact: {
    label: "[ 04 — reach_out.sh ]",
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
    label: "[ 01 — proof ]",
    titleLine1: "Proof of",
    titlePre: "",
    titleWord: "work",
    titlePost: ".",
    description:
      "Desenvolvedor full-stack Web3 especializado em React, TypeScript, Node.js, smart contracts e integração de carteiras.",
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
    hoverHint: "clique p/ abrir ↗",
    roles: { contributor: "Contribuidor", dev: "Dev" },
    backToBuilds: "← Todos os builds",
    visitSite: "Ver site ↗",
    overviewLabel: "Visão geral",
    contributionsLabel: "O que eu fiz",
    stackLabel: "Stack",
    details: {
      skatehive: {
        overview:
          "Plataforma open-source internacional que conecta a comunidade do skate via web3. Construída sobre a Hive, permite que skatistas postem, ganhem e se organizem onchain.",
        points: [
          "Features de front-end em React / Next.js e TypeScript",
          "Interações onchain com a blockchain Hive",
          "Correções, reviews e ferramentas para a comunidade",
        ],
      },
      "community-org": {
        overview:
          "Site da Community Org, empresa de tecnologia que conecta comunidades e organizações por meio de soluções digitais.",
        points: [
          "Desenvolvi o site com Next.js e TypeScript",
          "UI responsiva e deploy na Vercel",
        ],
      },
      gnars: {
        overview:
          "DAO de skate onchain no ecossistema Nouns. A Gnars financia skatistas e criadores por meio de uma tesouraria governada onchain.",
        points: [
          "Contribuições no front-end do dApp",
          "Leitura de carteiras e contratos com wagmi / viem",
        ],
      },
      builderdao: {
        overview:
          "Nouns Builder é a ferramenta que permite lançar e operar uma DAO onchain — infraestrutura open-source para o ecossistema Nouns.",
        points: [
          "Contribuições open-source no app do builder",
          "Next.js / TypeScript ao longo da stack",
        ],
      },
    },
  },
  nfts: {
    label: "[ 03 — wallet ]",
    title: "A galeria onchain.",
    sampleTag: "◆ dados de exemplo — plugar wallet",
    notePre: "> Esta grade usa dados de exemplo. Para exibir NFTs reais, ligue a wallet ",
    noteBold: "louzoshi.eth",
    notePost:
      " a uma API (Alchemy / OpenSea / Zora) — o layout já está pronto para receber os itens dinamicamente.",
  },
  contact: {
    label: "[ 04 — reach_out.sh ]",
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
