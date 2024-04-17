export const images = {
  domains: ['www.notion.so', 'images.unsplash.com', 's3.us-west-2.amazonaws.com'],
};
export async function headers() {
  return [
    {
      // matching all API routes
      source: '/:path*',
      headers: [
        { key: 'Access-Control-Allow-Credentials', value: 'true' },
        { key: 'Access-Control-Allow-Origin', value: '*' },
        { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
        { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
      ],
    },
  ];
}

// /** @type {import('next').NextConfig} */
// export const images = {
//   reactStrictMode: true,
//   images: {
//     domains: ['www.notion.so', 'images.unsplash.com', 's3.us-west-2.amazonaws.com'],
//     format: ['image/png', 'image/webp', 'image/jpeg'],
//   },
// };
