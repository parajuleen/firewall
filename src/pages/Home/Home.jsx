import React, { useEffect, useState } from 'react';
import { Shield, Target, BookOpen, Award, ArrowRight, CheckCircle, Lock, Zap, TrendingUp, Users, Clock } from 'lucide-react';

export default function Home() {
  const [summary, setSummary] = useState({ completed: 0, total: 10 });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = { name: 'Student', level: 'Beginner' };
    setUser(userData);

    const progressData = { completedLessons: [1, 2, 3] };
    const completed = progressData.completedLessons ? progressData.completedLessons.length : 0;
    setSummary({ completed, total: 10 });
  }, []);

  const features = [
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: "Interactive Lessons",
      description: "Learn at your own pace with bite-sized, engaging content designed for maximum retention"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Practical Quizzes",
      description: "Test your knowledge with hands-on scenarios that mirror real-world challenges"
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Track Progress",
      description: "Monitor your learning journey and earn achievements as you master new skills"
    }
  ];

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "10K+", label: "Active Learners" },
    { icon: <Clock className="w-5 h-5" />, value: "50+", label: "Hours Content" },
    { icon: <Award className="w-5 h-5" />, value: "95%", label: "Success Rate" }
  ];

  const topics = [
    { 
      name: "Firewall Basics", 
      lessons: 3, 
      completed: 3,
      description: "Master the fundamentals of firewall technology",
      color: "from-green-500 to-emerald-600"
    },
    { 
      name: "Network Security", 
      lessons: 4, 
      completed: 0,
      description: "Learn advanced network protection techniques",
      color: "from-blue-500 to-cyan-600"
    },
    { 
      name: "Advanced Techniques", 
      lessons: 3, 
      completed: 0,
      description: "Deep dive into expert-level security strategies",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="relative w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-24 md:py-28 lg:py-32 xl:py-40">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
            <div className="flex-1 text-center lg:text-left w-full space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium shadow-lg border border-white/30">
                <Zap className="w-4 h-4" />
                <span>Master Network Security Today</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Welcome to
                <span className="block mt-2 bg-gradient-to-r from-sky-200 via-white to-blue-200 bg-clip-text text-transparent">
                  Firewall Academy
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-sky-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Transform into a cybersecurity expert through interactive lessons, practical quizzes, and real-world scenarios. Built with accessibility at its core.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="/lessons" 
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-sky-700 font-bold rounded-xl shadow-2xl hover:shadow-sky-500/50 hover:bg-sky-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  Start Learning 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/about" 
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border-2 border-white/40 hover:bg-white/20 transition-all duration-300 shadow-lg"
                >
                  Learn More
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl mx-auto lg:mx-0">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-white/80 mb-1">
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-sky-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center w-full lg:w-auto">
              <div className="relative">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Shield className="w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 text-white drop-shadow-2xl" />
                  
                  <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    <Lock className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-xl transform -rotate-12">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 rounded-3xl blur-3xl opacity-30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full px-6 sm:px-8 lg:px-12 xl:px-16 -mt-20 sm:-mt-24 z-20">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-8 sm:p-10 md:p-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-sky-600" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Your Learning Journey</h2>
                </div>
                <p className="text-slate-600 text-lg">Keep up the momentum! You're making excellent progress toward mastery.</p>
              </div>
              
              <div className="flex flex-col items-start lg:items-end space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                    {Math.round((summary.completed / summary.total) * 100)}
                  </span>
                  <span className="text-3xl font-bold text-slate-400">%</span>
                </div>
                <div className="text-base text-slate-600 font-medium">
                  {summary.completed} of {summary.total} lessons completed
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="relative w-full bg-slate-200 rounded-full h-4 overflow-hidden shadow-inner">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-full shadow-lg transition-all duration-700 ease-out"
                  style={{ width: `${(summary.completed / summary.total) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-24 sm:py-28 md:py-32">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
            Why Choose <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Firewall Academy</span>?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive curriculum combines cutting-edge technology with proven teaching methods
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-10 shadow-lg border border-slate-200 hover:shadow-2xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base">{feature.description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-slate-100 to-sky-50 py-24 sm:py-28 md:py-32">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
              Structured Learning Path
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Progress through carefully designed modules that build your expertise step by step
            </p>
          </div>
          
          <div className="space-y-6">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 sm:p-10 shadow-lg border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${topic.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{topic.name}</h3>
                        <p className="text-slate-600 text-base mt-1">{topic.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500 ml-16">
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        {topic.lessons} lessons
                      </span>
                      {topic.completed > 0 && (
                        <span className="flex items-center gap-2 text-green-600 font-semibold">
                          <CheckCircle className="w-4 h-4" />
                          {topic.completed}/{topic.lessons} completed
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 w-full lg:w-auto">
                    {topic.completed > 0 && (
                      <div className="flex-1 lg:flex-initial">
                        <div className="w-full lg:w-32 bg-slate-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${topic.color} rounded-full transition-all duration-500`}
                            style={{ width: `${(topic.completed / topic.lessons) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    <a 
                      href="/lessons" 
                      className="group/btn px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold rounded-xl hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                    >
                      {topic.completed > 0 ? 'Continue' : 'Start Now'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <footer className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-extrabold">Firewall Academy</span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Empowering the next generation of cybersecurity professionals through accessible, engaging, and hands-on learning experiences.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3 text-slate-300">
                <li><a href="/lessons" className="hover:text-sky-400 transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Lessons
                </a></li>
                <li><a href="/about" className="hover:text-sky-400 transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </a></li>
                <li><a href="/contact" className="hover:text-sky-400 transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-xl mb-6">Resources</h3>
              <ul className="space-y-3 text-slate-300">
                <li><a href="/help" className="hover:text-sky-400 transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Help Center
                </a></li>
                <li><a href="/faq" className="hover:text-sky-400 transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  FAQ
                </a></li>
                <li><a href="/privacy" className="hover:text-sky-400 transition-colors inline-flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Privacy Policy
                </a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              &copy; 2024 Firewall Academy. Built with accessibility and excellence in mind.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}