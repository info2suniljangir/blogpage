/** @type {import('next').NextConfig} */
const nextConfig = {
    // to secure the external image addresses
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
          },
        ],
      },
}

module.exports = nextConfig
