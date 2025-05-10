import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/timeloved' : '',
  assetPrefix: isGithubPages ? '/timeloved' : '',
};

export default nextConfig;
