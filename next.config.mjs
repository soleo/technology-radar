import { withNextVideo } from "next-video/process";
// @ts-check
// Reference: https://github.com/tc39/proposal-import-attributes
import packageJson from './package.json' with { type: 'json' };

const APP_VERSION = packageJson.version;
const APP_NAME = packageJson.name;
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    generateBuildId: async () => {
        return `${APP_NAME}-${APP_VERSION}`
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            pathname: '**',
          },
        ],
      },
}
export default withNextVideo(nextConfig);