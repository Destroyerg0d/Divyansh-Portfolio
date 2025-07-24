import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    'Computer Science Student',
    'Digital Marketing Expert',
    'Blockchain Developer',
    'Automation Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const text = texts[currentIndex];
    let index = 0;
    const timer = setInterval(() => {
      setCurrentText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex, texts]);

  const handleGetInTouch = () => {
    window.location.href = 'mailto:realdivyanshsingh@gmail.com';
  };

  const handleViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <img
            src="/lovable-uploads/ab7171f9-969a-41ed-80e8-e39f0167fc83.png"
            alt="Divyansh Singh Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-400 shadow-2xl hover:scale-110 transition-transform duration-300 object-cover"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Divyansh Singh
          </span>
        </h1>

        <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
          <span className="border-r-2 border-purple-400 pr-2 animate-pulse">
            {currentText}
          </span>
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Passionate about creating innovative solutions through technology, with expertise in 
          digital marketing, blockchain development, and automation.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <button
            onClick={handleGetInTouch}
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
          >
            Get In Touch
          </button>
          <button
            onClick={handleViewWork}
            className="border border-purple-400 hover:bg-purple-400/20 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            View My Work
          </button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="mailto:realdivyanshsingh@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110">
            <Mail size={24} />
          </a>
          <a href="https://github.com/Destroyerg00" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/divyansh-singh-244557199" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110">
            <Linkedin size={24} />
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
