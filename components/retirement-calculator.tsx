'use client';

import type { JSX } from 'react';
import { useMemo, useState } from 'react';
import { Card, Input, Button, Note, IconChartTrendingDown, IconTarget } from '@/components/ui';
import { submitCalculatorLead } from '@/app/actions/leads';

const EUR = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

type Result = {
  monthlyGap: number;
  yearsInRetirement: number;
  yearsToRetirement: number;
  requiredCapital: number;
  monthlySavings: number;
};

// Assumptions used for a transparent, conservative estimate.
const LIFE_EXPECTANCY = 87;
const REAL_RETURN = 0.03; // real return after inflation while saving
const WITHDRAWAL_RETURN = 0.02; // real return during drawdown

function computeResult(
  currentAge: number,
  retirementAge: number,
  desiredIncome: number,
  expectedPension: number,
): Result | null {
  if (
    !Number.isFinite(currentAge) ||
    !Number.isFinite(retirementAge) ||
    retirementAge <= currentAge ||
    retirementAge >= LIFE_EXPECTANCY
  ) {
    return null;
  }

  const monthlyGap = Math.max(desiredIncome - expectedPension, 0);
  const yearsToRetirement = retirementAge - currentAge;
  const yearsInRetirement = LIFE_EXPECTANCY - retirementAge;
  const months = yearsInRetirement * 12;

  // Present value (at retirement) of the monthly gap as an annuity.
  const rMonthly = WITHDRAWAL_RETURN / 12;
  const requiredCapital =
    rMonthly > 0
      ? monthlyGap * ((1 - Math.pow(1 + rMonthly, -months)) / rMonthly)
      : monthlyGap * months;

  // Monthly savings needed to reach requiredCapital (future value of annuity).
  const sMonths = yearsToRetirement * 12;
  const sRate = REAL_RETURN / 12;
  const monthlySavings =
    sRate > 0
      ? (requiredCapital * sRate) / (Math.pow(1 + sRate, sMonths) - 1)
      : requiredCapital / sMonths;

  return {
    monthlyGap,
    yearsInRetirement,
    yearsToRetirement,
    requiredCapital,
    monthlySavings,
  };
}

