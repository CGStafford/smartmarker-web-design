// src/components/Footer.js

import React from 'react';

const Footer = () => (
  <footer className="bg-white shadow">
    <div className="container mx-auto px-6 py-4">
      <p className="text-gray-600 text-center">
        © {new Date().getFullYear()} SmartMarker (Pty) Ltd. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
