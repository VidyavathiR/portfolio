import React from 'react';
import { Github, ExternalLink, Code, Database, Palette, Server, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Career Glide",
      description: "A comprehensive career guidance platform built with Flask and MongoDB, helping users navigate their professional journey with personalized recommendations and interactive features.",
      technologies: ["Flask", "MongoDB", "HTML", "CSS", "Bootstrap"],
      githubLink: "https://github.com/VidyavathiR/CareerGlide",
      liveLink: null,
      icon: <Code className="w-6 h-6" />,
      color: "from-violet-500 to-purple-600",
      bgColor: "from-violet-500/10 to-purple-600/10"
    },
    {
      title: "Architecture Portfolio Website",
      description: "A stunning portfolio website for architectural services, showcasing modern design principles and responsive layouts with Django backend and dynamic content management.",
      technologies: ["Django", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/VidyavathiR/shilpakalamandir_website",
      liveLink: "https://shilpakalamandir-website.onrender.com/",
      icon: <Palette className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-500/10 to-teal-600/10"
    },
    {
      title: "Responsive Landing Page",
      description: "A modern, responsive landing page built with React.js and Tailwind CSS, featuring smooth animations, mobile-first design, and optimized performance.",
      technologies: ["React.js", "Vite", "Tailwind CSS"],
      githubLink: "https://github.com/VidyavathiR/virtualr",
      liveLink: "https://virtualr-rho.vercel.app/",
      icon: <Server className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-500/10 to-cyan-600/10"
    },
    {
      title: "Task Tracker",
      description: "A full-featured task management application with Redux state management, JSON server backend, and Bootstrap styling for efficient project organization.",
      technologies: ["React", "Redux", "JSON Server", "Thunk", "Bootstrap"],
      githubLink: "https://github.com/VidyavathiR/tasktracker_react_redux",
      liveLink: null,
      icon: <Database className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-500/10 to-red-600/10"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/30 to-purple-50/30 dark:from-violet-900/5 dark:to-purple-900/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Sparkles className="w-5 h-5 text-violet-500 animate-pulse" />
            <span className="text-violet-600 dark:text-violet-400 font-medium tracking-wider uppercase text-sm">
              Featured Work
            </span>
            <Sparkles className="w-5 h-5 text-violet-500 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 overflow-hidden hover:bg-white/90 dark:hover:bg-slate-900/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Top Accent */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-slate-100/50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium border border-slate-200/50 dark:border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-xl hover:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-300 font-medium"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;