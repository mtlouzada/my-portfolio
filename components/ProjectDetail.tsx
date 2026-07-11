"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/useLanguage";
import type { Project } from "@/lib/projects";

/* Case-study page for a featured corporate project.
   Deliberately sober — no flavors or effects like /cripto: the page itself
   should read like professional documentation. */

export default function ProjectDetail({ project }: { project: Project }) {
  const { t } = useLanguage();
  const d = t.projects.detail;
  const c = d.cases[project.key];

  return (
    <>
      <Navbar />
      <main className="pt-[58px]">
        <article className="max-w-[840px] mx-auto px-6 py-16 md:py-24">
          <Reveal>
            <Link
              href="/#projetos"
              className="font-mono text-[13px] tracking-[0.04em] text-muted hover:text-accent transition-colors"
            >
              {d.back}
            </Link>

            <div className="mt-8">
              <span className="inline-block font-mono text-xs tracking-[0.03em] text-accent bg-accent-soft px-[11px] py-1.5 rounded-pill">
                {project.tag}
              </span>
              <h1 className="text-[clamp(34px,6vw,58px)] font-semibold tracking-[-0.03em] leading-[1.05] mt-4 text-fg">
                {project.title}
              </h1>
            </div>
          </Reveal>

          {/* context — the lede */}
          <Reveal className="mt-8">
            <p className="label-mono mb-3">{d.contextLabel}</p>
            <p className="text-[18px] leading-[1.7] text-muted max-w-[680px]">
              {c.context}
            </p>
          </Reveal>

          {/* external links */}
          <Reveal className="mt-8 flex flex-wrap gap-3">
            {project.liveHref && (
              <a
                href={project.liveHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-pill bg-fg text-bg text-[15px] font-medium hover:opacity-90 transition-opacity"
              >
                {d.liveCta}
              </a>
            )}
            {project.repoHref && (
              <a
                href={project.repoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-pill border border-line text-fg text-[15px] font-medium hover:border-accent hover:text-accent transition-colors"
              >
                {d.codeCta}
              </a>
            )}
          </Reveal>

          {/* hero image */}
          <Reveal className="mt-12">
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-elevated border border-line">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 900px) 100vw, 840px"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          {/* what I did */}
          <Reveal className="mt-16">
            <p className="label-mono mb-5">{d.roleLabel}</p>
            <ul className="flex flex-col gap-4 max-w-[680px]">
              {c.role.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-[16.5px] leading-[1.65] text-fg"
                >
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* stack */}
          <Reveal className="mt-14">
            <p className="label-mono mb-4">{d.stackLabel}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[13px] text-muted px-3 py-1.5 rounded-pill border border-line"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          {/* outcome */}
          <Reveal className="mt-14">
            <p className="label-mono mb-4">{d.outcomeLabel}</p>
            <p className="text-[17px] leading-[1.7] text-fg border-l-2 border-accent pl-5 max-w-[680px]">
              {c.outcome}
            </p>
          </Reveal>

          {/* gallery (only when there is more than the hero) */}
          {project.gallery && project.gallery.length > 1 && (
            <Reveal className="mt-16">
              <p className="label-mono mb-5">{d.galleryLabel}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.gallery.map((g) => (
                  <div
                    key={g.src}
                    className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-line shadow-elevated"
                  >
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {/* contact CTA — the reader just finished the case; right moment */}
          <Reveal className="mt-20">
            <div className="rounded-3xl border border-line bg-card p-8 md:p-10">
              <h2 className="text-[clamp(22px,3vw,30px)] font-semibold tracking-[-0.02em] text-fg">
                {d.contactTitle}
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-muted max-w-[520px]">
                {d.contactBody}
              </p>
              <Link
                href="/#contato"
                className="inline-flex items-center mt-6 px-5 py-2.5 rounded-pill bg-fg text-bg text-[15px] font-medium hover:opacity-90 transition-opacity"
              >
                {d.contactCta}
              </Link>
            </div>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
