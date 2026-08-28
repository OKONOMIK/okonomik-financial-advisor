'use client';

import type { ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';

export function Link({ href, children, className = '', onClick }: { href: string; children: ReactNode; className?: string; onClick?: () => void }) {
  return <a href={href} onClick={onClick} className={className}>{children}</a>;
}

export function Button({ children, loading, size = 'medium', className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean; size?: 'small' | 'medium' | 'large' }) {
  return <button {...props} className={`rounded-md bg-[var(--ds-amber-800)] px-4 py-2 font-medium text-white transition hover:bg-[var(--ds-amber-900)] disabled:cursor-not-allowed disabled:opacity-60 ${size === 'large' ? 'px-5 py-3' : ''} ${className}`}>{loading ? 'Wird gesendet…' : children}</button>;
}

export function ButtonLink({ href, children, variant = 'primary', size = 'medium', className = '', onClick }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary'; size?: 'small' | 'medium' | 'large'; className?: string; onClick?: () => void }) {
  return <a href={href} onClick={onClick} className={`inline-flex rounded-md px-4 py-2 font-medium transition ${variant === 'secondary' ? 'border border-[var(--ds-gray-alpha-400)] text-[var(--ds-gray-1000)] hover:bg-[var(--ds-gray-100)]' : 'bg-[var(--ds-amber-800)] text-white hover:bg-[var(--ds-amber-900)]'} ${size === 'large' ? 'px-5 py-3' : ''} ${className}`}>{children}</a>;
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) { return <div className={`rounded-xl border border-[var(--ds-gray-alpha-400)] bg-[var(--ds-background-100)] ${className}`}>{children}</div>; }

export function Input({ label, id, className = '', ...props }: InputHTMLAttributes<HTMLInputElement> & { label?: string }) { return <label htmlFor={id} className="flex flex-col gap-2 text-sm font-medium text-[var(--ds-gray-1000)]">{label}<input id={id} className={`rounded-md border border-[var(--ds-gray-alpha-400)] bg-transparent px-3 py-2 text-base outline-none focus:border-[var(--ds-amber-800)] ${className}`} {...props} /></label>; }

export function Textarea({ label, id, className = '', ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }) { return <label htmlFor={id} className="flex flex-col gap-2 text-sm font-medium text-[var(--ds-gray-1000)]">{label}<textarea id={id} className={`rounded-md border border-[var(--ds-gray-alpha-400)] bg-transparent px-3 py-2 text-base outline-none focus:border-[var(--ds-amber-800)] ${className}`} {...props} /></label>; }

export function Note({ type, label, children }: { type: 'success' | 'error'; label: string; children: ReactNode }) { return <div role="status" className={`rounded-md border p-3 text-sm ${type === 'success' ? 'border-green-600 text-green-800' : 'border-red-600 text-red-800'}`}><strong>{label}: </strong>{children}</div>; }

export function ThemeSwitcher() { return null; }
