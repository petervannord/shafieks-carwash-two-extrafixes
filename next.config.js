const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure your API route runs in Node.js
  experimental: { runtime: "nodejs" },

  webpack: (config, { isServer }) => {
    // Keep existing alias config
    config.resolve.alias = {
      ...config.resolve.alias,
      ApiClient: path.join(
        __dirname,
        "node_modules",
        "sib-api-v3-sdk",
        "src",
        "ApiClient.js"
      ),
      model: path.join(
        __dirname,
        "node_modules",
        "sib-api-v3-sdk",
        "src",
        "model"
      ),
    };

    // Add externals config
    config.externals = [
      ...(config.externals || []),
      "puppeteer-extra",
      "puppeteer-extra-plugin-stealth",
      "puppeteer-core",
      "@sparticuz/chromium",
    ];

    return config;
  },
};

module.exports = nextConfig;
