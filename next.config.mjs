

//import remarkParse from 'remark-parse';
//const remarkRehype = require('remark-rehype');
//const rehypeSanitize = require('rehype-sanitize');
//const rehypeStringify=  require('rehype-stringify');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;


