/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static HTML export
  basePath: "/Personal-Website", // name of your repo
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
