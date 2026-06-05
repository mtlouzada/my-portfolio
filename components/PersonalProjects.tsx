import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Gestão de Tarefas",
    status: "Em desenvolvimento",
    image: "/imgs/bg-tratada.png",
    href: "https://github.com/mtlouzada/fullstack-challenge",
    stack: ".NET · React",
  },
  {
    title: "Gestor de Finanças",
    status: "Em desenvolvimento",
    image: "/imgs/bg4.png",
    href: "https://github.com/mtlouzada/Trust-Finance",
    stack: ".NET · React",
  },
  {
    title: "Bots & Agentes",
    status: "Em desenvolvimento",
    image: "/imgs/bg5.png",
    href: "https://github.com/mtlouzada/bot-discord",
    stack: "Node.js · Discord API",
  },
];

export default function PersonalProjects() {
  return (
    <section className="py-24 border-b border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="section-label">Autodidata</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-16">
          Projetos Autorais
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card group block"
            >
              <div className="relative aspect-square overflow-hidden bg-[#111]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-[#888] mb-1">
                    {item.stack}
                  </p>
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                  <p className="text-[#666] text-xs mt-1">{item.status}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
