// src/components/LoginModal.jsx
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const LoginModal = ({ handleClose, handleLogin }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    handleLogin(event); // Call handleLogin with form data
  };

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative"
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Assessment Portal</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              className={`relative overflow-hidden bg-black text-white font-bold px-4 sm:px-6 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out border-2 box-border cursor-pointer inline-flex items-center justify-center`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderColor: isHovered ? "solid black" : "transparent",
                transition: "border-color 0.3s ease-in-out",
              }}
            >
              <span
                className="absolute top-0 left-0 h-full bg-gray-300 transition-all duration-300 ease-in-out rounded-full"
                style={{
                  width: isHovered ? "100%" : "0%",
                  transition: "width 0.3s ease-in-out",
                }}
              ></span>
              <span
                className="relative z-10 transition-colors duration-300 ease-in-out"
                style={{
                  color: isHovered ? "black" : "white",
                }}
              >
                Login
              </span>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default LoginModal;
