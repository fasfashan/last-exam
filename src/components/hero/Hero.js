import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Twitter from "../../../public/assets/Twitter.js";
import LinkedIn from "../../../public/assets/LinkedIn.js";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [text] = useTypewriter({
    words: ["Designer.", "Engineer."],
    loop: {},
    typeSpeed: "120",
    deleteSpeed: "50",
  });

  return (
    <div data-aos="fade-down " data-aos-duration="1500" className="md:mt-32 mt-10    ">
      <div>
        <h1 className="md:text-8xl text-slate-900 text-4xl font-medium">
          Hi! I'm Fasha, a User Interface <span className="underline font-bold bg-gradient-to-r from-sky-600 to-blue-600 text-transparent bg-clip-text">{text}</span>
          <Cursor cursorColor="#0284c7" />
        </h1>

        <p className="md:mt-10 mt-6 text-slate-600 leading-relaxed max-w-3xl  md:text-2xl text-lg  ">
          If you're looking for a designer who can bring your vision to fruition, you've come to the right place. Feel free to explore my work below.
        </p>

        <div className="flex gap-6 mt-8 items-center ">
          <a className="flex  gap-2 items-center" target="_blank" href="https://twitter.com/fasfashan" rel="noreferrer ">
            <Twitter />
            <span className="text-base text-slate-900 font-semibold">Twitter</span>
          </a>

          <a className="flex  gap-2 items-center" target="_blank" href="https://www.linkedin.com/in/muhamad-fasha-fadillah/" rel="noreferrer ">
            <LinkedIn />
            <span className="text-base text-slate-900 font-semibold">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Hero;
