import Seo from "../components/seo/Seo";
import { useEffect, useState } from "react";
import Projects from "../components/projects/Projects";
import Hero from "../components/hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home({ posts }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Seo templateTitle="" siteName="Halo" />

      <Hero />
      <Projects />
    </>
  );
}
