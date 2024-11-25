import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["127.0.0.1"], // Thêm hostname của bạn vào danh sách
  },
  reactStrictMode: false
};

export default nextConfig;
