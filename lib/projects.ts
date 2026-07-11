/* Shared data for the corporate featured projects — used by the home cards
   and the /projects/[slug] case-study pages. Translatable copy lives in
   lib/dictionaries.ts under projects.descriptions / projects.detail. */

export type ProjectKey = "wilbor" | "trustFinance" | "domainInspector";

export type Project = {
  slug: string;
  key: ProjectKey; // dictionary key
  title: string;
  tag: string; // short category chip (not translated)
  image: string; // card + case hero
  gallery?: { src: string; alt: string }[];
  liveHref?: string;
  repoHref?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "wilbor",
    key: "wilbor",
    title: "Wilbor Studio",
    tag: "client work",
    image: "/imgs/wilbor-studio.png",
    gallery: [
      { src: "/imgs/wilbor-studio.png", alt: "Wilbor Studio — public portfolio grid" },
      { src: "/imgs/wilbor-dashboard.png", alt: "Admin dashboard — authenticated login" },
    ],
    liveHref: "https://www.wilbor.studio/projects",
    repoHref: "https://github.com/Wilbor-Studio",
    stack: ["Next.js 15", "React 19", "TypeScript", "Vercel"],
  },
  {
    slug: "trust-finance",
    key: "trustFinance",
    title: "Trust Finance",
    tag: "fullstack .NET",
    image: "/imgs/trust-finance-og.png",
    repoHref: "https://github.com/mtlouzada/Trust-Finance",
    stack: [
      "C#",
      ".NET 8",
      "ASP.NET Core",
      "SQL Server",
      "Entity Framework",
      "Docker",
      "GitHub Actions",
      "React",
    ],
  },
  {
    slug: "domain-inspector",
    key: "domainInspector",
    title: "Domain Inspector",
    tag: "tech challenge",
    image: "/imgs/domain-inspector-og.png",
    repoHref: "https://github.com/mtlouzada/domain-inspector",
    stack: ["C#", "ASP.NET Core", "MySQL", "Entity Framework", "Webpack"],
  },
];
