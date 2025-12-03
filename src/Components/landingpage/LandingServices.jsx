import React from "react";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../util/constant";
import RoundedHeader from "../RoundedHeader";
import { useTheme } from "../../Context/ThemeContext";

const LandingServices = ({ page }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  
  const services =
    page === "web-development"
      ? webDevelopmentServices
      : appDevelopmentServices;

  const content = {
    "web-development": {
      header: "Web Development Services",
      subheading:
        "Building Websites That Perform and Deliver Results",
      description:
        "We create responsive, SEO-friendly, and scalable websites that combine creativity with functionality. From corporate websites to custom platforms, our solutions help you build a strong online presence.",
    },
    "app-development": {
      header: "App Development Services",
      subheading:
        "Building Mobile Apps That Work on Every Platform",
      description:
        "We specialize in building cross-platform and native mobile apps that are fast, secure, and designed for your users. From concept to launch, we help you create experiences that users love.",
    },
  };

  const { header, subheading, description } =
    content[page] || {
      header: "Our Services",
      subheading: "Smart Digital Solutions for Web and Mobile",
      description:
        "We offer modern web and app development services powered by AI and innovation to help you achieve your digital goals.",
    };

  return (
    <div id="services" className="relative py-20">
      <div className="wrapper flex flex-col items-center gap-10 z-10">
        <RoundedHeader title={header} />

        <h1 data-aos="fade-up" className="main-title max-w-5xl leading-tight text-center">
          {subheading}
        </h1>

        <p data-aos="fade-up" className="text-center max-w-3xl leading-relaxed desc mb-6">
          {description}
        </p>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mt-6"
        >
          {services.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-[#0d1525]/60 to-[#111a2e]/60 border border-[#1c2130]/30' 
                  : 'bg-white/70 border border-gray-100/50 shadow-sm'
              }`}
            >
              {/* Futuristic glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className={`absolute h-[200%] w-[200%] -top-1/2 -left-1/2 ${
                  isDarkMode ? 'opacity-20' : 'opacity-10'
                } group-hover:opacity-30 transition-opacity duration-700`}>
                  <div className="absolute inset-0 bg-transparent border border-primary/30 rounded-full animate-[spin_8s_linear_infinite]"></div>
                  <div className="absolute inset-0 bg-transparent border border-primary/20 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
                </div>
              </div>
              
              {/* Card content */}
              <div className="p-8 relative z-10">
                <div className="flex sm:flex-row flex-col items-start gap-6">
                  {/* Futuristic icon container */}
                  <div className={`relative flex-shrink-0 ${
                    isDarkMode ? 'bg-[#111a2e]/80' : 'bg-gray-50/80'
                  } rounded-2xl p-4 overflow-hidden group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-500`}>
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="relative w-12 h-12 flex items-center justify-center text-primary">
                      {<item.img size={30} />}
                    </div>
                    
                    {/* Animated accent lines */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="flex-1">
                    {/* Title with futuristic underline */}
                    <div className="mb-4 relative">
                      <h3 className={`text-2xl font-bold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      } group-hover:text-primary transition-colors duration-300`}>
                        {item.title}
                      </h3>
                      
                      {/* Animated underline */}
                      <div className="relative h-0.5 mt-2 overflow-hidden">
                        <div className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-700 ease-out ${
                          isDarkMode ? 'bg-primary' : 'bg-primary'
                        }`}></div>
                      </div>
                    </div>
                    
                    {/* Description with better typography */}
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    } leading-relaxed`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bottom accent with animation */}
              <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
                <div className={`absolute inset-0 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-primary/40 via-primary/20 to-transparent' 
                    : 'bg-gradient-to-r from-primary/30 via-primary/20 to-transparent'
                } translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out`}></div>
              </div>
              
              {/* Futuristic corner accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-12 rotate-45 ${
                isDarkMode 
                  ? 'bg-primary/10' 
                  : 'bg-primary/5'
              } group-hover:bg-primary/15 transition-colors duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className={`absolute ${
          isDarkMode 
            ? 'bg-primary/10 opacity-30' 
            : 'bg-primary/10 opacity-40'
        } rounded-full w-[40rem] h-[40rem] blur-3xl -top-40 -left-40`}></div>
        <div className={`absolute ${
          isDarkMode 
            ? 'bg-primary/10 opacity-30' 
            : 'bg-primary/10 opacity-40'
        } rounded-full w-[50rem] h-[50rem] blur-3xl bottom-40 -right-40`}></div>
      </div>
    </div>
  );
};

export default LandingServices;
