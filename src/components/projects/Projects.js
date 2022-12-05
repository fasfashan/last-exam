import React from "react";
import AOS from "aos";
import Tagsprogress from "../tags/Tagsprogress";
import ButtonText from "../button/ButtonText";
import "aos/dist/aos.css";
import Image from "next/future/image";
import Niagahoster from "/public/assets/Lomba Niagahoster.webp";
import Prowork from "/public/assets/Prowork.webp";
import Staycation from "/public/assets/staycationwebp.webp";
import { FiExternalLink, FiEdit2 } from "react-icons/fi";
import Link from "next/link";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
}
const Projects = () => {
  return (
    <section id="projects" className="mt-60 grid grid-cols-12 gap-8  gap-y-20 ">
      <div data-aos="fade-down" data-aos-duration="1500" className="md:col-span-6 col-span-12 ">
        <div>
          <Image src={Niagahoster} alt="Lomba Landing Page Niagahoster" className="shadow-lg " />
          <div className="flex gap-4 mt-8">
            <Tagsprogress>Design</Tagsprogress>
            <Tagsprogress>Landing page</Tagsprogress>
            <Tagsprogress>Development</Tagsprogress>
          </div>
        </div>
        <div className="mt-4">
          <h2 className=" text-primary text-lg  font-bold">Lomba Landing Page Niagahoster</h2>
          <p className="text-secondary text-lg">
            Pertengahan Juni, ketika sedang asyik berselancar di Instagram, saya melihat postingan dari Niagahoster yang sedang mengadakan lomba membuat landing page. Lalu karena tertarik, saya mengunjungi detail artikel tersebut.{" "}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/lomba-niagahoster">
            <a className="text-lg font-semibold underline text-primary">Read more</a>
          </Link>
          <FiExternalLink />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" className="md:col-span-6 col-span-12 ">
        <div>
          <Image src={Prowork} className="shadow-lg" />
          <div className="flex gap-4 mt-8">
            <Tagsprogress>Design</Tagsprogress>
            <Tagsprogress>Web Apps</Tagsprogress>
            <Tagsprogress>Development</Tagsprogress>
          </div>
        </div>
        <div className="mt-4">
          <h2 className=" text-primary text-lg  font-bold">Prowork: Coworking Space Web App</h2>
          <p className="text-secondary text-lg">
            Ruang coworking adalah ruang kerja bersama yang biasanya digunakan oleh pekerja lepas, pengusaha, pekerja jarak jauh, dan profesional independen lainnya. Website ini memudahkan mereka mencari tempat untuk bekerja.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <a className="text-lg font-semibold underline text-primary">In Progress</a>

          <FiEdit2 />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" className="md:col-span-6 col-span-12 ">
        <div>
          <Image src={Staycation} className="shadow-lg" />
          <div className="flex gap-4 mt-8">
            <Tagsprogress>Design</Tagsprogress>
            <Tagsprogress>Web Apps</Tagsprogress>
          </div>
        </div>
        <div className="mt-4">
          <h2 className=" text-primary text-lg  font-bold">Staycation Application</h2>
          <p className="text-secondary text-lg">
            StayCaion adalah aplikasi untuk membantu masyarakat dalam menemukan rumah, hotel ataupun apartement yang bisa dijadikan sebagai tempat berlibur. Tempat yang disediakan biasanya memiliki lokasi yang dekat dengan wisata liburan.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <a className="text-lg font-semibold underline text-primary">In Progress</a>

          <FiEdit2 />
        </div>
      </div>
    </section>
  );
};

export default Projects;
