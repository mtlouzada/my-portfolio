import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="max-w-[1120px] mx-auto px-6 pt-40 pb-28 text-center"
    >
      <Reveal delay={0.04}>
        <p className="label-mono">Desenvolvedor Fullstack</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-7">
        <h1 className="text-[clamp(52px,9vw,116px)] leading-[1.01] tracking-[-0.04em] font-semibold text-fg">
          Matheus
          <br />
          Louzada
        </h1>
      </Reveal>

      <Reveal delay={0.18} className="mt-8">
        <p className="max-w-[660px] mx-auto text-[clamp(17px,2.2vw,21px)] leading-[1.55] text-muted text-pretty">
          Fullstack .NET com C# e ASP.NET Core no back-end — APIs REST
          escaláveis com SQL Server e Entity Framework. React e TypeScript no
          front-end, cobrindo o fluxo completo da interface à API e ao banco.
        </p>
      </Reveal>

      <Reveal delay={0.26} className="mt-10">
        <div className="flex flex-wrap gap-3.5 justify-center max-[480px]:flex-col max-[480px]:items-stretch">
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

      <Reveal delay={0.34} className="mt-20 max-w-[540px] mx-auto">
        <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden shadow-elevated">
          <Image
            src="/imgs/newphoto.jpg"
            alt="Matheus Louzada"
            fill
            priority
            sizes="(max-width: 600px) 100vw, 540px"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
