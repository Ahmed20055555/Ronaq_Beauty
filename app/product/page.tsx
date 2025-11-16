"use client";

import { useEffect, useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useFav } from "../context/fav";
import { useShoping } from "../context/shoping";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import { allProducts } from "@/public/statc-data/statc-data";
import { FaLightbulb } from "react-icons/fa";
import Link from "next/link";
import HomeSlider from "@/feture/home/Home";
import SearchModal from "@/feture/search/search";
import { useSearch } from "../context/opendrop";

export default function Products() {
  const { Arrfav, addToFav } = useFav();
  const { shoping, addToShoping } = useShoping();

  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(500);
  const [darkMode, setDarkMode] = useState(false);


  const { isSearchOpen } = useSearch();


  // localstorage


  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(savedMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const filteredProducts = allProducts.filter((p) => (

    p.price <= maxPrice && p.name.toLowerCase().includes(search.toLowerCase())

  ));

  // ✅ تقسيم المنتجات إلى مجموعات من 10
  function chunkArray(array: any, size: any) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  const productChunks = chunkArray(filteredProducts, 10);

  return (
    <>

      {isSearchOpen && <SearchModal allProducts={allProducts} />}
      <HomeSlider />

      <section
        className={`px-6 py-10 min-h-screen relative transition-all duration-500 ${darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-800"
          }`}
      >

        <div className="flex justify-between" >

          <h2 className={`text-[15px]   ${darkMode ? "text-white" : " text-[#848181]"} font-bold text-right mb-5 `}>
            جودة ألمانية أصلية – عناية متكاملة ونتائج مضمونة.
          </h2>

          <h2 onClick={() => toggleDarkMode()} className={`cursor-pointer ${darkMode ? "text-white" : " text-gray-800"} text-3xl font-bold text-right mb-5 text-gray-800`}>
            <FaLightbulb />
          </h2>

        </div>


        {/* 🔄 عرض كل مجموعة في سلايدر منفصل */}
        {productChunks.map((group, sliderIndex) => (
          <div key={sliderIndex} className="  mb-12 relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true, //  يفضل يفضل يخليه ما يوقفش لو المستخدم لمس السلايدر
              }}
              navigation={{
                nextEl: `.custom-next-${sliderIndex}`,
                prevEl: `.custom-prev-${sliderIndex}`,
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
              {group.map((product: any) => {

                const isFav = Arrfav.some((item) => item.id === product.id);
                const isshop = shoping.some((item) => item.id === product.id)

                return (
                  <SwiperSlide key={product.id}>

                    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                      <Link href={`/Product-Details/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-68 object-cover rounded-2xl"
                        />
                      </Link>

                      <div className="p-4 flex flex-col justify-between">

                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-500 mb-4">${product.price}</p>

                        <div className="flex justify-between max-[270px]:flex-col  max-[250px]:justify-start items-center">

                          {
                            isshop ?
                              <button
                                onClick={() => addToShoping(product)}
                                className="cursor-pointer flex items-center max-[270px]:mb-3 gap-2 text-white bg-green-500 px-2 py-2 rounded-xl hover:bg-green-800 transition"
                              >
                                <FaShoppingCart /> تم الاضافه
                              </button>
                              :
                              <button
                                onClick={() => addToShoping(product)}
                                className="cursor-pointer max-[270px]:mb-3 flex items-center gap-2 text-white bg-black px-2 py-2 rounded-xl hover:bg-gray-800 transition"
                              >
                                <FaShoppingCart /> أضف إلى السلة
                              </button>
                          }

                          {isFav ? (
                            <span className="text-green-600 text-[15px] font-semibold">
                              ✔ تمت الإضافة
                            </span>
                          ) : (
                            <button
                              onClick={() => addToFav(product)}
                              className="text-gray-500 hover:text-red-500 transition cursor-pointer"
                            >
                              <FaHeart />
                            </button>
                          )}
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* 🔽 الأسهم المخصصة لكل سلايدر */}
              <div
                className={`custom-prev-${sliderIndex} absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-red-800 transition`}
              >
                <FaChevronLeft />
              </div>
              <div
                className={`custom-next-${sliderIndex} absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-red-800 transition`}
              >
                <FaChevronRight />
              </div>
            </Swiper>
          </div>
        ))}
      </section>
    </>
  );
}
