import { Fragment, useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp, IoLogoBuffer } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
  ];

  const mobileNavVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <Fragment>
      <motion.nav 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0f172a]/95 backdrop-blur-md py-2 shadow-xl" : "bg-[#0f172a]/90 backdrop-blur-sm py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo - Left Side */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center"
          >
            <IoLogoBuffer
              className="text-[#38bdf8] text-3xl cursor-pointer"
              onClick={() => window.location.href = "#home"}
            />
            <span className="ml-2 text-white font-bold text-xl hidden sm:block">Fakhar</span>
          </motion.div>

          {/* Centered Navigation Items */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-10">
              {navItems.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <a
                    href={item.href}
                    className="text-[#e2e8f0] hover:text-white font-medium transition-colors duration-300"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#38bdf8] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Button - Right Side */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="flex items-center gap-2 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white px-5 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-[#38bdf8]/30 transition-all duration-300"
              >
                Contact 
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <motion.button 
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <IoCloseSharp className="text-3xl text-[#38bdf8]" />
            ) : (
              <IoMdMenu className="text-3xl" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden bg-[#0f172a]/95 backdrop-blur-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul className="container mx-auto px-6 py-4 flex flex-col gap-6">
                {[...navItems, { name: "Contact", href: "#contact" }].map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={mobileNavVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="border-b border-[#1e293b] pb-2 last:border-0"
                  >
                    <a
                      onClick={closeMenu}
                      href={item.href}
                      className="flex items-center justify-between text-[#e2e8f0] text-lg font-medium hover:text-[#38bdf8] transition-colors duration-300"
                    >
                      {item.name}
                      <FaArrowRight className="text-[#38bdf8]" />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </Fragment>
  );
};

export default Navbar;