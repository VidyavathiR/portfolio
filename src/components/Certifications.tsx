import React from 'react';
import { Award, ExternalLink, Calendar, Sparkles } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Web Development Internship",
      issuer: "Cognifyz Technologies",
      date: "2025",
      link: "https://drive.google.com/file/d/18pLYvk31ZKIHSxjV8PBxgYXlWQxV8c8q/view",
      description: "Completed comprehensive web development internship program focusing on modern frameworks and best practices",
      color: "from-violet-500 to-purple-600",
      bgColor: "from-violet-500/10 to-purple-600/10"
    },
    {
      title: "Research-Based Python Full Stack Internship",
      issuer: "LinuxWorld Informatics Pvt Ltd",
      date: "2023",
      link: "https://drive.google.com/file/d/1UpRjNTZW1-LzssSFneaI_TQWPaCO2o5K/view",
      description: "Advanced Python full-stack development with research focus on scalable applications and modern architectures",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-500/10 to-teal-600/10"
    },
    {
      title: "Python Enablement Training",
      issuer: "Training Institution",
      date: "2023",
      link: "https://drive.google.com/file/d/1Nnc522Of06yoBVk7PmAQBg8RP6F13PqR/view",
      description: "Comprehensive Python programming training and certification covering advanced concepts and practical applications",
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-500/10 to-cyan-600/10"
    },
    {
      title: "AWS Cloud + AI Workshop",
      issuer: "AWS",
      date: "2023",
      link: "https://drive.google.com/file/d/1Fi4-j45vw3di4OQo5SxUAgha8swnNOtw/view",
      description: "Cloud computing and AI services workshop certification focusing on modern cloud infrastructure and AI integration",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-500/10 to-red-600/10"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-900/10 dark:to-purple-900/10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Sparkles className="w-5 h-5 text-violet-500 animate-pulse" />
            <span className="text-violet-600 dark:text-violet-400 font-medium tracking-wider uppercase text-sm">
              Professional Achievements
            </span>
            <Sparkles className="w-5 h-5 text-violet-500 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Award className="w-8 h-8" />
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors p-2 rounded-xl hover:bg-violet-100 dark:hover:bg-violet-900/30"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  {cert.title}
                </h3>

                <div className="flex items-center text-slate-600 dark:text-slate-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2 text-violet-500" />
                  <span className="font-medium">{cert.issuer}</span>
                  <span className="mx-2">•</span>
                  <span>{cert.date}</span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
                  {cert.description}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${cert.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium`}
                >
                  <Award className="w-4 h-4 mr-2" />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;