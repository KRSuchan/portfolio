/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "krsuchan.github.io",
                pathname: "/portfolio/**",
            },
        ],
    },
};

module.exports = nextConfig;
