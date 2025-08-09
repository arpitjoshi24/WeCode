import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Heart, UserPlus, ChevronLeft, Star, Coffee, Gamepad2, BookOpen, MessageCircle, Award, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Induction() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredHighlight, setHoveredHighlight] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const gallery = [
    "/i1.jpg",
    "/i2.jpg",
    "/i3.jpg"
  ];

  const highlights = [
    { icon: Clock, title: "2 Hours", desc: "Comprehensive welcome experience", color: "from-teal-400 to-blue-400" },
    { icon: Heart, title: "100% Satisfaction", desc: "Positive feedback from all", color: "from-indigo-400 to-purple-400" }
  ];





  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-500/10 animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-blue-500/5 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-blue-500/10 animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-teal-600/15 to-blue-600/20"></div>
        <div className={`relative max-w-7xl mx-auto px-6 py-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8 group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-emerald-400/30 hover:border-emerald-300/50 transition-all duration-300">
                <Heart size={16} className="text-pink-400 animate-pulse" />
                <span className="text-emerald-200 text-sm font-medium">Welcome Event</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                Induction Program
              </h1>
              <p className="text-xl text-emerald-100/90 mb-6 leading-relaxed">
                A warm welcome session where new members joined our coding family through engaging orientation, 
                personal introductions, and fun ice-breaking activities that sparked instant connections
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-emerald-200/80">
                <div className="flex items-center gap-2 hover:text-emerald-100 transition-colors group">
                  <Calendar size={16} className="group-hover:rotate-12 transition-transform" />
                  July 4, 2025
                </div>
                <div className="flex items-center gap-2 hover:text-emerald-100 transition-colors group">
                  <Clock size={16} className="group-hover:rotate-12 transition-transform" />
                  2 Hours
                </div>
                <div className="flex items-center gap-2 hover:text-emerald-100 transition-colors group">
                  <MapPin size={16} className="group-hover:bounce transition-transform" />
                  Main Auditorium
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src={gallery[selectedImage]} 
                  alt="Induction Program" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-teal-900/30"></div>
                <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex gap-3 mt-6 justify-center">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                      selectedImage === index 
                        ? 'bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg shadow-emerald-400/50' 
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
      <div className="border-b border-emerald-400/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'gallery', label: 'Gallery' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 transition-all duration-300 relative group ${
                  activeTab === tab.id
                    ? 'border-teal-400 text-teal-300 shadow-lg'
                    : 'border-transparent text-emerald-200/60 hover:text-emerald-100 hover:border-emerald-400/50'
                }`}
              >
                {tab.label}
                <span className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transform origin-left transition-transform duration-300 ${
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
                  className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 backdrop-blur-sm border border-emerald-400/20 hover:border-teal-400/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 group cursor-pointer"
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
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-teal-100 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-emerald-200/70 text-sm group-hover:text-emerald-100/80 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* About */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-emerald-400/20 hover:border-teal-400/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
                Welcome to Our Coding Family!
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-emerald-100/90 text-lg leading-relaxed mb-6">
                  The Induction Program marked the beginning of an exciting journey for new members joining our coding club. 
                  It was a day filled with enthusiasm, learning, and the start of lasting friendships that will shape their 
                  coding careers and personal growth within our vibrant community.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20 hover:border-emerald-300/40 transition-all duration-300 group">
                    <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center gap-2">
                      <UserPlus size={20} className="group-hover:animate-pulse" />
                      Welcome Activities
                    </h3>
                    <ul className="space-y-2 text-emerald-200/80">
                      <li className="flex items-center gap-2 hover:text-emerald-100 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        Personal introduction rounds
                      </li>
                      <li className="flex items-center gap-2 hover:text-emerald-100 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        Club overview presentation
                      </li>
                      <li className="flex items-center gap-2 hover:text-emerald-100 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        Interactive ice-breakers
                      </li>
                     
                    </ul>
                  </div>
                  <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20 hover:border-teal-300/40 transition-all duration-300 group">
                    <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center gap-2">
                      <Coffee size={20} className="group-hover:animate-bounce" />
                      Event Features
                    </h3>
                    <ul className="space-y-2 text-emerald-200/80">
                     
                      <li className="flex items-center gap-2 hover:text-emerald-100 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        Core team presentations
                      </li>
                      <li className="flex items-center gap-2 hover:text-emerald-100 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        Q&A sessions
                      </li>
                      <li className="flex items-center gap-2 hover:text-emerald-100 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        Networking opportunities
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20 hover:border-blue-300/40 transition-all duration-300 group">
                    <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center gap-2">
                      <Target size={20} className="group-hover:animate-pulse" />
                      Key Outcomes
                    </h3>
                    <ul className="space-y-2 text-emerald-200/80">
                      <li className="flex items-center gap-2 hover:text-emerald-100 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        Strong community bonds
                      </li>
                      <li className="flex items-center gap-2 hover:text-emerald-100 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        Clear club roadmap
                      </li>
                      <li className="flex items-center gap-2 hover:text-emerald-100 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        Mentor assignments
                      </li>
                      <li className="flex items-center gap-2 hover:text-emerald-100 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        Future event planning
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl p-6 border border-emerald-400/30">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Star size={20} className="text-yellow-400" />
                    Event Atmosphere
                  </h3>
                  <p className="text-emerald-100/90 leading-relaxed">
                    The atmosphere was warm and welcoming, with excited chatter filling the auditorium as new members 
                    shared their coding journeys and aspirations. From nervous first introductions to confident group 
                    discussions, the transformation was remarkable. By the end of the session, strangers had become 
                    friends, and our coding family had grown stronger with new passionate members.
                  </p>
                </div>
              </div>
            </div>

           
          </div>
        )}
        {activeTab === 'gallery' && (
          <div className={`transition-all duration-700 ${
            activeTab === 'gallery' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
              Induction Memories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/30">
                  <img 
                    src={image} 
                    alt={`Induction Program Gallery ${index + 1}`} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                 
                </div>
              ))}
            </div>

           
          </div>
        )}
      </div>
    </div>
  );
}