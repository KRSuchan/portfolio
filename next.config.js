module.exports = {
    output: "export",
    basePath: "",
    assetPrefix: "",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "krsuchan.com",
                pathname: "/**",
            },
        ],
    },
};
