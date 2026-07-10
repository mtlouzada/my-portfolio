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
    builtOnHive: "Built on Hive",
    builtOnNouns: "Powered by Nouns",
    dragHint: "drag to spin ⌐◨-◨",
    prsLabel: "Merged pull requests",
    learnedLabel: "What I learned",
    evidenceLabel: "Evidence",
    evidenceHint: "Screenshots & GIFs of the work.",
    evidenceEmpty: "screenshot / gif",
    details: {
      skatehive: {
        overview:
          "International open-source platform connecting the skateboarding community through web3. Built on Hive, it lets skaters post, earn and organize onchain.",
        points: [
          "Built multi-account Hive login (PeakD-style) — switch identities without re-authenticating",
          "Hardened the onchain swap: chain-id fix and graceful handling of user-rejected transactions",
          "Shipped a global command palette — bug reports, popular commands and resizable modals",
          "Guided onboarding for new skaters, plus the Mobile App docs (EN + PT-BR)",
        ],
        learned: [
          "Onchain auth: multi-account, key-based sessions where users custody their own keys (Hive Keychain + dhive)",
          "The EVM transaction lifecycle with wagmi / viem — chain-id switching, ERC-20, and rejected / failed txs",
          "Reliable web3 UX lives in the unhappy paths — wrong network, rejected signatures, failed uploads",
          "Shipping async in an open-source / DAO community — small, reviewable PRs merged to production",
        ],
      },
      "community-org": {
        overview:
          "Commissioned website for Community Org, a tech company connecting communities and organizations. Built solo, end to end, and delivered to the client — this deploy is the live demo.",
        points: [
          "Built the entire site from scratch (0→1) with Vite, React and TypeScript",
          "Implemented a full redesign through a structured refactor — new visual system, same product",
          "Conversion flows: plan modals with WhatsApp contact and Calendly scheduling",
          "Dark mode, scroll-triggered animations and mobile-first UX",
        ],
        learned: [
          "Owning a product end to end — architecture, UI, deploy and months of iteration",
          "Turning a redesign into code: refactoring a working codebase without breaking it",
          "Conversion-focused UI — scheduling and chat entry points that turn visits into contacts",
        ],
      },
      gnars: {
        overview:
          "Onchain skate DAO in the Nouns ecosystem. Gnars funds skaters and creators through a treasury governed onchain.",
        points: [
          "Built the send-NFTs proposal flow — multi-select treasury NFTs into a single onchain proposal",
          "Improved proposal creation: Markdown descriptions, duplicate detection and inline validation",
          "Migrated the archive's broken images to IPFS / Pinata",
          "Nounish UI: 3D noggles on mobile, a unified footer and the interactive hero TV",
        ],
        learned: [
          "Nouns-protocol governance frontend: composing onchain proposals, including treasury NFT transfers",
          "Reading DAO state with wagmi / viem and rendering proposals safely (Markdown, validation, dedupe)",
          "Decentralized media: migrating and serving assets over IPFS / Pinata",
          "3D on the web with three.js / react-three-fiber — the NogglesRail above is the model from gnars.com, lazy-loaded so it stays off other routes",
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
    liveTag: "◆ live · louzoshi.eth",
    notePre: "> This grid uses sample data. To display real NFTs, wire the ",
    noteBold: "louzoshi.eth",
    notePost:
      " wallet to an API (Alchemy / OpenSea / Zora) — the layout is ready to receive items dynamically.",
    liveNotePre: "> Pulled live from the ",
    liveNotePost:
      " wallet via Alchemy, refreshed hourly. Click a piece to view it on OpenSea.",
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
    builtOnHive: "Feito na Hive",
    builtOnNouns: "Feito com Nouns",
    dragHint: "arraste pra girar ⌐◨-◨",
    prsLabel: "Pull requests (merged)",
    learnedLabel: "O que eu aprendi",
    evidenceLabel: "Evidências",
    evidenceHint: "Screenshots e GIFs do trabalho.",
    evidenceEmpty: "screenshot / gif",
    details: {
      skatehive: {
        overview:
          "Plataforma open-source internacional que conecta a comunidade do skate via web3. Construída sobre a Hive, permite que skatistas postem, ganhem e se organizem onchain.",
        points: [
          "Login multi-conta na Hive (estilo PeakD) — trocar de identidade sem reautenticar",
          "Deixei o swap onchain mais robusto: correção de chain-id e tratamento amigável de transação rejeitada",
          "Command palette global — report de bugs, comandos populares e modais redimensionáveis",
          "Onboarding guiado pra novos skatistas, e a doc do Mobile App (EN + PT-BR)",
        ],
        learned: [
          "Auth onchain: sessões multi-conta baseadas em chave, com o usuário dono das próprias chaves (Hive Keychain + dhive)",
          "O ciclo de vida de transação EVM com wagmi / viem — troca de chain-id, ERC-20 e txs rejeitadas / falhas",
          "UX web3 confiável mora nos unhappy paths — rede errada, assinatura rejeitada, upload falho",
          "Entregar de forma async numa comunidade open-source / DAO — PRs pequenos e revisáveis em produção",
        ],
      },
      "community-org": {
        overview:
          "Site sob encomenda para a Community Org, empresa de tecnologia que conecta comunidades e organizações. Construído solo, de ponta a ponta, e entregue ao cliente — este deploy é a demo ao vivo.",
        points: [
          "Construí o site inteiro do zero (0→1) com Vite, React e TypeScript",
          "Implementei um redesign completo via refatoração estruturada — novo sistema visual, mesmo produto",
          "Fluxos de conversão: modais de planos com contato via WhatsApp e agendamento Calendly",
          "Dark mode, animações on-scroll e UX mobile-first",
        ],
        learned: [
          "Ser dono de um produto de ponta a ponta — arquitetura, UI, deploy e meses de iteração",
          "Transformar um redesign em código: refatorar uma base funcionando sem quebrá-la",
          "UI focada em conversão — agendamento e canais de contato que transformam visita em lead",
        ],
      },
      gnars: {
        overview:
          "DAO de skate onchain no ecossistema Nouns. A Gnars financia skatistas e criadores por meio de uma tesouraria governada onchain.",
        points: [
          "Fluxo de envio de NFTs em propostas — multi-seleção de NFTs da tesouraria numa proposta onchain",
          "Melhorias na criação de propostas: descrição em Markdown, detecção de duplicadas e validação inline",
          "Migrei as imagens quebradas do arquivo pra IPFS / Pinata",
          "UI Nounish: noggles 3D no mobile, footer unificado e a TV interativa do hero",
        ],
        learned: [
          "Frontend de governança no protocolo Nouns: compor propostas onchain, incluindo transferência de NFTs da tesouraria",
          "Ler estado da DAO com wagmi / viem e renderizar propostas com segurança (Markdown, validação, dedupe)",
          "Mídia descentralizada: migrar e servir assets via IPFS / Pinata",
          "3D na web com three.js / react-three-fiber — o NogglesRail aí de cima é o modelo do gnars.com, carregado lazy pra não pesar nas outras rotas",
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
    liveTag: "◆ ao vivo · louzoshi.eth",
    notePre: "> Esta grade usa dados de exemplo. Para exibir NFTs reais, ligue a wallet ",
    noteBold: "louzoshi.eth",
    notePost:
      " a uma API (Alchemy / OpenSea / Zora) — o layout já está pronto para receber os itens dinamicamente.",
    liveNotePre: "> Puxado ao vivo da wallet ",
    liveNotePost:
      " via Alchemy, atualizado a cada hora. Clique numa peça para ver na OpenSea.",
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
