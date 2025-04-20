import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Project1Details() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black w-full flex flex-col justify-center items-center gap-6">
      <Link
        to="/"
        className="border border-white rounded-lg p-1 ml-auto mr-16 mt-8 hover:shadow shadow-black"
        style={{color:"white"}}
      >
        Go To Projects
      </Link>

      <div className="w-full sm:w-250 border border-white rounded-lg m-8 shadow-[0_0_15px_3px_#3b82f6]">
        <section className="mt-4 mb-8">
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            Employee Performance Appraisal System
          </span>
        </section>

        <section className="text-white mb-4 mx-4">
          <span className="text-2xl">Project Introduction</span>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
          <p className="text-left">
            I worked on an Employee Performance and Appraisal System website
            using HTML, CSS for the frontend and Java Servlets, JSP for the
            backend to provide a smooth user experience.
          </p>
        </section>

        <section className="text-white mb-4 mx-4">
          <span className="text-2xl">Objective and Problem Statement</span>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
          <p className="text-left">
            The project is a web-based application designed to streamline and
            enhance the performance evaluation process within a college domain.
            The system is built using HTML, CSS, Java Servlets, and JSP
            technologies.
          </p>
        </section>

        <section className="text-white mb-4 mx-4 flex flex-col justify-center items-center">
          <span className="text-2xl">User Roles</span>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
          <ul className="text-left">
            <li>Principal</li>
            <li>Head of Department (HOD)</li>
            <li>Faculty</li>
          </ul>
        </section>

        <section className="text-white flex flex-col justify-center items-center mb-4 mx-4">
          <span className="text-2xl">Workflow</span>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
          <ol className="text-left">
            <li className="m-2">
              <span className="text-xl">Appraisal Form Release :</span> Faculty
              members should complete and submit the appraisal form. Submitted
              forms are sent to the respective HOD for review.
            </li>
            <li className="m-2">
              <span className="text-xl">Form Submission :</span> The HOD selects
              the academic year and releases the appraisal form. Faculty members
              of the respective department receive a link to fill out the form.
            </li>
            <li className="m-2">
              <span className="text-xl">Review Process:</span> The HOD reviews
              the submitted forms. Once reviewed, the forms are forwarded to the
              Principal.
            </li>
            <li className="m-2">
              <span className="text-xl">Status Updates:</span> The status of the
              appraisal form is continuously updated. Status updates are visible
              to the HOD, Principal, and the respective faculty.
            </li>
          </ol>
        </section>

        <section className="text-white mb-4 mx-4 flex flex-col justify-center items-center">
          <span className="text-2xl">Tech Stack Used</span>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
          <ul className="text-left">
            <li>
              <span className="text-xl">Frontend : </span>HTML, CSS
            </li>
            <li>
              <span className="text-xl">Backend : </span>Java Servlets, JSP
            </li>
            <li>
              <span className="text-xl">Database : </span>Oracle DB
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
