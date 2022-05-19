/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['img.icons8.com', 'upload.wikimedia.org'],
        loader: 'akamai',
        path: '/',
    }
};

module.exports = nextConfig;

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
      // If you use `MDXProvider`, uncomment the following line.
      // providerImportSource: "@mdx-js/react",
    },
});

module.exports = withMDX({
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});