export function Logo({ size = 26 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0, overflow: "visible" }}
    >
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <line x1="30" y1="8" x2="66" y2="8" opacity="0.5" />
        <line x1="22" y1="8" x2="26" y2="8" opacity="0.35" />
        <line x1="70" y1="8" x2="74" y2="8" opacity="0.35" />
      </g>
      <circle cx="48" cy="8" r="3.4" fill="currentColor" />
      <line x1="48" y1="14" x2="48" y2="50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 48 50 Q 30 50 30 64 L 48 86 L 66 64 Q 66 50 48 50 Z M 51 64 a 3 3 0 1 0 -6 0 a 3 3 0 1 0 6 0 Z" fill="currentColor" fillRule="evenodd" />
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.4">
        <line x1="6" y1="64" x2="22" y2="64" />
        <line x1="74" y1="64" x2="90" y2="64" />
      </g>
      <path d="M 22 70 A 40 40 0 0 1 74 70" fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="1 4" opacity="0.3" />
    </svg>
  );
}
