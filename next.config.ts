import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/yd3qY7WH/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/ZRJXPJYS/**",
        search: "",
      },
    ],
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
