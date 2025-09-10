import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // Proje kök dizinini açıkça belirt
  },
};

export default nextConfig;
