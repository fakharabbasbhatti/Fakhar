import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    icon: <FaGithub className="w-6 h-6" />,
    href: "https://github.com/fakharabbasbhatti",
    label: "GitHub",
    color: "hover:text-gray-400"
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    href: "https://www.linkedin.com/in/fakhar-abbas-bhatti/",
    label: "LinkedIn",
    color: "hover:text-blue-500"
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    href: "mailto:fakharabbasbhatti333@gmail.com",
    label: "Email",
    color: "hover:text-[#38bdf8]"
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "#blog" }
];

const Footer = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-20"></div>
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#38bdf8] opacity-10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-float-delay"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <motion.div 
            data-aos="fade-up"
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center md:justify-start">
              <FaCode className="mr-3 text-[#38bdf8]" /> About Me
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate developer who loves building amazing web applications and solving real-world problems. With a focus on clean code, scalability, and user experience, I strive to create impactful solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#38bdf8] transition-colors duration-300 text-lg"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="flex justify-center md:justify-end space-x-6 mb-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 text-2xl`}
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400">Follow me for updates and collaborations!</p>
          </motion.div>
        </div>

        {/* Footer bottom text */}
        <motion.div 
          data-aos="fade-up"
          className="border-t border-gray-800 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 mb-2">
            &copy; {new Date().getFullYear()} Fakhar Abbas. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center justify-center">
            Crafted with <FaHeart className="text-[#38bdf8] mx-2 animate-pulse" /> using React & Tailwind CSS
          </p>
        </motion.div>
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
    </footer>
  );
};

export default Footer;