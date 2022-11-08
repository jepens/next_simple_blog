/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    remotePatterns : [
      {
        protocol : "https" || "http",
        hostname : "picsum.photos"

      }
    ]
  }
}

module.exports = nextConfig

