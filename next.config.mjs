/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "mustopa28121992.github.io" },
      { protocol: "https", hostname: "landing-page-dicoding.vercel.app" },
      { protocol: "https", hostname: "qwords.co.id" },
      { protocol: "https", hostname: "www.gamelab.id" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "apiku-v1.duniacoding.id" },
      { protocol: "https", hostname: "itbox.id" },
      { protocol: "https", hostname: "www.algobash.com" },
      { protocol: "https", hostname: "merdekasiber.com" },
      { protocol: "https", hostname: "prog-8.com" },
      { protocol: "https", hostname: "www.staditek.id" },
      { protocol: "https", hostname: "codingstudio.id" },
      { protocol: "https", hostname: "static.tiptip.id" },
      { protocol: "https", hostname: "cdn-web-2.ruangguru.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:all*(css|js)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:all*(png|jpg|jpeg|gif|svg|webp|avif|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ]
  },
}

export default nextConfig
