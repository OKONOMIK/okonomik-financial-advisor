import type { JSX } from 'react';

const SCALES: { label: string; prefix: string }[] = [
  { label: 'Gray', prefix: '--ds-gray' },
  { label: 'Blue', prefix: '--ds-blue' },
  { label: 'Red', prefix: '--ds-red' },
  { label: 'Amber', prefix: '--ds-amber' },
  { label: 'Green', prefix: '--ds-green' },
  { label: 'Purple', prefix: '--ds-purple' },
];

const STEPS = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

export function Palette(): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      {SCALES.map((scale) => (
        <div key={scale.prefix} className="flex flex-col gap-1.5">
          <span className="text-label-13 text-[var(--ds-gray-900)]">
            {scale.label}
          </span>
          <div className="flex overflow-hidden rounded-md shadow-[var(--ds-shadow-border)]">
            {STEPS.map((step) => (
              <div
                key={step}
                className="h-10 flex-1"
                style={{ background: `var(${scale.prefix}-${step})` }}
                title={`${scale.prefix}-${step}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
