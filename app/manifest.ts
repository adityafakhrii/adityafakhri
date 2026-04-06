import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aditya Fakhri Portfolio',
    short_name: 'AditPortfolio',
    description: 'Portfolio Aditya Fakhri Riansyah — Web Developer berbasis AI, Mentor, dan Tech Content Creator.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/adit.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // In a real PWA you should have 192x192 and 512x512 icons,
      // mapping them here allows Android/iOS to install it locally.
      {
        src: '/foto-adit.webp',
        sizes: '192x192',
        type: 'image/webp',
        purpose: 'maskable'
      },
      {
        src: '/foto-adit.webp',
        sizes: '512x512',
        type: 'image/webp',
        purpose: 'maskable'
      }
    ],
  }
}
