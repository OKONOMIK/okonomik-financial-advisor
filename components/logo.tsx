import type { JSX } from 'react';

export function Logo({ height = 34 }: { height?: number }): JSX.Element {
  return (
    <span
      className="inline-flex items-center overflow-hidden rounded-lg"
      style={{
        height,
        width: height * 2.7,
        background: '#2e2f37',
        boxShadow: 'var(--ds-shadow-border)',
      }}
      aria-hidden="true"
    >
      <img
        src="/okonomik-logo.png"
        alt=""
        className="h-full w-full object-cover"
        style={{ transform: 'scale(1.28)' }}
      />
    </span>
  );
}
