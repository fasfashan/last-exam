import React from "react";
import Niagahoster from "/public/assets/Lomba Niagahoster.webp";
import Seo from "../components/seo/Seo";
import Image from "next/image";
import Artikel from "/public/assets/artikel-lomba.png";
import { FiExternalLink, FiEdit2 } from "react-icons/fi";
import Designproses from "/public/assets/desainproses.png";
import Moodboard from "/public/assets/moodboard.webp";
import Lowfidelity from "/public/assets/low-fidelity.webp";
import Wireframe1 from "/public/assets/wireframe-1.webp";
import Wireframe2 from "/public/assets/wireframe-2.webp";
import Highfidelity1 from "/public/assets/High-fidelity-1.webp";
import Highfidelity2 from "/public/assets/High-fidelity.webp";
import Result from "/public/assets/result.webp";
import Link from "next/link";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Github } from "../../public/assets/Github";
const lombaniagahoster = () => {
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
      <Seo templateTitle="Lomba Landing Page" />

      <div className="md:mt-20 mt-16 md:px-20">
        <div className="grid grid-cols-12">
          <h1 className="md:text-5xl text-primary mb-8 col-span-12  text-4xl  text-primary font-semibold leading-tight">Lomba Landing Page: Journey with Niagahoster</h1>
          <div className="col-span-12">
            <Image src={Niagahoster} alt="Landing page niagahoster" />
          </div>
        </div>
        <div className="mt-36 grid grid-cols-12 gap-8 items-center ">
          <div className="md:col-span-6 col-span-12">
            <h3 className="md:text-4xl text-2xl font-semibold text-primary ">Overview</h3>
            <p className="text-lg text-secondary mt-2">
              Pertengahan Juni, ketika sedang asyik berselancar di Instagram, saya melihat postingan dari Niagahoster yang sedang mengadakan lomba membuat landing page. Lalu karena tertarik, saya mengunjungi detail artikel tersebut.{" "}
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <a target="_blank" rel="noreferrer" href="https://www.niagahoster.co.id/blog/lomba-landing-page/" className="text-lg font-semibold underline text-primary">
                Kunjung artikel
              </a>

              <FiExternalLink />
            </div>
          </div>
          <div className="border-2 border-slate-200 md:col-span-6 col-span-12 p-4 rounded-md shadow-sm">
            <Image src={Artikel} />
          </div>
        </div>
        <div className="col-span-12 mt-8 ">
          <p className="text-lg text-secondary">Artikel berikut berisi tentang ketentuan lomba, peraturan dan informasi-informasi lainnya. Berdasarkan artikel tersebut, setidaknya ada 3 ketentuan konten website:</p>
          <ol type="1">
            <li className="text-lg text-secondary mt-2">
              1. Tema artikel mengenai “Journey kamu bersama Niagahoster”. Misalnya: Review mengenai produk dan service Niagahoster, memanfaatkan blog, ebook, forum, event Niagahoster untuk membantu kita belajar.
            </li>
            <li className="text-lg text-secondary mt-2">2. Tulisan tidak boleh mengandung unsur pornografi, judi, sara atau tindakan yang melanggar hukum.</li>
            <li className="text-lg text-secondary mt-2">3. Tulisan harus original (karya sendiri), bukan plagiat ataupun copy paste.</li>
          </ol>
        </div>
        <div className="mt-36">
          <h3 className="md:text-4xl text-2xl font-semibold text-primary">Mengapa akhirnya saya mengikuti lomba ini?</h3>
          <p className="text-lg text-secondary mt-2">
            Tentunya selain karena hadiahnya yang menurut saya lumayan, ini adalah lomba pertama saya yang berhubungan UI Design, sekaligus menambah portfolio saya jika saya bisa memenangkan lomba ini, dan kebetulan tasks di kantor tidak
            terlalu menumpuk😋 Tanpa pikir panjang, akhirnya saya memutuskan untuk mendaftar.
          </p>
        </div>
        <div className="mt-36">
          <h3 className="md:text-4xl text-2xl font-semibold text-primary">My design proses</h3>
          <p className="text-lg text-secondary mt-2 mb-4">Karena ini hanya landing page yang berisi artikel, saya tidak memerlukan proses yang panjang. Kurang lebih ini proses saya dalam mendesain landing page kali ini:</p>
          <Image src={Designproses} />
        </div>
        <div className="mt-36">
          <h3 className="md:text-4xl text-2xl font-semibold text-primary">Collect moodboard</h3>
          <p className="text-lg text-secondary mt-2 mb-4">
            Saya memang senang memulai wireframe dari coret-coretan kertas seperti foto di bawah ini, alasannya karena terasa lebih leluasa ketimbang menggunakan tools. Saya suka kutipan dari buku Petunjuk UX milik @halodesigners
            “High-fi memang tujuan akhir kita, namun low-fi tempatnya menemukan kejelasan (clarity) dari alur kerja yang product kita ingin capai.”
          </p>

          <Image src={Moodboard} />
        </div>
        <div className="mt-36">
          <h3 className="md:text-4xl text-2xl font-semibold text-primary">Wireframe</h3>
          <p className="text-lg text-secondary mt-2 mb-8">
            Saya memang senang memulai wireframe dari coret-coretan kertas seperti foto di bawah ini, alasannya karena terasa lebih leluasa ketimbang menggunakan tools. Saya suka kutipan dari buku Petunjuk UX milik @halodesigners
            “High-fi memang tujuan akhir kita, namun low-fi tempatnya menemukan kejelasan (clarity) dari alur kerja yang product kita ingin capai.”
          </p>

          <Image src={Lowfidelity} />
          <p className="text-lg text-secondary mt-2 mb-8">Setelah coret-coret di kertas, barulah saya membuatnya menggunakan Figma.</p>
          <div className="gap-y-4 flex flex-col">
            <Image src={Wireframe1} />
            <Image src={Wireframe2} />
          </div>
          <p className="text-lg text-secondary mt-2 mb-8">Setelah membuat wireframe, saya memiliki 5 section yang berisi konten sesuai dengan kriteria pemenang, di antaranya adalah: </p>
          <ol type="1">
            <li className="text-lg text-secondary mt-2">1. Kesesuaian Tema, Kualitas Konten, Ide & Kreativitas Konten</li>
            <li className="text-lg text-secondary mt-2">2. Design website.</li>
            <li className="text-lg text-secondary mt-2">3. Memenuhi semua syarat ketentuan yang berlaku.</li>
          </ol>
          <p className="text-lg text-secondary mt-2 mb-4">
            Selain estetika desain, konten juga menjadi poin yang berpengaruh. Bagi saya ini salah satu bagian tersulit, yaitu menulis cerita, karena 90% konten berisi tulisan. Mari lanjut ke bagian paling menyenangkan, design!
          </p>
        </div>
        <div className="mt-36">
          <h3 className="md:text-4xl text-2xl font-semibold text-primary mb-8">Design High Fidelity</h3>

          <div className="gap-y-4 flex flex-col">
            <Image src={Highfidelity1} />
            <Image src={Highfidelity2} />
          </div>
          <p className="text-lg text-secondary mt-2 mb-4">
            Setelah proses desain selesai, saya akan slicing desain yang saya buat sendiri ke dalam HTML dan CSS. Website tersebut tertuang dalam domain http://fashafadillah.site namun karena saya lupa membayar domain, website tersebut
            sudah ter-blokir. Source code dapat dilihat di Github saya
          </p>
          <a rel="noreferrer" target="_blank" href="https://github.com/fasfashan/lomba-landing-page-niagahoster">
            <div className="px-4 flex gap-4 items-center py-2 border border-neutral-300 hover:bg-neutral-100 rounded-md">
              <div>
                <Github />
              </div>
              <div className="flex  flex-col">
                <p className="font-medium text-primary">lomba-landing-page-niagahoster</p>
                <p className="text-secondary text-sm">Fasfashan</p>
              </div>
            </div>
          </a>
        </div>
        <div className="mt-36">
          <h3 className="md:text-4xl text-2xl font-semibold text-primary">Result</h3>
          <p className="text-lg text-secondary mt-2 mb-4">
            Sayangnya saya belum bisa menjadi juara satu dalam lomba ini, namun saya sudah memberikan yang terbaik dalam kesempatan ini. Setelah saya melihat juara ke-1 dan ke-2 ternyata isi konten landing page mereka memang lebih baik dan
            lebih detail.
          </p>
          <Image src={Result} />
        </div>
        <div className="hover:cursor-pointer"> {showTopBtn && <BsFillArrowUpCircleFill className="text-2xl fixed bottom-10 md:right-32 right-4 z-20 text-primary " onClick={goToTop} />} </div>
      </div>
    </>
  );
};

export default lombaniagahoster;
