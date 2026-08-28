import type { JSX, ReactNode } from 'react';

export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-heading-20 text-[var(--ds-gray-1000)]">{title}</h2>
        {description ? (
          <p className="text-copy-16 text-[var(--ds-gray-900)]">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
