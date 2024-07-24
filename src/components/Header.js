import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl text-cyan-400 font-bold">My Portfolio</h1>
      <nav>
        <a href="#about" className="mx-4  hover:text-gray-300 font-bold">About</a>
        <a href="#projects" className="mx-4  hover:text-gray-300 font-bold">Projects</a>
        <a href="#contact" className="mx-4  hover:text-gray-300 font-bold">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
