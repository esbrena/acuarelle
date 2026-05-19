type SocialIconProps = {
  label: string;
  className?: string;
};

export function SocialIcon({ label, className }: SocialIconProps) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
        <rect width="16" height="16" x="4" y="4" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M6.75 8.7H3.9v11.1h2.85V8.7ZM5.32 4.2a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3Zm14.78 9.25c0-3.05-1.62-5.02-4.2-5.02a3.45 3.45 0 0 0-3.08 1.7V8.7H10.1v11.1h2.85v-5.85c0-1.54.82-2.62 2.16-2.62 1.27 0 2.13.95 2.13 2.62v5.85h2.86v-6.35Z" />
      </svg>
    );
  }

  return <span className="text-[0.65rem] uppercase">{label.slice(0, 2)}</span>;
}
