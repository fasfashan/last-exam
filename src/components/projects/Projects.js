import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import Tagsprogress from "../tags/Tagsprogress";
import Link from "next/link";
import "aos/dist/aos.css";
import Image from "next/future/image";
import Niagahoster from "/public/assets/Lomba-niagahoster.webp";
import Staycation from "/public/assets/staycation.webp";
import Comika from "/public/assets/Redesign-comika.webp";
import Mony from "/public/assets/mony-app.webp";
import { FiExternalLink } from "react-icons/fi";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
}

function Projects() {
  return (
    <ul className="mt-40 grid  gap-16 sm:grid-cols-2 items-start xl:grid-cols-2 ">
      <li className="w-full rounded-2xl  flex flex-col md:p-6 p-4  bg-white  scale-100 hover:scale-[1.02] active:scale-[0.97] hover:shadow-2xl transition duration-100 motion-reduce:hover:scale-100 animate-shadow">
        <Link href="/lombaniagahoster">
          <a className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
            <Image src={Niagahoster} className="rounded-xl" alt="Thumbnail for Landing Page Niagahoster" />
            <div className="flex flex-col items-center mt-8 ">
              <article className="space-y-4">
                <div className="flex gap-4 items-center">
                  <h2 className=" text-gray-900 text-2xl font-medium font-title ">Lomba Niagahoster</h2>
                  <FiExternalLink className="text-lg" />
                </div>

                <p className="text-gray-500  text-base md:text-lg  md:leading-relaxed   leading-normal">While I was surfing on Instagram, I saw a post from Niagahoster which was holding a landing page making competition.</p>
              </article>
            </div>
          </a>
        </Link>
      </li>
      <li className="w-full rounded-2xl  flex flex-col md:p-6 p-4  bg-white  scale-100 hover:scale-[1.02] active:scale-[0.97] hover:shadow-2xl transition duration-100 motion-reduce:hover:scale-100 animate-shadow">
        <Link href="#">
          <a className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
            <Image src={Comika} className="rounded-xl" alt="Redesign Comika.id" />
            <div className="flex flex-col items-center mt-8 ">
              <article className="space-y-4">
                <div className="flex gap-4 items-center">
                  <h2 className="  text-gray-900 text-2xl font-medium font-title">Re-design Comika.id</h2>
                  <FiExternalLink className="text-lg" />
                  <Tagsprogress>In Progress</Tagsprogress>
                </div>

                <p className="text-slate-500  text-base md:text-lg  md:leading-relaxed  leading-normal">All about comedy content generator. Platform digital serta event para Komika dan Komedian Indonesia.</p>
              </article>
            </div>
          </a>
        </Link>
      </li>
      <li className="w-full rounded-2xl  flex flex-col md:p-6 p-4  bg-white  scale-100 hover:scale-[1.02] active:scale-[0.97] hover:shadow-2xl transition duration-100 motion-reduce:hover:scale-100 animate-shadow">
        <Link href="/">
          <a className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
            <Image src={Staycation} className="rounded-xl" alt="Thumbnail for Landing StayCation" />
            <div className="flex flex-col items-center mt-8 ">
              <article className="space-y-4">
                <div className="flex gap-4 items-center">
                  <h2 className="  text-gray-900 text-2xl font-medium font-title">StayCation</h2>
                  <FiExternalLink className="text-lg" />
                  <Tagsprogress>In Progress</Tagsprogress>
                </div>

                <p className="text-slate-500  text-base md:text-lg  md:leading-relaxed  leading-normal">StayCation is an application to help people find homes, hotels or apartments that can be used as vacation spots.</p>
              </article>
            </div>
          </a>
        </Link>
      </li>
      <li className="w-full rounded-2xl  flex flex-col md:p-6 p-4  bg-white  scale-100 hover:scale-[1.02] active:scale-[0.97] hover:shadow-2xl transition duration-100 motion-reduce:hover:scale-100 animate-shadow">
        <Link href="/">
          <a className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
            <Image src={Mony} alt="Mony App" className="rounded-xl" />
            <div className="flex flex-col items-center mt-8 ">
              <article className="space-y-4">
                <div className="flex gap-4 items-center">
                  <h2 className=" text-gray-900 text-2xl font-medium font-title ">Mony App</h2>
                  <FiExternalLink className="text-lg" />
                  <Tagsprogress>In Progress</Tagsprogress>
                </div>

                <p className="text-slate-500 text-lg">Mony App is an application that makes it easy for users to pay for internet, electricity and other things</p>
              </article>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default Projects;
