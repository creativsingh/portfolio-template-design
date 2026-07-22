/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
  onDemandEntries: {
    maxInactiveAge: 15 * 1000,
    pagesBufferLength: 2,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    cpus: 1,
  },
};

export default nextConfig;
