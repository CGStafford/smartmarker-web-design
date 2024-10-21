// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import LoginModal from "./LoginModal"; // Ensure this is used or remove if unnecessary
import Logo from "../assets/images/logo.png";

const Header = ({ isAuthenticated, handleLogin, handleLogout, openModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLaptopScreen, setIsLaptopScreen] = useState(window.innerWidth >= 1024);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Handle screen resize to determine if it's a laptop screen
  useEffect(() => {
    const handleResize = () => setIsLaptopScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll event listener to toggle the header background on scroll (only on home page)
  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(false); // Ensure header is solid on other pages
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount or when isHomePage changes
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`fixed w-full z-20 transition-colors duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-white backdrop-blur-md shadow-md"
            : "bg-transparent"
          : "bg-white backdrop-blur-md shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo and Company Name */}
        <Link
          to={isAuthenticated ? "/dashboard" : "/"}
          className="flex items-center"
        >
          <img src={Logo} alt="Company Logo" className="h-8 w-auto mr-2" />
          <span
            className={`font-bold text-l sm:text-2xl transition-colors duration-300 ${
              isHomePage && !isScrolled ? "text-black" : "text-black"
            }`}
          >
            SmartMarker
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-2 sm:space-x-4 items-center">
          {isAuthenticated && isLaptopScreen && (
            <button
              onClick={handleLogout}
              className="bg-black text-white font-bold px-4 sm:px-6 py-2 rounded-full text-xs sm:text-base shadow-lg transform transition-transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Logout
            </button>
          )}

          {!isAuthenticated && (
            <>
              {["Home", "About", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`font-bold text-xs sm:text-base transition-colors duration-300 ${
                      isHomePage && !isScrolled
                        ? "text-black hover:text-gray-300"
                        : "text-black hover:text-gray-500"
                    }`}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              {/* Login Button with Modal */}
              {isLaptopScreen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={openModal}
                    className="bg-black text-white font-bold px-4 sm:px-6 py-2 rounded-full text-xs sm:text-base shadow-lg transform transition-transform hover:-translate-y-1 hover:shadow-2xl"
                  >
                    Login
                  </button>
                </motion.div>
              )}
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
