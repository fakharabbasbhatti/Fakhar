import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { SiWordpress, SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const MySkills = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, percentage: 90, color: "bg-[#E44D26]" },
    { name: "CSS", icon: <FaCss3Alt />, percentage: 85, color: "bg-[#264DE4]" },
    { name: "Bootstrap", icon: <FaBootstrap />, percentage: 80, color: "bg-[#7952B3]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 90, color: "bg-[#38BDF8]" },
    { name: "Framer Motion", icon: <TbBrandFramerMotion />, percentage: 86, color: "bg-[#0055FF]" },
    { name: "JavaScript", icon: <FaJs />, percentage: 75, color: "bg-[#F7DF1E]" },
    { name: "React", icon: <FaReact />, percentage: 80, color: "bg-[#61DAFB]" },
    { name: "WordPress", icon: <SiWordpress />, percentage: 92, color: "bg-[#21759B]" },
  ];

  return (
    <section id="skills" className="relative py-20 px-6 bg-gray-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#38bdf8] opacity-10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-float-delay"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block group"
          >
            My <span className="text-[#38bdf8]">Skills</span>
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Here are the technologies I work with and my proficiency level in each
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={index}
              className="relative group overflow-hidden bg-gray-800 rounded-xl p-8 h-72 transition-all duration-500 hover:bg-gray-700 hover:shadow-lg hover:shadow-[#38bdf8]/20 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-20 h-20 mb-6 mx-auto flex items-center justify-center rounded-2xl bg-gray-700 group-hover:bg-white transition-all duration-500">
                  <span className="text-4xl text-[#38bdf8] group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white text-center mb-4">
                  {skill.name}
                </h3>
                
                <div className="mt-auto">
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                    <div
                      className={`${skill.color} h-3 rounded-full flex items-center justify-end transition-all duration-1000`}
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <span className="text-white text-xs font-bold pr-2">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Basic</span>
                    <span>Advanced</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default MySkills;