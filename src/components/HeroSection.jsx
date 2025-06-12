import { Fragment, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Hero from "../Images/fakhar.png";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1200,
      easing: "ease-in-sine",
      delay: 300,
    });
  }, []);

  const socialLinks = [
    {
      icon: <FaFacebookF className="h-5 w-5" />,
      onClick: () =>
        window.open("https://www.linkedin.com/in/", "_blank"),
    },
    {
      icon: <FaLinkedinIn className="h-5 w-5" />,
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/fakhar-abbas-bhatti/",
          "_blank"
        ),
    },
    {
      icon: <FaGithub className="h-5 w-5" />,
      onClick: () =>
        window.open("https://github.com/fakharabbasbhatti", "_blank"),
    },
  ];

  return (
    <Fragment>
      <div
        id="home"
        className="flex lg:mt-16 md:mt-14 sm:mt-24 justify-center items-center lg:h-[85vh] md:h-[50vh] sm:h-auto px-6 md:px-12 lg:px-24"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <div
            data-aos="fade-right"
            className="w-full md:w-[65%] text-center md:text-start mt-24 md:mt-0"
          >
            <h1 className="text-white text-3xl md:text-4xl font-normal">
              Hi, I’m{" "}
              <span className="text-[#FF014F] font-medium">Fakhar Abbas</span>
              <br />
              <span className="text-white">
                <Typewriter
                  words={["Front-End Developer", "UI/UX Designer"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={40}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>

            <p className="text-white text-start mt-2 ">
              I am a Frontend Developer specializing in building responsive,
              user-centric web applications using modern technologies like HTML,
              CSS, JavaScript, and frameworks such as React and Vue. I craft
              clean, scalable code and design sleek, intuitive UI/UX for
              high-performance, cross-browser experiences. Let’s build something
              amazing together!
            </p>

            <div className="mt-4">
              <h2 className="text-white">Find me on</h2>
              <div className="flex justify-center md:justify-start items-center gap-6 mt-2">
                {socialLinks.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.onClick}
                    className="text-white cursor-pointer flex justify-center items-center bg-[#1E2125] h-10 w-10 rounded transition-transform duration-200 hover:scale-110"
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div data-aos="zoom-in-up" className="hidden md:block md:w-[40%]">
            <img
              src={Hero} // ✅ Update this path as needed
              alt="Hero"
              className="w-full h-96"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
