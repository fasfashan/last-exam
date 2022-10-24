import React from "react";
import Image from "next/future/image";
import BCA from "../../../public/assets/BCA.png";
import FEIN from "../../../public/assets/FEIN.png";
import Ergonomics from "../../../public/assets/Ergonomics.png";
import Tagsprogress from "../tags/Tagsprogress";
const Projects = () => {
  return (
    <section id="projects" className="mt-36 ">
      <div className="grid grid-cols-12 space-y-4 ">
        <div className="md:col-start-1 md:col-end-13 col-start-1 col-end-13">
          <Image className="animate-bounce" src={BCA} alt="BCA" />
        </div>
        <div className="space-y-4 md:col-start-1 md:col-end-7 col-start-1 col-end-13">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">BCA - Innovation Convention Center</h3>
            <p className="text-lg text-secondary">User Interface Design</p>
            <Tagsprogress>Case study in progress</Tagsprogress>
          </div>
        </div>
      </div>
      <div className="mt-36">
        <div className="grid grid-cols-12 gap-x-8  space-y-36">
          <div className="md:col-start-1 md:col-end-7 col-start-1 col-end-13 space-y-4">
            <Image className="animate-bounce " src={FEIN} alt="FEIN" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Fein - Designing and Develop Website</h3>
              <p className="text-lg text-secondary">User Interface Design, Front-end Developer</p>
              <Tagsprogress>Case study in progress</Tagsprogress>
            </div>
          </div>
          <div className="md:col-start-7 md:col-end-13 col-start-1 col-end-13 space-y-4 ">
            <Image className="animate-bounce " src={Ergonomics} alt="Ergonomics" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Ergonomics - Designing and Develop Website</h3>
              <p className="text-lg text-secondary">User Interface Design, Front-end Developer</p>
              <Tagsprogress>Case study in progress</Tagsprogress>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
