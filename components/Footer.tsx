export default function Footer() {
  return (
    <footer className="border-t border-line py-[34px] px-6">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between flex-wrap gap-3 font-mono text-[13px] text-muted">
        <span>Matheus Louzada — Brasil</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
