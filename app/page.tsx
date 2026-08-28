import type { JSX } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { RetirementCalculator } from '@/components/retirement-calculator';
import { Independence } from '@/components/independence';
import { Edelmetalle } from '@/components/edelmetalle';
import { Contact } from '@/components/contact';

export default function Page(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 py-16 sm:px-8 sm:py-24">
          <Services />
          <RetirementCalculator />
          <Independence />
          <Edelmetalle />
          <Contact />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
