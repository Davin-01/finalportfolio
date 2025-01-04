import React from 'react';
import pic1 from "../assets/pic1.jpg"
import pic4 from "../assets/pic4.jpg"
import pic3 from "../assets/pic3.jpg"

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-16 bg-theme-palePeach text-theme-darkBlue">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-theme-deepBrown mb-4">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <div className="bg-theme-softTeal p-6 rounded-lg shadow-md">
            <img
              src={pic3} // Placeholder image
              alt="Pic1 "
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-theme-redOrange mb-2">Study Planner</h3>
            <p className="text-sm text-theme-deepBrown mb-4">A study planner app for students.</p>
            <a
              href="#"
              className="mt-4 inline-block text-theme-darkBlue hover:text-theme-redOrange"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <img
              src={pic1} // Placeholder image
              alt="Project 2"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Social Hub</h3>
            <p className="text-sm text-gray-400 mb-4">A social interaction platform.</p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800"
            >
              View Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <img
              src={pic4} // Placeholder image
              alt="Project 3"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Deox Foods</h3>
            <p className="text-sm text-gray-400 mb-4">An Online Food Ordering Platform.</p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800"
            >
              View Project
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
