"use client";

import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

interface FavContextType {
  Arrfav: any[];
  addToFav: (product: any) => void;
  removeFav: (id: number) => void;
  clearFav: () => void;

}

const FavContext = createContext<FavContextType | undefined>(undefined);

export function FavProvider({ children }: { children: React.ReactNode }) {

  const [Arrfav, setArrfav] = useState<any[]>([]);


  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setArrfav(JSON.parse(saved));
    }
  }, []);

  // ✅ تحديث localStorage عند التغيير
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(Arrfav));
  }, [Arrfav]);


  function addToFav(product : any) {
    const alreadyFav = Arrfav.some((item) => item.id === product.id);
    if (alreadyFav) {
      toast.error("المنتج موجود بالفعل في المفضلة ❤️");
      return;
    } 
    setArrfav( prv => [...prv , product]);
    toast.success(" تم اضافه المنتج بنجاح ❤️");  
    console.log(Arrfav);    
  }

  function removeFav(id: number) {
    const updated = Arrfav.filter((item) => item.id !== id);
    setArrfav(updated);
    toast.success("تم تفريغ المنتج من المفضله  🛍️");
  }

  function clearFav() {
    setArrfav([]);
    toast.success("تم تفريغ المنتجات من المفضله  🛍️");
  }

  return (
    <FavContext.Provider value={{ Arrfav, addToFav, removeFav, clearFav  }}>
      {children}
    </FavContext.Provider>
  );
}

export function useFav() {
  const context = useContext(FavContext);
  if (!context) {
    throw new Error("useFav must be used within a FavProvider");
  }
  return context;
}



