/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev, isServer }) => {
      // Add a rule for handling .geojson files
      config.module.rules.push({
        test: /\.geojson$/,
        loader: 'json-loader',
      });
  
      return config;
    },
  }
  
  module.exports = nextConfig;
  