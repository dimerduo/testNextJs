/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/post",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
