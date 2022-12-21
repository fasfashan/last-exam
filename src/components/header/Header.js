import { useState, useEffect } from "react";
import Link from "next/link";
import Foto from "../../../public/assets/New-Photo-Website.png";
import Button from "../button/Button";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/future/image";
function Header() {
  return (
    <header className={` py-4  `}>
      <nav className="container font-semibold     flex     justify-between  items-center ">
        <Link href="/">
          <a>
            <span className="xl:text-4xl text-2xl font-bold ">Fasha.</span>
          </a>
        </Link>
        <a href="mailto:pasapadilah1410@gmail.com" rel="noreferrer ">
          <Button>
            Contact <HiOutlineMail className="ml-2 text-lg " />{" "}
          </Button>
        </a>
      </nav>
    </header>
  );
}
export default Header;
