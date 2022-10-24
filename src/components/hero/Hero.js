import AOS from "aos";
import Twitter from "../../../public/assets/Twitter";
import Github from "../../../public/assets/Github";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight, HiChevronRight } from "react-icons/hi";
import Image from "next/future/image";
import Avatar from "../../../public/assets/Fasha.png";
import Cube from "./Cube";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="space-y-6 mt-10 grid items-center grid-cols-12">
      <div className="md:col-start-1 md:col-end-8 col-start-1 col-end-13">
        <div className="space-y-8">
          <div className="flex gap-2 items-center">
            <Image src={Avatar} className="w-20 " />
            <p className="text-secondary">Muhamad Fasha Fadillah — Based in Bogor, Indonesia.</p>
          </div>
          <div className="space-y-3">
            <h1 data-aos="fade-up" data-aos-duration="800" className="md:text-5xl text-4xl leading-tight  ">
              User Interface Engineer.
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000" className="text-lg leading-snug text-secondary ">
              Hi, there! Welcome to my personal site. Anyway, you can call me Fasha. Currently working as UI Engineer.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1200" className="flex flex-col gap-4 ">
            <div className="flex gap-4">
              <a rel="noreferrer" target="_blank" href="https://twitter.com/fasfashan">
                <Twitter className="fill-primary hover:opacity-70" width="32" height="32" fill="white" />
              </a>
              <a rel="noreferrer" target="_blank" className="" href="https://github.com/fasfashan">
                <Github className="fill-primary hover:opacity-70" width="32" height="32" fill="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <Cube />
      </div> */}
    </div>
  );
}
export default Hero;
