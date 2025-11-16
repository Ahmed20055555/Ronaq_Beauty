"use client";

import { FaHeart, FaShoppingCart, FaUser, FaSearch, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import Link from "next/link";
import { FaFacebookMessenger } from "react-icons/fa6";
import { useSearch } from "@/app/context/opendrop";

export default function Header() {

    const {  setIsSearchOpen } = useSearch();


  return (
    <header className="w-full">

      {/* Main Header */}
      <div className="w-full h-20  bg-white flex justify-between flex-row-reverse items-center py-4 px-6 shadow-sm">

        {/* Social Icons */}
                 <div className="flex gap-4 text-xl">
                       <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                            <FaFacebook className="w-5 h-5" />
                        </Link>

                        {/* WhatsApp */}
                        <Link href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-200">
                            <FaWhatsapp className="w-5 h-5" />
                        </Link>

                        {/* Instagram */}
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-200">
                            <FaInstagram className="w-5 h-5" />
                        </Link>

                        {/* Messenger */}
                        <Link href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200">
                            <FaFacebookMessenger className="w-5 h-5" />
                        </Link>
            </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <Link href="/category/masks">ماسكات</Link>
          <Link href="/category/hand-cream">كريمات يد</Link>
          <Link href="/category/lotion">لوشن</Link>
        </nav>
        {/* Header Icons */}
        <div className="flex items-center gap-4 text-xl">
          <FaSearch onClick={() => setIsSearchOpen(true)} className="cursor-pointer" />
          <Link href="/login">
            <FaUser className="cursor-pointer" />
          </Link>

        </div>

      </div>
    </header>
  );
}
