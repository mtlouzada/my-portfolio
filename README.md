<div align="center">

# Matheus Louzada — Portfólio

Portfólio pessoal de um **desenvolvedor fullstack .NET / React**, construído com Next.js 14.
Design minimalista com tema claro/escuro, animações suaves e layout totalmente responsivo.

![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white)

</div>

---

## ✨ Preview

| ☀️ Tema claro | 🌙 Tema escuro |
| :---: | :---: |
| ![Tela inicial — claro](docs/screenshots/hero-light.png) | ![Tela inicial — escuro](docs/screenshots/hero-dark.png) |

<div align="center">

### Responsivo

<img src="docs/screenshots/mobile-dark.png" alt="Mobile" width="240" />

</div>

---

## 🚀 Funcionalidades

- 🌗 **Tema claro/escuro** — alternância com persistência no `localStorage` e detecção da preferência do sistema, sem flash de tela na carga
- 🎬 **Animações de reveal** — seções surgem suavemente conforme o scroll (`IntersectionObserver`), respeitando `prefers-reduced-motion`
- 📱 **Totalmente responsivo** — do desktop ao mobile, com menu hambúrguer
- ⚡ **Imagens otimizadas** — via `next/image`
- 🔤 **Tipografia Geist** — carregada localmente com `next/font` (zero layout shift)
- 🎨 **Design tokens em CSS variables** — paleta consistente entre os temas

---

## 🛠️ Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| UI | [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) |
| Estilo | [Tailwind CSS](https://tailwindcss.com) + CSS variables |
| Fontes | [Geist](https://vercel.com/font) (Sans + Mono) |
| Gerenciador | [pnpm](https://pnpm.io) |

---

## 📂 Estrutura

```
my-portfolio/
├── app/
│   ├── layout.tsx        # Layout raiz + script de tema (anti-flash)
│   ├── page.tsx          # Composição das seções
│   ├── globals.css       # Tokens de tema (claro/escuro) e estilos base
│   └── fonts/            # Geist Sans / Mono (.woff)
├── components/
│   ├── Navbar.tsx        # Navegação + toggle de tema + menu mobile
│   ├── Hero.tsx          # Apresentação
│   ├── About.tsx         # Sobre + skills
│   ├── Projects.tsx      # Projetos em destaque + autorais
│   ├── Contact.tsx       # Chamada de contato
│   ├── Footer.tsx
│   └── Reveal.tsx        # Wrapper de animação no scroll
├── lib/
│   └── useTheme.ts       # Hook de alternância de tema
└── public/imgs/          # Imagens e fotos
```

---

## 🧑‍💻 Rodando localmente

> Requer [Node.js 18+](https://nodejs.org) e [pnpm](https://pnpm.io/installation).

```bash
# 1. Clone o repositório
git clone https://github.com/mtlouzada/my-portfolio.git
cd my-portfolio

# 2. Instale as dependências
pnpm install

# 3. Inicie o servidor de desenvolvimento
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Outros comandos

```bash
pnpm build   # build de produção
pnpm start   # roda o build de produção
pnpm lint    # checagem de lint
```

---

## 🌐 Deploy

O deploy recomendado é na [**Vercel**](https://vercel.com/new) (criadores do Next.js): basta importar o repositório — o framework e o pnpm são detectados automaticamente, e cada `push` na `master` publica uma nova versão.

---

## 📫 Contato

- **E-mail:** louzoshi.eth@gmail.com
- **GitHub:** [@mtlouzada](https://github.com/mtlouzada)
- **LinkedIn:** [matheus-louzadaa](https://www.linkedin.com/in/matheus-louzadaa/)

<div align="center">
<sub>Feito com Next.js · Matheus Louzada — Brasil</sub>
</div>
