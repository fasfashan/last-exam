import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import LandingLogin from "/public/assets/Fashion Login .png";
import MonyApp from "/public/assets/Mony-App.png";
import Image from "next/image";
import Stocks from "/public/assets/Stocks.mp4";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1500" className="md:mt-20 mt-16 ">
      <div className="space-y-4">
        <h1 className="md:text-7xl  text-4xl  text-primary font-semibold leading-tight">Fasha Fadillah is user interface designer, based in Bogor, Indonesia. Specialize in web design and mobile design. </h1>
        <p className="text-xl text-secondary">Scroll down to see the portfolio ↓</p>
      </div>
      <div className="grid grid-cols-12 gap-8 mt-20 justify-items-between ">
        <div className="md:col-span-4 flex-col gap-8 col-span-12 ">
          <div className="flex items-center p-6 bg-gradient-to-r from-slate-200 to-slate-300">
            <Image src={LandingLogin} />
          </div>
          <div className=" mt-8  bg-gradient-to-r from-indigo-100 to-indigo-200">
            <Image src={MonyApp} />
          </div>
        </div>
        <div className="md:col-span-8 col-span-12 flex items-center bg-primary">
          <video autoPlay loop muted playsInline className="p-10 rounded-lg" src={Stocks} />
        </div>
      </div>
    </div>
  );
}
export default Hero;
