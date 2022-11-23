import Link from "next/link";
import Logo from "../../../public/assets/Logo.js";
function Header() {
  const menuItems = [
    { title: "About", href: "/about" },
    { title: "Contact", href: "mailto:pasapadilah1410@gmail.com" },
  ];
  return (
    <header className="py-6 md:px-  shadow-sm bg-white sticky z-10 ">
      <nav className="container font-medium mx-auto max-w-5xl flex md:px-4    justify-between  items-center ">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <ul className="flex items-center md:space-x-8 space-x-4">
          {menuItems.map((menu, index) => {
            return (
              <Link href={menu.href} key={index}>
                <a>{menu.title}</a>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
