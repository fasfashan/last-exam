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
      <div className=" md:max-w-5xl justify-center flex flex-col  md:px-4 mx-auto px-6">
        <main className="flex-1">
          {children}
          <div className="hover:cursor-pointer"> {showTopBtn && <BsFillArrowUpCircleFill className="text-4xl fixed bottom-10 md:right-32 right-4 z-20 text-slate-900 rounded-full p-2 bg-cyan-400 " onClick={goToTop} />} </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
