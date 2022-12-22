import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Twitter from "../../../public/assets/Twitter.js";
import LinkedIn from "../../../public/assets/LinkedIn.js";
import PatternHero from "../../../public/assets/PatternHero.js";
import Dribbble from "/public/assets/Dribbble";
import { FiArrowRight } from "react-icons/fi";
import Button from "../button/Button.js";
import Link from "next/link";
function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  const [text] = useTypewriter({
    words: ["Designer.", "Engineer."],
    loop: {},
    typeSpeed: "120",
    deleteSpeed: "50",
  });

  return (
    <div data-aos="fade-down " data-aos-duration="1500" className="mt-20 xl:px-0 md:px:6 grid grid-cols-12   relative ">
      <div className="   col-span-12">
        <h1 className="md:text-8xl text-slate-900 font-title text-5xl font-medium">
          UI <span className="">{text}</span>
          <Cursor cursorColor="#0284c7" />
        </h1>

        <p className="md:mt-10 mt-6 text-slate-600 md:leading-relaxed leading-loose max-w-2xl  md:text-2xl text-lg transition-all  ">
          Hi there! Im' Fasha. If you're looking for a designer who can bring your vision to fruition, you've come to the right place. Feel free to explore my work below.
        </p>

        <Link href="/about">
          <a>
            <Button onClick={handleMouseOver} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} className="tracking-wide gap-2 transition-all mt-6 ">
              About me {isHovering && <FiArrowRight />}
            </Button>
          </a>
        </Link>

        <div className="flex gap-6 mt-8 items-center z-50 ">
          <a className="flex  gap-2 items-center" target="_blank" href="https://twitter.com/fasfashan" rel="noreferrer ">
            <Twitter />
            <span className="text-sm hover:text-gray-600 text-gray-900 font-semibold">Twitter</span>
          </a>

          <a className="flex z-100  gap-2 items-center" target="_blank" href="https://www.linkedin.com/in/muhamad-fasha-fadillah/" rel="noreferrer ">
            <LinkedIn />
            <span className="text-sm hover:text-gray-600 text-gray-900 font-semibold">LinkedIn</span>
          </a>
          <a className="flex   gap-2 items-center" target="_blank" href="https://dribbble.com/fasfashan" rel="noreferrer ">
            <Dribbble />
            <span className="text-sm hover:text-gray-600 text-gray-900 font-semibold">Dribbble</span>
          </a>
        </div>
      </div>
      <div className="absolute  opacity-25 md:top-10 top-96 md:right-10 -right-20 md:w-200 ">
        <PatternHero />
      </div>
    </div>
  );
}
export default Hero;
