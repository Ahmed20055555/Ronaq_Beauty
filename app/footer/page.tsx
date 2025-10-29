import Link from 'next/link';
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

export default function Footer() {
    return (
      <footer className="bg-black text-white py-10 mt-1">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* 👣 القسم الأول */}
          <div>
            <h2 className="text-2xl font-bold mb-4">متجرنا</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              نحن نقدم أفضل المنتجات بأعلى جودة وأسعار مناسبة للجميع.
              رضاك هدفنا الأول دائمًا ❤️
            </p>
          </div>
  
          {/* 🔗 روابط سريعة */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">الرئيسية</a></li>
              <li><a href="#" className="hover:text-white transition">المنتجات</a></li>
              <li><a href="#" className="hover:text-white transition">من نحن</a></li>
              <li><a href="#" className="hover:text-white transition">تواصل معنا</a></li>
            </ul>
          </div>
  
          {/* 📞 تواصل */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📍 القاهرة، مصر</li>
              <li>📞 01012345678</li>
              <li>✉️ info@store.com</li>
            </ul>
          </div>
  
          {/* 🌐 سوشيال ميديا */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
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
          </div>
        </div>
  
        {/* 🔻 الفاصل السفلي */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} جميع الحقوق محفوظة | متجرنا
        </div>
      </footer>
    );
  }
  