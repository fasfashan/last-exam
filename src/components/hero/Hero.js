import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import LandingLogin from "/public/assets/Fashion Login .png";
import MonyApp from "/public/assets/Mony-App.png";
import Image from "next/future/image";
import Stocks from "/public/assets/Stocks.mp4";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1500" className="md:mt-20 mt-16 ">
      <div className="space-y-6 ">
        <h1 className="md:text-6xl  text-center text-3xl  text-white font-semibold leading-tight ">Designer with a passion for creating beautiful experiences.</h1>
        <p className="md:text-xl max-w-3xl mx-auto sm:text-lg text-slate-400  text-center">
          Browse my <span className="font-medium text-cyan-300">portfolio</span>, learn more about me and my approach, and <span className="font-medium text-cyan-300">get in touch</span> through this website.
        </p>
      </div>
      <div className="grid grid-cols-12  md:mt-20 mt-10 justify-items-between ">
        <div className="md:col-span-4 flex-col  col-span-12 ">
          <div className="flex items-center p-6 bg-slate-800 ring-slate-400 ring-1 rounded-md">
            <Image src={LandingLogin} />
          </div>
          <div className=" mt-8 bg-slate-800 ring-slate-400 ring-1 rounded-md">
            <Image src={MonyApp} />
          </div>
        </div>
        <div className="md:col-span-8 md:ml-8 md:mt-0 mt-8 col-span-12 flex items-center bg-slate-800 ring-slate-400 ring-1 rounded-md">
          <video autoPlay loop muted playsInline className="p-10 rounded-lg" src={Stocks} />
        </div>
      </div>
    </div>
  );
}
export default Hero;
