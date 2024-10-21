// src/components/LoginModal.jsx
import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const LoginModal = ({ handleClose, handleLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    handleLogin(event); // Call handleLogin with form data
  };

  return createPortal(
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Modal Content */}
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
          {/* Centered Login Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white font-bold px-4 sm:px-6 py-2 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:bg-gray-300 hover:text-black hover:shadow-2xl"
            >
              Login
            </button>
          </div>
        </form>
      </motion.div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default LoginModal;
