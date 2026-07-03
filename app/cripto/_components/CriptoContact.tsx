import Window from "./Window";
import { contactSocials } from "../_data";

const fcHandle =
  contactSocials.find((s) => s.label === "Farcaster")?.handle.replace(/^@/, "") ??
  "louzoshi";

// Opens the Warpcast composer with a message already mentioning me —
// the onchain equivalent of the old contact form.
const castHref = `https://warpcast.com/~/compose?text=${encodeURIComponent(
  `gm @${fcHandle} 👋`
)}`;

export default function CriptoContact() {
  return (
    <section
      id="contato"
      className="scroll-mt-24 border-b-2 border-[var(--c-ink)] bg-[var(--c-teal)]"
    >
      <div className="max-w-[1160px] mx-auto px-5 py-20 grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <div className="text-[var(--c-white)]">
          <p className="c-label mb-3 !text-[var(--c-white)]/70">
            [ 05 — reach_out.sh ]
          </p>
          <h2 className="c-display text-[clamp(30px,5.4vw,58px)]">
            Bora
            <br />
            construir?
          </h2>
          <p className="c-mono text-[13px] leading-[1.7] mt-5 max-w-[360px] text-[var(--c-white)]/80">
            Colaboração, contribuição ou uma ideia onchain? Me acha no Farcaster —
            ou em qualquer um dos canais aí do lado.
          </p>
          <span className="c-tag mt-7 !border-[var(--c-lime)] !text-[var(--c-lime)] !bg-transparent">
            ◆ LOUZOSHI.ETH
          </span>
        </div>

        <Window
          title="new_message.exe — LOUZOSHI"
          accent="--c-red"
          bodyClassName="p-6 bg-[var(--c-void)]"
        >
          <div className="c-mono text-[12.5px] leading-[1.85] text-[var(--c-white)]">
            <p>
              <span className="text-[var(--c-lime)]">&gt;</span> whoami
            </p>
            <p className="text-[var(--c-white)]/60 mb-3">louzoshi.eth</p>

            <p>
              <span className="text-[var(--c-lime)]">&gt;</span> socials --list
            </p>
            <div className="mt-1 mb-3">
              {contactSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 py-0.5 hover:text-[var(--c-lime)] transition-colors"
                >
                  <span className="w-[92px] shrink-0 text-[var(--c-white)]/40 lowercase">
                    {s.label}
                  </span>
                  <span className="text-[var(--c-white)]/85 group-hover:text-[var(--c-lime)] transition-colors">
                    {s.handle}
                  </span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <p className="flex items-center">
              <span className="text-[var(--c-lime)]">&gt;</span>
              <span className="ml-2">reach_out</span>
              <span className="blink" />
            </p>
          </div>

          <a
            href={castHref}
            target="_blank"
            rel="noopener noreferrer"
            className="c-btn c-btn-red mt-5"
          >
            Cast @{fcHandle} ↗
          </a>
        </Window>
      </div>
    </section>
  );
}
