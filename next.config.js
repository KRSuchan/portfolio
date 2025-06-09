/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/portfolio",
    assetPrefix: "/portfolio/",
    images: {
        unoptimized: true,
    },
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };
        return config;
    },
};

module.exports = nextConfig;
