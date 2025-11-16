'use client';

import { useSearch } from "@/app/context/opendrop";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaXmark, FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchModal({ allProducts }: { allProducts: any[] }) {

    const { isSearchOpen, setIsSearchOpen } = useSearch();
    const [searchValue, setSearchValue] = useState("");
    const [filtered, setFiltered] = useState<any[]>([]);

    if (!isSearchOpen) return null;

    // FILTER
    useEffect(() => {

        if (searchValue.trim() === "") {
            setFiltered([]);
            return;
        }

        const result = allProducts.filter((product) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        setFiltered(result);
    }, [searchValue, allProducts]);

    return (
        <div
            className="fixed inset-0  bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsSearchOpen(false)}
        >
            <div
                className="bg-white rounded-2xl  w-full max-w-5xl mt-20 mb-20 shadow-xl p-8 relative animate-fadeIn border"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute top-3 right-3 cursor-pointer text-gray-600 hover:text-black transition"
                >
                    <FaXmark className="text-2xl" />
                </button>

                {/* Search Input */}
                <div className="flex items-center gap-3 border rounded-full px-5 py-3 shadow-sm bg-gray-50">
                    <FaMagnifyingGlass className="text-gray-400 text-lg" />

                    <input
                        type="text"
                        className="w-full outline-none bg-transparent text-gray-700"
                        placeholder="ابحث عن منتج..."
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>



                {/* Results */}
                <div className="mt-6 max-h-[420px] overflow-y-auto pr-2">

                    {/* No Results */}
                    {filtered.length === 0 && (
                        <p className="text-center text-gray-500 py-10 text-lg">
                            لا توجد نتائج للبحث
                        </p>
                    )}

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {filtered.map((product) => (
                            <div
                                key={product.id}
                                className="relative border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
                            >
                                  <Link href={`/Product-Details/${product.id}`}>
                                <img
                                    src={`${product.image}`}
                                    alt={product.name}
                                    className="w-full h-56 object-cover"
                                />
                                 </Link>
                                <div className="p-3 text-center">
                                    <h3 className="text-sm font-semibold truncate">
                                        {product.name}
                                    </h3>

                                    <div className="mt-2">
                                        <span className="text-green-600 font-bold text-lg">
                                            {product.price} ج.م
                                        </span>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}
