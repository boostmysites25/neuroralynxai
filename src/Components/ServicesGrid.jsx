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
      <div className="dark:bg-darkblack  wrapper paddingtop paddingbottom">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className={`relative aspect-square shadow-2xl ${
                  isDarkMode ? `hovershadowwhite` : `hover:shadow-black`
                } service-card-hover border-animate bg-gradient-animate duration-500 transition-all transform hover:-translate-x-8 hover:-translate-y-2 h-full dark:hover:bg-primary hover:bg-primary group dark:bg-darkblack overflow-hidden rounded-xl border border-slate-700 cursor-pointer hover:scale-105`}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover("")}
                onClick={() => navigateTo(service.link)}
              >
                <div
                  className={`absolute ${
                    hover !== index && isDarkMode ? `sm:flex hidden ` : "hidden"
                  } -top-[16rem] blur-3xl left-0 w-full h-full dark:bg-footerBackground  active:bg-hidden`}
                />
                {/* Overlay effect on hover */}
                <div 
                  className={`absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}
                />
                <div
                  className={`flex flex-col justify-evenly min-h-full p-5 darkandlightcardhovertext text-darkblack dark:text-white relative z-10 transition-all duration-300 group-hover:p-7`}
                >
                  <service.icon className="w-10 h-10 text-primary darkandlightcardhovertext transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:animate-pulse" />
                  <h3 className="text-xl font-bold mb-2 transition-all duration-300 group-hover:translate-x-2">{service.title}</h3>
                  <p className="desc darkandlightcardhovertext transition-all duration-300 group-hover:translate-x-1">
                    {service.description}
                  </p>
                  <div className="h-0 overflow-hidden group-hover:h-8 transition-all duration-300 flex items-center mt-2">
                    <span className="text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center">
                      Learn more 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
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
