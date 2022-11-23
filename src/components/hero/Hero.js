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
    <div className="md:mt-36 mt-24 ">
      <h1 data-aos="fade-up" data-aos-duration="1500" className="md:text-7xl text-5xl  text-primary font-medium leading-tight">
        Fasha Fadillah is user interface designer, based in Bogor, Indonesia. Specialize in web design and mobile design.{" "}
      </h1>
      <div data-aos="fade-right" data-aos-duration="2000" className="mt-8 flex space-x-4">
        <Link href="/about">
          <Button className="text-white ">
            About me <HiChevronRight className="ml-1" />
          </Button>
        </Link>
        <ButtonText>
          Selected Work <HiChevronRight className="ml-1" />
        </ButtonText>
      </div>
    </div>
  );
}
export default Hero;
