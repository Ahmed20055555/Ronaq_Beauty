'use client'
import { FaFacebook, FaWhatsapp, FaInstagram, FaFacebookMessenger, FaHeart } from "react-icons/fa6";
import Link from 'next/link';
import { useFav } from "../context/fav";
import { useShoping } from "../context/shoping";
import { FaShoppingCart } from "react-icons/fa";
export default function Navbar() {

    const { Arrfav } = useFav();
    const { shoping } = useShoping()
    return (
        <nav className="bg-[#0A0826] max-[390px]:pt-3  max-[390px]:pb-3 shadow-lg sticky  top-0 z-50">
            <div className="px-4">
                <div className=" max-[390px]:flex-col-reverse  flex justify-between items-center h-16">

                    {/* Social Media Icons */}
                    <div className="flex  items-center text-white space-x-3">

                        <div className="mr-3 flex  w-15 justify-between" >
                            <Link
                                href="/fav"
                                className="relative hover:text-red-400 transition-colors duration-200"
                            >
                                <FaHeart className="w-6 h-6" />

                                <span className="
                absolute -top-2 -right-3
                bg-red-500 text-white text-xs font-bold
                w-4 h-4 flex items-center justify-center
                rounded-full shadow-md
                ">

                                    {Arrfav.length || 0}
                                </span>
                            </Link>

                            <Link
                                href="/shop"
                                className="relative hover:text-red-400 transition-colors duration-200"
                            >
                                <FaShoppingCart className="w-6 h-6" />
                                <span className="
                absolute -top-2 -right-3
                bg-red-500 text-white text-xs font-bold
                w-4 h-4 flex items-center justify-center
                rounded-full shadow-md
                ">

                                    {shoping.length || 0}
                                </span>

                            </Link>



                        </div>




                    </div>


                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-white text-xl md:text-2xl font-bold hover:text-[#685C9C] transition-colors duration-200">
                            Ronaq Beauty
                        </Link>
                    </div>


                </div>
            </div>
        </nav>
    );
}

