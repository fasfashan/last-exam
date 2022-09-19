import { BsBriefcase } from "react-icons/bs";
import Button from "../button/Button";
import { HiArrowNarrowDown } from "react-icons/hi";
function Experience() {
  return (
    <div className="p-6 space-y-6 text rounded-md shadow-sm border border-zinc-200">
      <div className="flex items-center text-base">
        <BsBriefcase className="text-zinc-400" /> <p className="ml-2 font-medium">Work</p>
      </div>
      <div className="flex  justify-between ">
        <div className="flex">
          <div className="w-6 h-6 shadow-sm  text-sm flex items-center justify-center rounded-full bg-blue-700 text-white font-medium">M</div>
          <div className="ml-2">
            <p className="text-sm font-medium ">Murni Solusindo</p>
            <p className="text-slate-600 text-sm ">UI/UX Designer</p>
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
            <p className="text-sm font-medium ">Kiki.Id</p>
            <p className="text-slate-600 text-sm ">UI/Graphic Designer</p>
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
            <p className="text-slate-600 text-sm ">Web Designer</p>
          </div>
        </div>
        <div>
          <p className="text-slate-600 text-sm ">2020 — 2021</p>
        </div>
      </div>
      <Button className="px-4 flex justify-center text-slate-600 py-3 rounded-md hover:text-teal-500 hover:bg-teal-100 bg-zinc-100 w-full">
        Download my CV <HiArrowNarrowDown className="ml-1" />{" "}
      </Button>
    </div>
  );
}
export default Experience;
