import React from "react";
import AOS from "aos";
import Tagsprogress from "../tags/Tagsprogress";
import ButtonText from "../button/ButtonText";
import "aos/dist/aos.css";
import Image from "next/future/image";
import Niagahoster from "/public/assets/Lomba Niagahoster.webp";
import Prowork from "/public/assets/Prowork.webp";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
}
const Projects = () => {
  return (
    <section id="projects" className="mt-60 grid grid-cols-12 gap-12 items-start  ">
      <div data-aos="fade-down" data-aos-duration="1500" className="md:col-span-6 col-span-12 space-y-6">
        <Image src={Niagahoster} alt="Lomba Landing Page Niagahoster" className="rounded-md shadow-lg " />
        <div className="flex gap-2">
          <Tagsprogress>Design</Tagsprogress>
          <Tagsprogress>Landing page</Tagsprogress>
          <Tagsprogress>Development</Tagsprogress>
        </div>

        <div className="space-y-1">
          <h2 className=" text-primary text-lg  font-semibold">Lomba Landing Page Niagahoster</h2>
          <p className="text-secondary text-lg">
            Pertengahan Juni, ketika sedang asyik berselancar di Instagram, saya melihat postingan dari Niagahoster yang sedang mengadakan lomba membuat landing page. Lalu karena tertarik, saya mengunjungi detail artikel tersebut.{" "}
          </p>
        </div>
        <ButtonText className="text-primary underline">Continue Reading 📖</ButtonText>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" className="md:col-span-6 col-span-12 space-y-6">
        <Image src={Prowork} className="rounded-md shadow-lg" />
        <div className="flex gap-2">
          <Tagsprogress>Design</Tagsprogress>
          <Tagsprogress>Web Apps</Tagsprogress>
          <Tagsprogress>Development</Tagsprogress>
        </div>
        <div className="space-y-1">
          <h2 className=" text-primary text-lg  font-semibold">Prowork: Coworking Space</h2>
          <p className="text-secondary text-lg">
            Ruang coworking adalah lingkungan kantor bersama yang menyediakan tempat bagi individu dan tim untuk bekerja dan berkolaborasi. Ruang coworking ideal untuk freelancer, pengusaha, pekerja jarak jauh, dan tim kecil.
          </p>
        </div>
        <ButtonText className="text-primary underline">Case study in progress💪🏻</ButtonText>
      </div>
    </section>
  );
};

export default Projects;
