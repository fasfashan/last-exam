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
import { FiExternalLink, FiArrowLeft, FiLoader } from "react-icons/fi";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LogoNiagahoster from "/public/assets/logo-niagahoster.png";
import ImageGallery from "react-image-gallery";
import FullDesignNiaghoster from "/public/assets/full-design.webp";
import ResultLomba from "/public/assets/result.webp";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Projects() {
  // Niagahoster
  const [openNiagahoster, setOpenNiagahoster] = React.useState(false);
  const handleOpenNiagahoster = () => setOpenNiagahoster(true);

  // Close Modal
  const handleCloseNiagahoster = () => setOpenNiagahoster(false);

  // Comika.Id
  const [openComika, setOpenComika] = React.useState(false);
  const handleOpenComika = () => setOpenComika(true);

  // Close Modal
  const handleCloseComika = () => setOpenComika(false);

  // StayCation
  const [openStaycation, setOpenStaycation] = React.useState(false);
  const handleOpenStaycation = () => setOpenStaycation(true);

  // Close Modal
  const handleCloseStaycation = () => setOpenStaycation(false);

  return (
    <ul className="mt-40 grid  gap-16 sm:grid-cols-2 items-start xl:grid-cols-3 ">
      {/* Modal For Niagahoster */}
      <Modal
        disableScrollLock={true}
        sx={{
          backdropFilter: "blur(5px)",
          //other styles here
        }}
        open={openNiagahoster}
        onClose={handleCloseNiagahoster}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="flex flex-col scrollbar-hide drop-shadow-lg overflow-y-scroll  bg-primarybg/90 md:p-16 p-6 ml-auto  h-full  md:max-w-4xl ">
          <ButtonUnstyled className=" bg-black max-w-fit rounded-full p-2" onClick={handleCloseNiagahoster}>
            <FiArrowLeft className="text-white text-2xl" />
          </ButtonUnstyled>
          <h1 className="md:text-5xl text-3xl mt-8 text-white leading-tight md:leading-snug font-medium font-title ">Lomba Landing Page: Journey With Niagahoster</h1>
          <ul className="space-y-3 mt-10">
            <li>
              <Image className="mt-4" height={19} width={200} src={LogoNiagahoster} alt="Logo Niagahoster" />
            </li>
            <li>
              <p className="   mb-2  text-sm  text-gray-400 font-medium tracking-wide leading-tight">Role: Designer and FE developer</p>
            </li>
            <li>
              <p className=" mb-4  text-sm  text-gray-400 tracking-wide font-medium leading-tight">Deliverables: Create landing page and article </p>
            </li>
          </ul>
          <article className="space-y-6 mt-10">
            <h3 className=" text-2xl font-medium  text-white">The Brief</h3>
            <p className="text-gray-400  md:text-2xl text-base leading-relaxed  md:leading-relaxed">
              The theme of the article is "Your Journey With Niagahoster". For example: Review about Niagahoster products and services, take advantage of Niagahoster blogs, ebooks, forums, events to help you learn.
            </p>
          </article>
          <article className="space-y-6 mt-10">
            <h3 className=" text-2xl font-medium  text-white">The Challange</h3>
            <p className="text-gray-400  md:text-2xl text-base leading-relaxed  md:leading-relaxed">
              Apart from having to make a design for the landing page, the participants had to make an interesting article related to the Niagahoster product that had been used.
            </p>
          </article>
          <Image className="mt-10" src={FullDesignNiaghoster} alt="Full Design Niagahoster" />
          <article className="space-y-6 mt-10">
            <h3 className=" text-2xl font-medium  text-white">The Result</h3>
            <p className="text-gray-400  md:text-2xl text-base leading-relaxed  md:leading-relaxed">
              Unfortunately I haven't been able to win first place in this competition, but I have given my best in this opportunity. After I saw the 1st and 2nd place winners, it turned out that their landing page content was indeed better
              and more detailed.
            </p>
          </article>
          <Image className="mt-10" src={ResultLomba} alt="Hasil lomba" />
        </Box>
      </Modal>
      {/* Modal For Niagahoster */}
      {/* Modal For Comika */}
      <Modal
        disableScrollLock={true}
        sx={{
          backdropFilter: "blur(5px)",
          //other styles here
        }}
        open={openComika}
        onClose={handleCloseComika}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="flex flex-col scrollbar-hide drop-shadow-lg   bg-primarybg/90 md:p-16 p-6  h-full ml-auto  md:max-w-4xl ">
          <ButtonUnstyled className=" bg-black max-w-fit rounded-full p-2" onClick={handleCloseComika}>
            <FiArrowLeft className="text-white text-2xl" />
          </ButtonUnstyled>
          <div className="flex items-center mt-8">
            <h1 className="md:text-5xl text-3xl  text-white leading-tight md:leading-snug font-medium font-title ">Case study in progress </h1>
            <AiOutlineLoading3Quarters className=" ml-4 text-3xl animate-spin  text-white" />
          </div>
          <p className="text-gray-400  md:text-2xl text-base leading-relaxed  md:leading-relaxed mt-4">This case study is still in the writing and preparation stage. You can check other case studies. Cheers!</p>
        </Box>
      </Modal>
      {/* Modal for StayCation */}
      <li className="  w-full  flex flex-col     scale-100 hover:scale-[1.02] active:scale-[0.97] hover:shadow-2xl hover:shadow-sky-500/50 transition duration-100 motion-reduce:hover:scale-100 animate-shadow m-0 text-lg text-white">
        <ButtonUnstyled className="focus-visible:ring focus-visible:ring-primary-300" onClick={handleOpenNiagahoster}>
          <div className="block space-y-4 p-6 h-full text-left rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
            <Image src={Niagahoster} alt="Thumbnail for Landing Page Niagahoster" />
            <div className=" space-y-2">
              <h2 className="  text-white text-base md:text-lg font-medium ">Lomba Niagahoster</h2>
              <p className="text-neutral-400 text-base md:text-lg">While I was surfing on Instagram, I saw a post from Niagahoster which was holding a landing page making competition.</p>
            </div>
          </div>
        </ButtonUnstyled>
      </li>
      <li className=" w-full  flex flex-col     scale-100 hover:scale-[1.02] active:scale-[0.97] hover:shadow-2xl hover:shadow-sky-500/50 transition duration-100 motion-reduce:hover:scale-100 animate-shadow m-0 text-lg text-white">
        <ButtonUnstyled className="focus-visible:ring focus-visible:ring-sky-500 active:outline-none rounded-none" onClick={handleOpenComika}>
          <div className="block space-y-6 p-6 h-full text-left  focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
            <Image src={Comika} alt="Thumbnail for Landing Page Niagahoster" />
            <div className=" space-y-2">
              <h2 className="  text-white text-base md:text-lg font-medium  "> Redesign Comika.id</h2>
              <p className="text-neutral-400 text-base md:text-lg">All about comedy content generator. Platform digital serta event para Komika dan seluruh Komedian di Indonesia.</p>
            </div>
          </div>
        </ButtonUnstyled>
      </li>

      <li className=" w-full  flex flex-col     scale-100 hover:scale-[1.02] active:scale-[0.97] hover:shadow-2xl hover:shadow-sky-500/50 transition duration-100 motion-reduce:hover:scale-100 animate-shadow m-0 text-lg text-white">
        <ButtonUnstyled className="focus-visible:ring focus-visible:ring-primary-300" onClick={handleOpenComika}>
          <div className="block space-y-6 p-6 h-full text-left  focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
            <Image src={Staycation} alt="Thumbnail for Landing Page Niagahoster" />
            <div className=" space-y-2">
              <h2 className="  text-white text-base md:text-lg font-medium  "> StayCation</h2>
              <p className="text-neutral-400 text-base md:text-lg">StayCation is an application to help people find homes, hotels or apartments that can be used as vacation spots.</p>
            </div>
          </div>
        </ButtonUnstyled>
      </li>
    </ul>
  );
}

export default Projects;
