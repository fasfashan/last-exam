import React from "react";

import Seo from "../components/seo/Seo";
import Image from "next/image";
import LogoNiagahoster from "/public/assets/logo-niagahoster.png";
import PreviewImage from "/public/assets/Preview-landing-page.webp";
import FullDesign from "/public/assets/full-design.webp";
import Result from "/public/assets/result.webp";

const Lombaniagahoster = () => {
  return (
    <>
      <Seo templateTitle="Lomba Landing Page" />
      <section className="md:mt-28 mt-16 grid grid-cols-12 md:max-w-4xl flex flex-col justify-center mx-auto ">
        <div className="col-span-12 ">
          <h1 className=" text-4xl text-white leading-tight md:leading-snug md:text-7xl font-medium font-title ">Lomba Landing Page: Journey With Niagahoster</h1>
          <ul className="space-y-2 mt-10">
            <li>
              <Image className="mt-4" height={19} width={200} src={LogoNiagahoster} />
            </li>
            <li>
              <p className="   mb-2  text-sm  text-gray-400 font-medium tracking-wide leading-tight">Role: Designer and FE developer</p>
            </li>
            <li>
              <p className=" mb-4  text-sm  text-gray-400 tracking-wide font-medium leading-tight">Deliverables: Create landing page and article </p>
            </li>
          </ul>
        </div>
        <div className="col-span-12 mt-28">
          <Image className="rounded-2xl border-gray-300" src={PreviewImage} />
        </div>
        <article className="col-span-12  mt-28 space-y-10">
          <div className="space-y-4">
            <h3 className="md:text-4xl text-3xl font-medium font-title text-white">The Brief</h3>
            <p className="text-gray-400  md:text-2xl text-lg md:leading-relaxed">
              The theme of the article is "Your Journey With Niagahoster". For example: Review about Niagahoster products and services, take advantage of Niagahoster blogs, ebooks, forums, events to help you learn.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="md:text-4xl  text-3xl font-medium font-title text-white">The Challange</h3>
            <p className="text-gray-400  md:text-2xl text-lg md:leading-relaxed">
              Apart from having to make a design for the landing page, the participants had to make an interesting article related to the Niagahoster product that had been used.
            </p>
          </div>
        </article>
        <div className="col-span-12 mt-28">
          <Image className="rounded-2xl" src={FullDesign} />
        </div>
        <article className="md:col-span-12 col-span-12 mt-28 space-y-10">
          <div className="">
            <h3 className="md:text-4xl text-3xl  mb-4 font-medium font-title  text-white">The Result</h3>
            <p className="text-gray-400  mb-10 md:text-2xl  text-lg md:leading-relaxed">
              Unfortunately I haven't been able to win first place in this competition, but I have given my best in this opportunity. After I saw the 1st and 2nd place winners, it turned out that their landing page content was indeed better
              and more detailed.
            </p>
            <Image className="rounded-2xl" src={Result} />
            <p className="mt-10 d:text-2xl text-gray-400  text-lg md:leading-relaxed">
              Check the cource code on my{" "}
              <a target="_blank" rel="noreferrer" href="https://github.com/fasfashan/lomba-landing-page-niagahoster" className="decoration-wavy underline  font-semibold text-sky-500 hover:text-sky-700">
                Github
              </a>
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Lombaniagahoster;
