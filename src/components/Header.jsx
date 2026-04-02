import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import profile from "../assets/boris.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; // dark par défaut
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);


  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LEFT : Photo + Branding */}
          <div className="flex items-center space-x-3">
            <img
              src={profile}
              alt="Boris LONTSIE"
              className="w-10 h-10 rounded-full object-cover border-2 border-purple-500"
            />
            <div className="leading-tight">
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                Boris LONTSIE
              </h1>
              <p className="text-xs text-purple-500">
                Développeur & Digital Entrepreneur
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {["about", "skills", "projects","certifications","experiences", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative text-gray-700 dark:text-gray-300 hover:text-purple-500 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-yellow-500 dark:text-gray-200 hover:scale-110 transition-all duration-300"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* HAMBURGER – mobile only */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:scale-110 transition-all duration-300"
              aria-label="Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 space-y-1">
            {["about", "skills", "projects", "certifications", "experiences", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-purple-500/10 hover:text-purple-500 font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
