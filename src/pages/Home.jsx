import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // Import the tick mark icon from react-icons
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink
import HeroImage from "../assets/images/hero-image.jpg"; // Replace with your hero image path
import TeamworkImage from "../assets/images/teamwork-image.jpg"; // Replace with your teamwork image path
import DemoVideo from "../assets/video/demo.mp4"; // Import the demo video
import ContactImage from "../assets/images/contact-image.jpg"; // Replace with your contact image path

const Home = () => (
  <div className="pt-2 bg-gray-50">
    {/* Hero Section with Background Image */}
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="container relative mx-auto px-6 py-12 lg:py-16 flex flex-col items-start lg:w-1/2">
        <motion.h1
          className="text-4xl font-bold text-white md:text-5xl drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Unlock Your Potential: Prepare for Success
        </motion.h1>
        <motion.p
          className="text-white mt-4 text-lg drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          SmartMarker is an AI-driven platform designed to help aspiring
          chartered accountants excel by practicing past papers in a simulated
          environment. Receive personalized feedback, close knowledge gaps, and
          achieve your goals.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link
            smooth
            to="#how-it-works"
            className="bg-white text-black font-bold px-6 py-3 rounded-full text-lg shadow-lg transform transition-transform hover:-translate-y-1 hover:shadow-2xl"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </div>

    {/* How It Works Section */}
    <section id="how-it-works" className="bg-white py-16">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:space-x-12">
        {/* Video on the Left */}
        <div className="w-full lg:w-1/2">
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="w-full rounded-md shadow-md"
              controls
              style={{ maxHeight: "400px" }}
            >
              <source src={DemoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Text with Tick Marks on the Right */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How It Works
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center text-lg text-gray-600">
              <FaCheckCircle className="text-green-500 mr-3" />
              Simulate handwritten exams using custom widgets.
            </li>
            <li className="flex items-center text-lg text-gray-600">
              <FaCheckCircle className="text-green-500 mr-3" />
              Submit responses and receive personalized feedback.
            </li>
            <li className="flex items-center text-lg text-gray-600">
              <FaCheckCircle className="text-green-500 mr-3" />
              Track your progress with a built-in grading system.
            </li>
            <li className="flex items-center text-lg text-gray-600">
              <FaCheckCircle className="text-green-500 mr-3" />
              Identify knowledge gaps and focus on improvements.
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* About Section with Image */}
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:space-x-12">
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800">
            Prepare for your exams
          </h3>
          <p className="text-gray-600 mt-4">
            Practice on past papers that simulate handwritten exams. Submit your
            responses, receive feedback, and track your progress with a grading
            system. Discover where your strengths lie and tackle gaps before
            exam day.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={TeamworkImage}
            alt="Teamwork"
            className="w-full h-auto object-cover rounded-md shadow-md"
            style={{ marginLeft: "20px" }}
          />
        </div>
      </div>
    </section>
  </div>
);

export default Home;
