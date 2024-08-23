/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.github.io',
            port: '',
          },
        ],
      },
};

export default nextConfig;
