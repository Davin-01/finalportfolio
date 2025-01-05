import React, { useState } from "react";
import Home from "./component/Home";
import About from "./component/About";
import Projects from "./component/Projects";
// import Contact from "./component/Contact";
import Footer from "./component/Footer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-theme-darkBlue bg-opacity-90 backdrop-blur-lg text-theme-palePeach shadow-lg z-20">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-theme-redOrange">
          My Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <a
            href="#about"
            className="hover:text-theme-softTeal transition duration-300 hover:underline underline-offset-4"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-theme-redOrange transition duration-300 hover:underline underline-offset-4"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-theme-deepBrown transition duration-300 hover:underline underline-offset-4"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-theme-redOrange"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-theme-darkBlue text-center">
          <a
            href="#about"
            className="block py-2 text-lg text-theme-softTeal hover:text-theme-redOrange"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 text-lg text-theme-redOrange hover:text-theme-deepBrown"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 text-lg text-theme-deepBrown hover:text-theme-softTeal"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Page Components */}
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        {/* <section id="contact">
          <Contact />
        </section> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
