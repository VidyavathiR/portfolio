import React from 'react';
import { GraduationCap, Calendar, MapPin, Sparkles } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "MCA",
      institution: "T John College",
      location: "Bengaluru",
      period: "2021–2023",
      description: "Master of Computer Applications with focus on advanced programming, software development, and modern computing technologies",
      color: "from-violet-500 to-purple-600"
    },
    {
      degree: "BCA",
      institution: "The Oxford College of Science",
      location: "Bengaluru",
      period: "2018–2021",
      description: "Bachelor of Computer Applications with strong foundation in programming, computer science fundamentals, and software engineering",
      color: "from-emerald-500 to-teal-600"
    },
    {
      degree: "PUC",
      institution: "Jain College",
      location: "Bengaluru",
      period: "2016–2018",
      description: "Pre-University Course in Science stream with Mathematics and Computer Science, building analytical and logical thinking skills",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/30 to-purple-50/30 dark:from-violet-900/5 dark:to-purple-900/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Sparkles className="w-5 h-5 text-violet-500 animate-pulse" />
            <span className="text-violet-600 dark:text-violet-400 font-medium tracking-wider uppercase text-sm">
              Academic Background
            </span>
            <Sparkles className="w-5 h-5 text-violet-500 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Academic journey that built the foundation for my technical expertise
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-purple-500"></div>

            {education.map((edu, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Timeline Dot */}
                <div className={`absolute w-6 h-6 rounded-full bg-gradient-to-br ${edu.color} left-5 top-8 transform -translate-x-1/2 border-4 border-white dark:border-slate-800 shadow-lg`}></div>

                <div className="ml-16">
                  <div className="group p-8 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 hover:bg-white/90 dark:hover:bg-slate-900/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-violet-500" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                      {edu.degree}
                    </h3>

                    <div className="flex items-center text-slate-600 dark:text-slate-400 mb-4">
                      <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                      <span className="font-medium">{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;