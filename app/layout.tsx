// "use client";

import "../styles/globals.css";
import { Footer } from "../components/Footer";
import { Varela_Round } from "@next/font/google";
// import { Navbar } from "../components/Navbar";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela",
});

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
