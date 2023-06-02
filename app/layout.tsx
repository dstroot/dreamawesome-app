// types
import type { Metadata } from "next";

// Styles
import "../styles/globals.css";

//Components
import { Footer } from "../components/Footer";
import { Varela_Round } from "next/font/google";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela",
});

export const metadata: Metadata = {
  // metadataBase is a convenience option to set a base URL prefix for metadata fields
  // that require a fully qualified URL. https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
  metadataBase: new URL("https://example.com"),
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#title
  title: {
    default: "Acme",
    template: "%s | Acme",
  },
  description: "NextJS + TailwindCSS minimalist starter kit",
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#basic-fields
  themeColor: "#fff",
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
  openGraph: {
    title: "NextJS + TailwindCSS minimalist starter kit",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
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
    <html>
      <head />
      <body
        className={`${varela.variable} font-sans flex flex-col min-h-screen antialiased bg-rose-200`}
      >
        {/* <Navbar /> */}
        <main className="flex-grow bg-cover bg-top bg-[url('../public/img/pexels-mo-eid-11592804.jpeg')]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
