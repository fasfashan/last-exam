import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../../public/assets/Logo.js";
import Dribbble from "../../../public/assets/Dribbble.js";
import Gmail from "../../../public/assets/Gmail.js";
import LinkedIn from "../../../public/assets/LinkedIn.js";
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
      windowHeight > 0 ? setStickyClass("sticky shadow-sm top-0 py-4 z-50 bg-white bg-opacity-80 border-b border-slate-200 backdrop-blur-lg ") : setStickyClass("border-none");
    }
  };
  return (
    <header className={` py-4   ${stickyClass}`}>
      <nav className="container font-semibold  mx-auto max-w-7xl md:px-4 px-3  flex     justify-between  items-center ">
        <Link href="/">
          <a className="hover:opacity-50 transition-all delay-75  ">
            <Logo />
          </a>
        </Link>
        <ul className="flex items-center space-x-8">
          <li className="hover:opacity-50 transition-all delay-75">
            <a target="_blank" href="https://dribbble.com/fasfashan" rel="noreferrer ">
              <Dribbble />
            </a>
          </li>
          <li className=" hover:opacity-50 transition-all delay-100">
            <a target="_blank" href="mailto:pasapadillah1410@gmail.com" rel="noreferrer ">
              <Gmail />
            </a>
          </li>
          <li className="hover:opacity-50 transition-all delay-100">
            <a target="_blank" href="https://www.linkedin.com/in/muhamad-fasha-fadillah/" rel="noreferrer ">
              <LinkedIn />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
