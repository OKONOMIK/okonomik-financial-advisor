import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;
function Icon({ children, ...props }: IconProps & { children: React.ReactNode }) { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>; }
const paths = { shield: <><path d="M12 3 5 6v5c0 4.5 2.8 8.3 7 10 4.2-1.7 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>, check: <path d="m5 12 4 4L19 6"/>, menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>, cross: <><path d="m6 6 12 12"/><path d="M18 6 6 18"/></>, email: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>, phone: <path d="M6 3h3l2 5-2 2c1 2 2 3 4 4l2-2 5 2v3c0 1-1 2-2 2C10 19 5 14 4 6c0-2 1-3 2-3Z"/>, clock: <><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/></>, chart: <><path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 15 3-4 3 2 5-6"/></>, target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></>, coins: <><ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7"/><path d="M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/></> };
export const IconShieldCheck = (p: IconProps) => <Icon {...p}>{paths.shield}</Icon>;
export const IconCheck = (p: IconProps) => <Icon {...p}>{paths.check}</Icon>;
export const IconCheckCircleFill = (p: IconProps) => <Icon {...p}><circle cx="12" cy="12" r="9" fill="currentColor" stroke="none"/><path d="m8 12 2.5 2.5L16 9" stroke="var(--ds-background-100)"/></Icon>;
export const IconMenu = (p: IconProps) => <Icon {...p}>{paths.menu}</Icon>;
export const IconCross = (p: IconProps) => <Icon {...p}>{paths.cross}</Icon>;
export const IconEmail = (p: IconProps) => <Icon {...p}>{paths.email}</Icon>;
export const IconPhone = (p: IconProps) => <Icon {...p}>{paths.phone}</Icon>;
export const IconClock = (p: IconProps) => <Icon {...p}>{paths.clock}</Icon>;
export const IconChartTrendingUp = (p: IconProps) => <Icon {...p}>{paths.chart}</Icon>;
export const IconChartTrendingDown = (p: IconProps) => <Icon {...p}>{paths.chart}</Icon>;
export const IconCoins = (p: IconProps) => <Icon {...p}>{paths.coins}</Icon>;
export const IconChartPie = (p: IconProps) => <Icon {...p}>{paths.chart}</Icon>;
export const IconTarget = (p: IconProps) => <Icon {...p}>{paths.target}</Icon>;
