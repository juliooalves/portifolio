"use client";
import { Input } from "@/components/ui/input";
import TopBar from "@/components/top-bar";
import Welcome from "@/components/welcome";
import About from "@/components/about";
import Projects from "@/components/projects";
export default function MainFrame() {
  return (
    <>
      <TopBar />
      <Welcome />
      <About />
      <Projects />
    </>
  );
}