export function RetirementCalculator(): JSX.Element {
  const [currentAge, setCurrentAge] = useState('35');
  const [retirementAge, setRetirementAge] = useState('67');
  const [desiredIncome, setDesiredIncome] = useState('2500');
  const [expectedPension, setExpectedPension] = useState('1400');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [state, setState] = useState<{
    status: 'idle' | 'success' | 'error';
    message?: string;
  }>({ status: 'idle' });

  const result = useMemo(
    () =>
      computeResult(
        Number(currentAge),
        Number(retirementAge),
        Number(desiredIncome),
        Number(expectedPension),
      ),
    [currentAge, retirementAge, desiredIncome, expectedPension],
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!result) return;
    setSubmitting(true);
    setState({ status: 'idle' });
    const res = await submitCalculatorLead({
      name,
      email,
      phone,
      currentAge: Number(currentAge),
      retirementAge: Number(retirementAge),
      netIncome: Number(desiredIncome),
      expectedPension: Number(expectedPension),
      desiredIncome: Number(desiredIncome),
      monthlyGap: result.monthlyGap,
      requiredCapital: result.requiredCapital,
      monthlySavings: result.monthlySavings,
      message,
    });
    setState(res);
    setSubmitting(false);
    if (res.status === 'success') {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }
  }

  return (
    <section id="rechner" className="flex flex-col gap-8 scroll-mt-20">
      <div className="flex flex-col gap-3">
        <span className="text-label-13 uppercase tracking-wide text-[var(--ds-gray-700)]">
          Rentenrechner
        </span>
        <h2 className="max-w-2xl text-heading-32 text-[var(--ds-gray-1000)] text-balance sm:text-heading-40">
          Wie groß ist Ihre Rentenlücke?
        </h2>
        <p className="max-w-2xl text-copy-16 text-[var(--ds-gray-900)] text-pretty">
          Berechnen Sie in wenigen Schritten, welche monatliche Lücke Sie
          erwartet und was Sie heute zurücklegen sollten, um sie zu schließen.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Inputs */}
        <Card className="flex flex-col gap-5 p-6 lg:col-span-2">
          <h3 className="text-heading-16 text-[var(--ds-gray-1000)]">
            Ihre Angaben
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Input
              id="currentAge"
              label="Aktuelles Alter"
              type="number"
              inputMode="numeric"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
            />
            <Input
              id="retirementAge"
              label="Rentenbeginn"
              type="number"
              inputMode="numeric"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
            />
          </div>
          <Input
            id="desiredIncome"
            label="Gewünschtes Netto im Ruhestand (mtl.)"
            type="number"
            inputMode="numeric"
            prefix="€"
            value={desiredIncome}
            onChange={(e) => setDesiredIncome(e.target.value)}
          />
          <Input
            id="expectedPension"
            label="Erwartete gesetzliche Rente (mtl.)"
            type="number"
            inputMode="numeric"
            prefix="€"
            value={expectedPension}
            onChange={(e) => setExpectedPension(e.target.value)}
          />
          <p className="text-copy-13 text-[var(--ds-gray-700)] text-pretty">
            Annahmen: Lebenserwartung {LIFE_EXPECTANCY} Jahre, {REAL_RETURN * 100}
            % reale Rendite in der Ansparphase, {WITHDRAWAL_RETURN * 100} % in der
            Entnahmephase. Unverbindliche Schätzung.
          </p>
        </Card>

        {/* Results */}
        <Card className="flex flex-col gap-6 p-6 lg:col-span-3">
          {result ? (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <ResultTile
                  label="Monatliche Rentenlücke"
                  value={EUR.format(result.monthlyGap)}
                  accent
                  icon={<IconChartTrendingDown />}
                />
                <ResultTile
                  label="Benötigtes Kapital"
                  value={EUR.format(result.requiredCapital)}
                />
                <ResultTile
                  label="Monatlich sparen"
                  value={EUR.format(result.monthlySavings)}
                  icon={<IconTarget />}
                />
              </div>

              <p className="text-copy-14 text-[var(--ds-gray-900)] text-pretty">
                Um Ihre Lücke von{' '}
                <strong className="text-[var(--ds-gray-1000)]">
                  {EUR.format(result.monthlyGap)}
                </strong>{' '}
                pro Monat über {result.yearsInRetirement} Jahre Ruhestand zu
                decken, sollten Sie in den nächsten {result.yearsToRetirement}{' '}
                Jahren rund{' '}
                <strong className="text-[var(--ds-gray-1000)]">
                  {EUR.format(result.monthlySavings)}
                </strong>{' '}
                monatlich zurücklegen.
              </p>

              <div className="border-t border-[var(--ds-gray-alpha-400)] pt-6">
                <h3 className="text-heading-16 text-[var(--ds-gray-1000)]">
                  Persönliche Auswertung anfordern
                </h3>
                <p className="mt-1 text-copy-14 text-[var(--ds-gray-900)] text-pretty">
                  Wir erstellen einen konkreten, anbieterneutralen Plan zum
                  Schließen Ihrer Rentenlücke — kostenfrei und unverbindlich.
                </p>

                {state.status === 'success' ? (
                  <div className="mt-4">
                    <Note type="success" label="Gesendet">
                      {state.message}
                    </Note>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Input
                        id="calc-name"
                        label="Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <Input
                        id="calc-email"
                        label="E-Mail"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <Input
                      id="calc-phone"
                      label="Telefon (optional)"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <Input
                      id="calc-message"
                      label="Nachricht (optional)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    {state.status === 'error' ? (
                      <Note type="error" label="Fehler">
                        {state.message}
                      </Note>
                    ) : null}
                    <div>
                      <Button type="submit" loading={submitting}>
                        Auswertung anfordern
                      </Button>
                    </div>
                    <p className="text-copy-13 text-[var(--ds-gray-700)]">
                      Ihre Daten werden ausschließlich zur Bearbeitung Ihrer
                      Anfrage verwendet.
                    </p>
                  </form>
                )}
              </div>
            </>
          ) : (
            <Note type="warning" label="Angaben prüfen">
              Bitte geben Sie ein gültiges Alter und einen Rentenbeginn nach Ihrem
              aktuellen Alter an.
            </Note>
          )}
        </Card>
      </div>
    </section>
  );
}

function ResultTile({
  label,
  value,
  accent,
  icon,
}: {
  label: string;
  value: string;
  accent?: boolean;
  icon?: JSX.Element;
}): JSX.Element {
  return (
    <div
      className="flex flex-col gap-1 rounded-md p-4"
      style={{
        background: accent ? 'var(--ds-amber-100)' : 'var(--ds-background-200)',
        boxShadow: 'var(--ds-shadow-border)',
      }}
    >
      <span
        className="flex items-center gap-1.5 text-label-12 text-[var(--ds-gray-700)]"
      >
        {icon ? (
          <span className="text-[var(--ds-amber-800)]">{icon}</span>
        ) : null}
        {label}
      </span>
      <span
        className={`text-heading-24 ${
          accent
            ? 'text-[var(--ds-amber-900)]'
            : 'text-[var(--ds-gray-1000)]'
        }`}
      >
        {value}
      </span>
    </div>
  );
}
