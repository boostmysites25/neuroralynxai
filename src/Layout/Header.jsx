import { useState } from "react";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import logo from "../assets/images/headerlogo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { serviceDetails } from "../util/services";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/contact-us");
  };

  const isActive = (path) => location.pathname === path;

  // Navigation Structure
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { type: "dropdown", label: "Services", items: serviceDetails },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blogs", label: "Blogs" },
  ];

  return (
    <nav className="fixed w-full top-0 !z-[999] bg-white/40 dark:bg-darkblack/40 shadow-md backdrop-blur-sm">
      <div className="wrapper">
        <div className="flex items-center justify-between py-5">
          <div className="flex-shrink-0">
            <Link to="/" className=" w-auto text-white">
              <img src={logo} alt="logo" className="w-[10rem]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) =>
              item.type === "dropdown" ? (
                <div key={index} className="relative group">
                  <button
                    className={`flex items-center gap-1 text-black dark:text-white hover:text-primary dark:hover:text-primary capitalize ${location.pathname.startsWith("/services")
                      ? "text-primary dark:text-white font-semibold"
                      : ""
                      }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 w-72 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white dark:bg-darkblack border border-gray-100 dark:border-white/10 rounded-xl shadow-xl overflow-hidden p-2">
                      {/* Link to main services page at top (optional, but good UX) */}
                      {/* <Link
                        to="/services"
                        className="block px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors border-b border-gray-100 dark:border-white/10 mb-1"
                      >
                        All Services
                      </Link> */}
                      {item.items.map((service, idx) => (
                        <Link
                          key={idx}
                          to={`/services/${service.link}`}
                          className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-black dark:text-white hover:text-primary dark:hover:text-primary capitalize ${isActive(item.path)
                    ? "text-primary dark:text-white font-semibold"
                    : ""
                    }`}
                >
                  {item.label}
                </Link>
              )
            )}

            <button onClick={navigateTo} className="primary-btn">
              Contact Us
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 text-gray-600`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 text-gray-600`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 max-h-[80vh] overflow-y-auto">
            {navItems.map((item, index) =>
              item.type === "dropdown" ? (
                <div key={index} className="space-y-1">
                  <div className="px-3 py-2 font-medium text-gray-900 dark:text-white opacity-50 uppercase text-xs tracking-wider">
                    {item.label}
                  </div>
                  {/* <Link
                    to="/services"
                    onClick={toggleMenu}
                    className="block pl-6 pr-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    All Services
                  </Link> */}
                  {item.items.map((service, idx) => (
                    <Link
                      key={idx}
                      to={`/services/${service.link}`}
                      onClick={toggleMenu}
                      className="block pl-6 pr-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  onClick={toggleMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ${isActive(item.path) ? "bg-gray-100 dark:bg-gray-800" : ""
                    }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <button
              onClick={navigateTo}
              className="w-full text-center bg-primary  text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors mt-4"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
