import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="sobre"
      className="min-h-screen pt-14 flex items-center border-b border-[#1a1a1a]"
    >
      <div className="max-w-5xl mx-auto px-6 w-full py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="animate-fade-in">
            <span className="section-label">Desenvolvedor Fullstack</span>

            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter text-white mb-10">
              Matheus
              <br />
              Louzada
            </h1>

            <div className="divider mb-10" />

            <p className="text-[#777] text-sm leading-relaxed max-w-md">
              Fullstack .NET com C# e ASP.NET Core — APIs REST escaláveis com
              SQL Server e Entity Framework. No front-end, React e TypeScript
              com fluxo completo UI → API → Banco. Ambientes ágeis, testes
              automatizados e CI/CD.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://github.com/mtlouzada"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/matheus-louzadaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-60 h-60 md:w-72 md:h-72">
              <Image
                src="/imgs/newphoto.jpg"
                alt="Matheus Louzada"
                fill
                className="rounded-full object-cover grayscale"
                priority
              />
              <div className="absolute inset-0 rounded-full border border-[#222]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
