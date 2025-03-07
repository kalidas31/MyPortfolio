import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Project4Details() {
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
            Food Recipies Application
          </span>
        </section>

        <section className="text-white mb-4 mr-4 ml-4 ">
          <span className="text-2xl ">Project Introduction</span>
          <div class="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
          <p className="text-left">
            • The Food Recipe Application is a user-friendly web platform built
            using React.js, designed to help users explore and discover various
            recipes efficiently. The application features an intuitive interface
            where users can browse, search, and view detailed recipe
            information.
          </p>
        </section>

        <section className="text-white mb-4 mr-4 ml-4 ">
          <span className="text-2xl ">Objective and Problem Statement</span>
          <div class="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
          <p className="text-left">
            • The application employs React Router for seamless navigation and
            Tailwind CSS for a modern, responsive design. Recipe data can either
            be statically stored or dynamically fetched from an API using Axios
            or Fetch API. This frontend-only implementation provides a
            lightweight yet interactive experience, making it an ideal choice
            for food enthusiasts and aspiring chefs.
          </p>
        </section>
        <section className="text-white flex flex-col justify-center items-center mb-4 mr-4 ml-4 ">
          <span className="text-2xl ">Key Features </span>
          <div class="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
          <ol className="text-left ">
            <li className="m-2">
              <span className="text-xl">• Homepage :</span> Displays featured or
              trending recipes with high-quality images.
            </li>
            <li className="m-2">
              <span className="text-xl">• Recipe Listing Page:</span> Shows a
              categorized list of recipes with filters for cuisine, ingredients,
              and dietary preferences.
            </li>
            <li className="m-2">
              <span className="text-xl">• Recipe Detail Page: </span> Provides
              step-by-step cooking instructions, ingredient lists, and images.
            </li>
            <li className="m-2">
              <span className="text-xl">
                • Search & Filter Functionality :
              </span>
              Users can quickly find recipes based on names, categories, or
              ingredients.
            </li>
            <li className="m-2">
              <span className="text-xl">• Favorite Recipes: </span>
              Users can save and manage their favorite recipes using local
              storage for a personalized experience.
            </li>
            
          </ol>
        </section>
        <section className="text-white mb-4 mr-4 ml-4 flex flex-col justify-center items-center">
          <span className="text-2xl ">Tech Stack used </span>
          <div class="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-auto mr-auto mt-4 rounded-lg"></div>
          <ul className="text-left">
            <li>• React.js </li>
            <li>•	React Router </li>
            <li>•	Axios / Fetch API </li>
            <li>•	Local Storage </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
