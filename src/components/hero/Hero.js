import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Twitter from "../../../public/assets/Twitter.js";
import LinkedIn from "../../../public/assets/LinkedIn.js";
import PatternHero from "../../../public/assets/PatternHero.js";
import Dribbble from "/public/assets/Dribbble";
import { FiChevronRight } from "react-icons/fi";
import Button from "../button/Button.js";
import Fasha from "/public/assets/fasha.webp";

import Image from "next/future/image";
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
    typeSpeed: "100",
    deleteSpeed: "100",
  });

  return (
    <div data-aos="fade-down " data-aos-duration="1500" className="mt-10 xl:px-0 md:px:6 grid grid-cols-12 md:gap-x-16 gap-y-20 items-center  relative ">
      <div className=" md:col-span-6  col-span-12">
        <h1 className="md:text-8xl text-white font-title text-5xl font-medium">
          UX{"  "}
          <span>
            {" "}
            {text}
            <Cursor />
          </span>
        </h1>

        <p className="md:mt-10 mt-6 text-gray-400 md:leading-relaxed leading-loose max-w-xl   text-lg transition-all  ">
          Hi there! Im' Fasha. If you're looking for a<span className="text-sky-500 font-medium underline   underline-offset-8"> designer</span> who can bring your vision to{" "}
          <span className="text-sky-500 font-medium underline   underline-offset-8"> fruition</span>, you've come to the right place. Feel free to explore my work below.
        </p>
        <div className="flex items-center mt-6 gap-4 ">
          <Link href="/about">
            <a>
              <Button className="tracking-wide gap-2  transition-all  ">
                About <FiChevronRight />
              </Button>
            </a>
          </Link>

          <a href="mailto:pasapadilah1410@gmail.com" rel="noreferrer " className="flex hover:text-gray-400 text-white  gap-2 font-medium items-center">
            Contact me <FiChevronRight />
          </a>
        </div>
      </div>
      <div className=" md:col-span-6  col-span-12">
        <Image alt="Fasha Fadillah" src={Fasha} />
      </div>
      {/* <div className="absolute   md:top-10 top-96 md:right-10 -right-20 md:w-200 ">
        <PatternHero />
      </div> */}
    </div>
  );
}
export default Hero;
