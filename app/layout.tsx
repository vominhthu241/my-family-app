import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AudioPlayer } from "../app/components/ui/audio-player";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adrian and Anna's Family",
  description: "Adrian and Anna's Family Memories",
  openGraph: {
    title: "Adrian and Anna's Family",
    description: "Adrian and Anna's Family Memories",
    url: 'https://www.adriananna.com/',
    siteName: "Adrian and Anna's Family",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Adrian and Anna's Family",
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
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
        {children}
        <AudioPlayer />
      </body>
    </html>
  );
}
