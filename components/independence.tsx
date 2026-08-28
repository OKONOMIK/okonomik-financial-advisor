import type { JSX } from 'react';
import { IconCheckCircleFill } from '@/components/icons';

const REASONS = [
  {
    title: 'Nicht anbietergebunden',
    desc: 'Als Makler sind wir keinem Finanzdienstleister verpflichtet und wählen aus dem gesamten Markt aus.',
  },
  {
    title: 'Ihre Ziele im Fokus',
    desc: 'Wir beraten entlang Ihrer Lebensplanung — nicht entlang eines Produktkatalogs.',
  },
  {
    title: 'Transparente Kosten',
    desc: 'Klare Aufklärung über Kosten und Struktur jeder Empfehlung, ohne versteckte Anreize.',
  },
  {
    title: 'Sachwerte inklusive',
    desc: 'Edelmetalle als realer Vermögensbaustein zur Wertsicherung gehören selbstverständlich dazu.',
  },
];

export function Independence(): JSX.Element {
  return (
    <section
      id="ueber-uns"
      className="scroll-mt-20 rounded-2xl border border-[var(--ds-gray-alpha-400)] bg-[var(--ds-background-200)] p-8 sm:p-12"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <span className="text-label-13 uppercase tracking-wide text-[var(--ds-gray-700)]">
            Warum OKONOMIK
          </span>
          <h2 className="text-heading-32 text-[var(--ds-gray-1000)] text-balance sm:text-heading-40">
            Unabhängigkeit, die man spürt
          </h2>
          <p className="max-w-lg text-copy-16 text-[var(--ds-gray-900)] text-pretty">
            Der entscheidende Unterschied liegt in der Perspektive. Statt an einen
            Anbieter gebunden zu sein, betrachten wir den Markt neutral und
            empfehlen ausschließlich, was zu Ihrer Situation passt.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <li key={reason.title} className="flex flex-col gap-1.5">
              <span className="flex items-center gap-2 text-heading-16 text-[var(--ds-gray-1000)]">
                <span className="text-[var(--ds-amber-700)]">
                  <IconCheckCircleFill />
                </span>
                {reason.title}
              </span>
              <p className="text-copy-14 text-[var(--ds-gray-900)] text-pretty">
                {reason.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
