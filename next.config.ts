import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isGitHubPagesBuild ? "export" : undefined,
  trailingSlash: isGitHubPagesBuild,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: isGitHubPagesBuild,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "cegielnia.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "@react-three/drei"],
  },
};

export default nextConfig;
