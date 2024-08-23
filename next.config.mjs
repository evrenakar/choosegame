/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'github.io',
            port: '',
            pathname: '/evrenakar/',
          },
        ],
      },
};

export default nextConfig;
