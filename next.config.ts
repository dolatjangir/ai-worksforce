/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})

const nextConfig = withPWA({
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Matches any image folder path coming from Unsplash
      },
    ],
  },
  reactStrictMode: true,
 turbopack: {},
})

module.exports = nextConfig
