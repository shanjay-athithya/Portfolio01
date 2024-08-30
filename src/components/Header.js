import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger menu

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="container mx-auto px-4 flex justify-between items-center w-full">
        <h1 className="text-xl sm:text-2xl text-cyan-400 font-bold">Portfolio</h1>

        {/* Hamburger Icon for Small Screens */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } sm:flex flex-col sm:flex-row sm:space-x-4 mt-4 sm:mt-0 absolute text-center sm:relative top-12 sm:top-auto left-0 sm:left-auto w-full sm:w-auto bg-black sm:bg-transparent z-10`}
        >
          <a href="#about" className="block sm:inline-block px-4 py-2 hover:text-gray-300 font-bold">
            About
          </a>
          <a href="#projects" className="block sm:inline-block px-4 py-2 hover:text-gray-300 font-bold">
            Projects
          </a>
          <a href="#resume" className="block sm:inline-block px-4 py-2 hover:text-gray-300 font-bold">
            Resume
          </a>
          <a href="#contact" className="block sm:inline-block px-4 py-2 hover:text-gray-300 font-bold">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
