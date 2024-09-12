// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add a rule for raw-loader to handle CSV files
    config.module.rules.push({
      test: /\.csv$/i,
      use: "raw-loader",
    });

    return config;
  },
};

export default nextConfig;
