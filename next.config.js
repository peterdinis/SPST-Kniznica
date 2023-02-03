/** @type {import('next').NextConfig} */

/* After deploying backend add backend domain here */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "https://bitsofco.de/content/images/2018/12/broken-1.png"]
  }
}

module.exports = nextConfig
