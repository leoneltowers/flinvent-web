/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['flinvent.net'],
  },
  swcMinify: true,
};

module.exports = nextConfig;
