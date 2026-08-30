import type { NextConfig } from "next";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? "/life-rpg" : "",
  assetPrefix: isGithubPages ? "/life-rpg/" : "",
};
export default nextConfig;
