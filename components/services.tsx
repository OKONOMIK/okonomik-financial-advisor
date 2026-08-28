import type { JSX } from 'react';
import { Card } from '@/components/ui';
import {
  IconChartTrendingUp,
  IconShieldCheck,
  IconCoins,
  IconChartPie,
} from '@/components/icons';

const SERVICES = [
  {
    icon: IconChartTrendingUp,
    title: 'Vermögensaufbau',
    desc: 'Strukturierter Aufbau von Vermögen mit breit gestreuten, kosteneffizienten Anlagestrategien — passend zu Ihrem Zeithorizont und Risikoprofil.',
  },
  {
    icon: IconShieldCheck,
    title: 'Altersvorsorge',
    desc: 'Wir analysieren Ihre Rentenlücke und entwickeln einen tragfähigen Plan, damit Ihr Lebensstandard im Ruhestand gesichert ist.',
  },
  {
    icon: IconCoins,
    title: 'Edelmetalle',
    desc: 'Gold, Silber und Platin als realer Sachwert zur Wertsicherung und Diversifikation — physisch oder als Sparplan.',
  },
  {
    icon: IconChartPie,
    title: 'Finanzstrategie',
    desc: 'Eine ganzheitliche Betrachtung Ihrer Finanzen: Liquidität, Anlage und Vorsorge in einem verständlichen Gesamtbild.',
  },
];

export function Services(): JSX.Element {
  return (
    <section id="leistungen" className="flex flex-col gap-8 scroll-mt-20">
      <div className="flex flex-col gap-3">
        <span className="text-label-13 uppercase tracking-wide text-[var(--ds-gray-700)]">
          Leistungen
        </span>
        <h2 className="max-w-2xl text-heading-32 text-[var(--ds-gray-1000)] text-balance sm:text-heading-40">
          Unabhängige Beratung für alle Bausteine Ihres Vermögens
        </h2>
        <p className="max-w-2xl text-copy-16 text-[var(--ds-gray-900)] text-pretty">
          Keine Versicherungen, kein Provisionsdruck. Wir konzentrieren uns auf
          Vermögensbildung, Altersvorsorge und Sachwerte — anbieterneutral
          ausgewählt.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} className="flex flex-col gap-4 p-6">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-md text-[var(--ds-amber-800)]"
                style={{ background: 'var(--ds-amber-100)' }}
              >
                <Icon />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-heading-20 text-[var(--ds-gray-1000)]">
                  {service.title}
                </h3>
                <p className="text-copy-14 text-[var(--ds-gray-900)] text-pretty">
                  {service.desc}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
