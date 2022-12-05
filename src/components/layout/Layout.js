import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className=" container mx-auto max-w-7xl flex flex-col min-h-screen md:px-4 px-6">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
