import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const section = [
    { sec: "home", name: "Home" },
    { sec: "about", name: "About" },
    { sec: "skills", name: "Skills" },
    { sec: "resume", name: "Resume" },
    { sec: "projects", name: "Projects" },
  ];

  function scrollIntoSection(sec) {
    document.getElementById(sec).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close menu on mobile after clicking
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-black fixed w-full z-50 ${
        isScrolled ? "shadow-lg shadow-gray-700" : "shadow-none"
      }`}
    >
      <nav className="flex justify-between items-center py-4 px-6 md:px-8 relative">
        {/* Logo */}
        <div className="text-white font-bold text-3xl z-20 cursor-pointer">
          MyFolio
        </div>

        {/* Centered Navigation (Desktop) */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {section.map((sec) => (
            <span
              key={sec.sec}
              onClick={() => scrollIntoSection(sec.sec)}
              className="cursor-pointer text-white text-lg font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition duration-300"
            >
              {sec.name}
            </span>
          ))}
        </div>

        {/* Contact Me (Right - Desktop) */}
        <div className="hidden md:block z-20">
          <button
            onClick={() => scrollIntoSection("contact")}
            className="text-white text-lg font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition duration-300"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden z-20">
          {isOpen ? (
            <FaTimes
              className="text-white text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FaBars
              className="text-white text-2xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black w-full py-10 text-center flex flex-col space-y-6 text-white text-xl font-semibold">
          {section.map((sec) => (
            <button
              key={sec.sec}
              onClick={() => scrollIntoSection(sec.sec)}
              className="hover:text-pink-400"
            >
              {sec.name}
            </button>
          ))}
          <button
            onClick={() => scrollIntoSection("contact")}
            className="hover:text-pink-400"
          >
            Contact Me
          </button>
        </div>
      )}
    </div>
  );
}
