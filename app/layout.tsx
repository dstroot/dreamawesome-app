// Styles
import "@/styles/globals.css";

// types
import type { Metadata } from "next";

// Components
import { Footer } from "@/components/Footer";
import { GoogleTagMgr } from "@/components/GoogleTagMgr";

// Libraries
import { Varela_Round } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// Data
import { meta } from "@/data/constants";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela",
});

export const metadata: Metadata = {
  // metadataBase is a convenience option to set a base URL prefix for metadata fields
  // that require a fully qualified URL. https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
  metadataBase: new URL(meta.URL),
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#title
  title: {
    default: meta.siteName,
    template: `%s | ${meta.siteName}`,
  },
  description: meta.description,
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#basic-fields
  themeColor: meta.themeColor,
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.URL,
    siteName: meta.siteName,
    images: [
      {
        url: meta.og.ogImage,
        width: meta.og.width,
        height: meta.og.height,
      },
    ],
    locale: meta.og.locale,
    type: meta.og.type,
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true, // Prevents search engines from showing snippets of the page in search results.
    noimageindex: true,
    nocache: true, //Prevents search engines from caching the page.
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head />
      <body
        className={`${varela.variable} font-sans antialiased flex flex-col min-h-full  bg-rose-200`}
      >
        {/* <Navbar /> */}
        <main className="flex-grow">{children}</main>
        <Footer />
        <GoogleTagMgr />
        <Analytics />
      </body>
    </html>
  );
}
