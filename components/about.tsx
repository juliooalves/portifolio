"use client";

import LoadContext from "@/contexts/load-context";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import JsSvg from "@/images/js-official-svgrepo-com.svg";
import TsSvg from "@/images/typescript-svgrepo-com.svg";
import NextSvg from "@/images/nextjs-fill-svgrepo-com.svg";
import NodeSvg from "@/images/node-svgrepo-com.svg";
import ReactSvg from "@/images/react-svgrepo-com.svg";
import LinuxSvg from "@/images/linux-svgrepo-com.svg";
export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggersOne: false,
    rootMargin: "1px",
  });
  return (
    <div ref={ref} className=" p-2 w-full  flex justify-center content-center">
      <div
        className={` flex flex-col  min-h-screen w-full h-20  
        transition-all duration-1000 bg-transparent text-white  p-2 `}
      >
        <div
          ref={ref}
          className={` text-[40px] !self-start !justify-self-start transiton-all duration-1000 ${inView ? "translate-x-0 opacity-1" : " -translate-y-10 opacity-0"}`}
        >
          Stacks
          <p className=" text-gray-300/90 font-semibold !text-[20px]">
            Always searching new technologies to trive on
          </p>
        </div>
        <div
          ref={ref}
          className="flex justify-center space-x-10 content-center max-h-20"
        >
          <div
            className={` justify-items-center  place-self-center mt-32 grid col-start-3 grid-cols-5 gap-3 justify-center items-center ${inView ? "translate-y-0" : "-translate-y-30"}`}
          >
            <Image className="!rounded-xl" src={JsSvg} alt="" />
            <Image className="!rounded-xl" src={TsSvg} alt="" />
            <Image className="!rounded-xl" src={NextSvg} alt="" />
            <Image className="!rounded-xl" src={NodeSvg} alt="" />
            <Image className="!rounded-xl" src={ReactSvg} alt="" />
            <Image className="!rounded-xl" src={LinuxSvg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
