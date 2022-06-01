/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" && {
      exclude: ['error'],
    },
  },
}

module.exports = nextConfig
