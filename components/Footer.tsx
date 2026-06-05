export default function Footer() {
  return (
    <footer id="contato" className="py-16 border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <span className="section-label">Contato</span>
            <a
              href="mailto:louzoshi.eth@gmail.com"
              className="text-2xl font-bold text-white hover:text-[#888] transition-colors tracking-tight"
            >
              louzoshi.eth@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/mtlouzada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-[#555] hover:text-white transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-louzadaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-[#555] hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://peakd.com/@louzoshi/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-[#555] hover:text-white transition-colors font-mono"
            >
              ⌐◨-◨ ↗
            </a>
          </div>
        </div>

        <div className="divider mt-12 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-mono text-[11px] text-[#333] tracking-widest uppercase">
            Matheus Louzada — Brasil
          </p>
          <p className="font-mono text-[11px] text-[#333] tracking-widest">
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
