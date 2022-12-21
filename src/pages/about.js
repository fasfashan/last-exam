import Image from "next/future/image";
import Fasha from "/public/assets/fasha.webp";
import Seo from "../components/seo/Seo";
import AOS from "aos";
import "aos/dist/aos.css";
import Figma from "public/assets/Figma";
import Photoshop from "public/assets/Photoshop";
import HTML from "public/assets/HTML.js";
import Javascript from "public/assets/Javascript";
import Tailwdind from "public/assets/Tailwind";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Seo templateTitle="About" />
      <div data-aos="fade-up" data-aos-duration="800" className="grid gap-8 items-center md:mt-20 mt-10   grid-cols-12  gap-y-20">
        <div className="md:col-span-8 col-span-12 space-y-10 ">
          <h1 className="md:text-7xl text-5xl  leading-tight  font-bold">Love design and code. </h1>
          <p className="md:leading-relaxed text-slate-500 text-lg ">
            {/* <a className="text-sky-500 font-medium" rel="noreferrer" target="_blank" href="https://www.youtube.com/c/WebProgrammingUNPAS">
              Shandika Galih (WebProgrammingUNPAS).
            </a>{" "} */}
            Hi, I'm Fasha. I started learning web programming around the beginning of 2019. Starting from watching videos on Mr.{" "}
            <a className="text-sky-500 hover:text-sky-600 font-medium" rel="noreferrer" target="_blank" href="https://www.youtube.com/c/WebProgrammingUNPAS">
              Shandika Galih's channel (WebProgrammingUNPAS)
            </a>{" "}
            . Then they have difficulties over time because they study alone without being guided by a tutor..
          </p>
          <p className="md:leading-relaxed text-slate-500 text-lg">
            Long story short, since I started from graphic design, I decided to become a user interface designer. I learn from e-books, and also Twitter. There are several names that have helped me grow up to now, including:
            <a rel="noreferrer" target="_blank" href="https://twitter.com/dwinawan_" className="text-sky-500 hover:text-sky-600 font-medium">
              @Dwinawan
            </a>
            , dan{" "}
            <a rel="noreferrer" target="_blank" href="https://twitter.com/DesignersHalo" className="text-sky-500 hover:text-sky-600 font-medium">
              @DesignersHalo
            </a>
          </p>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-slate-600">Current favorite tools/tech stack</h3>
            <div className="flex max-w-fit rounded-lg p-3 gap-6 bg-sky-100 ">
              <Photoshop />
              <Figma />
              <HTML />
              <Javascript />
              <Tailwdind />
            </div>
          </div>
        </div>
        <div className="md:col-span-4 col-span-12">
          <Image src={Fasha} />
        </div>
      </div>
    </>
  );
}
export default About;
