import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Syne } from 'next/font/google';

import Navigation from "./components/Navigation";

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose what you need
  variable: '--font-syne', // optional (for CSS vars)
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TFT Overlay",
  description: "TFT Broadcast Overlay by AUEC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.className}`}>
      <body>
        {children}
        <Navigation/>
      </body>
    </html>
  );
}
