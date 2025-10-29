// "use client";
// import toast from "react-hot-toast";
// import { useShoping } from "../context/shoping";
// import { FaTrash } from "react-icons/fa";
// import { useEffect, useState } from "react";

// export default function Shopingpage() {
//   const { shoping, removeShoping, clearShoping } = useShoping();
//   const [total, setTotal] = useState(0);

//   const [newprice, setnewprice] = useState(0);

 

//   useEffect(() => {
//     // حساب إجمالي السعر
//     const sum = shoping.reduce((acc, item) => acc + item.price, 0);
//     setTotal(sum);
//   }, [shoping]);


//   function incrementprice(number : any) {
    
//     console.log('incrementprice' , number);

//     shoping.map((shop) => {
//       console.log(shop.price);
//       setnewprice(shop.price + number)
//     })
    
//   }

//   return (
//     <section
//       className="px-6 py-10 bg-gray-50 min-h-screen"
//       style={{
//         backgroundImage: "url('/background.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className=" max-[330px]:flex-col flex justify-between items-center mb-10">
//         <h2 className="text-3xl font-bold text-right text-gray-800">
//           🛒 سلة التسوق
//         </h2>
//         {shoping.length > 0 && (
//           <button
//             onClick={clearShoping}
//             className=" cursor-pointer bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl shadow-md transition"
//           >
//             حذف الكل
//           </button>
//         )}
//       </div>

//       <h2 className="text-red-600 text-2xl font-bold text-center my-5">
//         الاجمالي : ${total.toFixed(2)}
//       </h2>

//       {/* 🛍️ عرض المنتجات */}
//       {shoping.length > 0 ? (
//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {shoping.map((product: any) => (
//             <div
//               key={product.id}
//               className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
//             >
//               <img
//                 src={product.image || "perfiem.jpg"}
//                 alt={product.name}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-4 flex flex-col justify-between">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   {product.name}
//                 </h3>

//                   <div className="flex items-center gap-3 mb-4">
//                     <button className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
//                       -
//                     </button>
//                     <p className="text-gray-800 font-semibold text-lg">${newprice}</p>
//                     <button  
//                     onClick={ () => incrementprice(product.price) }
//                     className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
//                       +
//                     </button>
//                   </div>
//                 <button
//                   onClick={() => removeShoping(product.id)}
//                   className="cursor-pointer flex items-center justify-center gap-2 text-white bg-red-500 px-4 py-2 rounded-xl hover:bg-red-600 transition"
//                 >
//                   <FaTrash /> إزالة
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500 mt-20 text-xl">
//           لا توجد منتجات في السلة بعد 🛒
//         </p>
//       )}

//       {/* ✅ زر الشراء */}
//       {shoping.length > 0 && (
//         <div className="flex justify-center mt-10">
//           <button
//             onClick={() => toast.error("شكراً لشرائك ❤️ (محاكاة فقط)")}
//             className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition"
//           >
//             إتمام الشراء
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }



"use client";
import toast from "react-hot-toast";
import { useShoping } from "../context/shoping";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Shopingpage() {
  const { shoping, removeShoping, clearShoping } = useShoping();
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  // ✅ لما تتغير سلة الشراء الأصلية، نضيف لها خاصية quantity
  useEffect(() => {
    const withQuantity = shoping.map((item) => ({
      ...item,
      quantity : 1,
    }));
    setCart(withQuantity);
  }, [shoping]);

  // ✅ حساب الإجمالي الكلي
  useEffect(() => {
    const sum = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(sum);
  }, [cart]);

  // ✅ دالة لزيادة أو تقليل الكمية
  function updateQuantity(id: number, change: number) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity : Math.max(1, item.quantity + change), // ما يقلش عن 1
            }
          : item
      )
    );
  }

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
      <div className="max-[330px]:flex-col flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-right text-gray-800">
          🛒 سلة التسوق
        </h2>
        {cart.length > 0 && (
          <button
            onClick={clearShoping}
            className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl shadow-md transition"
          >
            حذف الكل
          </button>
        )}
      </div>

      <h2 className="text-red-600 text-2xl font-bold text-center my-5">
        الإجمالي : ${total.toFixed(2)}
      </h2>

      {/* 🛍️ عرض المنتجات */}
      {cart.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cart.map((product) => (
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

                <div className="flex items-center justify-center gap-3 mb-4">
                  <button
                    onClick={() => updateQuantity(product.id, -1)}
                    className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition font-bold"
                  >
                    -
                  </button>
                  <p className="text-gray-800 font-semibold text-lg">
                    {product.quantity}
                  </p>
                  <button
                    onClick={() => updateQuantity(product.id, 1)}
                    className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition font-bold"
                  >
                    +
                  </button>
                </div>

                <p className="text-center text-gray-600 mb-2">
                  السعر: ${(product.price * product.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() => removeShoping(product.id)}
                  className="cursor-pointer flex items-center justify-center gap-2 text-white bg-red-500 px-4 py-2 rounded-xl hover:bg-red-600 transition"
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
      {cart.length > 0 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => toast.success("تمت عملية الشراء بنجاح ❤️")}
            className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition"
          >
            إتمام الشراء
          </button>
        </div>
      )}
    </section>
  );
}
