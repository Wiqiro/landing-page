import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // utile pour hébergement statique; ok à conserver
};

export default nextConfig;
