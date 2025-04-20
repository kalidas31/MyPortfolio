import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
  return (
    <div id="resume" className="bg-black flex flex-col pt-26">
      <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 ml-auto mr-auto mt-2"></div>
      <div className="m-4">
        <h1 className="text-white">Resume</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 text-left m-4 md:m-8 gap-8">
        {/* Summary */}
        <div className="flex flex-col ml-0 md:ml-20">
          <section className="flex flex-col gap-6">
            <span className="text-2xl text-white font-bold">Summary</span>
            <section className="flex">
              <section className="flex flex-col items-center">
                <div className="relative w-4 h-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500 to-pink-500 p-[2px]"></div>
                  <div className="absolute inset-[2px] bg-black rounded-full"></div>
                </div>
                <div className="w-1 h-56 bg-gradient-to-b from-blue-500 to-pink-500"></div>
              </section>
              <section>
                <span className="text-2xl text-white m-4">Kalidas Chipurupalli</span>
                <p className="text-white m-4">
                  To work for a company that will give me the chance to develop
                  my skills and advance the company's goals and looking for a
                  role where I have the opportunity to discuss my ideas.
                </p>
                <ul className="text-left text-white space-y-2 m-6">
                  <li><FontAwesomeIcon icon={faLocationDot} /> Vizianagaram, Andhra Pradesh, India</li>
                  <li><FontAwesomeIcon icon={faPhone} /> +91 9110344854</li>
                  <li><FontAwesomeIcon icon={faEnvelope} /> kalichipurupalli@gmail.com</li>
                </ul>
              </section>
            </section>
          </section>
        </div>

        {/* Certificates */}
        <div className="flex flex-col ml-0 md:ml-12">
          <section className="flex flex-col gap-6">
            <span className="text-2xl text-white font-bold">Certificates</span>
            <section className="flex items-center">
              <section className="flex flex-col items-center">
                <div className="relative w-4 h-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500 to-pink-500 p-[2px]"></div>
                  <div className="absolute inset-[2px] bg-black rounded-full"></div>
                </div>
                <div className="w-1 h-64 bg-gradient-to-b from-blue-500 to-pink-500"></div>
              </section>
              <section className="flex flex-col text-white gap-4 m-4">
                <section>
                  <span className="flex flex-col text-xl relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">Udemy</span>
                  <span className="ml-4">Full Stack Web Development</span>
                </section>
                <section>
                  <span className="flex flex-col text-xl relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">Wipro TalentNext</span>
                  <span className="ml-4">Java Full Stack</span>
                </section>
                <section>
                  <span className="flex flex-col text-xl relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">Infosys Springboard</span>
                  <span className="ml-4">Data Structures and Algorithms Using Java</span>
                </section>
                <section>
                  <span className="flex flex-col text-xl relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">NPTEL</span>
                  <span className="ml-4">Data Structures and Algorithms Using Python</span>
                </section>
              </section>
            </section>
          </section>
        </div>

        {/* Education */}
        <div className="flex flex-col ml-0 md:ml-20">
          <section className="flex flex-col gap-6">
            <span className="text-2xl text-white font-bold">Education</span>
            <section className="flex items-center">
              <section className="flex flex-col items-center">
                <div className="relative w-4 h-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500 to-pink-500 p-[2px]"></div>
                  <div className="absolute inset-[2px] bg-black rounded-full"></div>
                </div>
                <div className="w-1 h-88 bg-gradient-to-b from-blue-500 to-pink-500"></div>
              </section>
              <section className="text-white flex flex-col gap-4 m-4">
                <section className="flex flex-col">
                  <span className="text-xl relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">B.Tech (Information Technology)</span>
                  <span className="ml-4">2021 – 2025</span>
                  <span className="ml-4">Vasireddy Venkatadri Institute Of Technology</span>
                  <span className="ml-4">7.61/10.00 CGPA</span>
                </section>
                <section className="flex flex-col">
                  <span className="text-xl relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">Intermediate (MPC)</span>
                  <span className="ml-4">2019 – 2021</span>
                  <span className="ml-4">NRI Junior College</span>
                  <span className="ml-4">926/1000 Marks</span>
                </section>
                <section className="flex flex-col">
                  <span className="text-xl relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">SSC</span>
                  <span className="ml-4">2018 – 2019</span>
                  <span className="ml-4">Siddhartha High School</span>
                  <span className="ml-4">9.5/10.00 CGPA</span>
                </section>
              </section>
            </section>
          </section>
        </div>

        {/* Projects */}
        <div className="flex flex-col ml-0 md:ml-12">
          <section className="flex flex-col gap-6">
            <span className="text-2xl text-white font-bold">Projects</span>
            <section className="flex items-center">
              <section className="flex flex-col items-center">
                <div className="relative w-4 h-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500 to-pink-500 p-[2px]"></div>
                  <div className="absolute inset-[2px] bg-black rounded-full"></div>
                </div>
                <div className="w-1 h-88 bg-gradient-to-b from-blue-500 to-pink-500"></div>
              </section>
              <section className="text-white flex flex-col gap-4 m-4">
                <section className="flex flex-col">
                  <span className="text-xl mb-2 relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">Employee Performance and Appraisal System</span>
                  <p className="ml-4">
                    A project to track and evaluate employee performance. Helps managers set goals,
                    give feedback, and create development plans.
                  </p>
                  <p className="ml-4"><b>Technologies used:</b> HTML, CSS, Javascript, Java, Java Servlets, Tomcat Server.</p>
                </section>
                <section className="flex flex-col">
                  <span className="text-xl mb-2 relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">
                    Parkinson's Disease Detection using Speech Analysis
                  </span>
                  <p className="ml-4">
                    Uses vocal input to detect Parkinson’s disease with machine learning models.
                  </p>
                  <p className="ml-4"><b>Algorithms used:</b> SVM, MLP, Decision Tree, DT Boosting, Random Forest, KNN.</p>
                </section>
              </section>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
