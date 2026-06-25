import Reveal from "./Reveal";

const socials = [
  { label: "GitHub ↗", href: "https://github.com/mtlouzada", mono: false },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/matheus-louzadaa/", mono: false },
  { label: "⌐◨-◨ ↗", href: "https://peakd.com/@louzoshi/posts", mono: true },
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
        <a
          href="mailto:louzoshi.eth@gmail.com"
          className="inline-block mt-[34px] text-[clamp(20px,3.6vw,38px)] font-semibold tracking-[-0.02em] text-accent hover:opacity-70 transition-opacity"
        >
          louzoshi.eth@gmail.com
        </a>
        <div className="flex gap-3 justify-center flex-wrap mt-[46px]">
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-[22px] py-3 rounded-pill border border-line text-fg text-[15px] hover:bg-elev transition-colors ${
                s.mono ? "font-mono" : ""
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
