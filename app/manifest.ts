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
        src: "icon_192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "icon_512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "maskable_icon_192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
