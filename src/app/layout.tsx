import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel_Decorative, EB_Garamond, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/layout/CartDrawer";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  style: ["normal", "italic"],
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-eb-garamond",
  style: ["normal", "italic"],
  display: "swap",
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanwariya Gold | Handcrafted Luxury Jewelry",
  description: "Handcrafted Jadau, Kundan, Polki & Meenakari gold jewelry from Chittorgarh, Rajasthan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${cormorantGaramond.variable} ${cinzelDecorative.variable} ${ebGaramond.variable} ${notoSerifDevanagari.variable} font-body bg-[#F9F7F2] text-[#2C2C2C] antialiased selection:bg-[#C8922A] selection:text-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <CartDrawer />
      </body>
    </html>
  );
}
