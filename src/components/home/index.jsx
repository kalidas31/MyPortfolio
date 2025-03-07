import mypic from "../../assets/mypic2.jpg";
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div id="home" className=" w-screen h-screen bg-[#000]   ">
      <div className="flex justify-between pt-32">
        <div className="flex flex-col justify-center items-center text-white ml-24 gap-6">
          <span className="text-7xl font-bold">Kalidas Chipurupalli</span>
          <span className="text-3xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent ">
            Software Developer
          </span>
          <div className="flex  items-center gap-8">
            <a
              href="https://www.linkedin.com/in/kali-das-768476243/"
              style={{ color: "white" }}
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
            <a
              href="https://github.com/Kali-ch-1231"
              style={{ color: "white" }}
            >
              {" "}
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/kali8522009681 "
              style={{ color: "white" }}
            >
              {" "}
              <FontAwesomeIcon icon={faHackerrank} className="text-2xl"   />
            </a>
          </div>
        </div>
        <div class="relative w-80 h-80 mr-28 mt-8">
          <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl animate-pulse"></div>
          <img
            src={mypic}
            alt="Profile"
            class="relative w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
