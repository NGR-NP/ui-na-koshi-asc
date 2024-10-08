/** @type {import('next').NextConfig} */

const nextConfig = {
  // experimental: {
  //   typedRoutes: true,
  // },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
