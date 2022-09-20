import Image from "next/image";
import Seo from "../components/seo/Seo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Seo />
      <div data-aos="fade-up" data-aos-duration="800" className="grid items-baseline mt-20 md:grid-cols-12 grid-cols-4 gap-y-20">
        <div className="md:col-span-7 col-span-12 space-y-4">
          <h1 className="md:text-5xl text-4xl lg:w-9/12 leading-tight  font-bold">Lorem ipsum dolor sit amet </h1>
          <p className="leading-relaxed text-slate-600 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat sunt facere nobis, consequatur ea ab beatae quisquam expedita dignissimos. Incidunt beatae esse voluptas maxime architecto nobis alias est qui! Quae est
            beatae modi, maiores possimus id commodi nostrum ut.
          </p>
          <p className="leading-relaxed text-slate-600 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat sunt facere nobis, consequatur ea ab beatae quisquam expedita dignissimos. Incidunt beatae esse voluptas maxime architecto nobis alias est qui! Quae est
            beatae modi, maiores possimus id commodi nostrum ut.
          </p>
          <p className="leading-relaxed text-slate-600 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat sunt facere nobis, consequatur ea ab beatae quisquam expedita dignissimos. Incidunt beatae esse voluptas maxime architecto nobis alias est qui! Quae est
            beatae modi, maiores possimus id commodi nostrum ut.
          </p>
        </div>
        <div className="md:col-start-9 md:col-end-13 col-span-12 w-full ">
          <Image className=" object-cover dark:bg-zinc-800" src="/photoprofile.jpg" layout="responsive" height={1032} width={932} alt="Fasha" />
        </div>
      </div>
    </>
  );
}
export default About;
