"use client";

import { useState, useEffect, createContext, ReactNode } from "react";

const LoadContext = createContext(false);

export const LoadProvider = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    return;
  }, []);
  return (
    <LoadContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </LoadContext.Provider>
  );
};
export default LoadContext;
