import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div id="contact" className="bg-black flex flex-col pt-24 px-4 sm:px-0">
      <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 mx-auto mt-4 rounded-lg"></div>

      <div className="m-4 text-center">
        <span className="text-white text-4xl">Get in Touch</span>
      </div>

      <div className="w-full sm:w-80 border border-white rounded-lg mx-auto mb-10 mt-4 shadow-[0_0_15px_3px_#3b82f6]">
        <div className="flex flex-col gap-6 text-left p-4 text-white">
          <span className="text-3xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-center">
            Contact Me
          </span>

          <a
            href="mailto:kalichipurupalli@gmail.com"
            className="text-white hover:underline decoration-white"
            style={{ color: "white" }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            kalichipurupalli@gmail.com
          </a>

          <a
            href="tel:+919110344854"
            className="text-white hover:underline decoration-white"
            style={{ color: "white" }}
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +91 9110344854
          </a>

          <div className="text-white">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            Vizianagram, Andhra Pradesh
          </div>
        </div>
      </div>
    </div>
  );
}
