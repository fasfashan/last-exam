import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "../../../public/assets/Logo.js";
function Header() {
  const router = useRouter();
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "#projects" },
    { title: "Blog", href: "/blog" },
  ];
  return (
    <header className="py-3 md:px-4 px-6 shadow-sm bg-white top-0 sticky z-10 ">
      <nav className="container mx-auto max-w-5xl flex md:px-4 px-6   justify-between  items-center ">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <ul className="flex items-center space-x-8">
          {menuItems.map((menu, index) => {
            return (
              <Link href={menu.href} key={index}>
                <a className={`${router.pathname === `${menu.href}` ? "font-medium text-primary border-b border-primary" : ""} text-sm hover:opacity-60`}>{menu.title}</a>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
