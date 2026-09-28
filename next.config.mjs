/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // export statique — nécessaire pour Cloudflare Pages / Netlify
  images: { unoptimized: true }, // pas d'optimisation serveur d'images en export statique
};
export default nextConfig;
