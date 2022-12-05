import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../../public/assets/Logo.js";
import Dribbble from "../../../public/assets/Dribbble.js";
import Gmail from "../../../public/assets/Gmail.js";
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
      windowHeight > 0 ? setStickyClass("sticky shadow-sm top-0 py-4 z-50 bg-white bg-opacity-60 border-b border-slate-200 backdrop-blur-lg ") : setStickyClass("border-none");
    }
  };
  return (
    <header className={` py-3 md:px-0 px-6 w-full transition-all   ${stickyClass}`}>
      <nav className="container font-semibold  mx-auto max-w-5xl flex     justify-between  items-center ">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <a target="_blank" href="https://dribbble.com/fasfashan" rel="noreferrer ">
              <Dribbble />
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:pasapadillah1410@gmail.com" rel="noreferrer ">
              <Gmail />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
