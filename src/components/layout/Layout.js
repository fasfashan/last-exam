import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout({ children }) {
  return (
    <div className=" container overflow-hidden mx-auto max-w-5xl flex flex-col min-h-screen md:px-4 px-6">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
