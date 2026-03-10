/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.hsweb.pics',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'copiersonsale.com',
      },
      {
        protocol: 'https',
        hostname: 'sterling-digital.com',
      },
      {
        protocol: 'https',
        hostname: 'tenaui.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}
module.exports = nextConfig
