
import React from 'react';
import { ExternalLink, Globe, Code, Database, Users, Minus, X } from 'lucide-react';

const SaasPortals = () => {
  const portals = [
    {
      title: "Review Pro Max",
      url: "reviewpromax.com",
      description: "A comprehensive review management platform designed to help businesses collect, manage, and showcase customer reviews across multiple platforms.",
      features: [
        "Multi-platform review aggregation",
        "Automated review collection system",
        "Advanced analytics and reporting",
        "Customer feedback management"
      ],
      tech: ["Lovable", "React", "TypeScript", "Supabase", "Tailwind CSS"],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600",
      previewImage: "/lovable-uploads/a8160365-c708-4fca-8cbe-e17ec4e26fa7.png"
    },
    {
      title: "The Study Hub Library",
      url: "thestudyhublib.site",
      description: "An educational portal providing comprehensive study resources, digital library access, and collaborative learning tools for students and educators.",
      features: [
        "Digital library management system",
        "Interactive study materials",
        "User collaboration features",
        "Progress tracking and analytics"
      ],
      tech: ["Lovable", "React", "TypeScript", "Supabase", "Tailwind CSS"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-600",
      previewImage: "/lovable-uploads/73f0f480-1d75-40e9-b43a-e93d868b8412.png"
    }
  ];

  const BrowserWindow = ({ children, url }: { children: React.ReactNode; url: string }) => (
    <div className="bg-gray-800 rounded-t-xl border border-gray-600 overflow-hidden">
      {/* Browser Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-700 border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-gray-600 rounded-md px-3 py-1 text-gray-300 text-sm flex items-center">
            <Globe size={14} className="mr-2" />
            {url}
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <Minus size={16} />
          <X size={16} />
        </div>
      </div>
      {/* Browser Content */}
      <div className="bg-white">
        {children}
      </div>
    </div>
  );

  return (
    <section id="saas-portals" className="py-20 px-4 bg-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            SAAS & Portal Development
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized experience in building scalable SAAS platforms and web portals using Lovable and Supabase for rapid development and deployment.
          </p>
        </div>

        <div className="space-y-16">
          {portals.map((portal, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Info */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${portal.gradient} text-white`}>
                        {portal.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {portal.title}
                        </h3>
                        <div className="flex items-center text-gray-400 mt-1">
                          <Globe size={16} className="mr-2" />
                          <span>{portal.url}</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={`https://${portal.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {portal.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                      <Code size={18} className="mr-2" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {portal.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {portal.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Browser Window Preview */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <BrowserWindow url={portal.url}>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={portal.previewImage}
                        alt={`${portal.title} preview`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </BrowserWindow>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
            <span className="text-cyan-300 font-medium">
              Built with Lovable & Supabase for rapid full-stack development and deployment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasPortals;
