/** @type {import('next').NextConfig} */

import million from "million/compiler";

const nextConfig = {
  reactStrictMode: true,
};

export default million.next(nextConfig);
