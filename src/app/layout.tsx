import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./components/reduxProvider";
import Navbar from "./components/navBar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import Products from "./page";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E Bazar",
  description:
    "Shop the latest fashion trends at E Bazar. Discover stylish clothing, accessories, and more at affordable prices. Fast delivery and secure checkout.",
  keywords: [
    "E Bazar",
    "online shopping",
    "fashion store",
    "clothing",
    "accessories",
    "men's wear",
    "women's fashion",
    "buy online",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
