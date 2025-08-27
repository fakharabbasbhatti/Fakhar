// Footer.jsx
import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHeart } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/fakharabbasbhatti", label: "GitHub", color: "hover:text-gray-400" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/fakhar-abbas-bhatti/", label: "LinkedIn", color: "hover:text-blue-500" },
  { icon: <FaEnvelope />, href: "mailto:fakharabbasbhatti333@gmail.com", label: "Email", color: "hover:text-[#38bdf8]" },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
];

const customerService = [
  { name: "Customer Service", href: "" },
  { name: "FAQs", href: "" },
  { name: "Privacy Policy", href: "" },
  { name: "Terms & Conditions", href: "" },
];

const Footer = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12 relative overflow-hidden">
      {/* Floating Background Circles */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#38bdf8] opacity-10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-float-delay"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About Me */}
          <div data-aos="fade-up" className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center md:justify-start">
              <FaUser className="mr-3 text-[#38bdf8]" /> About Me
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Passionate developer building modern web apps. Focused on clean code, responsive design, and seamless user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100" className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="transition-transform duration-300 hover:translate-x-2 flex items-center justify-center md:justify-start text-lg text-gray-400 hover:text-[#38bdf8]"
                >
                  <FaAngleRight className="mr-2" />
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div data-aos="fade-up" data-aos-delay="150" className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              {customerService.map((link, index) => (
                <li
                  key={index}
                  className="transition-transform duration-300 hover:translate-x-2 flex items-center justify-center md:justify-start text-lg text-gray-400 hover:text-[#38bdf8]"
                >
                  <FaAngleRight className="mr-2" />
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div data-aos="fade-up" data-aos-delay="200" className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="flex justify-center md:justify-start space-x-6 mb-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 text-2xl`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400">Follow me for updates!</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <p data-aos="fade-up" className="border-t border-gray-800 pt-8 text-center">
          Made with <span className="">❤️</span> by <span className="font-bold">Fakhar Abbas</span> &copy; {new Date().getFullYear()}
        </p>
      </div>


      {/* Floating Circle Animations */}
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
            transform: translateY(-25px) translateX(15px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
