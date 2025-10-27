'use client'
import { FaFacebook, FaWhatsapp, FaInstagram, FaFacebookMessenger, FaHeart } from "react-icons/fa6";
import Link from 'next/link';
import { useFav } from "../context/fav";
import { useShoping } from "../context/shoping";
import { FaShoppingCart } from "react-icons/fa";
export default function Navbar() {

    const { Arrfav } = useFav();
    const {shoping} = useShoping()
    return (
        <nav className="bg-[#0A0826] max-[390px]:pt-3  max-[390px]:pb-3 shadow-lg sticky  top-0 z-50">
            <div className="px-4">
                <div className=" max-[390px]:flex-col-reverse  flex justify-between items-center h-16">

                    {/* Social Media Icons */}
                    <div className="flex  items-center text-white space-x-3">
                        {/* Facebook */}
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

        <div  className="mr-3 flex  w-15 justify-between" >
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
                
                { Arrfav.length || 0 }
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
                
                { shoping.length || 0 }
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



// 'use client'
// import { FaFacebook, FaWhatsapp, FaInstagram, FaFacebookMessenger } from "react-icons/fa6";
// import Link from 'next/link';
// import { useState } from 'react';

// export default function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     return (
//         <nav className="bg-[#0A0826] shadow-lg sticky top-0 z-50">
//             <div className="container mx-auto px-4">
//                 <div className="flex justify-between items-center h-16">
//                     {/* Logo */}
//                     <div className="flex items-center">
//                         <Link href="/" className="text-white text-xl md:text-2xl font-bold hover:text-[#685C9C] transition-colors duration-200">
//                           Rawnak
//                         </Link>
//                     </div>
                    
//                     {/* Navigation Links */}

                    
//                     {/* Social Media Icons - Hidden on mobile */}
//                     <div className="hidden lg:flex items-center text-white space-x-3">
//                         {/* Facebook */}
//                         <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
//                             <FaFacebook className="w-5 h-5" />
//                         </Link>
                        
//                         {/* WhatsApp */}
//                         <Link href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-200">
//                             <FaWhatsapp className="w-5 h-5" />
//                         </Link>
                        
//                         {/* Instagram */}
//                         <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-200">
//                             <FaInstagram className="w-5 h-5" />
//                         </Link>
                        
//                         {/* Messenger */}
//                         <Link href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200">
//                             <FaFacebookMessenger className="w-5 h-5" />
//                         </Link>
//                     </div>
                    
//                     {/* Mobile Menu Button */}
//                     <button 
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         className="md:hidden text-white hover:text-[#685C9C] transition-colors duration-200 p-2"
//                     >
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             {isMenuOpen ? (
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             ) : (
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                             )}
//                         </svg>
//                     </button>
//                 </div>
                
//                 {/* Mobile Menu */}
//                 <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0A0826] border-t border-gray-700">

//                         {/* Social Media Icons in Mobile Menu */}
//                         <div className="flex items-center justify-center space-x-4 pt-3  border-gray-700">
//                             <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200">
//                                 <FaFacebook className="w-5 h-5" />
//                             </Link>
//                             <Link href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors duration-200">
//                                 <FaWhatsapp className="w-5 h-5" />
//                             </Link>
//                             <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors duration-200">
//                                 <FaInstagram className="w-5 h-5" />
//                             </Link>
//                             <Link href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors duration-200">
//                                 <FaFacebookMessenger className="w-5 h-5" />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }                


                    
