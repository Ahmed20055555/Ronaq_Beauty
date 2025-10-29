"use client";
import toast from "react-hot-toast";
import { useShoping } from "../context/shoping";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Shopingpage() {
  const { shoping, removeShoping, clearShoping } = useShoping();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // حساب إجمالي السعر
    const sum = shoping.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
  }, [shoping]);

  return (
    <section
      className="px-6 py-10 bg-gray-50 min-h-screen"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" max-[330px]:flex-col flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-right text-gray-800">
          🛒 سلة التسوق
        </h2>
        {shoping.length > 0 && (
          <button
            onClick={clearShoping}
            className=" cursor-pointer bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl shadow-md transition"
          >
            حذف الكل
          </button>
        )}
      </div>

      <h2 className="text-red-600 text-2xl font-bold text-center my-5">
        الاجمالي : ${total.toFixed(2)}
      </h2>

      {/* 🛍️ عرض المنتجات */}
      {shoping.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {shoping.map((product: any) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={product.image || "perfiem.jpg"}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-500 mb-4">${product.price}</p>

                <button
                  onClick={() => removeShoping(product.id)}
                  className="flex items-center justify-center gap-2 text-white bg-red-500 px-4 py-2 rounded-xl hover:bg-red-600 transition"
                >
                  <FaTrash /> إزالة
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-20 text-xl">
          لا توجد منتجات في السلة بعد 🛒
        </p>
      )}

      {/* ✅ زر الشراء */}
      {shoping.length > 0 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => toast.error("شكراً لشرائك ❤️ (محاكاة فقط)")}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition"
          >
            إتمام الشراء
          </button>
        </div>
      )}
    </section>
  );
}
