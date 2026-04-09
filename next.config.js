/** @type {import('next').NextConfig} */
const path = require("node:path");

const SECURITY_HEADERS = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig = {
  reactStrictMode: true,
  // Lock the workspace root so Next stops complaining about the parent lockfile.
  outputFileTracingRoot: path.join(__dirname),
  async headers() {
    return [
      {
        // Bridge embeds Superbridge in an iframe — needs its own CSP.
        source: "/bridge",
        headers: [
          ...SECURITY_HEADERS,
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://superbridge.app;",
          },
        ],
      },
      {
        // Default headers for everything else.
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

module.exports = nextConfig;
