import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co", "picsum.photos"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
