import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#1A202C] text-[#F8FAFC] py-16 px-6 sm:px-12">

      {/* Hero Section */}
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-[#F39C12]">About Me</h2>
        <p className="mt-4 text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto">
          Passionate developer. Problem solver. Tech enthusiast.
        </p>
      </div>

      {/* Profile Image & Bio */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-12">
        {/* <img
          src="your-photo-url.jpg" // Replace with your image URL
          alt="Moenga David"
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-[#F39C12] transform hover:scale-110 transition duration-300 ease-in-out"
        /> */}
        <div className="text-center sm:text-left mt-8 sm:mt-0 sm:ml-12">
          <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto">
            I build scalable web applications with a focus on modern technologies. Let’s innovate together.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-20 w-full max-w-4xl text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-[#F39C12]">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {/* Skill Item 1 */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#4A90E2] text-white rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <i className="fas fa-code fa-3x"></i> {/* Example Icon for JavaScript */}
            <p className="mt-2 text-gray-200">JavaScript</p>
          </div>

          {/* Skill Item 2 */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#4A90E2] text-white rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <i className="fab fa-react fa-3x"></i> {/* Example Icon for React */}
            <p className="mt-2 text-gray-200">React</p>
          </div>

          {/* Skill Item 3 */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#4A90E2] text-white rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <i className="fab fa-python fa-3x"></i> {/* Example Icon for Python */}
            <p className="mt-2 text-gray-200">Python</p>
          </div>

          {/* Skill Item 4 */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#4A90E2] text-white rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <i className="fab fa-python fa-3x"></i> {/* Example Icon for Django */}
            <p className="mt-2 text-gray-200">Django</p>
          </div>
        </div>
      </div>

      {/* Contact Section (Optional - If you'd like to add this to About page) */}
      <div className="mt-20 w-full max-w-4xl text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-[#F39C12]">Get in Touch</h3>
        <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Have an exciting project in mind? Let's work together.
        </p>
        <a
          href="mailto:moengadavid90@gmail.com"
          className="mt-6 inline-block px-6 py-3 bg-[#4A90E2] text-white rounded-full hover:bg-[#F39C12] transition duration-300 ease-in-out"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default About;
