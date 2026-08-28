import type { JSX } from 'react';
import Image from 'next/image';
import { ButtonLink } from '@/components/ui';
import { IconShieldCheck, IconCheck } from '@/components/icons';

const POINTS = ['Anbieterneutral', 'Transparente Beratung', 'Ohne Provisionsdruck'];

export function Hero(): JSX.Element {
  return (
    <section className="relative overflow-hidden border-b border-[var(--ds-gray-alpha-400)]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--ds-amber-400)] bg-[var(--ds-amber-100)] px-3 py-1 text-label-13 text-[var(--ds-amber-900)]">
            <IconShieldCheck />
            Unabhängiger Makler — nicht anbietergebunden
          </span>

          <h1 className="text-heading-40 text-[var(--ds-gray-1000)] text-balance sm:text-heading-56">
            Ihr Vermögen. Klar geplant, unabhängig begleitet.
          </h1>

          <p className="max-w-xl text-copy-16 text-[var(--ds-gray-900)] text-pretty sm:text-copy-18">
            OKONOMIK verbindet Vermögensaufbau, Altersvorsorge und Edelmetalle zu
            einer verständlichen Strategie. Als Makler sind wir keinem
            Finanzdienstleister verpflichtet — nur Ihren Zielen.
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-copy-14 text-[var(--ds-gray-900)]"
              >
                <span className="text-[var(--ds-amber-700)]">
                  <IconCheck />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <ButtonLink href="#rechner" size="large">
              Rentenlücke berechnen
            </ButtonLink>
            <ButtonLink href="#kontakt" variant="secondary" size="large">
              Kostenloses Erstgespräch
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ boxShadow: 'var(--ds-shadow-medium)' }}
          >
            <Image
              src="/hero-gold.png"
              alt="Abstrakte Darstellung von Vermögensaufbau mit Goldakzenten"
              width={960}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
