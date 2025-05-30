import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Project6Details() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black w-full flex flex-col justify-center items-center gap-6 px-4 sm:px-8">
      <Link
        to={"/"}
        className="border border-white rounded-lg p-1 ml-auto mr-4 sm:mr-16 mt-8 hover:shadow shadow-black"
        style={{ color: "white" }}
      >
        Go To Projects
      </Link>

      <div className="w-full max-w-screen-lg border border-white rounded-lg m-4 sm:m-8 shadow-[0_0_15px_3px_#3b82f6]">
        <section className="mt-4 mb-8 text-center">
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            Online Shopping Cart Website
          </span>
        </section>

        <section className="text-white mb-4 px-4 flex flex-col justify-center items-start">
          <span className="text-2xl block text-center">Project Introduction</span>
          <div className="w-48 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-1 mx-auto mt-4 rounded-lg"></div>
          <p className="text-left ml-8">
            The Online Shopping Cart is a web application built using React and
            React Redux that provides users with a seamless e-commerce
            experience. It allows customers to browse products, add items to
            their cart, update quantities, and proceed to checkout. The
            application leverages Redux for efficient state management, ensuring
            smooth user interactions and dynamic updates without unnecessary
            re-renders.
          </p>
        </section>

        <section className="text-white mb-4 px-4 flex flex-col justify-center items-start">
          <span className="text-2xl block text-center">Objective and Problem Statement</span>
          <div className="w-48 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-1 mx-auto mt-4 rounded-lg"></div>
          <p className="text-left ml-8">
            Many online shopping websites suffer from performance issues and
            inefficient state management, leading to laggy user interactions and
            slow updates. This project aims to solve these issues by leveraging
            React and Redux to provide a fast, responsive, and interactive
            shopping experience with real-time cart updates.
          </p>
        </section>

        <section className="text-white flex flex-col justify-center items-start mb-4 px-4">
          <span className="text-2xl">Key Features</span>
          <div className="w-48 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-1 mx-auto mt-4 rounded-lg"></div>
          <ol className="text-left w-full ml-8">
            <li className="m-2">
              <span className="text-xl">Product Catalog :</span> Displays a list
              of available products fetched from an API or local JSON data.
              Allows filtering, sorting, and searching for better product
              discovery.
            </li>
            <li className="m-2">
              <span className="text-xl">Shopping Cart Functionality :</span>
              Users can add products to the cart. Ability to increase, decrease,
              or remove items dynamically. Real-time cart updates using Redux.
            </li>
            <li className="m-2">
              <span className="text-xl">User Authentication (Optional Enhancement) :</span>{" "}
              Users can sign up and log in for a personalized shopping
              experience. Saved cart functionality for registered users.
            </li>
            <li className="m-2">
              <span className="text-xl">Checkout Process: </span> Displays order
              summary with total price calculations. Option to apply discount
              codes (if implemented). Payment gateway integration (Stripe,
              Razorpay, etc.).
            </li>
          </ol>
        </section>

        <section className="text-white mb-4 px-4 flex flex-col justify-center items-start">
          <span className="text-2xl">Tech Stack used</span>
          <div className="w-48 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 m-4 ml-1 mx-auto mt-4 rounded-lg"></div>
          <ul className="text-left w-full ml-8">
            <li>• React.js</li>
            <li>• Expressjs</li>
            <li>• Nodejs</li>
            <li>• React Redux</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
