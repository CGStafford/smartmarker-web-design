import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FadeButton from "../components/FadeButton";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set to submitting state

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      alert(response.data); // Show success message from server
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <div className="mt-8 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full px-4 py-2 border rounded-md h-32 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div>
                <FadeButton ariaLabel="Send Message" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </FadeButton>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
            <div className="flex items-center text-gray-600 mt-4">
              <FaMapMarkerAlt className="w-6 h-6 mr-2" />
              <span>Camps Bay, Cape Town</span>
            </div>
            <div className="flex items-center text-gray-600 mt-4">
              <FaPhone className="w-6 h-6 mr-2" />
              <span>+27(0)21 123 4560</span>
            </div>
            <div className="flex items-center text-gray-600 mt-4">
              <FaEnvelope className="w-6 h-6 mr-2" />
              <span>info@smartmarker.co.za</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
