"use client";

import LoadContext from "@/contexts/load-context";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import FlashInfo from "@/components/flash-infos";
import GitSvg from "@/images/github-svgrepo-com.svg";
import WorkanaSvg from "@/images/Workana/Workana_idV4cO5SuW_1.svg";
import LinkedinSvg from "@/images/linkedin-161-svgrepo-com.svg";
import Image from "next/image";

import LinkCard from "@/components/link-card";

export default function About() {
  const { isLoaded, setIsLoaded } = useContext(LoadContext);
  console.log(isLoaded);
  return (
    <div className="flex-row min-h-[90%] justify-self-center items-center text-white mt-32  p-2 ">
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
      <div className="flex w-full gap-20 relative mt-[22%] justify-start ">
        <LinkCard
          platform="GitHub"
          platformLink="github.com/juliooalves"
          username="juliooalves"
          logoPath={GitSvg}
        />
        <LinkCard
          platform="Linkedin"
          platformLink="www.linkedin.com/in/julio-alves-dev/"
          username="Júlio Alves"
          logoPath={LinkedinSvg}
        />
        <LinkCard
          platform="Workana"
          platformLink="workana.com"
          username="Júlio Alves"
          logoPath={WorkanaSvg}
        />
      </div>
    </div>
  );
}
