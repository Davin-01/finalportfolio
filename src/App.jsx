import React from 'react'
import Home from './component/Home'
import About from './component/About'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
   <nav className="fixed top-0 left-0 w-full bg-theme-darkBlue text-theme-palePeach py-4 px-6 shadow-md z-10">
  <div className="flex justify-between items-center max-w-7xl mx-auto">
    <a href="#home" className="text-2xl font-bold text-theme-redOrange">
      My Portfolio
    </a>
    <div className="space-x-6">
      <a href="#about" className="hover:text-theme-redOrange">About</a>
      <a href="#projects" className="hover:text-theme-softTeal">Projects</a>
      <a href="#contact" className="hover:text-theme-deepBrown">Contact</a>
    </div>
  </div>
</nav>


      < Home />
      < About />
      < Projects />
      < Contact /> 
      < Footer /> 
    </div>
  )
}
  

export default App;