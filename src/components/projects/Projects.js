import React from "react";
import AOS from "aos";
import Tagsprogress from "../tags/Tagsprogress";
import ButtonText from "../button/ButtonText";
import "aos/dist/aos.css";
import Image from "next/future/image";
import Niagahoster from "/public/assets/Lomba Niagahoster.webp";
import StocksApp from "/public/assets/Stocks.webp";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
}
const Projects = () => {
  return (
    <section id="projects" className="mt-60 grid grid-cols-12 gap-6 items-center  ">
      <div data-aos="fade-down" data-aos-duration="1500" className="md:col-span-6 col-span-12 space-y-6">
        <Image src={Niagahoster} alt="Lomba Landing Page Niagahoster" className="rounded-md " />
        <div className="space-y-2">
          <h2 className=" text-primary text-2xl  font-semibold">Lomba Landing Page Niagahoster</h2>
          <p className="text-secondary text-lg">
            Pertengahan Juni, ketika sedang asyik berselancar di Instagram, saya melihat postingan dari Niagahoster yang sedang mengadakan lomba membuat landing page. Lalu karena tertarik, saya mengunjungi detail artikel tersebut.{" "}
          </p>
        </div>
        <ButtonText className="text-primary underline">Continue Reading 📖</ButtonText>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" className="md:col-span-6 col-span-12 space-y-6">
        <Image src={StocksApp} className="rounded-md " />
        <div className="space-y-2">
          <h2 className=" text-primary text-2xl  font-semibold">Jual Beli Saham Mobile App</h2>
          <p className="text-secondary text-lg">Memudahkan pengguna mengikuti saham dan pasar. Pengguna dapat melihat chart pergerakan naik turun saham, harga beli dan jual, dan sebuah CTA untuk membeli saham tersebut.</p>
        </div>
        <ButtonText className="text-primary underline">Case study in progress💪🏻</ButtonText>
      </div>
    </section>
  );
};

export default Projects;
