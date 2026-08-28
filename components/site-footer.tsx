'use client';

import type { JSX } from 'react';
import { LogoVercel } from '@vercel/geistcn-assets/logos';
import { ThemeSwitcher } from '@vercel/geistcn/components/theme-switcher';
import { Link } from '@vercel/geistcn/components/link';

const COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Guides', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
];

export function SiteFooter(): JSX.Element {
  return (
    <footer className="border-t border-[var(--ds-gray-alpha-400)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-5 py-12 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
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
          <div className="flex items-center gap-3">
            <LogoVercel height={18} aria-label="Vercel" />
            <span className="text-copy-13 text-[var(--ds-gray-700)]">
              © {new Date().getFullYear()} Geist, Inc.
            </span>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
