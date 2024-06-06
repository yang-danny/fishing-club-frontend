/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "asset.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
