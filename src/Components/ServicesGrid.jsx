import React, { useState } from "react";
import { services } from "../util/constant";
import { Users } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const ServicesGrid = () => {
  const [hover, setHover] = useState("");
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(`/services/${link}`);
  };
  return (
    <section>
      <div className="dark:bg-darkblack paddingtop paddingbottom">
        <div className="wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className={`relative aspect-square ${
                  isDarkMode ? `card-glow-dark` : `card-glow-light`
                } service-card-futuristic h-full dark:bg-darkblack/80 bg-white/90 backdrop-blur-sm group overflow-hidden rounded-xl border border-slate-700/50 cursor-pointer`}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover("")}
                onClick={() => navigateTo(service.link)}
              >
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent z-0 group-hover:border-primary/30 card-border-animate"></div>
                
                {/* Animated gradient background - different for light/dark mode */}
                <div className={`absolute inset-0 ${
                  isDarkMode 
                    ? "bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5" 
                    : "bg-gradient-to-br from-white via-white to-white group-hover:from-primary/5 group-hover:via-white group-hover:to-primary/5"
                } transition-all duration-700 rounded-xl z-0 card-gradient-animate`}></div>
                
                {/* Glowing orb effect on hover */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"></div>
                
                {/* Subtle particle effect - adjusted for light mode */}
                <div className={`absolute inset-0 opacity-0 ${
                  isDarkMode ? "group-hover:opacity-30" : "group-hover:opacity-15"
                } transition-opacity duration-700 z-0 card-particles`}></div>
                
                {/* Content container */}
                <div className="flex flex-col justify-evenly min-h-full p-6 text-darkblack dark:text-white relative z-10 transition-all duration-500 group-hover:translate-y-0">
                  {/* Icon with enhanced animation */}
                  <div className="relative">
                    <div className="absolute -inset-3 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <service.icon className="w-10 h-10 text-primary transition-all duration-500 group-hover:scale-110 relative z-10 icon-float" />
                  </div>
                  
                  {/* Title with elegant animation */}
                  <h3 className="text-xl font-bold mb-2 transition-all duration-500 relative group-hover:text-primary dark:group-hover:text-white">
                    {service.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-700 ease-out"></span>
                  </h3>
                  
                  {/* Description with subtle animation */}
                  <p className="desc transition-all duration-500 transform group-hover:translate-y-0 relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white">
                    {service.description}
                  </p>
                  
                  {/* Learn more button with futuristic animation */}
                  <div className="h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 flex items-center mt-3">
                    <span className="text-sm font-medium text-primary flex items-center relative">
                      <span className="relative z-10 flex items-center">
                        Learn more 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-700 ease-out"></span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
