'use client';

import type { JSX } from 'react';
import { useState } from 'react';
import { Link, ButtonLink, IconMenu, IconCross } from '@/components/ui';
import { Logo } from '@/components/logo';

const NAV = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Rentenrechner', href: '#rechner' },
  { label: 'Edelmetalle', href: '#edelmetalle' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Kontakt', href: '#kontakt' },
];

export function SiteHeader(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--ds-gray-alpha-400)] bg-[var(--ds-background-100)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="#" className="flex items-center gap-2.5">
          <Logo height={30} />
          <span className="sr-only">OKONOMIK Startseite</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Hauptnavigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-copy-14 text-[var(--ds-gray-900)] hover:text-[var(--ds-gray-1000)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="#kontakt" variant="secondary" size="small">
            Termin vereinbaren
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--ds-gray-1000)] md:hidden"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconCross /> : <IconMenu />}
        </button>
      </div>

      {open ? (
        <nav
          className="border-t border-[var(--ds-gray-alpha-400)] bg-[var(--ds-background-100)] px-5 py-4 md:hidden"
          aria-label="Mobile Navigation"
        >
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-copy-16 text-[var(--ds-gray-900)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <ButtonLink href="#kontakt" size="small" onClick={() => setOpen(false)}>
                Termin vereinbaren
              </ButtonLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
