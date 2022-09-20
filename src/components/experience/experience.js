import { BsBriefcase } from "react-icons/bs";
import Button from "../button/Button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiArrowNarrowDown } from "react-icons/hi";
function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="800" className="p-6 space-y-6 text rounded-md shadow-sm border border-zinc-200">
      <div className="flex items-center text-base">
        <BsBriefcase className="text-zinc-400" /> <p className="ml-2 font-medium">Pengalaman</p>
      </div>
      <div className="flex  justify-between ">
        <div className="flex">
          <div className="w-6 h-6 shadow-sm  text-sm flex items-center justify-center rounded-full bg-blue-700 text-white font-medium">M</div>
          <div className="ml-2">
            <p className="text-sm font-medium ">Murni Solusindo</p>
            <p className="text-slate-600 text-sm ">Perancang antarmuka pengguna</p>
          </div>
        </div>
        <div>
          <p className="text-slate-600 text-sm ">2022 — Present</p>
        </div>
      </div>
      <div className="flex  justify-between ">
        <div className="flex">
          <div className="w-6 h-6 shadow-sm  text-sm flex items-center justify-center rounded-full bg-green-900 text-white font-medium">K</div>
          <div className="ml-2">
            <p className="text-sm font-medium ">Kiki.id</p>
            <p className="text-slate-600 text-sm ">Desain Grafis</p>
          </div>
        </div>
        <div>
          <p className="text-slate-600 text-sm ">2021 — 2022</p>
        </div>
      </div>
      <div className="flex  justify-between ">
        <div className="flex">
          <div className="w-6 h-6 shadow-sm  text-sm flex items-center justify-center rounded-full bg-blue-400 font-medium text-white">G</div>
          <div className="ml-2">
            <p className="text-sm font-medium ">Gagas Studio</p>
            <p className="text-slate-600 text-sm ">Pendesain Situs</p>
          </div>
        </div>
        <div>
          <p className="text-slate-600 text-sm ">2020 — 2021</p>
        </div>
      </div>
      <Button className="px-4 flex justify-center text-white py-3 rounded-md hover:bg-teal-300  bg-teal-500 w-full">
        Download my CV <HiArrowNarrowDown className="ml-1" />{" "}
      </Button>
    </div>
  );
}
export default Experience;
