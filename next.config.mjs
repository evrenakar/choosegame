/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'evrenakar.github.io',
            port: '',
          },
        ],
      },
};

export default nextConfig;
