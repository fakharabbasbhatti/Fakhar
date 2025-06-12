import { Fragment, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp, IoLogoBuffer } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = ["Home", "About", "Skills", "Resume", "Services", "Projects"];

  return (
    <Fragment>
      <nav className="flex items-center justify-between fixed shadow-2xl bg-gray-900 p-4 w-full top-0 z-50">
        {/* Logo */}
        <div className="w-1/3 sm:w-1/4 md:w-1/5 flex justify-center items-center">
          <IoLogoBuffer
            className="text-white text-3xl cursor-pointer"
            onClick={() => window.location.href = "#home"}
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-evenly items-center w-2/3 gap-6">
          {navItems.map((item, index) => (
            <li key={index} className="font-medium cursor-pointer text-white relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition duration-300"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => window.location.href = "#contact"}
              className="text-white bg-[#FF014F] px-4 py-2 rounded-md cursor-pointer hover:bg-pink-500 transition duration-300"
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex justify-end items-center w-1/3">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <IoCloseSharp className="cursor-pointer" size={28} />
            ) : (
              <IoMdMenu className="cursor-pointer" size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-gray-950 p-4 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-4">
            {[...navItems, "Contact"].map((item, index) => (
              <li key={index} className="font-medium cursor-pointer text-white relative group">
                <a
                  onClick={closeMenu}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition duration-300"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
