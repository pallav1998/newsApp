import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows any hostname
      },
      {
        protocol: "http",
        hostname: "**", // Allows any hostname with HTTP
      },
    ],
  },
};

export default nextConfig;
