"use client";

import LoadContext from "@/contexts/load-context";
import { useContext } from "react";
import { Button } from "@/components/ui/button";

export default function FlashInfo({ name }: { name: string }) {
  const { isLoaded, setIsLoaded } = useContext(LoadContext);
  return (
    <div
      className={` bg-stone-900 p-2  text-gray-300/90 mt-5
        rounded-lg text-[14px]  transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-1" : "translate-y-20 opacity-0 "
        }`}
    >
      {name}
    </div>
  );
}
