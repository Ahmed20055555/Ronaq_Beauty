"use client";

import { useFav } from "@/app/context/fav";
import { useShoping } from "@/app/context/shoping";
import { allProducts } from "@/public/statc-data/statc-data";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState<any>(null);
    const { shoping, addToShoping } = useShoping();
    const { Arrfav, addToFav } = useFav();

    useEffect(() => {
        if (id) {
            const getData = allProducts.find((ele: any) => ele.id === Number(id));
            setProduct(getData);

        }
    }, [id]);

    if (!product) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
                Loading product details...
            </div>
        );
    }


    const isshop = shoping.some((item) => item.id === product.id)
    const isfav = Arrfav.some((item) => item.id === product.id)




    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full">

                {/* 🖼️ الصورة */}
                <div className="md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
                    <img
                        src={`/${product.image}`}
                        alt={product.name}
                        className="w-full h-[400px] object-cover rounded-xl shadow-sm"
                    />
                </div>

                {/* 💬 التفاصيل */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center text-gray-800">
                    <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                    منتج ألماني عالي الجودة، مصنوع بعناية باستخدام أحدث التقنيات لضمان أفضل النتائج وأمان تام على البشرة.
                    </p>

                    <div className="text-3xl font-bold text-green-600 mb-8">
                        {product.price} EGP
                    </div>

                    <div className="flex items-center gap-4">

                        {
                            isshop ? <button className="cursor-pointer flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
                            >
                                تم  الاضافه </button> :
                                <button
                                    onClick={() => addToShoping(product)}
                                    className="cursor-pointer flex items-center gap-2 bg-black hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
                                >
                                    <FaShoppingCart /> أضف إلى السلة
                                </button>
                        }


                        {
                            isfav ?
                                <button
                                    onClick={() => addToFav(product)}
                                    className=" cursor-pointer p-3 border bg-green-200 border-gray-300 rounded-full"
                                >
                                    <FaHeart size={20} className="text-green-500" />
                                </button> : <button
                                    onClick={() => addToFav(product)}
                                    className="cursor-pointer p-3 border border-gray-300 rounded-full hover:bg-red-50 hover:text-red-500 transition"
                                >
                                    <FaHeart size={20} />
                                </button>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
}
