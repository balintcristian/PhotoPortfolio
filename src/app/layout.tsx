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

export const playFairItalic = localFont({
  src: "../../public/assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf",
  variable: "--font-play-fair-italic",
  style: "italic",
});
export const playFair = localFont({
  src: "../../public/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-play-fair",
});
export const hind = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Hind-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/assets/fonts/Hind-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/Hind-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/assets/fonts/Hind-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/assets/fonts/Hind-Bold.ttf",
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
      <body className={`${styles.playFair}`}>
        <div className={`${styles.main}`}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
