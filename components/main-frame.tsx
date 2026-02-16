"use client";
import { Input } from "@/components/ui/input";
import TopBar from "@/components/top-bar";
import Welcome from "@/components/welcome";
import About from "@/components/about";
export default function MainFrame() {
  return (
    <>
      <TopBar />
      <Welcome />
      <About />
    </>
  );
}
