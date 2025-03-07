import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
//import { faLinkedin,faGithub,faHackerrank } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  function scrollIntoSection(sec) {
    document.getElementById(sec).scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    const handleScroll=()=>{
        if(window.scrollY>10){
            setIsScrolled(true);
        }
        else
            setIsScrolled(false);
    }
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll);
  });
  return (
    <div className={`bg-black fixed h-20 w-full  ${isScrolled ? "shadow-lg shadow-gray-700":"shadow-none"}  z-50`}>
      <nav className="flex justify-between items-center ">
        <div className="pl-8 flex items-center">
          
          <span className="text-white font-bold text-3xl cursor-pointer duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent">
            MyFolio
          </span>
        </div>

        <ul className="text-white text-l s flex justify-center items-center gap-8 p-8 cursor-pointer">
          <li>
            <Link
              to="/"
              onClick={() => scrollIntoSection("home")}
              className="!text-white duration-300 hover:!bg-gradient-to-r hover:!from-blue-500 hover:!to-pink-500 hover:!bg-clip-text hover:!text-transparent"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => scrollIntoSection("about")}
              className="!text-white duration-300 hover:!bg-gradient-to-r hover:!from-blue-500 hover:!to-pink-500 hover:!bg-clip-text hover:!text-transparent"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => scrollIntoSection("skills")}
              className="!text-white duration-300 hover:!bg-gradient-to-r hover:!from-blue-500 hover:!to-pink-500 hover:!bg-clip-text hover:!text-transparent"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => scrollIntoSection("resume")}
              className="!text-white duration-300 hover:!bg-gradient-to-r hover:!from-blue-500 hover:!to-pink-500 hover:!bg-clip-text hover:!text-transparent"
            >
              Resume
            </Link>
          </li>

          <li>
            <Link
              to="/"
              onClick={() => scrollIntoSection("projects")}
              className="!text-white duration-300 hover:!bg-gradient-to-r hover:!from-blue-500 hover:!to-pink-500 hover:!bg-clip-text hover:!text-transparent"
            >
              Projects
            </Link>
          </li>
        </ul>
        <span className="text-white font-bold text-xl pr-8 duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent">
          <Link
            to="/"
            onClick={() => scrollIntoSection("contact")}
            className="!text-white duration-300 hover:!bg-gradient-to-r hover:!from-blue-500 hover:!to-pink-500 hover:!bg-clip-text hover:!text-transparent"
          >
            Contact Me
          </Link>
        </span>
      </nav>
    </div>
  );
}
