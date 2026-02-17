"use client";
import { useContext } from "react";
import Image from "next/image";
import LoadContext from "@/contexts/load-context";
import { Button } from "@/components/ui/button";

interface LinkCardProps {
  platform: string;
  platformLink: string;
  username: string;
  logoPath: string;
}
export default function LinkCard({
  platform,
  platformLink,
  username,
  logoPath,
}: LinkCardProps) {
  const { isLoaded, setIsLoaded } = useContext(LoadContext);

  return (
    <Button
      onClick={() => {
        window.location.href = `https://${platformLink}`;
      }}
      className={`flex-col h-24 !p-5 text-gray-300/90 
      bg-stone-900 rounded-lg ${isLoaded ? " translate-y-0 opacity-1" : " translate-y-20 opacity-0"}
      transition-all  duration-1000 `}
    >
      {}
      <Image alt="" className="size-7 absolute -top-10 " src={logoPath} />
      {platform}
      <p>{username}</p>
    </Button>
  );
}
