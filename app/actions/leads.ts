'use server';

import { pool } from '@/lib/db';

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const topic = String(formData.get('topic') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (name.length < 2) {
    return { status: 'error', message: 'Bitte geben Sie Ihren Namen an.' };
  }
  if (!EMAIL_RE.test(email)) {
    return {
      status: 'error',
      message: 'Bitte geben Sie eine gültige E-Mail-Adresse an.',
    };
  }

  try {
    await pool.query(
      `INSERT INTO leads (name, email, phone, topic, message, source)
       VALUES ($1, $2, $3, $4, $5, 'contact')`,
      [name, email, phone || null, topic || null, message || null],
    );
    return {
      status: 'success',
      message: 'Vielen Dank. Wir melden uns zeitnah bei Ihnen.',
    };
  } catch (err) {
    console.log('[v0] submitContact error:', (err as Error).message);
    return {
      status: 'error',
      message: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
    };
  }
}

export type CalculatorLead = {
  name: string;
  email: string;
  phone?: string;
  currentAge: number;
  retirementAge: number;
  netIncome: number;
  expectedPension: number;
  desiredIncome: number;
  monthlyGap: number;
  requiredCapital: number;
  monthlySavings: number;
  message?: string;
};

export type CalcLeadState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
};

export async function submitCalculatorLead(
  data: CalculatorLead,
): Promise<CalcLeadState> {
  const name = data.name?.trim();
  const email = data.email?.trim();

  if (!name || name.length < 2) {
    return { status: 'error', message: 'Bitte geben Sie Ihren Namen an.' };
  }
  if (!email || !EMAIL_RE.test(email)) {
    return {
      status: 'error',
      message: 'Bitte geben Sie eine gültige E-Mail-Adresse an.',
    };
  }

  try {
    await pool.query(
      `INSERT INTO calculator_leads
        (name, email, phone, current_age, retirement_age, net_income,
         expected_pension, desired_income, monthly_gap, required_capital,
         monthly_savings, message)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
      [
        name,
        email,
        data.phone || null,
        Math.round(data.currentAge),
        Math.round(data.retirementAge),
        data.netIncome,
        data.expectedPension,
        data.desiredIncome,
        data.monthlyGap,
        data.requiredCapital,
        data.monthlySavings,
        data.message || null,
      ],
    );
    return {
      status: 'success',
      message: 'Vielen Dank. Wir erstellen Ihre persönliche Auswertung.',
    };
  } catch (err) {
    console.log('[v0] submitCalculatorLead error:', (err as Error).message);
    return {
      status: 'error',
      message: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
    };
  }
}
