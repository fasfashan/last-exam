import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import Link from "next/link";
function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return <FiSun role="button" onClick={() => setTheme("light")} />;
    } else {
      return <FiMoon role="button" onClick={() => setTheme("dark")} />;
    }
  };
  const router = useRouter();
  const menuItems = [
    { title: "Beranda", href: "/" },
    { title: "Tentang", href: "/about" },
    { title: "Artikel", href: "/articles" },
  ];
  return (
    <header className="mt-4 ">
      <nav className="flex justify-between items-center ">
        <ul className="flex items-center space-x-8">
          <Link href="/">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" fill="#14B8A6" />
                <path
                  d="M24.9182 18.3454V21.9818H14.1454V18.3454H24.9182ZM16.6113 35.8V17.0841C16.6113 15.8189 16.8576 14.7697 17.35 13.9363C17.85 13.103 18.5318 12.478 19.3954 12.0613C20.2591 11.6447 21.2401 11.4363 22.3386 11.4363C23.081 11.4363 23.7591 11.4932 24.3727 11.6068C24.9939 11.7204 25.456 11.8227 25.7591 11.9136L24.8954 15.55C24.706 15.4894 24.4712 15.4326 24.1909 15.3795C23.9182 15.3265 23.6379 15.3 23.35 15.3C22.6379 15.3 22.1416 15.4667 21.8613 15.8C21.581 16.1257 21.4409 16.5841 21.4409 17.175V35.8H16.6113ZM28.8926 36.0954C28.1426 36.0954 27.4986 35.8303 26.9608 35.3C26.4305 34.7621 26.1653 34.1182 26.1653 33.3682C26.1653 32.6257 26.4305 31.9894 26.9608 31.4591C27.4986 30.9288 28.1426 30.6636 28.8926 30.6636C29.6199 30.6636 30.2562 30.9288 30.8017 31.4591C31.3471 31.9894 31.6199 32.6257 31.6199 33.3682C31.6199 33.8682 31.4911 34.3265 31.2335 34.7432C30.9835 35.1523 30.654 35.4818 30.2449 35.7318C29.8358 35.9742 29.385 36.0954 28.8926 36.0954Z"
                  fill="white"
                />
              </svg>
            </a>
          </Link>

          {menuItems.map((menu, index) => {
            return (
              <Link href={menu.href} key={index}>
                <a className={`${router.pathname === `${menu.href}` ? "font-medium text-teal-500 border-b border-teal-500" : ""} text-sm hover:opacity-60`}>{menu.title}</a>
              </Link>
            );
          })}
        </ul>
        {renderThemeChanger()}
      </nav>
    </header>
  );
}
export default Header;
