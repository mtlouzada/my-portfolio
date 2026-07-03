type Props = { className?: string };

/** Ethereum diamond as pure SVG with an iridescent gradient.
   Facet opacities recreate the classic 3D-faceted look. */
export default function EthLogo({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 256 417"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ethereum"
    >
      <defs>
        <linearGradient id="eth-irid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="28%" stopColor="#818cf8" />
          <stop offset="52%" stopColor="#c084fc" />
          <stop offset="74%" stopColor="#f0abfc" />
          <stop offset="100%" stopColor="#5eead4" />
        </linearGradient>
      </defs>
      <g fill="url(#eth-irid)">
        <polygon
          opacity="0.7"
          points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
        />
        <polygon points="127.962 0 0 212.32 127.962 287.959 127.962 154.158" />
        <polygon
          opacity="0.7"
          points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
        />
        <polygon points="127.962 416.9052 127.962 312.1852 0 236.5852" />
        <polygon
          opacity="0.45"
          points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
        />
        <polygon
          opacity="0.6"
          points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
        />
      </g>
    </svg>
  );
}
