"use client";
import { useState, useEffect } from "react";
import { ThemeButton } from "@/components/ui/theme-button";

export default function TopBar() {
  const tabItems =
    " transition-all duration-100 text-slate-500 hover:text-black dark:hover:text-white dark:text-gray-300/90 hover:scale-[102%]";
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    return;
  }, []);
  return (
    <>
      <div
        className={` shadow-lg shadow-slate-700/20 fixed  rounded-lg justify-self-center z-30 max-h-16 text-md bg-slate-50/95 font-sans text-gray-900/90  duration-500  
      [&>*]:p-0.5 [&>*]:cursor-pointer [&>*]:select-none dark:bg-black/95 transition-all 
      gap-3 p-2 flex justify-center ${isLoaded ? "translate-y-0 opacity-1" : "-translate-y-20 opacity-0"}`}
      >
        <div className={`${tabItems}`}>Home</div>
        <div className={`${tabItems}`}>About</div>
        <div className={`${tabItems}`}>Projects</div>
        <div className={`${tabItems}`}>Contact</div>
        <ThemeButton />
      </div>
    </>
  );
}
