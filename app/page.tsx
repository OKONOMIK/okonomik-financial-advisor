import type { JSX } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Section } from '@/components/section';
import { Palette } from '@/components/palette';
import { TypeScale } from '@/components/type-scale';
import {
  ProjectForm,
  BadgeRow,
  ButtonRow,
  TeamRow,
  StatusNote,
} from '@/components/showcase';
import { Card } from '@vercel/geistcn/components/card';

export default function Page(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-5 py-12 sm:px-8 sm:py-16">
        <section className="flex flex-col gap-4">
          <span className="text-label-13 uppercase tracking-wide text-[var(--ds-gray-700)]">
            Design System
          </span>
          <h1 className="text-heading-40 sm:text-heading-56 text-[var(--ds-gray-1000)] text-balance">
            Build interfaces with Geist
          </h1>
          <p className="max-w-2xl text-copy-16 sm:text-copy-18 text-[var(--ds-gray-900)] text-pretty">
            Geist is Vercel&apos;s design system. This starter wires up the
            tokens, typography, and components so every screen looks and feels
            like Vercel out of the box.
          </p>
          <StatusNote />
        </section>

        <Section
          title="Color tokens"
          description="OKLCH-based --ds-* scales that adapt to light and dark themes."
        >
          <Palette />
        </Section>

        <Section
          title="Typography"
          description="The Geist Sans type scale, from display headings to labels."
        >
          <Card className="p-6">
            <TypeScale />
          </Card>
        </Section>

        <Section
          title="Components"
          description="Accessible building blocks composed into a realistic flow."
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ProjectForm />
            <div className="flex flex-col gap-6">
              <Card className="flex flex-col gap-4 p-6">
                <span className="text-label-13 text-[var(--ds-gray-900)]">
                  Buttons
                </span>
                <ButtonRow />
              </Card>
              <Card className="flex flex-col gap-4 p-6">
                <span className="text-label-13 text-[var(--ds-gray-900)]">
                  Status badges
                </span>
                <BadgeRow />
              </Card>
              <Card className="flex flex-col gap-4 p-6">
                <span className="text-label-13 text-[var(--ds-gray-900)]">
                  Team
                </span>
                <TeamRow />
              </Card>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
