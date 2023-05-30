// const withNextra = require("nextra")({
//   theme: "nextra-theme-docs",
//   themeConfig: "./theme.config.tsx",
// });

// module.exports = {
//   ...withNextra(),
//   images: {
//     unoptimized: true,
//   },
// };

/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  basePath: "/my-docs",
};

module.exports = {
  ...withNextra(),
  ...nextConfig,
};
