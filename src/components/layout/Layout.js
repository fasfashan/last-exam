import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className=" container mx-auto md:max-w-7xl flex flex-col  md:px-4 px-3">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
