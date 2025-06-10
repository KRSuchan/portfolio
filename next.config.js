const isProd = process.env.NODE_ENV === "production";

module.exports = {
    output: "export",
    basePath: isProd ? "/portfolio" : "",
    assetPrefix: isProd ? "/portfolio/" : "",
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
