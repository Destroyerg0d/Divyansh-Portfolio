
import React from 'react';
import { ExternalLink, Github, Calendar, TrendingUp, Shield, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Client E-commerce Store",
      period: "2023 - Present",
      role: "Founder and Operator",
      description: "Opened and ran an e-commerce store for a client through my YouTube channel, generating profit in the Indian market.",
      achievements: [
        "Successfully transitioned the store to the USA e-commerce model",
        "Leveraged expertise in digital marketing to optimize Facebook Ads and Google Ads",
        "Achieved sustained growth and expansion"
      ],
      tech: ["Digital Marketing", "E-commerce", "Facebook Ads", "Google Ads"],
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Custom Cryptocurrency Token",
      period: "2021",
      role: "Solo Project",
      description: "Created a custom cryptocurrency token for educational purposes, learning blockchain fundamentals and smart contract development.",
      achievements: [
        "Explored cryptocurrency trading and blockchain-based applications",
        "Gained deep understanding of blockchain technology during COVID period",
        "Implemented smart contract functionality"
      ],
      tech: ["Blockchain", "Smart Contracts", "Cryptocurrency", "Solidity"],
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "NTCC Projects - NVIDIA Broadcasting",
      period: "2022",
      role: "Project Manager",
      description: "Managed college NTCC projects focused on cutting-edge technologies, exploring real-time communication and brain-machine interfaces.",
      achievements: [
        "Led NVIDIA Broadcasting implementation project",
        "Developed Neuralink interface concepts",
        "Focused on real-time communication solutions"
      ],
      tech: ["NVIDIA Broadcasting", "Neuralink", "Real-time Communication", "AI"],
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my key projects that showcase my skills in various technologies and domains.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-400 mt-1">
                      <Calendar size={16} className="mr-2" />
                      <span>{project.period}</span>
                      <span className="mx-2">•</span>
                      <span className="text-purple-400">{project.role}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
