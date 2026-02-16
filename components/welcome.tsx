"use client";

import LoadContext from "@/contexts/load-context";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import FlashInfo from "@/components/flash-infos";
const Flashes = (name) => {
  return <div className="bg-gray-800 text-gray-300/80 ">{name}</div>;
};
export default function About() {
  const { isLoaded, setIsLoaded } = useContext(LoadContext);
  console.log(isLoaded);
  return (
    <div className="flex-row justify-self-center items-center text-white mt-32  p-2 ">
      <div
        className={` text-white text-[40px] transition-all duration-1000  
        font-sans ${isLoaded ? "translate-x-0 opacity-1" : "-translate-x-[230%] opacity-10"}`}
      >
        <p>Hi, Welcome!</p>
        <p className="">I'm Júlio Alves and</p>
        <p className="!text-green-400 ">
          This is my portifolio
          <span className="ml-2 h-8 w-4 inline-block bg-green-500 animate-pulse" />
        </p>
        <p className="pt-1  !text-[20px] !text-gray-300/85">
          <span className="font-bold">
            Full Stack Developer that has security on his core.
          </span>
          <br />
          Building optimal applications for real people with real problems.
        </p>
      </div>

      <div className="flex grid-cols-3 mt-3 justify-start gap-7">
        <FlashInfo name="Hiring Open" />
        <FlashInfo name="Freelancer Open" />
        <FlashInfo name="AppSec" />
        <FlashInfo name="DevSecOps" />
        <FlashInfo name="AI Searcher" />
      </div>
    </div>
  );
}
