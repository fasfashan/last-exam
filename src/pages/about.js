import Image from "next/image";
import Seo from "../components/seo/Seo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Seo templateTitle="About" />
      <div data-aos="fade-up" data-aos-duration="800" className="grid items-baseline mt-20 md:grid-cols-12 grid-cols-4 gap-y-20">
        <div className="md:col-span-7 col-span-12 space-y-4">
          <h1 className="md:text-5xl text-4xl  leading-tight  font-bold">Pencinta desain, kode, dan teknologi. </h1>
          <p className="leading-relaxed text-slate-500 text-base ">
            Hi, saya Fasha. Saya mulai belajar pemrograman web sekitar awal tahun 2019. Dimulai dari menonton video di kanal milik Pak{" "}
            <a className="text-teal-500 font-medium" rel="noreferrer" target="_blank" href="https://www.youtube.com/c/WebProgrammingUNPAS">
              Shandika Galih (WebProgrammingUNPAS).
            </a>{" "}
            Lalu memiliki kesulitan seiring berjalannya waktu karena belajar sendiri tanpa dibimbing pembimbing.
          </p>
          <p className="leading-relaxed text-slate-600 text-base ">
            Singkat cerita, karena saya berangkat dari desain grafis, saya memutuskan untuk beralih menjadi perancang antarmuka pengguna. Saya belajar dari buku elektronik, dan juga Twitter. Ada beberapa nama yang membantu saya tumbuh
            hingga sekarang, di antaranya:{" "}
            <a rel="noreferrer" target="_blank" href="https://twitter.com/dwinawan_" className="text-teal-500 font-medium">
              @Dwinawan
            </a>
            , dan{" "}
            <a rel="noreferrer" target="_blank" href="https://twitter.com/DesignersHalo" className="text-teal-500 font-medium">
              @DesignersHalo
            </a>
          </p>
        </div>
        <div className="md:col-start-9 md:col-end-13 col-span-12 w-full ">
          <Image className=" object-cover  dark:bg-zinc-800" src="/assets/photoprofile.jpg" layout="responsive" height={1032} width={932} alt="Fasha" />
        </div>
      </div>
    </>
  );
}
export default About;
