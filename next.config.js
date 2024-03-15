/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["portfolio-image-store.s3.ap-south-1.amazonaws.com"],
  },

  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
