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
      offset: 100,
      duration: 800,
      easing: "ease-in-out-quad",
      delay: 100,
    });
  }, []);

  const socialLinks = [
    {
      icon: <FaFacebookF className="h-5 w-5" />,
      onClick: () => window.open("https://www.linkedin.com/in/", "_blank"),
      color: "hover:bg-blue-600",
    },
    {
      icon: <FaLinkedinIn className="h-5 w-5" />,
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/fakhar-abbas-bhatti/",
          "_blank"
        ),
      color: "hover:bg-blue-500",
    },
    {
      icon: <FaGithub className="h-5 w-5" />,
      onClick: () =>
        window.open("https://github.com/fakharabbasbhatti", "_blank"),
      color: "hover:bg-gray-800",
    },
    {
      icon: <FaInstagram className="h-5 w-5" />,
      onClick: () => window.open("https://instagram.com", "_blank"),
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <Fragment>
      <div
        id="home"
        className="relative flex justify-center items-center min-h-screen px-6 md:px-12 lg:px-24 p-16 bg-gray-900  overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gray-600 opacity-20 blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-gray-800 opacity-20 blur-3xl animate-float-delay"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-7xl z-10 py-20">
          <div
            data-aos="fade-right"
            className="w-full md:w-1/2 text-center md:text-start"
          >
            <div className="mb-4">
              <span className="text-[#38bdf8] font-mono">Hello, I'm</span>
            </div>
            
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Fakhar Abbas
            </h1>
            
            <div className="text-2xl md:text-3xl font-medium mb-6 h-12">
              <span className="text-white">
                <Typewriter
                  words={[
                    "Front-End Developer",
                    "UI/UX Designer",
                    "React Specialist",
                    "Web Enthusiast"
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>

            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              I craft exceptional digital experiences with modern web technologies. 
              Focused on responsive design, clean code, and intuitive interfaces 
              that deliver results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#38bdf8] text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#38bdf8]/30">
                Contact Me
              </button>
              <button className="border-2 border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                View Projects
              </button>
            </div>

            <div className="mt-8">
              <h2 className="text-gray-400 mb-4">Connect with me</h2>
              <div className="flex justify-center md:justify-start items-center gap-4">
                {socialLinks.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.onClick}
                    className={`text-white cursor-pointer flex justify-center items-center bg-gray-800 ${item.color} h-12 w-12 rounded-full transition-all duration-300 hover:-translate-y-1`}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div 
            data-aos="fade-left"
            className="w-full md:w-1/2 flex justify-center relative"
          >
            <div className="relative h-[400px] w-[400px] animate-float-slow">
              <div className="absolute inset-0 rounded-full border-4 border-[#38bdf8] opacity-30 z-0 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-4 border-[#38bdf8] opacity-15 z-0 animate-pulse-delay"></div>
              <img
                src={Hero}
                alt="Fakhar Abbas"
                className="w-full h-full object-cover rounded-full border-4 border-[#38bdf8] shadow-2xl z-10 relative transform transition-all duration-1000 hover:rotate-3 p-5"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        @keyframes pulse-delay {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.1);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        .animate-pulse-delay {
          animation: pulse-delay 4s ease-in-out infinite 2s;
        }
      `}</style>
    </Fragment>
  );
};

export default HeroSection;