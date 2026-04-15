import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "backend.halepathpackaging.co.uk",
      
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
     
    ],
  },
};

export default nextConfig;
