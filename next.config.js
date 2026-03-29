/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/about", destination: "/" },
      { source: "/experience", destination: "/" },
      { source: "/projects", destination: "/" },
      { source: "/blog", destination: "/" },
      { source: "/contact", destination: "/" },
    ];
  },
};

module.exports = nextConfig;
