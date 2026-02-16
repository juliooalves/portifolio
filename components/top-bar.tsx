import { useState, useEffect } from "react";

export default function TopBar() {
  const tabItems =
    " transition-transform duration-100 hover:text-white hover:scale-[102%]";
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    console.log("worked");
    return;
  }, []);
  return (
    <div
      className={` max-h-16 text-md bg-black/95 font-sans text-gray-300/80 transition-transform  duration-500  
      [&>*]:p-0.5 [&>*]:cursor-pointer 
      gap-3 p-2 flex justify-center ${isLoaded ? "translate-y-0" : "-translate-y-10"}`}
    >
      <div className={`${tabItems}`}>Home</div>
      <div className={`${tabItems}`}>About</div>
      <div className={`${tabItems}`}>Projects</div>
      <div className={`${tabItems}`}>Contact</div>
    </div>
  );
}
