// src/pages/Contact.js
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => (
  <div className="pt-20 bg-gray-50">
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
      <div className="mt-8 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-blue-600"
              ></textarea>
            </div>
            <div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <div className="flex items-center text-gray-600 mt-4">
            <FaMapMarkerAlt className="w-6 h-6 mr-2" />
            <span>Hove Road, Camps Bay, Cape Town</span>
          </div>
          <div className="flex items-center text-gray-600 mt-4">
            <FaPhone className="w-6 h-6 mr-2" />
            <span>+27(0)21 123 4560</span>
          </div>
          <div className="flex items-center text-gray-600 mt-4">
            <FaEnvelope className="w-6 h-6 mr-2" />
            <span>info@smartmarker.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
