import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import Tagsprogress from "../tags/Tagsprogress";
import Link from "next/link";
import "aos/dist/aos.css";
import Image from "next/future/image";
import Niagahoster from "/public/assets/Lomba-Niagahoster.webp";
import Staycation from "/public/assets/staycation.webp";
import Mony from "/public/assets/mony-app.webp";
import { FiExternalLink } from "react-icons/fi";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
}

function Projects() {
  return (
    <ul data-aos="fade- " data-aos-duration="1500" className="mt-40 grid  gap-16 sm:grid-cols-2 items-start xl:grid-cols-2 ">
      <li className="w-full rounded-2xl border flex flex-col md:p-6 p-4 border-gray-300 bg-white  scale-100 hover:scale-[1.02] active:scale-[0.97] hover:shadow-2xl transition duration-100 motion-reduce:hover:scale-100 animate-shadow">
        <Link href="/lomba-niagahoster">
          <a className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
            <Image src={Niagahoster} className="rounded-xl" alt="Thumbnail for Landing Page Niagahoster" />
            <div className="flex flex-col items-center mt-8 ">
              <article className="space-y-4">
                <div className="flex gap-4 items-center">
                  <h2 className=" text-slate-900 text-lg font-semibold ">Lomba Niagahoster</h2>
                  <FiExternalLink className="md:text-2xl text-lg" />
                </div>

                <p className="text-slate-600">While I was surfing on Instagram, I saw a post from Niagahoster which was holding a landing page making competition.</p>
              </article>
            </div>
          </a>
        </Link>
      </li>
      <li className="w-full rounded-2xl border flex flex-col md:p-6 p-4 border-gray-300 bg-white  scale-100 hover:scale-[1.02] active:scale-[0.97] hover:shadow-2xl transition duration-100 motion-reduce:hover:scale-100 animate-shadow">
        <Link href="/">
          <a className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
            <Image src={Staycation} className="rounded-xl" alt="Thumbnail for Landing StayCation" />
            <div className="flex flex-col items-center mt-8 ">
              <article className="space-y-4">
                <div className="flex gap-4 items-center">
                  <h2 className=" text-slate-900 text-lg font-semibold ">StayCation</h2>
                  <FiExternalLink className="md:text-2xl text-lg" />
                  <Tagsprogress>In Progress</Tagsprogress>
                </div>

                <p className="text-slate-600">StayCation is an application to help people find homes, hotels or apartments that can be used as vacation spots.</p>
              </article>
            </div>
          </a>
        </Link>
      </li>
      <li className="w-full rounded-2xl border flex flex-col md:p-6 p-4 border-gray-300 bg-white  scale-100 hover:scale-[1.02] active:scale-[0.97] hover:shadow-2xl transition duration-100 motion-reduce:hover:scale-100 animate-shadow">
        <Link href="/">
          <a className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
            <Image src={Mony} alt="Mony App" className="rounded-xl" />
            <div className="flex flex-col items-center mt-8 ">
              <article className="space-y-4">
                <div className="flex gap-4 items-center">
                  <h2 className=" text-slate-900 text-lg font-semibold ">Mony App</h2>
                  <FiExternalLink className="md:text-2xl text-lg" />
                  <Tagsprogress>In Progress</Tagsprogress>
                </div>

                <p className="text-slate-600">Mony App is an application that makes it easy for users to pay for internet, electricity and other things</p>
              </article>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default Projects;
