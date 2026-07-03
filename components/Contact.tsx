import Reveal from "./Reveal";

const socials = [
  {
    label: "LinkedIn ↗",
    href: "https://www.linkedin.com/in/matheus-louzadaa/",
    primary: true,
  },
  // TODO: trocar 55SEUNUMERO pelo teu número (DDI+DDD+número, só dígitos, ex: 5521999998888)
  {
    label: "WhatsApp ↗",
    href: "https://wa.me/55SEUNUMERO?text=Ol%C3%A1%20Matheus%2C%20vi%20seu%20portf%C3%B3lio!",
    primary: false,
  },
  { label: "GitHub ↗", href: "https://github.com/mtlouzada", primary: false },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-20 py-[150px] px-6 border-t border-line text-center"
    >
      <Reveal className="max-w-[760px] mx-auto">
        <p className="label-mono">Contato</p>
        <h2 className="text-[clamp(40px,7.5vw,86px)] font-semibold tracking-[-0.035em] leading-[1.02] mt-6 text-fg">
          Vamos conversar.
        </h2>
        <p className="mt-7 text-[clamp(17px,2.4vw,21px)] leading-[1.55] text-muted max-w-[520px] mx-auto text-pretty">
          Me manda uma mensagem no LinkedIn ou no WhatsApp — respondo por lá. E se
          curtir o trabalho, bora trocar um follow no GitHub.
        </p>
        <div className="flex gap-3 justify-center flex-wrap mt-[46px]">
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                s.primary
                  ? "px-7 py-3 rounded-pill bg-accent text-white font-medium text-[15px] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(91,91,214,0.55)]"
                  : "px-[22px] py-3 rounded-pill border border-line text-fg text-[15px] transition-all duration-300 hover:bg-elev hover:-translate-y-0.5"
              }
            >
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
