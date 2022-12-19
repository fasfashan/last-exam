import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
function Layout({ children }) {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header />
      <div className="xl:max-w-6xl md:max-w-4xl justify-center flex flex-col   mx-auto px-6">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
