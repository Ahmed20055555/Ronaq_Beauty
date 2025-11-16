import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FavProvider } from "./context/fav";
import { ShopingProvider } from "./context/shoping";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import Header from "@/feture/home/header";

import { SearchProvider } from "@/app/context/opendrop";   // ← أضفت ده

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "متجري | الصفحة الرئيسية",
  description: "أفضل متجر لمنتجات عالية الجودة",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white text-gray-900">

        {/* ضيف Provider هنا */}
        <SearchProvider>
          <FavProvider>
            <ShopingProvider>

              <Navbar />
              <Header />

              {children}

              <Toaster position="top-center" reverseOrder={false} />

              <Link
                href="https://wa.me/201001878563"
                target="_blank"
                className="fixed bottom-6 right-2 bg-green-500 text-white p-3 rounded-full"
              >
                <FaWhatsapp className="w-6 h-6" />
              </Link>

              <Footer />

            </ShopingProvider>
          </FavProvider>
        </SearchProvider>
        {/* انتهى */}
        
      </body>
    </html>
  );
}
