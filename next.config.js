/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'fakestoreapi.com',
      'demo.vercel.store',
      'nextjs-eshop.vercel.app',
      'bit.ly',
    ],
  },
};

module.exports = nextConfig;
