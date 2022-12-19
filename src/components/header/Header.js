import { useState, useEffect } from "react";
import Link from "next/link";
import Foto from "../../../public/assets/New-Photo-Website.png";
import Button from "../button/Button";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/future/image";
function Header() {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setStickyClass("sticky shadow-sm z-50 top-0   bg-white border-b border-slate-100  ") : setStickyClass("border-none sticky top-0");
    }
  };
  return (
    <header className={` py-4   ${stickyClass}`}>
      <nav className="container font-semibold  mx-auto xl:max-w-6xl md:max-w-4xl  px-6  flex     justify-between  items-center ">
        <Link href="/">
          <a>
            <span className="text-4xl font-bold ">Fasha.</span>
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
