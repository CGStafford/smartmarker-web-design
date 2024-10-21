// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoginModal from './LoginModal';
import Logo from '../assets/images/logo.png'; // Ensure your logo path is correct

const Header = ({ isAuthenticated, handleLogin, handleLogout }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-80 fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to={isAuthenticated ? '/dashboard' : '/'}
          className="flex items-center"
        >
          <img src={Logo} alt="Company Logo" className="h-8 w-auto mr-2" />
          <span className="text-white font-bold text-3xl">
            SmartMarker
          </span>
        </Link>
        <nav className="flex space-x-4 items-center">
          {isAuthenticated ? (
            <>
              {/* Authenticated user links */}
              <button
                onClick={handleLogout}
                className="text-white hover:text-gray-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {['Home', 'About', 'Contact'].map((item, index) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link to={path} className="text-white hover:text-gray-300">
                      {item}
                    </Link>
                  </motion.div>
                );
              })}
              <button
                onClick={() => setModalOpen(true)}
                className="text-white hover:text-gray-300"
              >
                Login
              </button>
            </>
          )}
        </nav>
      </div>
      {isModalOpen && (
        <LoginModal
          handleClose={() => setModalOpen(false)}
          handleLogin={handleLogin}
        />
      )}
    </header>
  );
};

export default Header;
