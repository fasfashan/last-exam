function Footer() {
  const today = new Date();
  return (
    <div data-testid="footer" className="mt-10 mb-4 ">
      <p className="text-slate-500 text-sm text-center"> © {today.getFullYear()} Fasha Fadillah</p>
    </div>
  );
}
export default Footer;
