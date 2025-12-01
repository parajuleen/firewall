import React, { useState } from 'react';
import { Shield, BookOpen, Users, Zap, Heart, Mail, HelpCircle, ChevronDown, ChevronUp, Check, Globe, Smartphone, Keyboard } from 'lucide-react';

export default function About() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Interactive Lessons",
      description: "Learn through engaging, bite-sized content designed for maximum retention and understanding."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hands-on Quizzes",
      description: "Test your knowledge with practical scenarios that mirror real-world challenges."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Accessibility First",
      description: "Built with semantic HTML, ARIA labels, keyboard navigation, and screen reader support."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Fully Responsive",
      description: "Seamless experience across all devices - desktop, tablet, and mobile."
    }
  ];

  const faqs = [
    {
      question: "Do I need an account to use Firewall Academy?",
      answer: "No! You can start learning immediately without an account. Progress will be saved locally in your browser. However, creating a free account allows you to sync your progress across devices and access it from anywhere."
    },
    {
      question: "Is Firewall Academy really free?",
      answer: "Yes, absolutely! All our lessons, quizzes, and features are completely free. We believe quality cybersecurity education should be accessible to everyone."
    },
    {
      question: "What topics are covered?",
      answer: "Our curriculum covers firewall fundamentals, network security principles, traffic filtering, security policies, and advanced firewall techniques. Perfect for beginners and those looking to strengthen their knowledge."
    },
    {
      question: "How long does it take to complete?",
      answer: "Most learners complete the full course in 5-10 hours, depending on their pace. Lessons are designed to be short and digestible, so you can learn at your own speed."
    },
    {
      question: "Can I access the content offline?",
      answer: "Currently, you need an internet connection to access lessons. We're working on offline support for future releases!"
    },
    {
      question: "Is there a certificate upon completion?",
      answer: "We're working on adding certificates! For now, you'll earn achievement badges as you progress through the course."
    }
  ];

  const accessibilityFeatures = [
    "Semantic HTML structure for screen readers",
    "Full keyboard navigation support",
    "ARIA labels and live regions",
    "High contrast color schemes",
    "Focus indicators on all interactive elements",
    "Responsive text sizing"
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50 py-12 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl shadow-2xl mb-4">
            <Shield className="w-11 h-11 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900">
            About <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Firewall Academy</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Empowering learners worldwide with accessible, high-quality cybersecurity education through interactive lessons and hands-on practice.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-8 sm:p-10 md:p-12 border-b border-slate-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <Heart className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We believe that cybersecurity knowledge should be accessible to everyone, regardless of their background or abilities. Firewall Academy teaches essential firewall concepts through short, engaging lessons and practical quizzes, emphasizing accessibility, responsive design, and hands-on learning.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Whether you're a complete beginner or looking to strengthen your network security knowledge, our platform provides a clear path to mastery with features designed for all learners.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built with modern web standards and a commitment to inclusive design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-2xl border-2 border-purple-200 overflow-hidden">
          <div className="p-8 sm:p-10 md:p-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <Keyboard className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Accessibility Commitment</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We're dedicated to making learning accessible for everyone. Our platform includes:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {accessibilityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-purple-200"
                >
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-xl mb-4">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about Firewall Academy
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  aria-expanded={openFaq === index}
                >
                  <h3 className="text-lg font-bold text-slate-900 pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-sky-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top duration-300">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sky-200 mb-1">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-4xl sm:text-5xl font-black">10K+</div>
              <div className="text-sky-100 text-sm sm:text-base">Active Learners</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sky-200 mb-1">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-4xl sm:text-5xl font-black">50+</div>
              <div className="text-sky-100 text-sm sm:text-base">Lessons & Quizzes</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sky-200 mb-1">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-4xl sm:text-5xl font-black">95%</div>
              <div className="text-sky-100 text-sm sm:text-base">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="p-8 sm:p-10 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <Mail className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Get in Touch</h2>
                <p className="text-lg text-slate-600 mb-4">
                  Have questions, feedback, or suggestions? We'd love to hear from you!
                </p>
                <a
                  href="mailto:admin@firewall-academy.local"
                  className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold text-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  admin@firewall-academy.local
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12 border-2 border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of learners mastering firewall fundamentals and network security
          </p>
          <a
            href="/lessons"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold rounded-xl hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <BookOpen className="w-5 h-5" />
            Browse Lessons
          </a>
        </div>
      </div>
    </div>
  );
}