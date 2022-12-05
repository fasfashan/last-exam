import React from "react";
import Niagahoster from "/public/assets/Lomba Niagahoster.webp";
import Seo from "../components/seo/Seo";
import Image from "next/image";
const lombaniagahoster = () => {
  return (
    <>
      <Seo templateTitle="Lomba Landing Page" />
      <div className="md:mt-20 mt-16 ">
        <div className="grid grid-cols-12">
          <h1 className="md:text-7xl text-primary mb-8 col-span-12  text-4xl  text-primary font-semibold leading-tight">Lomba Landing Page: Journey with Niagahoster</h1>
          <div className="col-span-12">
            <Image src={Niagahoster} alt="Landing page niagahoster" />
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-primary ">Overview</h3>
          <p>Pertengahan Juni, ketika sedang asyik berselancar di Instagram, saya melihat postingan dari Niagahoster yang sedang mengadakan lomba membuat landing page. Lalu karena tertarik, saya mengunjungi detail artikel tersebut. </p>
        </div>
      </div>
    </>
  );
};

export default lombaniagahoster;
