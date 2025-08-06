

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Trophy, Code, ChevronLeft, Star, Award, Target, Zap, Eye } from 'lucide-react';

export default function Codethon() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredHighlight, setHoveredHighlight] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const gallery = [
    "/e2.JPG",
    "/e1.JPG",
    "/e3.jpg"
  ];

  const highlights = [
    { icon: Users, title: "150+ Participants", desc: "Students from various departments", color: "from-blue-400 to-cyan-400" },
    { icon: Trophy, title: "50 Students", desc: "Competed in the final rounds", color: "from-cyan-400 to-teal-400" },
    { icon: Code, title: "2 Rounds", desc: "Aptitude and Coding", color: "from-teal-400 to-blue-500" },
    { icon: Zap, title: "High Intensity", desc: "Fast-paced coding challenges", color: "from-blue-500 to-indigo-400" }
  ];

  const winners = [
    { position: "1st Place", team: "Kartikey Wariyal", members: ["B.Tech CSE"], rank: 1 },
    { position: "2nd Place", team: "Ashish Gupta", members: ["BCA"], rank: 2},
    { position: "3rd Place", team: "Himanshu Nainwal", members: ["B.Tech CSE"], rank: 3}
  ];

  const getTrophyColor = (rank) => {
    switch(rank) {
      case 1: return "from-yellow-400 via-yellow-500 to-amber-500";
      case 2: return "from-gray-300 via-gray-400 to-gray-500";
      case 3: return "from-amber-600 via-amber-700 to-orange-600";
      default: return "from-blue-400 to-blue-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-500/10 animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-cyan-500/5 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-indigo-500/10 animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/15 to-indigo-600/20"></div>
        <div className={`relative max-w-7xl mx-auto px-6 py-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
         
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300">
                <Code size={16} className="text-blue-300 animate-pulse" />
                <span className="text-blue-200 text-sm font-medium">Coding Challenge</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Codethon – Hack the Spring
              </h1>
              <p className="text-xl text-blue-100/90 mb-6 leading-relaxed">
                A high-intensity coding sprint where brilliant minds tackled algorithmic challenges under pressure
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-blue-200/80">
                <div className="flex items-center gap-2 hover:text-blue-100 transition-colors group">
                  <Calendar size={16} className="group-hover:rotate-12 transition-transform" />
                  April 22, 2025
                </div>
                <div className="flex items-center gap-2 hover:text-blue-100 transition-colors group">
                  <Clock size={16} className="group-hover:rotate-12 transition-transform" />
                  9:00 AM - 6:00 PM
                </div>
                <div className="flex items-center gap-2 hover:text-blue-100 transition-colors group">
                  <MapPin size={16} className="group-hover:bounce transition-transform" />
                  Computer Lab, Block A
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src={gallery[selectedImage]} 
                  alt="Codethon Event" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-cyan-900/30"></div>
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex gap-3 mt-6 justify-center">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                      selectedImage === index 
                        ? 'bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg shadow-blue-400/50' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-blue-400/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'winners', label: 'Winners' },
              { id: 'gallery', label: 'Gallery' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 transition-all duration-300 relative group ${
                  activeTab === tab.id
                    ? 'border-cyan-400 text-cyan-300 shadow-lg'
                    : 'border-transparent text-blue-200/60 hover:text-blue-100 hover:border-blue-400/50'
                }`}
              >
                {tab.label}
                <span className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform origin-left transition-transform duration-300 ${
                  activeTab === tab.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                }`}></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'overview' && (
          <div className={`space-y-12 transition-all duration-700 ${
            activeTab === 'overview' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Highlights */}
            <div className="grid md:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-pointer"
                  onMouseEnter={() => setHoveredHighlight(index)}
                  onMouseLeave={() => setHoveredHighlight(null)}
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} mb-4 transition-transform duration-300 ${
                      hoveredHighlight === index ? 'scale-110 rotate-12' : ''
                    }`}>
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-100 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-blue-200/70 text-sm group-hover:text-blue-100/80 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* About */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/20 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                About the Event
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-blue-100/90 text-lg leading-relaxed mb-6">
                  The Codethon was an adrenaline-pumping coding challenge conducted as part of Hack the Spring. The event saw enthusiastic participation from students across various departments, aiming to prove their logical and problem-solving prowess.
                  <br /><br />
                  The competition was divided into two rounds. The first was an Aptitude Elimination Round, designed to test participants' analytical thinking and reasoning skills. Based on their performance, 50 students were shortlisted for the second and final round — the Coding Round, where participants tackled algorithmic problems under timed conditions.
                  <br /><br />
                  With rising difficulty and high pressure, the Codethon truly brought out the best of campus coding talent.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                      <Star size={20} />
                      What Made It Special
                    </h3>
                    <ul className="space-y-3 text-blue-200/80">
                      <li className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        Progressive difficulty levels
                      </li>
                      <li className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        Multiple programming languages supported
                      </li>
                    </ul>
                  </div>
                  <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-400/20">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                      <Target size={20} />
                      Skills Tested
                    </h3>
                    <ul className="space-y-3 text-blue-200/80">
                      {[
                        'Data Structures & Algorithms',
                        'Dynamic Programming', 
                        'Graph Theory',
                        'String Manipulation',
                        'Mathematical Problem Solving'
                      ].map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2 hover:text-blue-100 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'winners' && (
          <div className={`transition-all duration-700 ${
            activeTab === 'winners' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Prize Winners
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {winners.map((winner, index) => (
                <div 
                  key={index} 
                  className="relative bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-6 backdrop-blur-sm border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/30 group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center mb-4">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${getTrophyColor(winner.rank)} mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                      <Trophy className="text-white" size={28} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                      #{winner.rank}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                      {winner.position}
                    </h3>
                  </div>
                  <div className="relative z-10 text-center">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                      {winner.team}
                    </h4>
                    <div className="space-y-1">
                      {winner.members.map((member, idx) => (
                        <p key={idx} className="text-blue-200/70 text-sm group-hover:text-blue-100/90 transition-colors">
                          {member}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className={`transition-all duration-700 ${
            activeTab === 'gallery' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Event Gallery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30">
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                 
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}