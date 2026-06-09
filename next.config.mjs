/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
