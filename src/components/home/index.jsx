import mypic from "../../assets/mypic2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div id="home" className="w-full bg-[#000] min-h-screen flex items-center px-4">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-6xl mx-auto gap-24">
        {/* Text and Socials */}
        <div className="flex flex-col justify-center items-center md:items-start text-white gap-6">
          <span className="text-4xl md:text-6xl font-bold text-center md:text-left">
            Kalidas Chipurupalli
          </span>
          <span className="text-2xl md:text-3xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-center md:text-left">
            Software Developer
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/kali-das-768476243/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/Kali-ch-1231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.hackerrank.com/profile/kali8522009681"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-green-400"
            >
              <FontAwesomeIcon icon={faHackerrank} />
            </a>
          </div>
        </div>

        {/* Profile Image with Gradient Glow */}
        <div className="relative w-60 h-60 md:w-80 md:h-80">
          <div className="absolute inset-5 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl animate-pulse"></div>
          <img
            src={mypic}
            alt="Profile"
            className="relative w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
