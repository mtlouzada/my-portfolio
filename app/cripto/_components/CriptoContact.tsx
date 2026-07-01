"use client";

import { useState } from "react";
import Window from "./Window";

const EMAIL = "matheuslouzadaa@gmail.com";

export default function CriptoContact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [msg, setMsg] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato onchain — ${name || "sem nome"}`);
    const body = encodeURIComponent(
      `${msg}\n\n— ${name}\n${from}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contato"
      className="scroll-mt-24 border-b-2 border-[var(--c-ink)] bg-[var(--c-teal)]"
    >
      <div className="max-w-[1160px] mx-auto px-5 py-20 grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <div className="text-[var(--c-white)]">
          <p className="c-label mb-3 !text-[var(--c-white)]/70">
            [ 05 — new_message.exe ]
          </p>
          <h2 className="c-display text-[clamp(30px,5.4vw,58px)]">
            Bora
            <br />
            construir?
          </h2>
          <p className="c-mono text-[13px] leading-[1.7] mt-5 max-w-[360px] text-[var(--c-white)]/80">
            Colaboração, contribuição ou uma ideia onchain — respondo tudo que
            for sério.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="https://github.com/mtlouzada"
              target="_blank"
              rel="noopener noreferrer"
              className="c-tag !border-[var(--c-white)] !text-[var(--c-white)] !bg-transparent"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-louzadaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="c-tag !border-[var(--c-white)] !text-[var(--c-white)] !bg-transparent"
            >
              LINKEDIN
            </a>
            <span className="c-tag !border-[var(--c-lime)] !text-[var(--c-lime)] !bg-transparent">
              LOUZOSHI.ETH
            </span>
          </div>
        </div>

        <Window
          title="new_message.exe — LOUZOSHI"
          accent="--c-red"
          bodyClassName="p-6 bg-[var(--c-paper)]"
        >
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="c-field"
                placeholder="nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="c-field"
                type="email"
                placeholder="you@email.com"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <textarea
              className="c-field min-h-[110px] resize-y"
              placeholder="conta a ideia..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <button type="submit" className="c-btn c-btn-red self-start">
              Enviar mensagem →
            </button>
          </form>
        </Window>
      </div>
    </section>
  );
}
