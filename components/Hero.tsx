import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="max-w-[1120px] mx-auto px-6 pt-36 pb-28">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
        {/* text — right on desktop */}
        <div className="flex-1 min-w-0 text-center md:text-left">
          <Reveal delay={0.04}>
            <p className="label-mono">Desenvolvedor Fullstack</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-6">
            <h1 className="text-[clamp(48px,8vw,92px)] leading-[1.02] tracking-[-0.04em] font-semibold text-fg">
              Matheus
              <br />
              Louzada
            </h1>
          </Reveal>

          <Reveal delay={0.18} className="mt-7">
            <p className="max-w-[540px] mx-auto md:mx-0 text-[clamp(16px,2vw,20px)] leading-[1.55] text-muted text-pretty">
              Fullstack .NET com C# e ASP.NET Core no back-end — APIs REST
              escaláveis com SQL Server e Entity Framework. React e TypeScript no
              front-end, cobrindo o fluxo completo da interface à API e ao banco.
            </p>
          </Reveal>

          <Reveal delay={0.26} className="mt-9">
            <div className="flex flex-wrap gap-3.5 justify-center md:justify-start max-[480px]:flex-col max-[480px]:items-stretch">
              <a
                href="#projetos"
                className="px-7 py-3.5 rounded-pill bg-accent text-white font-medium text-[15px] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(91,91,214,0.55)]"
              >
                Ver projetos
              </a>
              <a
                href="https://github.com/mtlouzada"
                target="_blank"
                rel="noopener noreferrer"
                className="px-[22px] py-3.5 rounded-pill border border-line text-fg text-[15px] transition-all duration-300 hover:bg-elev hover:-translate-y-0.5"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/matheus-louzadaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-[22px] py-3.5 rounded-pill border border-line text-fg text-[15px] transition-all duration-300 hover:bg-elev hover:-translate-y-0.5"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>
        </div>

        {/* photo — left on desktop */}
        <Reveal delay={0.34} className="w-full max-w-[420px] md:max-w-[460px] shrink-0">
          <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden shadow-elevated">
            <Image
              src="/imgs/newphoto.jpg"
              alt="Matheus Louzada"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 460px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
