/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bookmarks',
        permanent: true
      }
    ]
  },
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "/api/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
  //         { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
  //         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
  //       ]
  //     }
  //   ]
  // },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://bookmarker-api-svc:8080/api/:path*`//'http://bookmarker-api-svc:8080/:path*/' // Proxy to Backend
      }
    ]
  },
  serverRuntimeConfig: {
    API_BASE_URL: process.env.NEXT_PUBLIC_SERVER_API_BASE_URL
  },
  publicRuntimeConfig: {
    API_BASE_URL: process.env.NEXT_PUBLIC_CLIENT_API_BASE_URL
  },
};

export default nextConfig;
