import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className=" container mx-auto md:max-w-5xl flex flex-col  md:px-4 pl-6 pr-6">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
