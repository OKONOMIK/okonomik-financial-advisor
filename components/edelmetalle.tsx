import type { JSX } from 'react';
import { Card } from '@vercel/geistcn/components/card';
import { ButtonLink } from '@vercel/geistcn/components/button-link';

const METALS = [
  {
    name: 'Gold',
    role: 'Wertspeicher',
    desc: 'Der Klassiker zur langfristigen Wertsicherung und als Absicherung gegen Kaufkraftverlust.',
  },
  {
    name: 'Silber',
    role: 'Wachstum & Industrie',
    desc: 'Realer Sachwert mit industrieller Nachfrage — dynamischer als Gold, breit einsetzbar.',
  },
  {
    name: 'Platin',
    role: 'Diversifikation',
    desc: 'Seltenes Edelmetall zur Streuung des Sachwertanteils im Portfolio.',
  },
];

export function Edelmetalle(): JSX.Element {
  return (
    <section id="edelmetalle" className="flex flex-col gap-8 scroll-mt-20">
      <div className="flex flex-col gap-3">
        <span className="text-label-13 uppercase tracking-wide text-[var(--ds-gray-700)]">
          Edelmetalle
        </span>
        <h2 className="max-w-2xl text-heading-32 text-[var(--ds-gray-1000)] text-balance sm:text-heading-40">
          Sachwerte als stabiles Fundament
        </h2>
        <p className="max-w-2xl text-copy-16 text-[var(--ds-gray-900)] text-pretty">
          Edelmetalle sind physische Sachwerte, die unabhängig vom Bankensystem
          Bestand haben. Wir integrieren sie sinnvoll in Ihre Gesamtstrategie —
          einmalig oder als Sparplan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {METALS.map((metal) => (
          <Card
            key={metal.name}
            className="flex flex-col gap-3 p-6"
            style={{
              borderTop: '3px solid var(--ds-amber-700)',
            }}
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-heading-24 text-[var(--ds-gray-1000)]">
                {metal.name}
              </h3>
              <span className="text-label-12 uppercase tracking-wide text-[var(--ds-amber-800)]">
                {metal.role}
              </span>
            </div>
            <p className="text-copy-14 text-[var(--ds-gray-900)] text-pretty">
              {metal.desc}
            </p>
          </Card>
        ))}
      </div>

      <div className="flex justify-start">
        <ButtonLink href="#kontakt" variant="secondary" size="medium">
          Edelmetall-Strategie besprechen
        </ButtonLink>
      </div>
    </section>
  );
}
