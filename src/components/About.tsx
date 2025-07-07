import React from 'react';
import { Code, Zap, Users, Target, Sparkles, Brain, Rocket, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions with best practices"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborative agile development and communication"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Analytical approach to complex challenges"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation",
      description: "Building creative solutions that make a difference"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-800" />
        <div 
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              <span className="text-violet-600 dark:text-violet-400 font-medium tracking-wider uppercase text-sm font-mono">
                Get to know me
              </span>
              <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-violet-500 mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-violet-500 to-purple-500 rounded-full" />
                  <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed pl-8">
                    I'm an MCA graduate with hands-on experience in full-stack web development using technologies like{' '}
                    <span className="text-violet-600 dark:text-violet-400 font-semibold bg-violet-100 dark:bg-violet-900/30 px-2 py-1 rounded">Python</span>,{' '}
                    <span className="text-blue-600 dark:text-blue-400 font-semibold bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">HTML</span>,{' '}
                    <span className="text-purple-600 dark:text-purple-400 font-semibold bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">CSS</span>, and{' '}
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded">JavaScript</span>. 
                    I specialize in building responsive and scalable applications using the MERN stack, as well as Django and Flask.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full" />
                  <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed pl-8">
                    I'm passionate about writing clean, efficient code, optimizing performance, and following Agile development practices. 
                    I enjoy turning complex problems into simple, elegant solutions that not only work — but make a real difference.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="px-6 py-3 bg-white dark:bg-slate-700 text-violet-700 dark:text-violet-300 rounded-2xl text-sm font-semibold border border-violet-200 dark:border-violet-700/50 shadow-sm">
                  Full Stack Developer
                </span>
                <span className="px-6 py-3 bg-white dark:bg-slate-700 text-purple-700 dark:text-purple-300 rounded-2xl text-sm font-semibold border border-purple-200 dark:border-purple-700/50 shadow-sm">
                  MCA Graduate
                </span>
                <span className="px-6 py-3 bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 rounded-2xl text-sm font-semibold border border-indigo-200 dark:border-indigo-700/50 shadow-sm">
                  MERN Stack
                </span>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white dark:bg-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-sm">
                <Heart className="w-8 h-8 text-red-500" />
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">Passion for Technology</h4>
                  <p className="text-slate-600 dark:text-slate-300">Driven by curiosity and the desire to create meaningful digital experiences</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white dark:bg-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600 hover:border-violet-300 dark:hover:border-violet-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-xl flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-2 text-lg">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white dark:bg-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-sm">
              <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">MCA</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Graduate</div>
            </div>
            <div className="text-center p-8 bg-white dark:bg-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-sm">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-8 bg-white dark:bg-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">4+</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;