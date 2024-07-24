import React from 'react';
import heroImage from '../assets/images/shan.jpg';

const Hero = () => {
  return (
    <section className="hero bg-white text-black h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-opacity-60 bg-gradient-to-r from-white to-gray-100"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left container mx-auto px-4">
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={heroImage} // Replace with your image URL
            alt="Your Profile"
            className="w-64 h-64 md:w-96 md:h-96 rounded-lg  object-contain"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-poppins">Hello,</h1>
          <h2 className="text-2xl md:text-4xl text-cyan-400 font-bold mb-4 font-poppins">I'm Shanjay Athithya</h2>
          <p className="text-xl md:text-2xl mb-8 font-montserrat">
            A Front-End Developer creating amazing web experiences.
          </p>
          <a href="#projects" className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
            See My Work
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
