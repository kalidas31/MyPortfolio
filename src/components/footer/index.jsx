import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faHackerrank,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  function scrollIntoSection(sec) {
    document.getElementById(sec).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="w-full flex flex-col md:flex-row justify-evenly items-start bg-gradient-to-r from-blue-700 to-pink-700 px-6 py-6 gap-8">
  {/* Contact Info */}
  <div className="flex flex-col text-left gap-4">
    <a href="mailto:kalichipurupalli@gmail.com"  style={{ color: "white" }}>
      <FontAwesomeIcon icon={faEnvelope} />{" "}
      <span className="hover:underline">kalichipurupalli@gmail.com</span>
    </a>
    <a href="tel:+91 9110344854" style={{ color: "white" }}>
      <FontAwesomeIcon icon={faPhone} />{" "}
      <span className="hover:underline">+91 9110344854</span>
    </a>
  </div>

  {/* Pages */}
  <section className="flex flex-col">
    <h2 className="text-white text-2xl mb-4">Pages</h2>
    <nav>
      <ul className="text-white text-l flex flex-col gap-2 cursor-pointer">
        <li><Link to="/" onClick={() => scrollIntoSection("home")} className="!text-white">Home</Link></li>
        <li><Link to="/" onClick={() => scrollIntoSection("about")} className="!text-white">About</Link></li>
        <li><Link to="/" onClick={() => scrollIntoSection("skills")} className="!text-white">Skills</Link></li>
        <li><Link to="/" onClick={() => scrollIntoSection("resume")} className="!text-white">Resume</Link></li>
        <li><Link to="/" onClick={() => scrollIntoSection("projects")} className="!text-white">Projects</Link></li>
        <li><Link to="/" onClick={() => scrollIntoSection("contact")} className="!text-white">Contact Me</Link></li>
      </ul>
    </nav>
  </section>

  {/* Social Media */}
  <section className="flex flex-col gap-2 text-white">
    <span className="text-xl">Social Media</span>
    <a href="https://www.linkedin.com/in/kali-das-768476243/" style={{ color: "white" }}>
      <FontAwesomeIcon icon={faLinkedin} />{" "}
      <span className="hover:underline">LinkedIn</span>
    </a>
    <a href="https://github.com/Kali-ch-1231" style={{ color: "white" }}>
      <FontAwesomeIcon icon={faGithub} />{" "}
      <span className="hover:underline">GitHub</span>
    </a>
    <a href="https://www.instagram.com/kali_ch/" style={{ color: "white" }}>
      <FontAwesomeIcon icon={faInstagram} />{" "}
      <span className="hover:underline">Instagram</span>
    </a>
  </section>
</div>

  );
}
