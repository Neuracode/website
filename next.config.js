/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.icons8.com'],
    loader: 'akamai',
    path: '/'
  },
  basePath: '/website',
  assetPrefix: '/website'
}

module.exports = nextConfig
