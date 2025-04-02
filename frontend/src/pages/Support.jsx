import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiGlobe } from 'react-icons/fi';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-600 mb-3">How Can We Help You?</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">We're here to listen and support. Reach out to us with any questions, concerns, or feedback.</p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          {/* Form Section */}
          <div className="md:col-span-3 bg-white shadow-lg rounded-xl p-8 transform transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-primary-600 mb-6 flex items-center">
              <FiMail className="mr-2" /> Send us a message
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Your contact number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  required
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  rows="5"
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-2">
            <div className="bg-white shadow-lg rounded-xl p-8 transform transition-all hover:shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-primary-600 mb-6">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiMail className="mt-1 mr-3 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:womenswelfarefoundation.org@gmail.com" className="text-gray-600 hover:text-primary-600 transition-colors">womenswelfarefoundation.org@gmail.com</a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FiPhone className="mt-1 mr-3 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+917718096154" className="text-gray-600 hover:text-primary-600 transition-colors">+91 77180 96154</a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">B wing, Sushila Apartment 2, Kaka Sohani path, Ram Maruti road, Ghantali, Thane west</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FiClock className="mt-1 mr-3 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-600">Monday to Sunday, 9:00 am – 5:00 pm</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FiGlobe className="mt-1 mr-3 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a href="https://womenswelfarefoundation.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 underline transition-colors">womenswelfarefoundation.com</a>
                  </div>
                </li>
              </ul>
            </div>
            
              <div className="bg-primary-50 border border-primary-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary-700 mb-3">We're Here For You</h3>
                <p className="text-gray-600">
                  Our team is dedicated to supporting women across all walks of life. 
                  Whether you need guidance, resources, or just someone to talk to,
                  we're committed to helping you thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Support;
