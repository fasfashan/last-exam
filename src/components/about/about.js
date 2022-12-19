import React from "react";
import Figma from "../../../public/assets/Figma";
import Photoshop from "../../../public/assets/Photoshop";
import HTML from "../../../public/assets/HTML.js";
import Javascript from "../../../public/assets/Javascript";
import Tailwdind from "../../../public/assets/Tailwind";

const About = () => {
  return (
    <section data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className=" grid grid-cols-12 mt-32  md:gap-10 gap-y-10 ">
      <div className="md:col-span-5 col-span-12 ">
        <h2 className="text-slate-900 md:text-7xl text-5xl font-semibold leading-tight md:mb-8">Designing for the future, creating for the present.</h2>
      </div>
      <div className="md:col-start-6  col-span-12 md:col-end-13 space-y-8">
        <p className="text-slate-400 leading-relaxed text-lg">
          Fasha Fadillah is a highly skilled and experienced UI/UX designer and engineer with a strong background in web design. Currently, Fasha is employed at Murni Solusindo Nusantara as a UI/UX engineer, where he is responsible for
          designing and implementing user interfaces and user experiences for a variety of products and platforms.
        </p>

        <p className="text-slate-400 text-lg">
          Throughout he career, Fasha has gained a reputation for he ability to create visually appealing and intuitive designs that meet the needs of he clients and users. He is proficient in a range of design tools and technologies,
          including Adobe Creative Suite and Figma. Fasha is also highly collaborative, able to work effectively in team environments and consistently deliver high-quality work on time.
        </p>
        <div className="space-y-4">
          <h3 className="text-cyan-300 text-lg font-medium ">Current favorite tools/tech stack</h3>
          <div className="flex max-w-fit rounded-lg p-3 gap-6 bg-slate-600 ">
            <Photoshop />
            <Figma />
            <HTML />
            <Javascript />
            <Tailwdind />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
