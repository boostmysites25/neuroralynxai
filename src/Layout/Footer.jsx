import { Link } from "react-router-dom";
import logo from "../assets/images/headerlogo.png";
import { useTheme } from "../Context/ThemeContext";
import { companyDetails } from "../util/constant";

const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="relative bg-primary/20 dark:bg-darkblack z-20 overflow-hidden">
      <div
        className={`absolute ${
          isDarkMode ? `flex` : "hidden"
        } -bottom-[15rem] blur-3xl left-0 w-full h-full bg-footerBackground -z-10 `}
      />
      <footer className="w-full   py-16  z-10">
        <div className="wrapper">
          <div className="flex justify-between md:flex-row flex-col gap-8 items-start">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="logo" className="w-[15rem]" />
              </div>
              <p className="text-white text-sm max-w-xs">
                At NeuroraLynx AI, we're focused on helping your business
                grow with innovative software solutions. We combine our passion for
                technology with a commitment to quality, specializing in
                delivering custom software products and services that meet your
                specific needs.
              </p>
              <div className="col-span-1">
                <div className="flex space-x-4 mt-8">
                  {companyDetails.socialLinks.map((obj, index) => (
                    <Link
                      key={index}
                      to={obj.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white  text-2xl transition-colors"
                    >
                      <obj.icon className="hover:text-darkblack dark:hover:text-primary cursor-ponter" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li className="group flex flex-col relative">
                  <Link
                    to="/about-us"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    About Us
                  </Link>
                  <span className="absolute -bottom-0.5 w-0 h-[1.4px] bg-gray-300 group-hover:w-full transition-all duration-300 ease-in-out" />
                </li>
                <li className="group flex flex-col relative">
                  <Link
                    to="/services"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Services
                  </Link>
                  <span className="absolute -bottom-0.5 w-0 h-[1.4px] bg-gray-300 group-hover:w-full transition-all duration-300 ease-in-out" />
                </li>
                <li className="group flex flex-col relative">
                  <Link
                    to="/blogs"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Blogs
                  </Link>
                  <span className="absolute -bottom-0.5 w-0 h-[1.4px] bg-gray-300 group-hover:w-full transition-all duration-300 ease-in-out" />
                </li>
                <li className="group flex flex-col relative">
                  <Link
                    to="/contact-us"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Contact US
                  </Link>
                  <span className="absolute -bottom-0.5 w-0 h-[1.4px] bg-gray-300 group-hover:w-full transition-all duration-300 ease-in-out" />
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white text-sm">
              ©{Math.floor(new Date().getFullYear())} NeuroraLynx AI. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
