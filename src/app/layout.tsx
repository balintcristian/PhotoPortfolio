import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/components/organisms/Footer/Footer";
import Navbar from "@/components/organisms/Navbar/Navbar";

import "./globals.scss";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Landing page of my photo gallery",
};
const geistSans = localFont({
  src: "../static/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../static/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>home</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.main}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
