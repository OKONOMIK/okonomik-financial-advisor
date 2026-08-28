import type { JSX } from 'react';

export function Logo({ height = 22 }: { height?: number }): JSX.Element {
  return (
    <span
      className="inline-flex items-center gap-2"
      style={{ height }}
      aria-hidden="true"
    >
      <span
        className="inline-flex items-center justify-center rounded-md"
        style={{
          height,
          width: height,
          background:
            'linear-gradient(135deg, var(--ds-amber-700), var(--ds-amber-900))',
          boxShadow: 'var(--ds-shadow-border)',
        }}
      >
        <span
          className="font-mono font-semibold text-[var(--ds-background-100)]"
          style={{ fontSize: height * 0.5, lineHeight: 1 }}
        >
          O
        </span>
      </span>
      <span
        className="font-semibold tracking-tight text-[var(--ds-gray-1000)]"
        style={{ fontSize: height * 0.82, lineHeight: 1 }}
      >
        OKONOMIK
      </span>
    </span>
  );
}
