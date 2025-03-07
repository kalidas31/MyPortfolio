import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Project3Details() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="bg-black w-full  flex flex-col justify-center items-center gap-6">
      <Link
        to={"/"}
        className=" border border-white rounded-lg p-1 ml-auto mr-16 mt-8 hover:shadow shadow-black"
        style={{ color: "white" }}
      >
        Go To Projects
      </Link>
      <div className="w-250  border border-white rounded-lg  m-8 shadow-[0_0_15px_3px_#3b82f6]">
        <section className="mt-4 mb-8">
          <span className="text-3xl  font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent ">
            Parkinsons Disease Detection using ML
          </span>
        </section>

        <section className="text-white mb-4 mr-4 ml-4 ">
          <span className="text-2xl ">Project Introduction</span>
          <div class="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
          <p className="text-left">
            The MERN Stack Blog Application is a full-stack web application
            built using MongoDB, Express.js, React.js, and Node.js. It allows
            users to create, edit, delete, and view blog posts. The application
            provides a seamless user experience with an intuitive UI, real-time
            updates, and secure authentication. It is designed to be scalable
            and responsive, making it accessible across various devices.
          </p>
        </section>

        <section className="text-white mb-4 mr-4 ml-4 ">
          <span className="text-2xl ">Objective and Problem Statement</span>
          <div class="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
          <p className="text-left">
            Many existing blog platforms are either too complex or lack
            essential features such as customization, real-time interactions,
            and a seamless user experience. This project aims to solve these
            issues by offering a lightweight, fast, and feature-rich blogging
            application with modern web technologies.
          </p>
        </section>
        <section className="text-white flex flex-col justify-center items-center mb-4 mr-4 ml-4 ">
          <span className="text-2xl ">Workflow</span>
          <div class="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
          <ol className="text-left ">
            <li className="m-2">
              <span className="text-xl">User Authentication :</span> Users can
              sign up, log in, and log out using JWT-based authentication.
              Role-based access control (admin, author, reader).
            </li>
            <li className="m-2">
              <span className="text-xl">Blog Management:</span> Users can
              create, edit, and delete blog posts. Rich text editor for content
              formatting. Image upload feature.
            </li>
            <li className="m-2">
              <span className="text-xl">Blog Viewing :</span> Visitors can
              browse and read blogs. Search and filter options based on
              categories, tags, and keywords.
            </li>
            <li className="m-2">
              <span className="text-xl"> User Interaction :</span> Commenting
              system for user engagement. Like/dislike functionality.
            </li>
            <li className="m-2">
              <span className="text-xl">Backend Processing</span>
              Node.js and Express.js handle API requests. MongoDB stores user
              and blog data efficiently.
            </li>
          </ol>
        </section>
        <section className="text-white mb-4 mr-4 ml-4 flex flex-col justify-center items-center">
          <span className="text-2xl ">Tech Stack used </span>
          <div class="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
          <ul className="text-left">
            <li>Reactjs</li>
            <li>Expressjs</li>
            <li>Nodejs</li>
            <li>MongoDB</li>
            
          </ul>
        </section>
      </div>
    </div>
  );
}
