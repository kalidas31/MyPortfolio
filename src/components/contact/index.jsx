import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div id="contact" className="bg-black flex flex-col pt-24 ">
      <div class="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
      <div className="m-4">
        <span className="text-white text-4xl">Get in Touch</span>
      </div>
      <div className="w-80 border border-white rounded-lg  ml-auto mr-auto mb-10 mt-4  shadow-[0_0_15px_3px_#3b82f6]">
        <div className="flex flex-col text-white gap-6 text-left ml-6 p-2">
          <span className="text-3xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent m-auto">
            Contact Me
          </span>{" "}
          <a
            href="mailto:kalichipurupalli@gmail.com"
            style={{ color: "white" }}
          >
            <FontAwesomeIcon icon={faEnvelope} /> {"   "}
            <span className="hover:underline">kalichipurupalli@gmail.com</span>
          </a>
          <a href="tel:+91 9110344854" style={{ color: "white" }}>
            {" "}
            <FontAwesomeIcon icon={faPhone} />{" "}
            <span className="hover:underline">+91 9110344854</span>
          </a>
          <a href="" style={{ color: "white" }}>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            <span>Vizianagram, Andhra Pradesh</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kali-das-768476243/"
            style={{ color: "white" }}
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />{" "}
            <span className="hover:underline">LinkedIn</span>
          </a>
          <a href="https://github.com/Kali-ch-1231" style={{ color: "white" }}>
            {" "}
            <FontAwesomeIcon icon={faGithub} />{" "}
            <span className="hover:underline">GitHub</span>
          </a>
          <a
            href="https://www.hackerrank.com/profile/kali8522009681 "
            style={{ color: "white" }}
          >
            {" "}
            <FontAwesomeIcon icon={faHackerrank} />{" "}
            <span className="hover:underline">HackerRank</span>
          </a>
        </div>
      </div>
    </div>
  );
}
