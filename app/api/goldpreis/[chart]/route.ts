import { type NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Whitelist of allowed GOLD.DE chart images, mapped to a safe local key.
// Only these upstream URLs may be proxied.
const CHARTS: Record<string, string> = {
  'goldkurs-24h-eur': 'https://charts.gold.de/xb/goldkurs_24stunden_euro.jpg',
  'preistafel': 'https://charts.gold.de/preisgrafiken/preisgrafik172x280.jpg',
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ chart: string }> },
) {
  const { chart } = await params;
  const upstream = CHARTS[chart];

  if (!upstream) {
    return new NextResponse('Unknown chart', { status: 404 });
  }

  try {
    const res = await fetch(upstream, {
      headers: { 'User-Agent': 'Mozilla/5.0 (OKONOMIK Goldpreis-Widget)' },
      // Revalidate the upstream image every 5 minutes.
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return new NextResponse('Upstream error', { status: 502 });
    }

    const contentType = res.headers.get('content-type') ?? 'image/jpeg';
    const buffer = await res.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
      },
    });
  } catch {
    return new NextResponse('Fetch failed', { status: 502 });
  }
}
