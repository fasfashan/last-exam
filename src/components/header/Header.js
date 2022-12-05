import Link from "next/link";
import Logo from "../../../public/assets/Logo.js";
import Dribbble from "../../../public/assets/Dribbble.js";
import LinkedIn from "../../../public/assets/LinkedIn.js";
import { useState, useEffect } from "react";
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
      windowHeight > 0 ? setStickyClass("sticky  bg-white bg-opacity-80 backdrop-blur-sm shadow-sm border-b-2 border-slate-200") : setStickyClass(" shadow-none border-0");
    }
  };

  return (
    <header className={` w-full py-4 sticky  top-0 px-6 md:px-0 w-full  ${stickyClass}`}>
      <nav className="container font-semibold  mx-auto max-w-5xl flex  justify-between  items-center ">
        <Link href="/">
          <a className="hover:opacity-80 hover:transition-all delay-100">
            <Logo />
          </a>
        </Link>
        <ul className="flex items-center md:space-x-4 space-x-2">
          <a rel="noreferrer" target="_blank" href="https://dribbble.com/fasfashan">
            <Dribbble />
          </a>
          <a rel="noreferrer" target="_blank" href="https://dribbble.com/fasfashan">
            <LinkedIn />
          </a>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
