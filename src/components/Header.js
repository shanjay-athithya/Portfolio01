import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="container mx-auto px-4 flex justify-between items-center w-full">
        <h1 className="text-xl sm:text-2xl text-cyan-400 font-bold">Portfolio</h1>
        <nav className="flex flex-wrap space-x-4 mt-2 sm:mt-0">
          <a href="#about" className="hover:text-gray-300 font-bold">About</a>
          <a href="#projects" className="hover:text-gray-300 font-bold">Projects</a>
          <a href="#contact" className="hover:text-gray-300 font-bold">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
