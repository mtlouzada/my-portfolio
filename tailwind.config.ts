import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        bg: "var(--bg)",
        elev: "var(--bg-elev)",
        card: "var(--bg-card)",
        fg: "var(--fg)",
        muted: "var(--fg-muted)",
        line: "var(--border)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
      },
      boxShadow: {
        elevated: "var(--shadow)",
      },
      borderRadius: {
        pill: "980px",
      },
    },
  },
  plugins: [],
};
export default config;
