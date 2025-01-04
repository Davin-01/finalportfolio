import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#003135] to-[#024950] text-center px-6 sm:px-12 py-16"
    >
      {/* Background Blur Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#0FA4AF] rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#AFDDE5] rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Profile Section */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center">
        {/* Profile Image */}
        <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-full overflow-hidden shadow-lg border-4 border-[#AFDDE5]">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Heading and Subtitle */}
        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#AFDDE5] leading-snug">
          Hi, I'm <span className="text-[#964734]">Moenga David</span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl lg:text-3xl text-[#AFDDE5]">
          <Typewriter
            words={[
              'A Passionate Developer 🚀',
              'A Tech Enthusiast 💻',
              'A Problem Solver 🔍',
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </p>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-lg lg:text-xl text-gray-300 max-w-2xl">
          I craft beautiful, responsive web applications and love tackling
          complex challenges with innovative solutions. Let's collaborate and
          build something amazing together!
        </p>

        {/* Call-to-Actions */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#0FA4AF] text-[#003135] text-lg font-semibold rounded-full shadow-lg hover:bg-[#024950] hover:text-[#AFDDE5] transition duration-300"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border-2 border-[#AFDDE5] text-[#AFDDE5] text-lg font-semibold rounded-full hover:bg-[#AFDDE5] hover:text-[#003135] transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 flex flex-col items-center">
        <span className="text-gray-300 text-sm">Scroll Down</span>
        <div className="w-4 h-4 border-2 border-gray-300 rounded-full animate-bounce mt-2"></div>
      </div>
    </section>
  );
};

export default Home;
