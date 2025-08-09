import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, Clock, MapPin, Users, Trophy, Code, ChevronLeft, 
  Star, Award, Target, Zap, Eye, Lightbulb, Coffee, Rocket,
  Heart, UserPlus, Brain, Search, BookOpen, Timer, Gamepad2,
  MessageCircle, ArrowRight
} from 'lucide-react';
import eventsData from '../data/eventsData.json';

// Icon mapping for dynamic icon rendering
const iconMap = {
  Users, Trophy, Code, Zap, Heart, UserPlus, Brain, Search, 
  BookOpen, Timer, Gamepad2, MessageCircle, Target, Lightbulb, 
  Coffee, Rocket, Star, Award, Eye, ArrowRight
};

const DynamicEventPage = () => {
  const { eventId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredHighlight, setHoveredHighlight] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Find the event by ID
  const event = eventsData.events.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <p className="text-blue-200 mb-8">The event you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const getTrophyColor = (rank) => {
    switch(rank) {
      case 1: return "from-yellow-400 via-yellow-500 to-amber-500";
      case 2: return "from-gray-300 via-gray-400 to-gray-500";
      case 3: return "from-amber-600 via-amber-700 to-orange-600";
      default: return "from-blue-400 to-blue-600";
    }
  };

  const renderIcon = (iconName, size = 24, className = "") => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent size={size} className={className} /> : null;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${event.theme.primary} relative overflow-hidden pt-24`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-500/10 animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-cyan-500/5 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-indigo-500/10 animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${event.theme.gradient}`}></div>
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
              <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${event.theme.accent}/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300`}>
                {event.highlights[0] && renderIcon(event.highlights[0].icon, 16, "text-blue-300 animate-pulse")}
                <span className="text-blue-200 text-sm font-medium">{event.category.replace('-', ' ').toUpperCase()}</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                {event.title}
              </h1>
              <p className="text-xl text-blue-100/90 mb-6 leading-relaxed">
                {event.longDescription}
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-blue-200/80">
                <div className="flex items-center gap-2 hover:text-blue-100 transition-colors group">
                  <Calendar size={16} className="group-hover:rotate-12 transition-transform" />
                  {formatDate(event.date)}
                </div>
                <div className="flex items-center gap-2 hover:text-blue-100 transition-colors group">
                  <Clock size={16} className="group-hover:rotate-12 transition-transform" />
                  {event.duration}
                </div>
                <div className="flex items-center gap-2 hover:text-blue-100 transition-colors group">
                  <MapPin size={16} className="group-hover:bounce transition-transform" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2 hover:text-blue-100 transition-colors group">
                  <Users size={16} className="group-hover:scale-110 transition-transform" />
                  {event.participants}
                </div>
              </div>
              
              {/* Registration Button for Upcoming Events */}
              {event.type === 'upcoming' && event.registrationLink && (
                <div className="mt-6">
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${event.theme.accent} text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105`}
                  >
                    Register Now <ArrowRight size={20} />
                  </a>
                </div>
              )}
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src={event.gallery ? event.gallery[selectedImage] : event.image} 
                  alt={event.title} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-cyan-900/30"></div>
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {event.gallery && event.gallery.length > 1 && (
                <div className="flex gap-3 mt-6 justify-center">
                  {event.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                        selectedImage === index 
                          ? `bg-gradient-to-r ${event.theme.accent} shadow-lg shadow-blue-400/50` 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
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
              ...(event.winners ? [{ id: 'winners', label: 'Winners' }] : []),
              ...(event.gallery ? [{ id: 'gallery', label: 'Gallery' }] : [])
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
                <span className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r ${event.theme.accent} transform origin-left transition-transform duration-300 ${
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
          <div className="space-y-12">
            {/* Highlights */}
            {event.highlights && (
              <div className="grid md:grid-cols-4 gap-6">
                {event.highlights.map((item, index) => (
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
                        {renderIcon(item.icon, 24, "text-white")}
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
            )}

            {/* Dynamic Content Sections */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/20 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                About the Event
              </h2>
              
              {/* Render different sections based on event type */}
              {event.tracks && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Event Tracks</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {event.tracks.map((track, index) => (
                      <div key={index} className="bg-blue-500/10 rounded-xl p-4 border border-blue-400/20">
                        <h4 className="font-semibold text-white">{track.name}</h4>
                        <p className="text-blue-200/80 text-sm">{track.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.topics && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Topics Covered</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {event.topics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-2 text-blue-200/80">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.challenges && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Challenge Categories</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {event.challenges.map((challenge, index) => (
                      <div key={index} className="bg-purple-500/10 rounded-xl p-4 border border-purple-400/20">
                        <h4 className="font-semibold text-white">{challenge.name}</h4>
                        <p className="text-purple-300 text-sm">{challenge.difficulty}</p>
                        <p className="text-blue-200/80 text-sm">{challenge.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.activities && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Event Schedule</h3>
                  <div className="space-y-4">
                    {event.activities.map((activity, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                        <div className="text-emerald-300 font-semibold min-w-[80px]">{activity.time}</div>
                        <div>
                          <h4 className="font-semibold text-white">{activity.name}</h4>
                          <p className="text-blue-200/80 text-sm">{activity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.features && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {event.features.map((feature, index) => (
                      <div key={index} className="bg-orange-500/10 rounded-xl p-4 border border-orange-400/20">
                        <h4 className="font-semibold text-white">{feature.name}</h4>
                        <p className="text-blue-200/80 text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.prizes && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Prizes & Rewards</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {event.prizes.map((prize, index) => (
                      <div key={index} className="flex items-center gap-2 text-blue-200/80">
                        <Trophy size={16} className="text-yellow-400" />
                        {prize}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.judging_criteria && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Judging Criteria</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {event.judging_criteria.map((criteria, index) => (
                      <div key={index} className="flex items-center gap-2 text-blue-200/80">
                        <Star size={16} className="text-cyan-400" />
                        {criteria}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'winners' && event.winners && (
          <div className="transition-all duration-700">
            <h2 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Winning Teams & Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {event.winners.map((winner, index) => (
                <div 
                  key={index} 
                  className="relative bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/30 group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${getTrophyColor(winner.rank)} mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                        <Trophy className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                        {winner.position}
                      </h3>
                    </div>
                    
                    <div className="text-center mb-4">
                      <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                        {winner.team}
                      </h4>
                      {winner.description && (
                        <p className="text-blue-200/80 text-sm">{winner.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && event.gallery && (
          <div className="transition-all duration-700">
            <h2 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Event Gallery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {event.gallery.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30">
                  <img 
                    src={image} 
                    alt={`${event.title} Gallery ${index + 1}`} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h4 className="font-semibold text-lg mb-1">{event.shortTitle}</h4>
                    <p className="text-sm text-blue-100/80">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicEventPage;
