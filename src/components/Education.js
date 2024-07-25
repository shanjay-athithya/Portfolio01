import React from 'react';

const educationData = [
  {
    institution: "Sri Sivasubramaniya Nadar College Of Engineering",
    degree: "B Tech",
    field: "Information Technology",
    startYear: "2022",
    endYear: "2026",
  },
  
  // Add more education entries as needed
];

const EducationCard = ({ institution, degree, field, startYear, endYear }) => (
  <div className="bg-black text-white p-8 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl flex-shrink-0 w-full md:w-2/5 lg:w-2/5 xl:w-2/5">
    <h3 className="text-2xl text-cyan-400 font-semibold mb-2">{institution}</h3>
    <p className="mb-4"><span className="font-semibold">{degree}</span> in {field}</p>
    <p className="mb-4">{startYear} - {endYear}</p>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="py-32 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400 py-8">Education</h2>
      <div className="bg-white text-black flex flex-wrap justify-center items-center space-y-8 overflow-x-auto flex space-x-6 px-6">
        {educationData.map((education, index) => (
          <EducationCard
            key={index}
            institution={education.institution}
            degree={education.degree}
            field={education.field}
            startYear={education.startYear}
            endYear={education.endYear}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;