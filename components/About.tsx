import Reveal from "./Reveal";

const groups = [
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
];

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-20 py-28 px-6 border-t border-line">
      <div className="max-w-[1120px] mx-auto">
        <Reveal>
          <p className="label-mono">Sobre</p>
        </Reveal>

        <Reveal delay={0.06} className="mt-7">
          <h2 className="text-[clamp(28px,4.2vw,48px)] font-semibold tracking-[-0.025em] leading-[1.14] max-w-[920px] text-fg text-balance">
            Construo aplicações fullstack do início ao fim — back-end robusto em
            .NET e front-end refinado em React, em ambientes ágeis com testes
            automatizados e CI/CD.
          </h2>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-7 mt-[72px]">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={0.04 + i * 0.08}>
              <p className="font-mono text-xs tracking-[0.04em] text-muted mb-[18px]">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-[7px] rounded-[9px] bg-elev border border-line font-mono text-[13px] text-fg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
