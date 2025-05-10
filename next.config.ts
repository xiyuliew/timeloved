import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */


const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/timeloved' : '',
  assetPrefix: isProd ? '/timeloved' : '',
};

export default nextConfig;
