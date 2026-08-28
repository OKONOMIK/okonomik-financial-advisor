import type { JSX } from 'react';

const ROWS: { cls: string; label: string }[] = [
  { cls: 'text-heading-48', label: 'Heading 48' },
  { cls: 'text-heading-32', label: 'Heading 32' },
  { cls: 'text-heading-24', label: 'Heading 24' },
  { cls: 'text-heading-20', label: 'Heading 20' },
  { cls: 'text-copy-16', label: 'Copy 16' },
  { cls: 'text-copy-14', label: 'Copy 14' },
  { cls: 'text-label-13', label: 'Label 13' },
];

export function TypeScale(): JSX.Element {
  return (
    <div className="flex flex-col divide-y divide-[var(--ds-gray-alpha-400)]">
      {ROWS.map((row) => (
        <div
          key={row.cls}
          className="flex items-baseline justify-between gap-6 py-3"
        >
          <span
            className={`${row.cls} truncate text-[var(--ds-gray-1000)]`}
          >
            The quick brown fox
          </span>
          <span className="shrink-0 text-label-12 text-[var(--ds-gray-700)] font-mono">
            {row.label}
          </span>
        </div>
      ))}
    </div>
  );
}
