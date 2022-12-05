import Seo from "../components/seo/Seo";
import { useEffect, useState } from "react";
import Projects from "../components/projects/Projects";
import Hero from "../components/hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
export default function Home({ posts }) {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Seo templateTitle="" siteName="Halo" />

      <Hero />
      <Projects />
      <div className="grid items-baseline md:grid-cols-12 grid-cols-4 gap-4 "></div>
      <div className="hover:cursor-pointer"> {showTopBtn && <BsFillArrowUpCircleFill className="text-4xl fixed bottom-10 md:right-32 right-4 z-20 text-white rounded-full p-2 bg-primary " onClick={goToTop} />} </div>
    </>
  );
}
