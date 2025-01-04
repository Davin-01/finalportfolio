import React from 'react'
import pic1 from "../assets/pic1.jpg"
// import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"

const About = () => {
    return (
        <section id="about" className="min-h-screen py-16 bg-theme-softTeal text-theme-darkBlue">
         <div className="text-3xl font-semibold text-theme-redOrange mb-4">
            <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
                <p className="text-lg max-w-3xl mx-auto text-theme-deepBrown">
          Hello, I'm Moenga David, a passionate developer with expertise in
          building web applications. I specialize in web3 technology, full stack development,
          and also planning to specialize in cybersecurity with AI, Machine Learning, and Deep Learning,
          and I love working on challenging projects that allow me to grow and learn.I have been able to collaborate
          on various tech projects with a number of developers and we have successfully been able to achieve a lot.
          An Overview of the Projects is displayed in pictoral form
          <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={pic1} // Placeholder image
              alt="Pic1 "
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black mb-2">Social Hub</h3>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={pic4} // Placeholder image
              alt="Pic1 "
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black mb-2">Deox Foods</h3>
          </div>

          <div className="bg-gray-500 p-6 rounded-lg shadow-md">
            <img
              src={pic3} // Placeholder image
              alt="Pic1 "
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black mb-2">Study Planner</h3>
          </div>
          </div>
          </section>
                </p>
             </div>
        </section>
  );
};
    
export default About;