import React, { Component } from "react";
import AOS from "aos";
import { Tooltip } from "@mui/material";
import Button from "../button/Button";
import "aos/dist/aos.css";
import Image from "next/future/image";
import KRL from "../../../public/assets/KRL Access.png";
import Parabel from "../../../public/assets/Parabel.png";
import { HiChevronRight } from "react-icons/hi";
import myvideo from "../../../public/assets/Stocks.mp4";
import Interior from "../../../public/assets/Interior.mp4";
import LandingLogin from "../../../public/assets/LandingLogin .png";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
}
const Projects = () => {
  return (
    <section id="projects" className="mt-20  space-y-60 ">
      <div class="grid grid-rows-1 grid-flow-col gap-3 d">
        <div data-aos="fade-down" data-aos-duration="2000" class="row-span-4 col-span-8">
          <Image src={LandingLogin} />
        </div>
        <div class=" col-span-6 flex flex-col md:gap-y-4 gap-y-3   ">
          <video src={myvideo} autoPlay={true} muted={true} loop={true}></video>
          <video src={myvideo} autoPlay={true} muted={true} loop={true}></video>
        </div>
        <div class="row-span-2 col-span-2"></div>
      </div>

      {/* Project */}
      <div className="grid grid-cols-12 gap-6 items-baseline  ">
        <div data-aos="fade-down" data-aos-duration="2000" className="md:col-start-1 md:col-end-7 col-start-1 col-end-13">
          <Image src={Parabel} alt="Parabel" className="rounded-lg" />
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className=" space-y-6 md:col-start-7 md:col-end-13 col-start-1 col-end-13 shadow-sm bg-backblue px-6 py-6 rounded-lg border border-slate-200">
          <div className="space-y-2 ">
            <h3 className="text-2xl font-semibold">Parabel News</h3>
            <p className="text-lg text-secondary">
              Klien dan kebetulan teman satu kampus saya ini tetiba menghubungi saya di pertengahan bulan September, 2022. Ia ingin mewujudkan cita-citanya, yaitu memiliki media berbasis website sendiri, dan tentunya media yang tidak
              diintervensi oleh pihak mana pun.
            </p>
          </div>
          <Tooltip
            className="hover:opacity-50 font-medium"
            classes={{
              tooltip: "rounded-md bg-primary text-white",
            }}
            title="Case study in progress"
            content="Material Tailwind"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Button className="bg-primary text-sm font-medium text-white  capitalize rounded-full px-3 rounded-full  hover:bg-opacity-90 hover:cursor-not-allowed hover:bg-primary ">
              Case study <HiChevronRight className="ml-1" />
            </Button>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default Projects;
