/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          {
            protocol: 'https',
            hostname: '**.github.io',
            port: '',
          },
        ],
      },
};

export default nextConfig;
