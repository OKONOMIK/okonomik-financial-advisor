'use client';

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';

export function Card({ className = '', children }: { className?: string; children: ReactNode }) { return <div className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}>{children}</div>; }
export function Button({ className = '', loading, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }) { return <button className={`rounded-lg bg-amber-700 px-4 py-2.5 font-medium text-white transition hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-60 ${className}`} disabled={loading || props.disabled} {...props}>{loading ? 'Wird gesendet…' : children}</button>; }
export function ButtonLink({ className = '', children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) { return <a className={`inline-flex rounded-lg border border-amber-700 px-4 py-2.5 font-medium text-amber-800 transition hover:bg-amber-50 ${className}`} {...props}>{children}</a>; }
export function Link({ className = '', children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) { return <a className={`transition hover:opacity-75 ${className}`} {...props}>{children}</a>; }
export function Input({ label, prefix, className = '', ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; prefix?: string }) { return <label className={`flex flex-col gap-1.5 text-sm font-medium text-gray-800 ${className}`}>{label}<span className="flex items-center rounded-lg border border-gray-300 bg-white focus-within:border-amber-700 focus-within:ring-2 focus-within:ring-amber-200">{prefix ? <span className="pl-3 text-gray-500">{prefix}</span> : null}<input className="min-w-0 flex-1 rounded-lg border-0 bg-transparent px-3 py-2.5 text-gray-950 outline-none" {...props} /></span></label>; }
export function Textarea({ label, className = '', ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) { return <label className={`flex flex-col gap-1.5 text-sm font-medium text-gray-800 ${className}`}>{label}<textarea className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-950 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200" {...props} /></label>; }
export function Note({ type, label, children }: { type: 'success' | 'error'; label: string; children: ReactNode }) { return <div role="status" className={`rounded-lg border px-4 py-3 text-sm ${type === 'success' ? 'border-green-300 bg-green-50 text-green-800' : 'border-red-300 bg-red-50 text-red-800'}`}><strong>{label}: </strong>{children}</div>; }
export function ThemeSwitcher() { return null; }

export const IconMenu = () => <span aria-hidden="true" className="text-xl">≡</span>;
export const IconCross = () => <span aria-hidden="true" className="text-xl">×</span>;
export const IconChartTrendingUp = () => <span aria-hidden="true">↗</span>;
export const IconChartTrendingDown = () => <span aria-hidden="true">↘</span>;
export const IconShieldCheck = () => <span aria-hidden="true">◇</span>;
export const IconCoins = () => <span aria-hidden="true">◉</span>;
export const IconChartPie = () => <span aria-hidden="true">◔</span>;
export const IconTarget = () => <span aria-hidden="true">◎</span>;
export const IconCheckCircleFill = () => <span aria-hidden="true">●</span>;
export const IconCheck = () => <span aria-hidden="true">✓</span>;
export const IconEmail = () => <span aria-hidden="true">@</span>;
export const IconPhone = () => <span aria-hidden="true">⌕</span>;
export const IconClock = () => <span aria-hidden="true">◷</span>;

export function GeistProvider({ children }: { children: ReactNode }) { return <>{children}</>; }
export const geistFontClasses = 'font-sans';

export type { ReactNode };

