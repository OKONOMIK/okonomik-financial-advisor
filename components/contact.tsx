'use client';

import type { JSX } from 'react';
import { useActionState } from 'react';
import { Card, Input, Textarea, Button, Note, IconEmail, IconPhone, IconClock } from '@/components/ui';
import { submitContact, type ContactState } from '@/app/actions/leads';

const INITIAL: ContactState = { status: 'idle' };

const INFO = [
  { icon: IconEmail, label: 'E-Mail', value: 'info@okonomik.de' },
  { icon: IconPhone, label: 'Telefon', value: 'Rückruf auf Wunsch' },
  { icon: IconClock, label: 'Erstgespräch', value: 'Kostenfrei & unverbindlich' },
];

export function Contact(): JSX.Element {
  const [state, formAction, pending] = useActionState(submitContact, INITIAL);

  return (
    <section id="kontakt" className="scroll-mt-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="flex flex-col gap-3">
            <span className="text-label-13 uppercase tracking-wide text-[var(--ds-gray-700)]">
              Kontakt
            </span>
            <h2 className="text-heading-32 text-[var(--ds-gray-1000)] text-balance sm:text-heading-40">
              Lassen Sie uns sprechen
            </h2>
            <p className="max-w-md text-copy-16 text-[var(--ds-gray-900)] text-pretty">
              Schildern Sie uns kurz Ihr Anliegen. Wir melden uns zeitnah für ein
              unverbindliches Erstgespräch — anbieterneutral und ehrlich.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {INFO.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--ds-amber-800)]"
                    style={{ background: 'var(--ds-amber-100)' }}
                  >
                    <Icon />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-label-12 uppercase tracking-wide text-[var(--ds-gray-700)]">
                      {item.label}
                    </span>
                    <span className="text-copy-14 text-[var(--ds-gray-1000)]">
                      {item.value}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <Card className="flex flex-col gap-5 p-6 sm:p-8 lg:col-span-3">
          {state.status === 'success' ? (
            <Note type="success" label="Gesendet">
              {state.message}
            </Note>
          ) : (
            <form action={formAction} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input id="name" name="name" label="Name" required />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="E-Mail"
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input id="phone" name="phone" type="tel" label="Telefon (optional)" />
                <Input
                  id="topic"
                  name="topic"
                  label="Thema (optional)"
                  placeholder="z. B. Altersvorsorge"
                />
              </div>
              <Textarea
                id="message"
                name="message"
                label="Ihre Nachricht"
                rows={5}
                placeholder="Wie können wir Ihnen helfen?"
              />
              {state.status === 'error' ? (
                <Note type="error" label="Fehler">
                  {state.message}
                </Note>
              ) : null}
              <div>
                <Button type="submit" size="large" loading={pending}>
                  Anfrage senden
                </Button>
              </div>
              <p className="text-copy-13 text-[var(--ds-gray-700)]">
                Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
                gespeichert. Keine Weitergabe an Dritte.
              </p>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
