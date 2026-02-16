"use client";

import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import MainFrame from "@/components/main-frame";
const LaptopScene = dynamic(() => import("@/components/laptop-scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-[#0a0a14] flex items-center justify-center">
      <div className="text-gray-100 font-mono text-md animate-pulse">
        Carregando Portifolio...
      </div>
    </div>
  ),
});

export default function Page() {
  return (
    <>
      <div className="flex-row h-dvh w-full bg-black pt-2">
        <MainFrame />
      </div>
    </>
  );
}
