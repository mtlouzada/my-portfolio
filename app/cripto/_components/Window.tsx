import type { CSSProperties, ReactNode } from "react";

type WindowProps = {
  title: string;
  accent?: string; // css var name, e.g. "--c-blue"
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
};

/** Fake retro-OS window frame with a title bar + controls. */
export default function Window({
  title,
  accent,
  className = "",
  bodyClassName = "",
  children,
}: WindowProps) {
  const style = accent
    ? ({ ["--win-accent" as string]: `var(${accent})` } as CSSProperties)
    : undefined;

  return (
    <div className={`win ${className}`} style={style}>
      <div className="win-bar">
        <span className="truncate">{title}</span>
        <span className="win-ctrls" aria-hidden>
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
