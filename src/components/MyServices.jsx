import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import { FaMobileAlt, FaServer, FaCloudUploadAlt, FaTools } from "react-icons/fa";
import { MdOutlineSecurity, MdAnimation } from "react-icons/md";
import { SiFlutter, SiReact, SiFirebase, SiFigma } from "react-icons/si";

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
      icon: <SiFlutter className="text-3xl" />,
      title: "Flutter App Development",
      description: "Cross-platform mobile apps with high performance, smooth UI, and native-like experience using Flutter & Dart.",
      gradient: "from-blue-500 to-cyan-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-right",
      aosDesc: "fade-up"
    },
    {
      icon: <SiReact className="text-3xl" />,
      title: "React Native Development",
      description: "Modern and scalable mobile apps for Android & iOS using React Native with fast performance and reusable UI components.",
      gradient: "from-cyan-500 to-blue-500",
      aosIcon: "flip-right",
      aosTitle: "fade-left",
      aosDesc: "fade-up"
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "UI/UX for Mobile Apps",
      description: "Beautiful, responsive, and user-centric app UI/UX designs created with industry-leading tools like Figma.",
      gradient: "from-purple-500 to-indigo-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-up",
      aosDesc: "fade-right"
    },
    {
      icon: <SiFirebase className="text-3xl" />,
      title: "Firebase Backend",
      description: "Real-time database, authentication, cloud storage, push notifications, and backend logic with Firebase.",
      gradient: "from-orange-500 to-yellow-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-left",
      aosDesc: "fade-up"
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: "Custom App Backend API",
      description: "Secure & scalable REST APIs for apps using Node.js, Express, FastAPI, and MongoDB.",
      gradient: "from-teal-500 to-emerald-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-right",
      aosDesc: "fade-up"
    },
    {
      icon: <MdOutlineSecurity className="text-3xl" />,
      title: "App Security & Optimization",
      description: "Performance improvements, bug fixes, secure authentication, data encryption, and app hardening.",
      gradient: "from-red-500 to-rose-400",
      aosIcon: "zoom-in",
      aosTitle: "flip-left",
      aosDesc: "fade-up"
    },
    {
      icon: <MdAnimation className="text-3xl" />,
      title: "App Animations & Motion UI",
      description: "Smooth transitions, micro-interactions, and motion design to enhance user engagement.",
      gradient: "from-indigo-500 to-blue-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-left",
      aosDesc: "fade-up"
    },
    {
      icon: <FaCloudUploadAlt className="text-3xl" />,
      title: "App Deployment",
      description: "Publishing apps to Google Play Store and Apple App Store with proper optimization and release management.",
      gradient: "from-violet-500 to-purple-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-down",
      aosDesc: "fade-up"
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: "App Maintenance",
      description: "Regular updates, bug fixing, performance improvements, and new feature integration for long-term app growth.",
      gradient: "from-green-500 to-lime-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-right",
      aosDesc: "fade-up"
    }
  ];

  return (
    <Fragment>
      <section id="services" className="relative py-20 px-6 bg-gray-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#38bdf8] opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-float-delay"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              data-aos="fade-down"
              className="text-4xl md:text-5xl font-extrabold text-white mb-4 relative inline-block group"
            >
              Our <span className="text-[#38bdf8]">App Services</span>
            </h1>
            <p 
              data-aos="fade-up"
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Professional mobile app solutions designed to scale your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gray-800 rounded-2xl p-8 h-full transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#38bdf8]/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div 
                    data-aos={service.aosIcon} 
                    data-aos-delay={index * 100}
                    className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gray-700 group-hover:bg-white transition-all duration-500"
                  >
                    <span className="text-[#38bdf8] group-hover:scale-125 transition-transform duration-500">
                      {service.icon}
                    </span>
                  </div>
                  
                  <h3 
                    data-aos={service.aosTitle} 
                    className="text-2xl font-semibold text-white mb-3"
                  >
                    {service.title}
                  </h3>
                  <p 
                    data-aos={service.aosDesc} 
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(-10px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite 2s; }
      `}</style>
    </Fragment>
  );
};

export default MyServices;
