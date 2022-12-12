import React from "react";
import { useState } from "react";
import AOS from "aos";
import Tagsprogress from "../tags/Tagsprogress";
import Link from "next/link";
import "aos/dist/aos.css";
import Image from "next/future/image";
import Niagahoster from "/public/assets/Lomba Niagahoster.webp";
import Prowork from "/public/assets/Prowork.webp";
import Staycation from "/public/assets/staycationwebp.webp";
import Editvideo from "/public/assets/Editingvideoonline.png";
// import Designpresentation from "/public/assets/Design-Presentation.pdf";
import { Document, Page } from "react-pdf";

import { FiAlertCircle, FiEdit2, FiChevronRight } from "react-icons/fi";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
}
const Projects = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <section id="projects" className="mt-60 grid grid-cols-12 md:gap-8  ">
      <div data-aos="fade-down" data-aos-duration="1500" className="md:col-span-6 col-span-12 mt-20 ">
        <div>
          <Image src={Niagahoster} alt="Lomba Landing Page Niagahoster" className="shadow-lg " />
          <div className="flex gap-4 mt-8">
            <Tagsprogress>Design</Tagsprogress>
            <Tagsprogress>Landing page</Tagsprogress>
            <Tagsprogress>Development</Tagsprogress>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <h2 className=" text-white text-lg  font-bold tracking-wider">Lomba Landing Page Niagahoster</h2>
          <p className="text-slate-400 text-lg">
            Pertengahan Juni, ketika sedang asyik berselancar di Instagram, saya melihat postingan dari Niagahoster yang sedang mengadakan lomba membuat landing page. Lalu karena tertarik, saya mengunjungi detail artikel tersebut.{" "}
          </p>
        </div>
        <div className="flex items-center space-x-1 mt-2">
          <Link href="/lomba-niagahoster">
            <a className="text-lg font-semibold  text-cyan-300">Read more</a>
          </Link>
          <FiChevronRight className="text-cyan-300 text-lg " />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" className="md:col-span-6 col-span-12 mt-20 ">
        <div>
          <Image src={Prowork} className="shadow-lg" />
          <div className="flex gap-4 mt-8">
            <Tagsprogress>Design</Tagsprogress>
            <Tagsprogress>Web Apps</Tagsprogress>
            <Tagsprogress>Development</Tagsprogress>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <h2 className=" text-white text-lg  font-bold tracking-wider">Prowork: Coworking Space Web App</h2>
          <p className="text-slate-400 text-lg">
            Ruang coworking adalah ruang kerja bersama yang biasanya digunakan oleh pekerja lepas, pengusaha, pekerja jarak jauh, dan profesional independen lainnya. Website ini memudahkan mereka mencari tempat untuk bekerja.
          </p>
        </div>
        <div className="flex items-center space-x-1 mt-2">
          <a className="text-lg font-semibold  text-cyan-300">In Progress</a>

          <FiAlertCircle className="text-cyan-300 text-lg " />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" className="md:col-span-6 col-span-12 mt-20 ">
        <div>
          <Image src={Staycation} className="shadow-lg" />
          <div className="flex gap-4 mt-8">
            <Tagsprogress>Design</Tagsprogress>
            <Tagsprogress>Web Apps</Tagsprogress>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <h2 className=" text-white text-lg  font-bold tracking-wider">Staycation Application</h2>
          <p className="text-slate-400 text-lg">
            StayCation adalah aplikasi untuk membantu masyarakat dalam menemukan rumah, hotel ataupun apartement yang bisa dijadikan sebagai tempat berlibur. Tempat yang disediakan biasanya memiliki lokasi yang dekat dengan wisata liburan.
          </p>
        </div>
        <div className="flex items-center space-x-1 mt-2">
          <a className="text-lg font-semibold  text-cyan-300">In Progress</a>

          <FiAlertCircle className="text-cyan-300 text-lg " />
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="1500" className="md:col-span-6 col-span-12 mt-20 ">
        <div>
          <Image src={Editvideo} className="shadow-lg" />
          <div className="flex gap-4 mt-8">
            <Tagsprogress>Design</Tagsprogress>
            <Tagsprogress>Web Apps</Tagsprogress>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <h2 className=" text-white text-lg  font-bold tracking-wider">Editing Video Online</h2>
          <p className="text-slate-400 text-lg">
            Pengeditan video online adalah proses manipulasi dan menyusun ulang footage video untuk menciptakan produk akhir yang berkualitas dan profesional. Diperuntukan untuk streamer yang ingin membuat konten hasil live streaming mereka
            sebelumnya.
          </p>
        </div>
        <div className="flex items-center space-x-1 mt-2">
          <a className="text-lg font-semibold  text-cyan-300">In Progress</a>

          <FiAlertCircle className="text-cyan-300 text-lg " />
        </div>
      </div>
    </section>
  );
};

export default Projects;
