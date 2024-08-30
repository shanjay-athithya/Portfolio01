import React from 'react';

const skills = [
    "Python",
  'JavaScript',
  'React.js',
  'Next.js',
  'Django',
  "SQLite",
  'Firebase',
  'HTML',
  'CSS /Tailwind CSS',
  'Git',
];

const Skills = () => {
  return (
    <section id="skills" className="py-36 bg-white text-black">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-8">Skills</h2>
      <div className="container mx-auto px-4 ">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-black text-white p-4 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
