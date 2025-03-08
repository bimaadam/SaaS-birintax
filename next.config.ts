import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // This allows all images from Unsplash
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com", // Allow assets.aceternity.com
        pathname: "/**", // This allows all images from assets.aceternity.com
      },
    ],
  },
};

export default nextConfig;
