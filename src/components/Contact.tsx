
import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a great conversation about technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:realdivyanshsingh@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                      realdivyanshsingh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+917380398812" className="text-white hover:text-purple-400 transition-colors">
                      +91 7380398812
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Greater Noida, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Destroyerg00"
                    className="p-3 bg-white/10 rounded-xl hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/in/divyansh-singh-244557199"
                    className="p-3 bg-white/10 rounded-xl hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <p className="text-gray-300 mb-4">
              Looking for opportunities in <span className="text-purple-400 font-semibold">Web Development</span>, 
              <span className="text-cyan-400 font-semibold"> Blockchain</span>, or 
              <span className="text-pink-400 font-semibold"> Digital Marketing</span>?
            </p>
            <p className="text-white font-semibold">Let's build something amazing together! 🚀</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
