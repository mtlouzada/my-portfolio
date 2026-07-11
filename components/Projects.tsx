"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/useLanguage";
import { projects } from "@/lib/projects";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="projetos"
      className="scroll-mt-20 py-28 px-6 bg-elev border-t border-line transition-colors duration-[450ms]"
    >
      <div className="max-w-[1120px] mx-auto">
        <Reveal className="mb-[72px]">
          <p className="label-mono mb-4">{t.projects.label}</p>
          <h2 className="text-[clamp(34px,5.5vw,64px)] font-semibold tracking-[-0.03em] leading-[1.02] text-fg">
            {t.projects.title}
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
              <Link
                href={`/projects/${p.slug}`}
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
              </Link>
            </div>

            <div className="flex-1 min-w-0 basis-[320px]">
              <span className="inline-block font-mono text-xs tracking-[0.03em] text-accent bg-accent-soft px-[11px] py-1.5 rounded-pill">
                {p.tag}
              </span>
              <h3 className="text-[clamp(26px,3vw,38px)] font-semibold tracking-[-0.02em] mt-[18px] text-fg">
                {p.title}
              </h3>
              <p className="mt-4 text-[17px] leading-[1.6] text-muted max-w-[440px]">
                {t.projects.descriptions[p.key]}
              </p>
              <Link
                href={`/projects/${p.slug}`}
                className="inline-flex items-center gap-1.5 text-fg font-medium text-[15px] mt-[26px] hover:text-accent transition-colors"
              >
                {t.projects.viewProject} <span className="text-[13px]">→</span>
              </Link>
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
    key: "blog" as const,
    tag: "REST API",
    stack: "ASP.NET Core · JWT · SQL Server",
    href: "https://github.com/mtlouzada/Blog",
  },
  {
    key: "tasks" as const,
    tag: "MVC",
    stack: ".NET · ASP.NET MVC",
    href: "https://github.com/mtlouzada/task-manager",
  },
  {
    key: "auth" as const,
    tag: "auth",
    stack: "TypeScript · Google OAuth",
    href: "https://github.com/mtlouzada/secureSign",
  },
];

function PersonalProjects() {
  const { t } = useLanguage();

  return (
    <Reveal className="mt-[104px]">
      <p className="font-mono text-[13px] tracking-[0.04em] text-muted mb-3.5">
        {t.projects.personal.label}
      </p>
      <h3 className="text-[clamp(24px,3.4vw,38px)] font-semibold tracking-[-0.02em] mb-9 text-fg">
        {t.projects.personal.title}
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(258px,1fr))] gap-[18px]">
        {personal.map((item) => (
          <a
            key={item.key}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-7 rounded-[20px] bg-card border border-line transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-elevated"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[0.03em] text-muted px-[9px] py-[5px] rounded-pill border border-line">
                {item.tag}
              </span>
              <span className="text-muted text-sm">↗</span>
            </div>
            <h4 className="text-[21px] font-semibold tracking-[-0.01em] mt-[26px] mb-2 text-fg">
              {t.projects.personal.titles[item.key]}
            </h4>
            <p className="font-mono text-[13px] text-muted">{item.stack}</p>
          </a>
        ))}
      </div>
    </Reveal>
  );
}
