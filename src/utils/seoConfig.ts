import type { ManifestOptions } from "vite-plugin-pwa";

const siteName = "Ernest Magriñá"
const description = "Welcome to my portfolio. I am a dedicated and enthusiastic professional, deeply committed to learning and personal and professional growth. Here you will find a variety of projects that I have been working on, each reflecting my ability to face challenges.";

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
    baseURL: "https://www.emagrina.com/",
    description: description,
    type: "website",
    image: {
        url: "https://picsum.photos/1200/630",
        alt: "OpenGraph thumbnail description.",
        width: 1200,
        height: 630
    },
    siteName: siteName,
};

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
    name: siteName,
    short_name: "emagrina",
    description: description,
    theme_color: "#30E130",
    background_color: "#ffffff",
    display: "minimal-ui",
    icons: [
        {
            src: "favicon.svg",
            sizes: "192x192",
            type: "image/png"
        }
    ]
};
