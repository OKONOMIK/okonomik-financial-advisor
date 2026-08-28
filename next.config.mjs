/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000',
          },
        ],
      },
    ];
  },
  // @vercel/geistcn ships raw TypeScript/TSX from its `src` directory, so it
  // must be transpiled by the consuming app.
  transpilePackages: [
    '@vercel/geistcn',
    '@vercel/next-themes',
    '@vercel/geist-test-utils',
  ],
  // Map barrel imports to their per-component subpaths for smaller bundles.
  modularizeImports: {
    '@vercel/geistcn/components': {
      transform: '@vercel/geistcn/components/{{ kebabCase member }}',
      skipDefaultConversion: true,
    },
    '@vercel/geistcn/icons': {
      transform: '@vercel/geistcn/icons/{{ kebabCase member }}',
      skipDefaultConversion: true,
    },
    '@vercel/geistcn/logos': {
      transform: '@vercel/geistcn/logos/{{ kebabCase member }}',
      skipDefaultConversion: true,
    },
  },
};

export default nextConfig;
