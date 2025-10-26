"use client";
import { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useFav } from "../context/fav";
import { useShoping } from "../context/shoping";


export default function Products() {
  const { addToFav } = useFav();
  const { addToShoping } = useShoping();

  const allProducts = [
    { id: 1, name: "ماسك كوري لترطيب وتوريد البشرة", category: "ماسك", price: 120, image: "product_one.jpg" },
    { id: 2, name: "سكر mivolis الالماني", category: "سكريات", price: 90, image: "producr_two.jpg" },
    { id: 3, name: " زبدة كاكاو من Balea ", category: "زبدة كاكاو", price: 150, image: "product_three.jpg" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [maxPrice, setMaxPrice] = useState(200);
  const categories = ["الكل", "زبدة كاكاو", "ماسك", "سكريات"];

  const filteredProducts = allProducts.filter(
    (p) =>
      (selectedCategory === "الكل" || p.category === selectedCategory) &&
      p.price <= maxPrice
  );

  return (
    <section className="px-6 py-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-right mb-5 text-gray-800">
        منتجاتنا
      </h2>

      {/* 🔍 الفلترة */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 shadow-md rounded-2xl mb-10 gap-4">
        <div className="flex items-center gap-3">
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
        </div>

        <div className="flex max-[430px]:flex-col items-center gap-3">
          <input
            type="range"
            min="50"
            max="200"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-40 accent-black"
          />
          <label className="font-semibold text-gray-700">
            الحد الأقصى للسعر: ${maxPrice}
          </label>
        </div>
      </div>

      {/* 🛍️ المنتجات */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-4">${product.price}</p>

              <div className="flex justify-between items-center">
                <button onClick={ () => addToShoping(product)} className=" cursor-pointer flex items-center gap-2 text-white bg-black px-2 py-2 rounded-xl hover:bg-gray-800 transition">
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
        ))}
      </div>
    </section>
  );
}
