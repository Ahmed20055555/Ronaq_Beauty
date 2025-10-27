"use client";
import { useState } from "react";
import { FaShoppingCart, FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useFav } from "../context/fav";
import { useShoping } from "../context/shoping";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { allProducts } from "@/public/statc-data/statc-data";

export default function Products() {
  const { addToFav } = useFav();
  const { addToShoping } = useShoping();

  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [maxPrice, setMaxPrice] = useState(200);
  const categories = ["الكل", "زبدة كاكاو", "ماسك", "سكريات"];

  const filteredProducts = allProducts.filter(
     (p) =>  p.price <= maxPrice
  );

  // ✅ تقسيم المنتجات إلى مجموعات من 10
  function chunkArray(array : any , size : any) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  const productChunks = chunkArray(filteredProducts, 10);

  return (
    <section className="px-6 py-10 bg-gray-50 min-h-screen relative">
      <h2 className="text-3xl font-bold text-right mb-5 text-gray-800">
        منتجاتنا
      </h2>

      {/* 🔍 الفلترة */}
      <div className="flex w-fit flex-col sm:flex-row justify-between items-center bg-white p-4 shadow-md rounded-2xl mb-10 gap-4">


        <div className="flex max-[430px]:flex-col items-center gap-3">
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-40 accent-black"
          />
          <label className="font-semibold text-gray-700">
            الحد الأقصى للسعر: ${maxPrice}
          </label>
        </div>
      </div>

      {/* 🔄 عرض كل مجموعة في سلايدر منفصل */}
      {productChunks.map((group, index) => (
        <div key={index} className="mb-12 relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: `.custom-next-${index}`,
              prevEl: `.custom-prev-${index}`,
            }}
            loop
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="mySwiper"
          >
            {group.map((product : any) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 mb-4">${product.price}</p>

                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => addToShoping(product)}
                        className="cursor-pointer flex items-center gap-2 text-white bg-black px-2 py-2 rounded-xl hover:bg-gray-800 transition"
                      >
                        <FaShoppingCart /> أضف إلى السلة
                      </button>
                      <button
                        onClick={() => addToFav(product)}
                        className="text-gray-500 hover:text-red-500 transition cursor-pointer"
                      >
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* 🔽 الأسهم المخصصة لكل سلايدر */}
            <div
              className={`custom-prev-${index} absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-red-800 transition`}
            >
              <FaChevronLeft />
            </div>
            <div
              className={`custom-next-${index} absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-red-800 transition`}
            >
              <FaChevronRight />
            </div>
          </Swiper>
        </div>
      ))}
    </section>
  );
}

  // BALEA

        {/* <div className="flex items-center gap-3">
          <label className="font-semibold text-gray-700">الفئة:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="cursor-pointer border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div> */}