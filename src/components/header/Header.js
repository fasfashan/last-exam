import { useState, useEffect } from "react";
import Link from "next/link";
import Foto from "../../../public/assets/New-Photo-Website.png";
import Button from "../button/Button";
import { HiOutlineMail } from "react-icons/hi";
import Twitter from "../../../public/assets/Twitter.js";
import Dribbble from "/public/assets/Dribbble";
import LinkedIn from "../../../public/assets/LinkedIn.js";
import Image from "next/future/image";
function Header() {
  return (
    <header className={` py-4  `}>
      <nav className="container font-semibold     flex     justify-between  items-center ">
        <Link href="/">
          <a>
            <span className="xl:text-4xl text-2xl font-title text-white font-medium ">Fasha.</span>
          </a>
        </Link>
        {/* <a href="mailto:pasapadilah1410@gmail.com" rel="noreferrer ">
          
          <Button>
            Contact <HiOutlineMail className="ml-2 text-lg " />{" "}
          </Button>
        </a> */}
        <div className="flex items-center gap-2">
          <a className="p-2 hover:shadow-md hover:shadow-sky-500/50  rounded-full" href="https://www.linkedin.com/in/muhamad-fasha-fadillah/" rel="noreferrer">
            <LinkedIn />
          </a>
          <a className="p-2 hover:shadow-md hover:shadow-sky-500/50  rounded-full" href="https://twitter.com/fasfashan" rel="noreferrer">
            <Twitter />
          </a>
          <a className="p-2 hover:shadow-md hover:shadow-sky-500/50  rounded-full" href="https://dribbble.com/fasfashan" rel="noreferrer">
            <Dribbble />
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Header;
