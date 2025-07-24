
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SaasPortals from '../components/SaasPortals';
import Hackathons from '../components/Hackathons';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <SaasPortals />
      <Skills />
      <Hackathons />
      <Contact />
    </div>
  );
};

export default Index;
