import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'

// Charger les polices Geist et Geist Mono
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paste",
  description: "Paste Challenge Spikes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        {/* lien Google Fonts pour la police Aeonik */}
        <link
          href="https://fonts.googleapis.com/css2?family=Aeonik:wght@100;400;600&display=swap"
          rel="stylesheet"
        />
        {/* lien Google Fonts pour la police Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "Aeonik, Inter, sans-serif" }}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
