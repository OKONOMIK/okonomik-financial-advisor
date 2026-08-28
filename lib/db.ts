import { Pool } from 'pg';

declare global {
  // eslint-disable-next-line no-var
  var __okonomikPool: Pool | undefined;
}

// Reuse a single Pool across hot reloads in dev.
export const pool =
  global.__okonomikPool ??
  new Pool({ connectionString: process.env.DATABASE_URL });

if (process.env.NODE_ENV !== 'production') {
  global.__okonomikPool = pool;
}
