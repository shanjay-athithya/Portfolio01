import React from 'react';
import beta from "../assets/videos/Beta.mp4";
import climard from "../assets/videos/Climard.mp4";
import nexgenflow from "../assets/videos/NexGenFlow.mp4";
import medhub from "../assets/videos/MedHub.mp4";
import bloodsync from "../assets/videos/Blood_Sync.mp4";

const projects = [
  {
    title: "Beta",
    description: "A cutting-edge platform designed to revolutionize the way you interact with job and career related queries.",
    link: "https://github.com/shanjay-athithya/Beta",
    video: beta, // Replace with your video URLs
  },
  {
    title: "Climard",
    description: "A real-time climate monitoring system using Arduino to measure temperature, humidity, and light intensity.",
    link: "https://github.com/shanjay-athithya/Climard",
    video: climard, // Replace with your video URLs
  },
  {
    title: "NexGenFlow",
    description: "An innovative water management platform designed to optimize water distribution networks and enhance operational efficiency.",
    link: "https://github.com/shanjay-athithya/NexGenFlow",
    video: nexgenflow, // Replace with your video URLs
  },
  {
    title: "Blood_Sync",
    description: "A robust Blood Bank Management System for efficient donor management, inventory tracking, and streamlined distribution processes. ",
    link: "https://github.com/shanjay-athithya/Blood_Sync",
    video: bloodsync, // Replace with your video URLs
  },
  {
    title: "MedHub",
    description: "A pioneering project designed to streamline and enhance medical processes using state-of-the-art technologies.",
    link: "https://github.com/shanjay-athithya/MedHub",
    video: medhub, // Replace with your video URLs
  },
];

const ProjectCard = ({ title, description, link, video }) => (
  <div className="bg-white text-black p-8 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl flex-shrink-0 w-full md:w-2/5 lg:w-2/5 xl:w-2/5">
    <video src={video} controls className="w-full h-80 object-cover mb-4 rounded-t-lg" />
    <h3 className="text-2xl text-cyan-400 font-semibold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <a href={link} className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">View Project</a>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400 py-8">Projects</h2>
      <div className="bg-black text-white overflow-x-auto flex space-x-6 px-6 py-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            video={project.video}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
