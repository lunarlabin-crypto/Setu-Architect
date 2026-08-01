/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Compress responses
  compress: true,
  // Power By header removal for security
  poweredByHeader: false,
};

module.exports = nextConfig;
