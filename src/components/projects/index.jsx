import project1 from "../../assets/project1.jpeg";
import project2 from "../../assets/parkinsons.jpeg";
import project3 from "../../assets/mern.jpeg";
import project4 from "../../assets/foodrecipe.jpeg";
import project5 from "../../assets/exptracker.jpeg";
import project6 from "../../assets/shopping.jpeg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const naviagte=useNavigate();
  const projects = [
    {
      name: "Employee Performance Appraisal System",
      imge: project1,
      details:"Emloyee Performance Appraisal System",
    },
    {
      name: "Parkinsons Disease Detection using ML",
      imge: project2,
      details:"parkinsonsDisease"
    },
    {
      name: " MERN Stactk Blog Application",
      imge: project3,
      details:"MERN Stactk Blog Application"
    },
    {
      name: "Food Recipies Website Using API",
      imge: project4,
      details:"Food Recipies Website Using API"
    },
    {
      name: "Expense Tracker Application",
      imge: project5,
      details:"Expense Tracker Application"
    },
    {
      name: "Shopping Cart Application Using React Redux",
      imge: project6,
      details:"Shopping Cart Application Using React Redux"
    },
  ];
  return (
    <div
      id="projects"
      className="bg-black flex flex-col justify-center items-center pt-26"
    >
      <div class="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500  rounded-lg"></div>
      <div className="m-4 ">
        <h1 className="text-white m-4">My Projects</h1>
        <span className="text-white ">
          I have included my academic projects and some of my personal projects
          below. You can click on the images to view the projects in more
          detail.
        </span>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            class="relative w-72 h-62 rounded-lg shadow-[0_0_15px_3px_#3b82f6] border border-white m-4 cursor-pointer overflow-hidden group transition-transform hover:scale-105 duration-300"
          >
            <img src={project.imge} alt="" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
              <div className="text-white flex flex-col justify-center items-center gap-4">
                <p className="italic font-bold text-xl">{project.name}</p>
                <Link 
                  to={`/${project.details}`}
                  className=" border border-white rounded-lg p-1 hover:shadow shadow-black"
                  style={{ color: "white" }}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
