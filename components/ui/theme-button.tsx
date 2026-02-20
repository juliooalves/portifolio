"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="  z-50 flex   items-center bg-transparent justify-center rounded-full hover:scale-105   p-2 text-gray-500 hover:text-black transition-all dark:bg-black dark:text-gray-300/90 dark:hover:text-white"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};
