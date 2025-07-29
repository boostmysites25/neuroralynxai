import { Link } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import logo from "../../assets/images/headerlogo.png";
import { Link as Scrolllink } from "react-scroll";
import { companyDetails } from "../../util/constant";

const LandingFooter = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="relative bg-primary/20 dark:bg-darkblack z-20 overflow-hidden">
      <div
        className={`absolute ${
          isDarkMode ? `flex` : "hidden"
        } -bottom-[15rem] blur-3xl left-0 w-full h-full bg-footerBackground -z-10 `}
      />
      <footer className="w-full  px-4 py-16 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex md:flex-row flex-col justify-between gap-8 items-start">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="logo" className="w-[15rem]" />
              </div>
              <p className="text-white text-sm max-w-xs">
                At NeuroraLynx AI, we're dedicated to driving your business
                forward with innovative software solutions. With a passion for
                technology and a commitment to excellence, we specialize in
                delivering tailored software products and services to meet your
                unique needs.
              </p>
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

            <div className="col-span-1">
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li className="group flex flex-col relative">
                  <Scrolllink
                    to="about-us"
                    key={"about-us"}
                    spy={true}
                    smooth={true}
                    offset={-140}
                    duration={1000}
                    className="text-white hover:text-gray-300 text-sm"
                    activeClass="active-link text-blue-300 dark:text-primary"
                  >
                    About Us
                  </Scrolllink>
                  <span className="absolute -bottom-0.5 w-0 h-[1.4px] bg-gray-300 group-hover:w-full transition-all duration-300 ease-in-out" />
                </li>
                <li className="group flex flex-col relative">
                  <Scrolllink
                    to="services"
                    key={"services"}
                    spy={true}
                    smooth={true}
                    offset={-140}
                    duration={1000}
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Services
                  </Scrolllink>
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
                  <Scrolllink
                    to="contact"
                    key={"contact"}
                    spy={true}
                    smooth={true}
                    offset={-140}
                    duration={1000}
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Contact US
                  </Scrolllink>
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

export default LandingFooter;
