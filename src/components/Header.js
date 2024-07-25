import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-xl sm:text-2xl text-cyan-400 font-bold">Portfolio</h1>
        <nav className="mt-2 sm:mt-0 flex flex-wrap">
          <a href="#about" className="block sm:inline mx-2 sm:mx-4 hover:text-gray-300 font-bold">About</a>
          <a href="#projects" className="block sm:inline mx-2 sm:mx-4 hover:text-gray-300 font-bold">Projects</a>
          <a href="#contact" className="block sm:inline mx-2 sm:mx-4 hover:text-gray-300 font-bold">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
