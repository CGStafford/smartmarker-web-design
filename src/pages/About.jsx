import React from 'react';

const About = () => (
  <div className="pt-20 bg-white">
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
      <p className="text-gray-600 mt-4 text-lg">
        SmartMarker is the result of a collaborative effort between two 
        passionate graduates from the University of Cape Town’s College 
        of Accounting. Our platform combines innovative technology and 
        expert education to help students prepare for exams and succeed 
        as future chartered accountants.
      </p>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
        <p className="text-gray-600 mt-2 text-lg">
          To empower accounting students through innovative technology 
          by providing them with tools to practice, receive personalized 
          feedback, and excel in their academic and professional pursuits.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-800">The SmartMarker Team</h3>
        <div className="mt-4">
          <h4 className="text-xl font-semibold text-gray-800">Anthony Rogers</h4>
          <p className="text-gray-600 mt-2">
            Anthony is a seasoned professional with extensive experience in 
            finance and technology. He holds a Master’s degree in Financial 
            and Risk Management and has a passion for teaching and innovation.
          </p>

          <h4 className="text-xl font-semibold text-gray-800 mt-6">Chris Guattari-Stafford</h4>
          <p className="text-gray-600 mt-2">
            Chris, a distinguished graduate and lecturer, combines his expertise 
            in tax law and education to create effective learning experiences. 
            His academic excellence and teaching experience shape the SmartMarker platform.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
