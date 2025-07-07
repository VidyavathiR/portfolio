import React from 'react';
import { Code, Database, Server, Palette, Terminal, Users, Sparkles, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript"],
      color: "violet",
      description: "Core programming languages for full-stack development"
    },
    {
      title: "Frontend Development",
      icon: <Palette className="w-6 h-6" />,
      skills: ["HTML", "CSS", "React.js", "Redux", "Tailwind CSS", "Bootstrap"],
      color: "blue",
      description: "Modern frontend technologies and frameworks"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: ["Django", "Flask", "Node.js", "Express.js"],
      color: "emerald",
      description: "Server-side development and API design"
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "MySQL"],
      color: "orange",
      description: "Database design and management systems"
    },
    {
      title: "Development Tools",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VSCode"],
      color: "pink",
      description: "Essential development and collaboration tools"
    },
    {
      title: "Development Practices",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Agile Development", "Clean Code", "Responsive Design"],
      color: "teal",
      description: "Modern development methodologies and practices"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      violet: {
        bg: "bg-violet-100 dark:bg-violet-900/20",
        text: "text-violet-600 dark:text-violet-400",
        border: "border-violet-200 dark:border-violet-700/50",
        hover: "hover:border-violet-300 dark:hover:border-violet-600"
      },
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-700/50",
        hover: "hover:border-blue-300 dark:hover:border-blue-600"
      },
      emerald: {
        bg: "bg-emerald-100 dark:bg-emerald-900/20",
        text: "text-emerald-600 dark:text-emerald-400",
        border: "border-emerald-200 dark:border-emerald-700/50",
        hover: "hover:border-emerald-300 dark:hover:border-emerald-600"
      },
      orange: {
        bg: "bg-orange-100 dark:bg-orange-900/20",
        text: "text-orange-600 dark:text-orange-400",
        border: "border-orange-200 dark:border-orange-700/50",
        hover: "hover:border-orange-300 dark:hover:border-orange-600"
      },
      pink: {
        bg: "bg-pink-100 dark:bg-pink-900/20",
        text: "text-pink-600 dark:text-pink-400",
        border: "border-pink-200 dark:border-pink-700/50",
        hover: "hover:border-pink-300 dark:hover:border-pink-600"
      },
      teal: {
        bg: "bg-teal-100 dark:bg-teal-900/20",
        text: "text-teal-600 dark:text-teal-400",
        border: "border-teal-200 dark:border-teal-700/50",
        hover: "hover:border-teal-300 dark:hover:border-teal-600"
      }
    };
    return colors[color as keyof typeof colors] || colors.violet;
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white dark:bg-slate-900" />
        <div 
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(139, 92, 246, 0.1) 25%, transparent 25%), 
                             linear-gradient(-45deg, rgba(139, 92, 246, 0.1) 25%, transparent 25%), 
                             linear-gradient(45deg, transparent 75%, rgba(139, 92, 246, 0.1) 75%), 
                             linear-gradient(-45deg, transparent 75%, rgba(139, 92, 246, 0.1) 75%)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
            <span className="text-violet-600 dark:text-violet-400 font-medium tracking-wider uppercase text-sm font-mono">
              Technical Skills
            </span>
            <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-violet-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`group p-6 bg-white dark:bg-slate-800 rounded-2xl border ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-sm`}
              >
                <div className={`w-14 h-14 ${colorClasses.bg} rounded-xl flex items-center justify-center ${colorClasses.text} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                  {category.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 group-hover:bg-slate-100 dark:group-hover:bg-slate-600 transition-all duration-300"
                    >
                      <div className={`w-2 h-2 rounded-full ${colorClasses.text.replace('text-', 'bg-')} mr-3 flex-shrink-0`} />
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Stack Summary */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center space-x-3">
              <Code className="w-6 h-6 text-violet-500" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">Full Stack</span>
            </div>
            <div className="w-px h-8 bg-slate-300 dark:bg-slate-600" />
            <div className="flex items-center space-x-3">
              <Server className="w-6 h-6 text-blue-500" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">MERN Stack</span>
            </div>
            <div className="w-px h-8 bg-slate-300 dark:bg-slate-600" />
            <div className="flex items-center space-x-3">
              <Database className="w-6 h-6 text-emerald-500" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">Python Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;