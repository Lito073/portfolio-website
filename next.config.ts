import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["test.litoslab.nl"],
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
