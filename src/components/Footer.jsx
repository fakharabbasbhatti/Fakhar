import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHeart } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub className="w-6 h-6" />,
    href: "https://github.com/fakharabbasbhatti",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    href: "https://www.linkedin.com/in/fakhar-abbas-bhatti/",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    href: "mailto:fakharabbasbhatti333@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Use 3 columns grid on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section - Left aligned on md+ */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start">
              <FaCode className="mr-2" /> About Me
            </h3>
            <p className="text-gray-400">
              I'm a passionate developer who loves building amazing web applications and solving real-world problems. With a focus on clean code, scalability, and user experience, I strive to create impactful solutions.
            </p>
          </div>

          {/* Quick Links - Center aligned */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400 flex justify-center space-x-6">
              {["home", "projects", "skills", "contact", "blog"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="capitalize hover:text-white transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links - Right aligned on md+ */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Connect with Me</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-transform duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 mt-4">Follow me for updates!</p>
          </div>
        </div>

        {/* Footer bottom text */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Fakhar Abbas. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2 flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> using React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
