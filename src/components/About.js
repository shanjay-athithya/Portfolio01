import React from 'react';
import aboutImage from '../assets/images/hero.jpg';

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 font-poppins">About Me</h2>
        </div>
        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-start">
          {/* Text Content Section */}
          <div className="text-left max-w-3xl md:w-2/3 md:pr-8">
            <p className="text-lg md:text-xl leading-relaxed font-montserrat">
            I'm an Undergrad at <span class="text-cyan-400">SSN College of Engineering</span> pursing my <span class="text-cyan-400">B.Tech</span> In <span class="text-cyan-400">Information Technology</span> (2022-2026) and A passionate developer with a primary focus on <span class="text-cyan-400">Front-End</span> technologies. I specialize in creating dynamic and responsive user interfaces using <span class="text-cyan-400">React.js</span>, <span class="text-cyan-400">Next.js</span> and <span class="text-cyan-400">Tailwind CSS</span>. On the server side, I leverage <span class="text-cyan-400">Python</span> and <span class="text-cyan-400">Django</span> to build robust and scalable web applications. With a strong foundation in <span class="text-cyan-400">HTML5</span>, <span class="text-cyan-400">CSS3</span> and <span class="text-cyan-400">JavaScript</span>, I am committed to writing clean and maintainable code. My experience extends to managing databases with <span class="text-cyan-400">SQLite</span> and <span class="text-cyan-400">MySQL</span>, and developing efficient <span class="text-cyan-400">RESTful APIs</span>. I am always eager to learn new technologies and stay updated with the latest industry trends.           </p>
          </div>
          {/* Image Section */}
          <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
            <img
              src= {aboutImage} // Replace with your image URL
              alt="Your Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
