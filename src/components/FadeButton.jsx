// src/components/FadeButton.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink for smooth scrolling

const FadeButton = ({
  onClick,
  children,
  type = "button",
  ariaLabel,
  to, // Optional prop for Link
  smooth = true, // Default to true for smooth scrolling
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Common classes for both button and link
  const baseClasses = `
    relative 
    overflow-hidden 
    bg-black 
    text-white 
    font-bold 
    px-4 
    sm:px-6 
    py-2 
    rounded-full 
    shadow-lg 
    transition-all 
    duration-300 
    ease-in-out
    border-2 
    hover:shadow-2xl 
    focus:outline-none 
    focus:ring-2 
    focus:ring-gray-300 
    cursor-pointer
    inline-flex
    items-center
    justify-center
    box-border     
    border-transparent
  `;

  // Handler functions for hover state
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Content of the button/link
  const content = (
    <>
      {/* Background Overlay */}
      <span
        className="absolute top-0 left-0 h-full bg-gray-300 transition-all duration-300 ease-in-out rounded-full"
        style={{
          width: isHovered ? "100%" : "0%",
          transition: "width 0.3s ease-in-out",
        }}
      ></span>

      {/* Button Text */}
      <span
        className="relative z-10 transition-colors duration-300 ease-in-out"
        style={{
          color: isHovered ? "black" : "white",
          transition: "color 0.3s ease-in-out",
        }}
      >
        {children}
      </span>
    </>
  );

  const hoverStyles = {
    borderColor: isHovered ? "black" : "transparent", // Change as needed
    transition: "border-color 0.3s ease-in-out",
  };

  // If 'to' prop is provided, render a Link
  if (to) {
    return (
      <Link
        to={to}
        smooth={smooth}
        className={baseClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={ariaLabel || children}
        style={hoverStyles}
      >
        {content}
      </Link>
    );
  }

  // Else, render a button
  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel || children}
      style={hoverStyles}
    >
      {content}
    </button>
  );
};

FadeButton.propTypes = {
  onClick: PropTypes.func, // Optional for Link
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  ariaLabel: PropTypes.string,
  to: PropTypes.string, // Optional, if provided, renders as Link
  smooth: PropTypes.bool, // Optional, defaults to true
};

export default FadeButton;
