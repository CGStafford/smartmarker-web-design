// src/components/LoginModal.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginModal = ({ handleClose, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = (e) => {
    e.preventDefault();
    // Here you would typically verify the user's credentials.
    handleLogin();
    handleClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <motion.div
        className="bg-white rounded-lg p-6 w-full max-w-sm"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={submitLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="mr-2 px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginModal;
