import type { ReactNode } from 'react';

const paths = {
  download: (
    <>
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6" />
      <path d="M9 14h6" />
      <path d="M9 17h4" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v6" />
      <path d="M8 7.5v.01" />
      <path d="M12 17v-6" />
      <path d="M12 13.5a2.5 2.5 0 0 1 5 0V17" />
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4 1.5-4-2-6-2.5" />
      <path d="M15 21v-3.5a3 3 0 0 0-.9-2.4c3-.3 6-1.5 6-6.6a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.6 1.4a12.4 12.4 0 0 0-6.4 0C6.1 1 5 1.3 5 1.3a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3.5 8.5c0 5.1 3 6.3 6 6.6a3 3 0 0 0-.9 2.4V21" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />,
  gauge: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12l4-4" />
      <path d="M12 3v2" />
      <path d="M3 12h2" />
      <path d="M19 12h2" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 2v20" />
      <path d="M4.9 4.9l14.2 14.2" />
      <path d="M2 12h20" />
      <path d="M19.1 4.9L4.9 19.1" />
    </>
  ),
  pickaxe: (
    <>
      <path d="M14 4c3 0 6 1.5 7 4-2.5-1-5-1-7 0z" />
      <path d="M14 4L4 20" />
      <path d="M3 21l2-2" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

/** Decorative stroke icon. Always aria-hidden: pair it with visible text. */
export function Icon({ name, size = 18, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
