"use client";

import { createContext, useContext, useState } from "react";

// 1) Define context type
interface SearchContextType {
  isSearchOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
}

// 2) Create context
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// 3) Provider
export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <SearchContext.Provider value={{ isSearchOpen, setIsSearchOpen }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used inside SearchProvider");
  }

  return context;
}
