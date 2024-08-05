/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ytimg.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
