import React from 'react';
import { MapPin, Calendar, ExternalLink, Award, Sparkles } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Cognifyz Technologies",
      location: "Remote",
      period: "Apr 2025 – May 2025",
      certificationLink: "https://drive.google.com/file/d/18pLYvk31ZKIHSxjV8PBxgYXlWQxV8c8q/view",
      description: "Developed responsive web applications using modern technologies and best practices, focusing on user experience and performance optimization.",
      skills: ["React.js", "JavaScript", "CSS", "HTML"],
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "Python Full Stack Intern",
      company: "LinuxWorld Informatics Pvt Ltd",
      location: "Remote",
      period: "Jul 2023 – Sep 2023",
      certificationLink: "https://drive.google.com/file/d/1UpRjNTZW1-LzssSFneaI_TQWPaCO2o5K/view",
      description: "Built full-stack applications using Python frameworks and gained hands-on experience with Django and Flask, implementing scalable backend solutions.",
      skills: ["Python", "Django", "Flask", "Database Management"],
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-900/10 dark:to-purple-900/10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Sparkles className="w-5 h-5 text-violet-500 animate-pulse" />
            <span className="text-violet-600 dark:text-violet-400 font-medium tracking-wider uppercase text-sm">
              Internship Experience
            </span>
            <Sparkles className="w-5 h-5 text-violet-500 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Hands-on experience in full-stack development with leading tech companies
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-purple-500 transform md:-translate-x-1/2"></div>

            {experiences.map((experience, index) => (
              <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                {/* Timeline Dot */}
                <div className={`absolute w-6 h-6 rounded-full bg-gradient-to-br ${experience.color} left-5 md:left-1/2 top-8 transform md:-translate-x-1/2 border-4 border-white dark:border-slate-900 shadow-lg`}></div>

                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="group p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 lg:mb-0">
                        {experience.title}
                      </h3>
                      <a
                        href={experience.certificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium group-hover:shadow-lg"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        Certificate
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-center text-slate-600 dark:text-slate-400 mb-6 space-y-2 lg:space-y-0 lg:space-x-6">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-violet-500" />
                        <span className="font-medium">{experience.company}</span>
                        <span className="mx-2">•</span>
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 text-violet-700 dark:text-violet-300 rounded-xl text-sm font-medium border border-violet-200 dark:border-violet-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default Experience;