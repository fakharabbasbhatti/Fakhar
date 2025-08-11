import { Fragment, useEffect } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationExperience = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }, []);

  const education = [
    {
      title: "Matric",
      period: "2019-2021",
      institution: "Govt APS School Bahawalpur",
      icon: <FaGraduationCap className="text-[#38bdf8] text-xl" />
    },
    {
      title: "Intermediate",
      period: "2021-2023",
      institution: "PostGraduate College Bahawalpur",
      icon: <FaGraduationCap className="text-[#38bdf8] text-xl" />
    }
  ];

  const experience = [
    {
      title: "Frontend Developer",
      period: "2024-Present",
      company: "Codes Thinker Company (Onsite)",
      icon: <FaBriefcase className="text-[#38bdf8] text-xl" />
    },
    {
      title: "WordPress Developer",
      period: "2025-January",
      company: "Tech Thrill Company (Remote)",
      icon: <FaBriefcase className="text-[#38bdf8] text-xl" />
    }
  ];

  return (
    <Fragment>
      <section id="resume" className="relative py-20 px-6 bg-gray-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#38bdf8] opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-float-delay"></div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-white mb-4 relative inline-block group"
          >
            Education & <span className="text-[#38bdf8]">Experience</span>
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto"
          >
            My academic background and professional journey
          </p>

          <div className="flex flex-col lg:flex-row justify-center gap-12">
            {/* Education Section */}
            <div 
              data-aos="fade-right"
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gray-800 p-3 rounded-full group-hover:bg-white transition-all duration-300">
                  <FaGraduationCap className="text-[#38bdf8] text-2xl group-hover:text-[#38bdf8]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Education</h2>
              </div>

              <div className="relative pl-10 border-l-2 border-[#38bdf8]/30 space-y-8">
                {education.map((item, index) => (
                  <div 
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="relative group"
                  >
                    <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#38bdf8] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#38bdf8]/20">
                      <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 mb-1">{item.period}</p>
                      <p className="text-gray-300">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div 
              data-aos="fade-left"
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gray-800 p-3 rounded-full group-hover:bg-white transition-all duration-300">
                  <FaBriefcase className="text-[#38bdf8] text-2xl group-hover:text-[#38bdf8]" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Experience</h2>
              </div>

              <div className="relative pl-10 border-l-2 border-[#38bdf8]/30 space-y-8">
                {experience.map((item, index) => (
                  <div 
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 200}
                    className="relative group"
                  >
                    <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#38bdf8] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#38bdf8]/20">
                      <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 mb-1">{item.period}</p>
                      <p className="text-gray-300">{item.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </Fragment>
  );
};

export default EducationExperience;