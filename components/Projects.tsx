import Image from "next/image";
import Reveal from "./Reveal";

const projects = [
  {
    title: "SkateHive",
    tag: "open-source",
    image: "/imgs/sk8hive-filter2.png",
    href: "https://skatehive.app/",
    description:
      "Projeto open source internacional focado em conectar a comunidade do skate por meio da tecnologia. Contribuo ativamente no desenvolvimento.",
  },
  {
    title: "Community Org",
    tag: "web",
    image: "/imgs/cmo-printfilter.png",
    href: "https://community-org-beta.vercel.app/",
    description:
      "Site da Community Org, empresa de tecnologia focada em conectar comunidades e organizações por meio de soluções digitais.",
  },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="scroll-mt-20 py-28 px-6 bg-elev border-t border-line transition-colors duration-[450ms]"
    >
      <div className="max-w-[1120px] mx-auto">
        <Reveal className="mb-[72px]">
          <p className="label-mono mb-4">Trabalho em destaque</p>
          <h2 className="text-[clamp(34px,5.5vw,64px)] font-semibold tracking-[-0.03em] leading-[1.02] text-fg">
            Projetos
          </h2>
        </Reveal>

        {projects.map((p, i) => (
          <Reveal
            key={p.title}
            className={`flex gap-[52px] items-center mb-24 last:mb-0 max-[820px]:flex-col ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 min-w-0 basis-[400px] w-full">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl overflow-hidden shadow-elevated transition-transform duration-500 hover:-translate-y-1.5"
              >
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 820px) 100vw, 560px"
                    className="object-cover"
                  />
                </div>
              </a>
            </div>

            <div className="flex-1 min-w-0 basis-[320px]">
              <span className="inline-block font-mono text-xs tracking-[0.03em] text-accent bg-accent-soft px-[11px] py-1.5 rounded-pill">
                {p.tag}
              </span>
              <h3 className="text-[clamp(26px,3vw,38px)] font-semibold tracking-[-0.02em] mt-[18px] text-fg">
                {p.title}
              </h3>
              <p className="mt-4 text-[17px] leading-[1.6] text-muted max-w-[440px]">
                {p.description}
              </p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-fg font-medium text-[15px] mt-[26px] hover:text-accent transition-colors"
              >
                Ver projeto <span className="text-[13px]">↗</span>
              </a>
            </div>
          </Reveal>
        ))}

        <PersonalProjects />
      </div>
    </section>
  );
}

const personal = [
  {
    title: "Gestor de Finanças",
    stack: ".NET · React",
    href: "https://github.com/mtlouzada/Trust-Finance",
  },
  {
    title: "Gestão de Tarefas",
    stack: ".NET · React",
    href: "https://github.com/mtlouzada/fullstack-challenge",
  },
  {
    title: "Bots & Agentes",
    stack: "Node.js · Discord API",
    href: "https://github.com/mtlouzada/bot-discord",
  },
];

function PersonalProjects() {
  return (
    <Reveal className="mt-[104px]">
      <p className="font-mono text-[13px] tracking-[0.04em] text-muted mb-3.5">
        Autodidata
      </p>
      <h3 className="text-[clamp(24px,3.4vw,38px)] font-semibold tracking-[-0.02em] mb-9 text-fg">
        Projetos autorais
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(258px,1fr))] gap-[18px]">
        {personal.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-7 rounded-[20px] bg-card border border-line transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-elevated"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[0.03em] text-muted px-[9px] py-[5px] rounded-pill border border-line">
                Em desenvolvimento
              </span>
              <span className="text-muted text-sm">↗</span>
            </div>
            <h4 className="text-[21px] font-semibold tracking-[-0.01em] mt-[26px] mb-2 text-fg">
              {item.title}
            </h4>
            <p className="font-mono text-[13px] text-muted">{item.stack}</p>
          </a>
        ))}
      </div>
    </Reveal>
  );
}
