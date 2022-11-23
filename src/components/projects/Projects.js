import React from "react";
import AOS from "aos";
import { Tooltip, Button } from "@mui/material";
import "aos/dist/aos.css";
import Image from "next/future/image";
import KRL from "../../../public/assets/KRL Access.png";
import Parabel from "../../../public/assets/Parabel.png";
import { HiChevronRight } from "react-icons/hi";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
}
const Projects = () => {
  return (
    <section id="projects" className="mt-60 space-y-60">
      <div className="grid grid-cols-12 gap-6 items-center  ">
        <div data-aos="fade-up" data-aos-duration="2000" className="md:col-start-1 md:col-end-7 col-start-1 col-end-13">
          <Image src={KRL} alt="KRL Access" />
        </div>
        <div data-aos="fade-right" data-aos-duration="2000" className=" space-y-6 md:col-start-7 md:col-end-13 col-start-1 col-end-13">
          <div className="space-y-2 ">
            <h3 className="text-2xl font-semibold">Re-design KRL Access</h3>
            <p className="text-lg text-secondary">
              Sebagai pekerja yang menggunakan KRL Commuter Line setiap hari, saya merasa terbantu akan adanya KRL Access. Saya pasti membuka KRL Access ketika ingin berangkat dan pulang kerja, atau ketika lembur di kantor dan ingin tahu
              keberangkatan Commuter Line terakhir ada di jam berapa supaya saya tidak tertinggal.
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
              Case study <HiChevronRight className="ml-2" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 items-center  ">
        <div data-aos="fade-down" data-aos-duration="2000" className="md:col-start-1 md:col-end-7 col-start-1 col-end-13">
          <Image src={Parabel} alt="Parabel" className="rounded-lg" />
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" className=" space-y-6 md:col-start-7 md:col-end-13 col-start-1 col-end-13">
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
              Case study <HiChevronRight className="ml-2" />
            </Button>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default Projects;
