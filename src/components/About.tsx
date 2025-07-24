
import React from 'react';
import { MapPin, Calendar, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a versatile and driven Computer Science student with strong expertise in Digital Marketing, 
                Blockchain, and Automation. I excel at delivering innovative technical solutions and building 
                projects from concept to completion.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                Currently honing my coding skills through bug bounty programs and hackathons, with a focus on 
                real-time applications and machine learning models. I'm passionate about exploring new technologies, 
                especially in Web 3.0, automation, and secure communications.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30">
              <div className="flex items-center mb-4">
                <MapPin className="text-purple-400 mr-3" size={20} />
                <span className="text-gray-300">Greater Noida, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center mb-4">
                <Calendar className="text-purple-400 mr-3" size={20} />
                <span className="text-gray-300">Available for opportunities</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="text-purple-400 mr-3" size={20} />
                <span className="text-gray-300">Bachelor of Computer Science (2026)</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Current Focus</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Machine Learning & AI Applications</li>
                <li>• Blockchain Development</li>
                <li>• Bug Bounty & Security Research</li>
                <li>• Real-time Web Applications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
