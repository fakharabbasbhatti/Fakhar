import { Fragment, useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

// Import your project images
import img1 from "../Images/shiping.jpg";
import img2 from "../Images/ideatech.png";
import img3 from "../Images/itservices.png";
import img4 from "../Images/organiccotton.png";
import img5 from "../Images/videomeeting.png";
import img6 from "../Images/exclusivestores.png";

const MyProjects = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const projects = [
    {
      pic: img1,
      title: "The Givers Consultancy",
      link: "https://thegiversconsulting.com",
      category: "Consulting"
    },
    {
      pic: img2,
      title: "IdeaTech",
      link: "https://ideatech.ae/",
      category: "Tech Solutions"
    },
    {
      pic: img3,
      title: "IT Services",
      link: "https://it-service-red.vercel.app/",
      category: "Web Development"
    },
    {
      pic: img4,
      title: "Organic Cotton",
      link: "https://organic-cotton.vercel.app/",
      category: "E-commerce"
    },
    {
      pic: img5,
      title: "Video Meeting",
      link: "https://ai-meeting-kappa.vercel.app/",
      category: "Web Application"
    },
    {
      pic: img6,
      title: "Exclusive Stores",
      link: "https://exclusive-stores.vercel.app/",
      category: "E-commerce"
    }
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <Fragment>
      <section id="projects" className="relative py-20 px-6 bg-gray-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#38bdf8] opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-float-delay"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block group"
            >
              My <span className="text-[#38bdf8]">Projects</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#38bdf8] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </h1>
            <p 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              A showcase of my recent work and professional achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => window.open(project.link, "_blank")}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
                  <img
                    src={project.pic}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}></div>

                <div className="absolute bottom-0 left-0 p-6 w-full transition-all duration-500 transform translate-y-0 group-hover:-translate-y-2">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-[#38bdf8] rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="mr-2">View Project</span>
                    <MdArrowOutward className="text-lg" />
                  </div>
                </div>

                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="border-2 border-white rounded-full p-4 animate-pulse">
                    <MdArrowOutward className="text-2xl text-white" />
                  </div>
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

export default MyProjects;