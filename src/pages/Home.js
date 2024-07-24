import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Resume from '../components/Resume';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <main>
        <About />
        <Skills/>
        <Resume/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
