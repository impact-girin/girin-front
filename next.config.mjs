/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "velog.velcdn.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: 'https',
        hostname: 'lh5.googleusercontent.com'
      }, {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com'
      }, {
        protocol: 'https',
        hostname: 'img.freepik.com'
      }, {
        protocol: 'https',
        hostname: 'streetviewpixels-pa.googleapis.com'
      }
    ]
  },
};

export default nextConfig;
