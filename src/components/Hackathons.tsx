
import React from 'react';
import { Trophy, Calendar, Users, Award } from 'lucide-react';

const Hackathons = () => {
  const experiences = [
    {
      title: "Amazon Hackathon",
      subtitle: "Machine Learning Model for Text Extraction from Images",
      year: "2024",
      description: "Developed an ML model to extract text from images, applying advanced image processing techniques to solve real-world problems.",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      title: "IIT Guwahati Code Club Hackathon",
      subtitle: "Real-Time Social Media App with End-to-End Encryption",
      year: "2024",
      description: "Built a real-time social media app with end-to-end encryption for secure messaging and file sharing, incorporating a North Indian theme.",
      icon: <Trophy className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="hackathons" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Hackathon Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Competitive programming and hackathon experiences that showcase my problem-solving abilities and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 group"
            >
              <div className="flex items-start mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${experience.gradient} text-white mr-4`}>
                  {experience.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {experience.title}
                    </h3>
                    <div className="flex items-center text-purple-400">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{experience.year}</span>
                    </div>
                  </div>
                  <h4 className="text-cyan-400 font-semibold mb-3">
                    {experience.subtitle}
                  </h4>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {experience.description}
              </p>

              <div className="mt-6 flex items-center text-purple-400">
                <Users size={16} className="mr-2" />
                <span className="text-sm">Competitive Programming Experience</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Currently Learning & Growing
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I know my hands-on approach in hackathons and competitions helps me apply my skills in dynamic environments 
              that offer real-world problem-solving opportunities. I'm always eager to participate in new challenges 
              and collaborate with fellow developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
