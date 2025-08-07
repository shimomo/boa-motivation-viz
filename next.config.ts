import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/boa-motivation-viz' : '',
  assetPrefix: isProd ? '/boa-motivation-viz/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
