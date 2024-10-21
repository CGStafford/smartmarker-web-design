import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../assets/images/hero-image.jpg';

const Home = () => (
  <div className="pt-20 bg-gray-50">
    <div className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center">
      <div className="w-full lg:w-1/2">
        <motion.h1
          className="text-4xl font-bold text-gray-800 md:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Prepare for your exams
        </motion.h1>
        <motion.p
          className="text-gray-600 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          An AI preparatory test platform designed to help you succeed
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a
            href="#features"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500"
          >
            Learn More
          </a>
        </motion.div>
      </div>
      <div className="w-full lg:w-3/5">
        <motion.img
          src={HeroImage}
          alt="Hero"
          className="w-full h-auto object-cover"
          style={{ maxHeight: '600px' }}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
        {/* New Section: How It Works */}
        <section id="how-it-works" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          How It Works
        </h2>
        <p className="mt-12">
        </p>
        <p className="text-3xl text-gray-600 text-center">
          {/* Placeholder for explanation */}
          [Insert detailed explanation of how the tool works here.]
        </p>
        <div className="mt-8 flex justify-center">
          {/* Placeholder for video */}
          <div className="w-full max-w-3xl h-64 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Video Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
