import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/components/organisms/Footer/Footer";
import Navbar from "@/components/organisms/Navbar/Navbar";

import "./globals.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Landing page of my photo gallery",
};

const playFairItalic = localFont({
  src: "../static/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf",
  variable: "--font-play-fair-italic",
  weight: "300 900",
  style: "italic",
});
const playFair = localFont({
  src: "../static/fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-play-fair",
  weight: "300 900",
});
const hind = localFont({
  src: [
    {
      path: "../static/fonts/Hind-Light.ttf",
      weight: "300",
    },
    {
      path: "../static/fonts/Hind-Regular.ttf",
      weight: "400",
    },
    {
      path: "../static/fonts/Hind-Medium.ttf",
      weight: "500",
    },
    {
      path: "../static/fonts/Hind-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../static/fonts/Hind-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-hind",
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
      <body className={`${playFair.variable} ${hind.variable}`}>
        <div className={`${styles.main}`}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
