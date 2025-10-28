"use client";

import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

interface ShopingContextType {
  shoping: any[];
  addToShoping: (product: any) => void;
  removeShoping: (id: number) => void;
  clearShoping: () => void;
}

const ShopingContext = createContext<ShopingContextType | undefined>(undefined);

export function ShopingProvider({ children }: { children: React.ReactNode }) {
  const [shoping, setShoping] = useState<any[]>([]);

  // ✅ تحميل البيانات من localStorage عند بداية التشغيل
  useEffect(() => {
    const saved = localStorage.getItem("shoping");
    if (saved) {
      setShoping(JSON.parse(saved));
    }
  }, []);

  // ✅ تحديث localStorage عند أي تغيير
  useEffect(() => {
    localStorage.setItem("shoping", JSON.stringify(shoping));
  }, [shoping]);

  // ✅ دالة الإضافة
  function addToShoping(product: any) {
    const alreadyAdded = shoping.some((item) => item.id === product.id);
    if (alreadyAdded) {
      toast.error("المنتج موجود بالفعل في السلة 🛒");
      return;
    }
    setShoping([...shoping, product]);
    toast.success("تمت إضافة المنتج إلى السلة ✅");
  }

  // ✅ دالة الإزالة
  function removeShoping(id: number) {
    const updated = shoping.filter((item) => item.id !== id);
    setShoping(updated);
    toast("تمت إزالة المنتج من السلة 🗑️");
  }

  // ✅ دالة تفريغ السلة
  function clearShoping() {
    setShoping([]);
    toast("تم تفريغ السلة بالكامل 🛍️");
  }

  return (
    <ShopingContext.Provider
      value={{ shoping , addToShoping, removeShoping, clearShoping }}
    >
      {children}
    </ShopingContext.Provider>
  );
}

// ✅ hook مخصص للوصول إلى السياق بسهولة
export function useShoping() {
  const context = useContext(ShopingContext);
  if (!context) {
    throw new Error("useShoping must be used within a ShopingProvider");
  }
  return context;
}
