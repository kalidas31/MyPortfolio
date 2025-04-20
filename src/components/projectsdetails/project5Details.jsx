import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Project5Details() {
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
            Expence Tracker Application
          </span>
        </section>

        <section className="text-white mb-4 px-4">
          <span className="text-2xl block text-center">Project Introduction</span>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 mx-auto mt-4 rounded-lg"></div>
          <p className="text-left">
            The Expense Tracker Website is a web application designed to help
            users track and manage their expenses efficiently. Built with modern
            web technologies, the platform allows users to log their income and
            expenses, categorize transactions, visualize spending patterns, and
            set budget limits. The system provides a simple and intuitive UI for
            better financial management.
          </p>
        </section>

        <section className="text-white mb-4 px-4">
          <span className="text-2xl block text-center">Objective and Problem Statement</span>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 mx-auto mt-4 rounded-lg"></div>
          <p className="text-left">
            Many people struggle to manage their finances effectively due to a
            lack of proper tracking. Traditional methods such as manual logs or
            spreadsheets can be tedious and inefficient. This project aims to
            solve this problem by offering an easy-to-use digital expense
            tracker that allows users to monitor their spending and savings
            conveniently.
          </p>
        </section>

        <section className="text-white flex flex-col justify-center items-center mb-4 px-4">
          <span className="text-2xl">Key Features</span>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 mx-auto mt-4 rounded-lg"></div>
          <ol className="text-left w-full max-w-prose">
            <li className="m-2">
              <span className="text-xl">User Authentication :</span> Users can
              sign up, log in, and log out using JWT-based authentication.
              Secure data storage to ensure privacy.
            </li>
            <li className="m-2">
              <span className="text-xl">Expense & Income Management :</span>
              Users can add, edit, and delete income and expense transactions.
              Transactions are categorized (e.g., Food, Rent, Travel, Shopping).
            </li>
            <li className="m-2">
              <span className="text-xl">Search and Filter Functionality : </span>
              Transactions can be filtered by date, category, and amount. Search
              bar for quick access to past transactions.
            </li>
          </ol>
        </section>

        <section className="text-white mb-4 px-4 flex flex-col justify-center items-center">
          <span className="text-2xl">Tech Stack used</span>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-4 mx-auto mt-4 rounded-lg"></div>
          <ul className="text-left w-full max-w-prose">
            <li>• React.js</li>
            <li>• Expressjs</li>
            <li>• Nodejs</li>
            <li>• React Router</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
