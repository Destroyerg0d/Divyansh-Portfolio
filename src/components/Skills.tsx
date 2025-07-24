
import React from 'react';
import { Code, Database, Globe, Shield, Zap, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C/C++", "JavaScript"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["Firebase"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Automation",
      icon: <Zap className="w-6 h-6" />,
      skills: ["UI Path", "Selenium", "Browser Automation"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Security",
      icon: <Shield className="w-6 h-6" />,
      skills: ["SQL Injection (SQLi)", "Cross-Site Request Forgery (CSRF)", "Cross-Site Scripting (XSS)"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Web3 & Blockchain",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Blockchain", "Smart Contracts", "Cryptocurrency"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Digital Marketing",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Facebook Ads", "Google Ads", "E-commerce Strategy"],
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const tools = [
    "Git", "GitHub", "Firebase", "React/React Native", "VS Code", "Visual Studio", 
    "Krita", "GIMP", "PyCharm", "BurpSuit(Security)", "NameCheap(Hosting)", 
    "Shopify", "Google Analytics", "Amazon Azure", "Google Cloud", "RDP's", 
    "PacketStream", "ComboCards", "LeadingCards", "Stripe", "Paypal", "Razorpay"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 group"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg p-3 border border-purple-500/30"
                  >
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white rounded-full text-sm border border-purple-500/30 hover:scale-105 transition-transform duration-300 hover:bg-purple-500/30"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
