import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-32 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl text-cyan-400 font-bold mb-8">Resume</h2>
        <p className="text-lg mb-8">Download my resume to learn more about my professional experience and skills.</p>
        <a
          href="/resume/shanjay_resume.pdf"
          download
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
