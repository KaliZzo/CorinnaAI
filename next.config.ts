import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1366988-5037046.cloudwaysapps.com",
      },
    ],
  },
}

export default nextConfig
