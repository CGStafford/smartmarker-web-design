// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import LoginModal from "./LoginModal";
import Logo from "../assets/images/logo.png";

const Header = ({ isAuthenticated, handleLogin, handleLogout, openModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLaptopScreen, setIsLaptopScreen] = useState(
    window.innerWidth >= 1024
  );

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleResize = () => setIsLaptopScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`fixed w-full z-20 transition-colors duration-300 ${
        isHomePage && !isScrolled
          ? "bg-transparent"
          : "bg-white backdrop-blur-md shadow-md"
      }`}
      style={{
        backgroundColor:
          isHomePage && !isScrolled
            ? "transparent"
            : "rgba(255, 255, 255, 0.2)",
        top: 0,
        left: 0,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo and Company Name */}
        <Link
          to={isAuthenticated ? "/dashboard" : "/"}
          className="flex items-center"
        >
          <img src={Logo} alt="Company Logo" className="h-8 w-auto mr-2" />
          <span
            className={`font-bold text-l sm:text-2xl ${
              isHomePage && !isScrolled ? "text-white" : "text-black"
            }`}
          >
            SmartMarker
          </span>
        </Link>

        {/* Navigation Links */}
        <nav
          className="flex-grow flex justify-end sm:justify-center space-x-3 sm:space-x-10 sm:ml-0"
          style={{ marginLeft: "-50px", marginTop: "-5px" }}
        >
          {!isAuthenticated && (
            <>
              {["Home", "About", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  className="relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`font-bold text-xs sm:text-base transition-colors duration-300 ${
                      isHomePage && !isScrolled ? "text-white" : "text-black"
                    }`}
                  >
                    {item}
                  </Link>
                  <div className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              ))}
            </>
          )}
        </nav>

        {/* Right-aligned Buttons */}
        <div className="ml-auto flex items-center space-x-4">
          {isAuthenticated && isLaptopScreen && (
            <button
              onClick={handleLogout}
              className="bg-black text-white font-bold px-4 sm:px-6 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-300 hover:text-black hover:shadow-2xl"
            >
              Logout
            </button>
          )}

          {!isAuthenticated && isLaptopScreen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={openModal}
                className="bg-black text-white font-bold px-4 sm:px-6 py-2 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:bg-gray-300 hover:text-black hover:shadow-2xl"
              >
                Login
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
