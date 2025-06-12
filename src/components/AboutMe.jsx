import { Fragment, useEffect } from "react";
import About from "../Images/fakhar.png";
import resume from "../Images/FakharAbbas.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
 useEffect(() => {
  if (window.innerWidth >= 768) {
   AOS.init({
    offset: 200,
    duration: 1200,
    easing: 'ease-out-back',
    delay: 100,
    once: false,
    mirror: true,
   });
  }
 }, []);

 const handleDownload = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = "FakharAbbas.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
 };

 return (
  <Fragment>
   <div id="about" className="flex flex-col md:flex-row justify-evenly items-center p-4">
    <div data-aos={window.innerWidth >= 768 ? "fade-up" : ""} className="w-full md:w-1/2 lg:w-1/3 p-4">
     <img src={About} alt="About Me" className="w-full h-auto rounded-lg" />
    </div>
    <div
     data-aos={window.innerWidth >= 768 ? "fade-left" : ""}
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     className="w-full md:w-1/2 lg:w-2/5 flex flex-col items-start justify-center text-start gap-2 p-4"
    >
     <h1 className="font-bold text-white text-3xl">About Me</h1>
     <p className="text-gray-300 text-justify">
      Hello, I’m Fakhar Abbas, a skilled Frontend Developer focused on building responsive, user-friendly web interfaces. Proficient in React.js, HTML, CSS, and JavaScript, I ensure clean, efficient code and seamless UI/UX design to deliver impactful digital experiences. I stay current with modern frameworks, performance optimization, and accessibility standards to create intuitive, scalable, and visually engaging applications.
     </p>
     <div className="mt-5">
      <button
       onClick={handleDownload}
       className="border-4 cursor-pointer rounded-3xl border-[#FF014F] text-[#FF014F] px-5 py-2 hover:bg-[#FF014F] hover:text-white transition-colors duration-300"
      >
       Download CV
      </button>
     </div>
    </div>
   </div>
  </Fragment>
 );
};

export default AboutMe;
