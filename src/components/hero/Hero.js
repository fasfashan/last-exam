import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import { HiChevronRight } from "react-icons/hi";
import ButtonText from "../button/ButtonText";
import Link from "next/link";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1500" className="md:mt-36 mt-16 ">
      <h1 className="md:text-7xl  text-4xl  text-primary font-medium leading-tight">Fasha Fadillah is user interface designer, based in Bogor, Indonesia. Specialize in web design and mobile design. </h1>
      <p className="mt-6 text-xl text-secondary">Scroll down to see the portfolio ↓</p>
    </div>
  );
}
export default Hero;
