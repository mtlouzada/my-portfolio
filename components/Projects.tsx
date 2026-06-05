import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "SkateHive",
    description:
      "Projeto open source internacional focado em conectar a comunidade do skate por meio da tecnologia. Contribuo ativamente no desenvolvimento.",
    image: "/imgs/sk8hive-filter2.png",
    href: "https://skatehive.app/",
    tag: "open-source",
  },
  {
    title: "Community Org",
    description:
      "Site da Community Org, empresa de tecnologia focada em conectar comunidades e organizações por meio de soluções digitais.",
    image: "/imgs/cmo-printfilter.png",
    href: "https://community-org-beta.vercel.app/",
    tag: "web",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 border-b border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="section-label">open-source</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-16">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article key={p.title} className="card group">
              <div className="relative aspect-video overflow-hidden bg-[#111]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#444] mb-2 block">
                  {p.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed mb-6">
                  {p.description}
                </p>
                <Link
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Ver Projeto ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
