"use client";

import { useLanguage } from "@/lib/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line py-[34px] px-6">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between flex-wrap gap-3 font-mono text-[13px] text-muted">
        <span>{t.footer.tagline}</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
