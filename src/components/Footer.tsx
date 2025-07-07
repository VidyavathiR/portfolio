import React from 'react';
import { Heart, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/VidyavathiR",
      label: "GitHub",
      color: "from-slate-600 to-slate-700"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://linkedin.com/in/vidyavathir",
      label: "LinkedIn",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:vidyavathi2812@gmail.com",
      label: "Email",
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Sparkles className="w-5 h-5 text-violet-400 animate-pulse" />
            <span className="text-violet-400 font-medium tracking-wider uppercase text-sm">
              Let's Build Something Amazing
            </span>
            <Sparkles className="w-5 h-5 text-violet-400 animate-pulse" />
          </div>

          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Vidyavathi R
          </h3>
          
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Full Stack Developer passionate about creating innovative solutions and building meaningful connections through technology.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/25`}
                aria-label={social.label}
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-slate-700/50 pt-8">
            <p className="text-slate-400 flex items-center justify-center text-lg">
              Made with <Heart className="w-5 h-5 mx-2 text-red-500 animate-pulse" /> by Vidyavathi R
            </p>
            <p className="text-slate-500 text-sm mt-3">
              © {new Date().getFullYear()} All rights reserved. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;