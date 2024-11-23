/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "user-agent",
            value: ".*(OAI-SearchBot|PerplexityBot).*",
          },
        ],
        headers: [
          {
            key: "X-Robot-Tag",
            value: "index,follow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
