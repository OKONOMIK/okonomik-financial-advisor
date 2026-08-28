import type { JSX } from 'react';
import { Card } from '@vercel/geistcn/components/card';

/**
 * Live-Goldpreis-Widget mit den offiziellen, automatisch aktualisierten
 * Chart-Bildern von GOLD.DE. Die Nutzung ist kostenlos und erfordert den
 * Copyright-Hinweis "© GOLD.DE" mit Verlinkung.
 */
export function GoldpreisWidget(): JSX.Element {
  return (
    <Card className="flex flex-col gap-5 p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-heading-24 text-[var(--ds-gray-1000)]">
          Aktueller Goldpreis
        </h3>
        <span className="text-label-12 uppercase tracking-wide text-[var(--ds-amber-800)]">
          Live-Kurs
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_180px]">
        <a
          href="https://www.gold.de/kurse/goldpreis/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex overflow-hidden rounded-md border border-[var(--ds-gray-alpha-400)] bg-white"
        >
          {/* Auto-aktualisierender 24-Stunden-Goldkurs in Euro von GOLD.DE */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://charts.gold.de/xb/goldkurs_24stunden_euro.jpg"
            alt="Goldpreis der letzten 24 Stunden in Euro — Chart von GOLD.DE"
            width={468}
            height={260}
            className="h-auto w-full"
          />
        </a>

        <a
          href="https://www.gold.de/kurse/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center overflow-hidden rounded-md border border-[var(--ds-gray-alpha-400)] bg-white p-2"
        >
          {/* Kompakte Live-Preistafel (Gold & Silber) von GOLD.DE */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://charts.gold.de/preisgrafiken/preisgrafik172x280.jpg"
            alt="Aktuelle Edelmetallpreise für Gold und Silber — Preistafel von GOLD.DE"
            width={172}
            height={280}
            className="h-auto w-[172px] max-w-full"
          />
        </a>
      </div>

      <p className="text-copy-13 text-[var(--ds-gray-700)]">
        Kursdaten bereitgestellt von{' '}
        <a
          href="https://www.gold.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--ds-amber-800)] underline underline-offset-2"
        >
          © GOLD.DE
        </a>
        . Die angezeigten Kurse dienen nur zur Information und stellen keine
        Anlageberatung dar.
      </p>
    </Card>
  );
}
