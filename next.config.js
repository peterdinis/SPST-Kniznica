/** @type {import('next').NextConfig} */

/* After deploying backend add backend domain here */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["http://localhost:8111"]
  }
}

module.exports = nextConfig
