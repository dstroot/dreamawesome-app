import { MetadataRoute } from "next";

// Data
import { meta } from "@/data/constants";

// https://www.w3.org/TR/appmanifest/#:~:text=A%20application%20manifest%20is%20a,which%20the%20manifest%20was%20fetched.

export default function manifest(): MetadataRoute.Manifest {
  return {
    lang: "en",
    name: meta.siteName,
    short_name: meta.title,
    description: meta.description,
    theme_color: meta.themeColor,
    background_color: meta.backgroundColor,
    display: "standalone",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "maskable_icon_x48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "maskable_icon_x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "maskable_icon_x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "maskable_icon_x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "maskable_icon_x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
