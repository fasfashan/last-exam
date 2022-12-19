import Seo from "../components/seo/Seo";
import { useEffect } from "react";
import Projects from "../components/projects/Projects";
import About from "../components/about/about";
import Hero from "../components/hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home({ posts }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Seo />
      <Hero />
      <Projects />
    </>
  );
}
