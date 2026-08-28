import './globals.css';
import type { JSX, ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono as GeistMonoFont } from 'geist/font/mono';

export const metadata: Metadata = {
  title: 'OKONOMIK — Unabhängige Vermögensplanung & Altersvorsorge',
  description:
    'OKONOMIK ist Ihr unabhängiger Makler für Vermögensaufbau, Altersvorsorge und Edelmetalle. Anbieterneutral, transparent und auf Ihre Ziele ausgerichtet.',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html className={`${GeistSans.variable} ${GeistMonoFont.variable} bg-background`} lang="de" suppressHydrationWarning>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
