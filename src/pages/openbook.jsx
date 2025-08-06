import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Brain, Search, ChevronLeft, Trophy, BookOpen, Lightbulb, Target, Code, Timer } from 'lucide-react';

export default function OpenBook() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedChallenge, setSelectedChallenge] = useState(0);

  const challenges = [
    {
      title: "Algorithm Optimization",
      difficulty: "Hard",
      description: "Optimize a sorting algorithm to handle massive datasets efficiently",
      timeLimit: "45 mins",
      resources: ["Algorithm textbooks", "Online references", "Code examples"],
      category: "Data Structures",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "System Design Problem",
      difficulty: "Medium", 
      description: "Design a scalable chat application architecture",
      timeLimit: "60 mins",
      resources: ["System design guides", "Architecture patterns", "Case studies"],
      category: "System Design",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Database Query Challenge",
      difficulty: "Medium",
      description: "Write complex SQL queries for an e-commerce database",
      timeLimit: "30 mins", 
      resources: ["SQL documentation", "Database schemas", "Query examples"],
      category: "Database",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Logic Puzzle Solver",
      difficulty: "Hard",
      description: "Create an AI solution for solving Sudoku puzzles",
      timeLimit: "90 mins",
      resources: ["AI/ML resources", "Logic programming", "Algorithm papers"],
      category: "Artificial Intelligence",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Aditya Sharma", score: 285, challenges: 4, time: "3h 15m", badge: "🏆" },
    { rank: 2, name: "Meera Patel", score: 270, challenges: 4, time: "3h 28m", badge: "🥈" },
    { rank: 3, name: "Rohan Singh", score: 255, challenges: 3, time: "2h 45m", badge: "🥉" },
    { rank: 4, name: "Kavya Reddy", score: 240, challenges: 3, time: "2h 52m", badge: "⭐" },
    { rank: 5, name: "Arjun Kumar", score: 225, challenges: 3, time: "3h 05m", badge: "⭐" }
  ];

  const stats = [
    { icon: Users, number: "120", label: "Participants", color: "from-blue-500 to-cyan-500" },
    { icon: Brain, number: "8", label: "Challenge Sets", color: "from-purple-500 to-pink-500" },
    { icon: Timer, number: "4", label: "Hours", color: "from-green-500 to-emerald-500" },
    { icon: Trophy, number: "₹25K", label: "Prize Pool", color: "from-yellow-500 to-orange-500" }
  ];

  const keyFeatures = [
    {
      icon: BookOpen,
      title: "Open Book Format",
      description: "Use any resource - books, internet, documentation",
      color: "text-blue-400"
    },
    {
      icon: Brain,
      title: "Logic Over Memory",
      description: "Focus on problem-solving skills, not memorization",
      color: "text-purple-400"
    },
    {
      icon: Search,
      title: "Research Skills",
      description: "Learn to find and apply information effectively",
      color: "text-green-400"
    },
    {
      icon: Target,
      title: "Real-world Problems",
      description: "Tackle challenges similar to industry scenarios",
      color: "text-red-400"
    }
  ];

  const timeline = [
    { time: "11:00 AM", event: "Registration & Setup", status: "completed", description: "Participant check-in and system setup" },
    { time: "11:30 AM", event: "Rules Briefing", status: "completed", description: "Challenge format and evaluation criteria" },
    { time: "12:00 PM", event: "Challenge Release", status: "completed", description: "Problem statements made available" },
    { time: "12:15 PM", event: "Coding Begins", status: "completed", description: "Participants start working on solutions" },
    { time: "02:00 PM", event: "Mid-challenge Check", status: "completed", description: "Progress evaluation and guidance" },
    { time: "03:15 PM", event: "Final Submissions", status: "completed", description: "Code submission deadline" },
    { time: "04:00 PM", event: "Results & Awards", status: "completed", description: "Winner announcements and prizes" }
  ];

  const judging = [
    { criteria: "Code Quality", weight: "30%", description: "Clean, readable, and well-structured code" },
    { criteria: "Problem Solving", weight: "25%", description: "Logical approach and algorithm efficiency" },
    { criteria: "Research Skills", weight: "20%", description: "Effective use of available resources" },
    { criteria: "Innovation", weight: "15%", description: "Creative and unique solution approaches" },
    { criteria: "Completeness", weight: "10%", description: "Functional solution meeting requirements" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-yellow-600/20"></div>
          <div className="absolute top-10 left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <button className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ChevronLeft size={20} />
            Back to Events
          </button>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm">
              <BookOpen size={20} className="text-orange-400" />
              <span className="text-white font-medium">Open Book Challenge</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Think, Search & Solve
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              A revolutionary coding challenge that tests logic over memory, encouraging participants 
              to research, think critically, and solve real-world problems
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                April 18, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                11:00 AM - 4:00 PM
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                Computer Lab, Block B
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/15 transition-all">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon size={28} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-white/10 sticky top-0 bg-slate-900/80 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'challenges', label: 'Challenges' },
              { id: 'leaderboard', label: 'Leaderboard' },
              { id: 'timeline', label: 'Event Timeline' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 transition-colors font-medium ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-400'
                    : 'border-transparent text-white/60 hover:text-white/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Key Features */}
            <div className="grid md:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 text-center group hover:bg-white/10 transition-all">
                  <feature.icon size={40} className={`${feature.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* About & Concept */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6">The Open Book Revolution</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    Traditional coding challenges often test memory rather than problem-solving ability. 
                    Our Open Book Challenge revolutionizes this approach by encouraging participants to use 
                    any available resources to tackle complex, real-world problems.
                  </p>
                  <p>
                    This format mirrors the actual software development process where developers constantly 
                    research, reference documentation, and collaborate to find optimal solutions. It's not about 
                    what you know by heart, but how well you can learn, adapt, and apply knowledge.
                  </p>
                  <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-3">Why Open Book?</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></div>
                        <span>Reflects real-world development scenarios</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0"></div>
                        <span>Encourages continuous learning mindset</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
                        <span>Tests critical thinking over memorization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                        <span>Builds research and information processing skills</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Judging Criteria */}
                <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Judging Criteria</h3>
                  <div className="space-y-4">
                    {judging.map((criteria, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">{criteria.criteria}</h4>
                          <p className="text-white/70 text-sm">{criteria.description}</p>
                        </div>
                        <div className="text-orange-400 font-bold text-lg">{criteria.weight}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event Impact */}
                <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Event Impact</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-orange-400 mb-1">95%</div>
                      <div className="text-white/70 text-sm">Completion Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400 mb-1">4.8/5</div>
                      <div className="text-white/70 text-sm">Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-400 mb-1">120</div>
                      <div className="text-white/70 text-sm">Participants</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400 mb-1">8</div>
                      <div className="text-white/70 text-sm">Challenges</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'challenges' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Challenge Categories</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{challenge.title}</h3>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          challenge.difficulty === 'Hard' ? 'bg-red-500/20 text-red-400' :
                          challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {challenge.difficulty}
                        </span>
                        <span className="text-orange-400 text-sm font-medium">{challenge.timeLimit}</span>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${challenge.color}`}></div>
                  </div>
                  
                  <p className="text-white/80 mb-4">{challenge.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Available Resources:</h4>
                    <div className="flex flex-wrap gap-2">
                      {challenge.resources.map((resource, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-orange-400 text-sm font-medium">{challenge.category}</span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white text-sm font-medium transition-colors">
                      <Code size={16} />
                      View Solution
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge Tips */}
            <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Tips for Success</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4 flex items-center justify-center">
                    <Search size={24} className="text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Research Efficiently</h4>
                  <p className="text-white/70 text-sm">Use targeted searches and reliable sources. Know where to find quality information quickly.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 flex items-center justify-center">
                    <Brain size={24} className="text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Think Before Coding</h4>
                  <p className="text-white/70 text-sm">Understand the problem thoroughly, plan your approach, then implement the solution.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-4 flex items-center justify-center">
                    <Target size={24} className="text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Focus on Quality</h4>
                  <p className="text-white/70 text-sm">Clean, readable code with good logic beats complex solutions that are hard to understand.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Final Leaderboard</h2>
            <div className="max-w-4xl mx-auto">
              {/* Top 3 Podium */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {leaderboard.slice(0, 3).map((participant, index) => (
                  <div key={index} className={`bg-gradient-to-b from-white/15 to-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 text-center ${
                    index === 0 ? 'md:order-2 transform md:scale-110' : 
                    index === 1 ? 'md:order-1' : 'md:order-3'
                  }`}>
                    <div className="text-4xl mb-4">{participant.badge}</div>
                    <div className="text-2xl font-bold text-white mb-2">#{participant.rank}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{participant.name}</h3>
                    <div className="text-3xl font-bold text-orange-400 mb-4">{participant.score}</div>
                    <div className="space-y-2 text-sm text-white/70">
                      <div>Challenges: {participant.challenges}/4</div>
                      <div>Time: {participant.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Full Leaderboard Table */}
              <div className="bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden">
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white">Complete Rankings</h3>
                </div>
                <div className="divide-y divide-white/10">
                  {leaderboard.map((participant, index) => (
                    <div key={index} className="flex items-center p-4 hover:bg-white/5 transition-colors">
                      <div className="w-12 text-center">
                        <span className="text-2xl">{participant.badge}</span>
                      </div>
                      <div className="w-16 text-center">
                        <span className="text-white font-bold">#{participant.rank}</span>
                      </div>
                      <div className="flex-1 px-4">
                        <h4 className="text-white font-semibold">{participant.name}</h4>
                      </div>
                      <div className="w-24 text-center">
                        <span className="text-orange-400 font-bold text-lg">{participant.score}</span>
                      </div>
                      <div className="w-20 text-center text-white/70 text-sm">
                        {participant.challenges}/4
                      </div>
                      <div className="w-24 text-center text-white/70 text-sm">
                        {participant.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scoring System */}
              <div className="mt-8 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Scoring System</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Points Breakdown</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li className="flex justify-between">
                        <span>Correct Solution:</span>
                        <span className="text-orange-400 font-medium">50 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Code Quality:</span>
                        <span className="text-orange-400 font-medium">20 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Innovation:</span>
                        <span className="text-orange-400 font-medium">15 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Time Bonus:</span>
                        <span className="text-orange-400 font-medium">10 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Documentation:</span>
                        <span className="text-orange-400 font-medium">5 points</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Difficulty Multipliers</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li className="flex justify-between">
                        <span>Easy Problems:</span>
                        <span className="text-green-400 font-medium">1.0x</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Medium Problems:</span>
                        <span className="text-yellow-400 font-medium">1.5x</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Hard Problems:</span>
                        <span className="text-red-400 font-medium">2.0x</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'timeline' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Event Timeline</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-yellow-500"></div>
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex items-start gap-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 flex-shrink-0">
                        {item.time.split(' ')[0]}
                      </div>
                      <div className="flex-1 bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-semibold text-lg">{item.event}</h3>
                          <span className="text-orange-400 text-sm font-medium">{item.time}</span>
                        </div>
                        <p className="text-white/70">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Event Statistics */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">4:15</div>
                <div className="text-white/70">Event Duration</div>
                <div className="text-white/50 text-sm mt-1">Including setup & awards</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">3:15</div>
                <div className="text-white/70">Actual Challenge Time</div>
                <div className="text-white/50 text-sm mt-1">Problem solving duration</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-white/70">Completion Rate</div>
                <div className="text-white/50 text-sm mt-1">Participants who submitted</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}