'use client';

import type { JSX } from 'react';
import { ThemeSwitcher } from '@/components/ui';
import { Link } from '@/components/ui';
import { Logo } from '@/components/logo';

const COLUMNS = [
  {
    heading: 'Leistungen',
    links: [
      { label: 'Vermögensaufbau', href: '#leistungen' },
      { label: 'Altersvorsorge', href: '#leistungen' },
      { label: 'Edelmetalle', href: '#edelmetalle' },
      { label: 'Rentenrechner', href: '#rechner' },
    ],
  },
  {
    heading: 'Unternehmen',
    links: [
      { label: 'Über uns', href: '#ueber-uns' },
      { label: 'Unabhängigkeit', href: '#ueber-uns' },
      { label: 'Kontakt', href: '#kontakt' },
    ],
  },
  {
    heading: 'Rechtliches',
    links: [
      { label: 'Impressum', href: '#' },
      { label: 'Datenschutz', href: '#' },
      { label: 'Erstinformation', href: '#' },
    ],
  },
];

export function SiteFooter(): JSX.Element {
  return (
    <footer className="border-t border-[var(--ds-gray-alpha-400)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo height={34} />
            <p className="max-w-xs text-copy-14 text-[var(--ds-gray-900)] text-pretty">
              Unabhängige Vermögensplanung. Anbieterneutral, transparent und auf
              Ihre Ziele ausgerichtet.
            </p>
          </div>
          {COLUMNS.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <h4 className="text-label-13 text-[var(--ds-gray-900)]">
                {column.heading}
              </h4>
              {column.links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[var(--ds-gray-alpha-400)] pt-6 sm:flex-row sm:items-center">
          <span className="text-copy-13 text-[var(--ds-gray-700)]">
            © {new Date().getFullYear()} OKONOMIK. Als Makler nicht an einen
            Finanzdienstleister gebunden.
          </span>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
