import Seo from "../components/seo/Seo";
function Error404() {
  return (
    <>
      <Seo templateTitle="Halaman tidak ditemukan" />
      <div className="mt-20">
        <h3 className="text-3xl font-medium">Halaman tidak ditemukan</h3>
        <p className="text-slate-500">Maaf, halaman yang Anda cari tidak ditemukan.</p>
      </div>
    </>
  );
}
export default Error404;
