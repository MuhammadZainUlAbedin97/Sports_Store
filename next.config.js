/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
    experimental: {
        serverActions: true,
      },
      images: {
        domains: ['res.cloudinary.com'], // Add your domain(s) here
      },
}

module.exports = nextConfig
