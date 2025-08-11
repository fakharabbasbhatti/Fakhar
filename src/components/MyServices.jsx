import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import { FaCode, FaServer, FaPlug, FaMobileAlt, FaCloudUploadAlt } from "react-icons/fa";
import { SiWordpress } from "react-icons/si";

const MyServices = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Frontend Development",
      description: "Create modern, responsive, and interactive user interfaces using React.js, Tailwind CSS, and Bootstrap with a focus on speed and engagement.",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: "Backend Development",
      description: "Build robust RESTful APIs with Node.js and Express.js, integrating MongoDB for efficient data management and secure backend functionality.",
      gradient: "from-indigo-500 to-blue-400"
    },
    {
      icon: <FaPlug className="text-3xl" />,
      title: "API Integration",
      description: "Seamlessly integrate third-party APIs, payment gateways, and authentication systems to enhance application features and connectivity.",
      gradient: "from-teal-500 to-emerald-400"
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "Responsive Design",
      description: "Ensure a smooth and consistent user experience across all devices with fully responsive, mobile-friendly web applications.",
      gradient: "from-sky-500 to-blue-400"
    },
    {
      icon: <SiWordpress className="text-3xl" />,
      title: "WordPress Development",
      description: "Customizable website and blog development using this popular CMS with strong global community support and extensive plugin ecosystem.",
      gradient: "from-blue-600 to-indigo-500"
    },
    {
      icon: <FaCloudUploadAlt className="text-3xl" />,
      title: "Deployment & Maintenance",
      description: "Deploy applications on Vercel, Netlify, and AWS, providing continuous updates, optimizations, and security maintenance.",
      gradient: "from-violet-500 to-purple-400"
    }
  ];

  return (
    <Fragment>
      <section id="services" className="relative py-20 px-6 bg-gray-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#38bdf8] opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-float-delay"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block group"
            >
              My <span className="text-[#38bdf8]">Services</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#38bdf8] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </h1>
            <p 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Comprehensive solutions to bring your digital vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative overflow-hidden bg-gray-800 rounded-xl p-8 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#38bdf8]/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gray-700 group-hover:bg-white transition-all duration-500">
                    <span className="text-[#38bdf8] group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
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

export default MyServices;