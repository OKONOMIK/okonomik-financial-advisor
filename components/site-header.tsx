import type { JSX } from 'react';
import { LogoVercel } from '@vercel/geistcn-assets/logos';
import { Badge } from '@vercel/geistcn/components/badge';
import { ButtonLink } from '@vercel/geistcn/components/button-link';

export function SiteHeader(): JSX.Element {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--ds-gray-alpha-400)] bg-[var(--ds-background-100)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <div className="flex items-center gap-3">
          <LogoVercel height={20} aria-label="Vercel" />
          <Badge variant="gray" size="sm">
            Geist
          </Badge>
        </div>
        <ButtonLink
          href="https://vercel.com/geist"
          variant="secondary"
          size="small"
        >
          Documentation
        </ButtonLink>
      </div>
    </header>
  );
}
