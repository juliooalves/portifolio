"use client";
import { useContext } from "react";
import Image from "next/image";
import LoadContext from "@/contexts/load-context";
import { Button } from "@/components/ui/button";
import { LucideIcon, ExternalLink } from "lucide-react";

interface LinkCardProps {
  platform: string;
  platformLink: string;
  username: string;
  Icon: LucideIcon;
}
export default function LinkCard({
  platform,
  platformLink,
  username,
  Icon,
}: LinkCardProps) {
  const { isLoaded, setIsLoaded } = useContext(LoadContext);

  return (
    <Button
      onClick={() => {
        window.location.href = `https://${platformLink}`;
      }}
      className={`flex h-20 lg:w-[90%] w-[70%] p-5 border border-slate-300 bg-slate-100 text-slate-900/90 hover:bg-slate-300  dark:border-none  dark:text-gray-300/90 
      dark:bg-stone-900 rounded-lg ${isLoaded ? " translate-y-0 opacity-1" : " translate-y-20 opacity-0"}
      transition-all  duration-1000 `}
    >
      {Icon}
      {platform}
      <p>{username}</p>
      <ExternalLink />
    </Button>
  );
}
