"use client";

import LoadContext from "@/contexts/load-context";
import { useContext } from "react";

export default function About() {
  const { isLoaded, setIsLoaded } = useContext(LoadContext);
  console.log(isLoaded);
  return (
    <div className="flex text-white justify-center p-2 ">
      <div></div>
    </div>
  );
}
