"use client";

import Hero from "../components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import About from "@/components/about/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <Portfolio />
      <About />
    </div>
  );
}
