import React, { useState } from "react";
import {
  appDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../util/constant";

const Portfolio = () => {
  const [activePortfolio, setActivePortfolio] = useState("web");

  const portfolioTypes = [
    { key: "web", label: "Web Projects" },
    { key: "app", label: "Mobile Apps" },
  ];

  const getCurrentPortfolio = () => {
    switch (activePortfolio) {
      case "web":
        return webDevelopmentPortfolio;
      case "app":
        return appDevelopmentPortfolio;
      default:
        return webDevelopmentPortfolio;
    }
  };

  return (
    <div className="bg-white dark:bg-darkblack">
      <div className="wrapper pt-[7rem] paddingbottom ">
        <h2 className="main-title text-center paddingbottom">
          Few of Our Projects
        </h2>

        <div className="flex sm:flex-row flex-col  gap-5 justify-center mb-8 ">
          {portfolioTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => setActivePortfolio(type.key)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activePortfolio === type.key
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getCurrentPortfolio().map((project) => (
            <div
              key={project.id}
              className="bg-white  dark:bg-darkblack rounded-lg dark:hover:shadow-primary shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="small-heading dark:text-white  mb-2 ">
                  {project.title}
                </h3>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Project
                  </a>
                ) : (
                  <span className="text-gray-500">
                    Project Link Unavailable
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
