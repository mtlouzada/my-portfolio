export type Lang = "en" | "pt";

const en = {
  nav: {
    links: [
      { label: "About", href: "#sobre" },
      { label: "Projects", href: "#projetos" },
      { label: "Contact", href: "#contato" },
    ],
    switchLang: "Mudar para português",
    toggleTheme: "Toggle theme",
    menu: "Menu",
  },
  hero: {
    role: "Fullstack Developer",
    description:
      "Fullstack .NET developer — C# and ASP.NET Core on the back end, building scalable REST APIs with SQL Server and Entity Framework. React and TypeScript on the front end, covering the full flow from UI to API to database.",
    viewProjects: "View projects",
  },
  about: {
    label: "About",
    headline:
      "I build fullstack applications end to end — robust .NET back ends and refined React front ends, in agile environments with automated testing and CI/CD.",
    groups: [
      {
        label: "BACK-END",
        items: ["C#", "ASP.NET Core", ".NET", "SQL Server", "Entity Framework", "REST APIs"],
      },
      {
        label: "FRONT-END",
        items: ["React", "TypeScript", "Next.js", "JavaScript", "HTML / CSS"],
      },
      {
        label: "PRACTICES",
        items: ["CI / CD", "Automated testing", "Git", "Agile methodologies"],
      },
    ],
  },
  projects: {
    label: "Featured work",
    title: "Projects",
    viewProject: "View project",
    descriptions: {
      skatehive:
        "International open source project focused on connecting the skateboarding community through technology. I contribute actively to its development.",
      communityOrg:
        "Website for Community Org, a tech company focused on connecting communities and organizations through digital solutions.",
    },
    personal: {
      label: "Self-taught",
      title: "Personal projects",
      inDevelopment: "In development",
      titles: {
        finance: "Finance Manager",
        tasks: "Task Manager",
        bots: "Bots & Agents",
      },
    },
  },
  contact: {
    label: "Contact",
    title: "Let's talk.",
    description:
      "Message me on LinkedIn or WhatsApp — that's where I reply. And if you like the work, let's connect on GitHub.",
    // TODO: trocar 55SEUNUMERO pelo número real (DDI+DDD+número, só dígitos)
    whatsappHref:
      "https://wa.me/55SEUNUMERO?text=Hi%20Matheus%2C%20I%20saw%20your%20portfolio!",
  },
  footer: {
    tagline: "Matheus Louzada — Brazil",
  },
};

export type Dictionary = typeof en;

const pt: Dictionary = {
  nav: {
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Projetos", href: "#projetos" },
      { label: "Contato", href: "#contato" },
    ],
    switchLang: "Switch to English",
    toggleTheme: "Alternar tema",
    menu: "Menu",
  },
  hero: {
    role: "Desenvolvedor Fullstack",
    description:
      "Fullstack .NET com C# e ASP.NET Core no back-end — APIs REST escaláveis com SQL Server e Entity Framework. React e TypeScript no front-end, cobrindo o fluxo completo da interface à API e ao banco.",
    viewProjects: "Ver projetos",
  },
  about: {
    label: "Sobre",
    headline:
      "Construo aplicações fullstack do início ao fim — back-end robusto em .NET e front-end refinado em React, em ambientes ágeis com testes automatizados e CI/CD.",
    groups: [
      {
        label: "BACK-END",
        items: ["C#", "ASP.NET Core", ".NET", "SQL Server", "Entity Framework", "APIs REST"],
      },
      {
        label: "FRONT-END",
        items: ["React", "TypeScript", "Next.js", "JavaScript", "HTML / CSS"],
      },
      {
        label: "PRÁTICAS",
        items: ["CI / CD", "Testes automatizados", "Git", "Metodologias ágeis"],
      },
    ],
  },
  projects: {
    label: "Trabalho em destaque",
    title: "Projetos",
    viewProject: "Ver projeto",
    descriptions: {
      skatehive:
        "Projeto open source internacional focado em conectar a comunidade do skate por meio da tecnologia. Contribuo ativamente no desenvolvimento.",
      communityOrg:
        "Site da Community Org, empresa de tecnologia focada em conectar comunidades e organizações por meio de soluções digitais.",
    },
    personal: {
      label: "Autodidata",
      title: "Projetos autorais",
      inDevelopment: "Em desenvolvimento",
      titles: {
        finance: "Gestor de Finanças",
        tasks: "Gestão de Tarefas",
        bots: "Bots & Agentes",
      },
    },
  },
  contact: {
    label: "Contato",
    title: "Vamos conversar.",
    description:
      "Me manda uma mensagem no LinkedIn ou no WhatsApp — respondo por lá. E se curtir o trabalho, bora trocar um follow no GitHub.",
    // TODO: trocar 55SEUNUMERO pelo número real (DDI+DDD+número, só dígitos)
    whatsappHref:
      "https://wa.me/55SEUNUMERO?text=Ol%C3%A1%20Matheus%2C%20vi%20seu%20portf%C3%B3lio!",
  },
  footer: {
    tagline: "Matheus Louzada — Brasil",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, pt };
