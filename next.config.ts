import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "streak-stats.demolab.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "leetcard.jacoblin.cool",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
