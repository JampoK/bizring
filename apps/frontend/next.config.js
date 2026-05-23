/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output for Vercel deployment
  output: 'standalone',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-cdn-or-storage-hostname.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Environment variables available at build time
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || '',
  },
}

module.exports = nextConfig
