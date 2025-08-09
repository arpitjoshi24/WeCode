import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Download, Upload } from 'lucide-react';
import useEvents from '../hooks/useEvents';
import adminAuth from '../data/adminAuth.json';

async function sha256(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const EventManager = () => {
  const { allEvents } = useEvents();
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('wecode_admin_auth');
    if (auth === 'true') setIsAuthenticated(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const hash = await sha256(password);
    if (hash === adminAuth.passwordHash) {
      setIsAuthenticated(true);
      localStorage.setItem('wecode_admin_auth', 'true');
      setError('');
    } else {
      setError('Incorrect password.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('wecode_admin_auth');
    setPassword('');
  };

  // Generate JSON for new event
  const generateEventTemplate = () => {
    const template = {
      id: `event-${Date.now()}`,
      title: "New Event Title",
      shortTitle: "Short Title",
      description: "Brief description of the event",
      longDescription: "Detailed description of what the event is about",
      date: new Date().toISOString(),
      endDate: new Date(Date.now() + 3600000).toISOString(), // 1 hour later
      type: "upcoming", // or "past"
      category: "workshop", // workshop, hackathon, coding-challenge, orientation
      location: "Event Location",
      duration: "2 Hours",
      participants: "50+ Participants",
      image: "./event-image.jpg",
      gallery: ["./image1.jpg", "./image2.jpg"],
      highlights: [
        {
          icon: "Code",
          title: "Highlight Title",
          desc: "Highlight description",
          color: "from-blue-400 to-cyan-400"
        }
      ],
      winners: [
        {
          position: "1st Place",
          team: "Team Name",
          members: ["Member 1", "Member 2"],
          rank: 1,
          description: "Achievement description"
        }
      ],
      tracks: [
        {
          name: "Track Name",
          description: "Track description"
        }
      ],
      topics: [
        "Topic 1",
        "Topic 2"
      ],
      activities: [
        {
          name: "Activity Name",
          time: "10:00 AM",
          description: "Activity description"
        }
      ],
      features: [
        {
          name: "Feature Name",
          description: "Feature description"
        }
      ],
      prizes: [
        "Prize 1",
        "Prize 2"
      ],
      judging_criteria: [
        "Criteria 1",
        "Criteria 2"
      ],
      registrationLink: "https://forms.google.com/...",
      theme: {
        primary: "from-slate-900 via-blue-900 to-indigo-900",
        accent: "from-blue-400 to-cyan-400",
        gradient: "from-blue-600/20 via-cyan-600/15 to-indigo-600/20"
      }
    };
    return template;
  };

  const downloadJSON = () => {
    const dataStr = JSON.stringify({ events: allEvents }, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'eventsData.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const downloadTemplate = () => {
    const template = generateEventTemplate();
    const dataStr = JSON.stringify(template, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'new-event-template.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center pt-24">
        <form onSubmit={handleLogin} className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/20 w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/15 placeholder-white/70 focus:outline-none mb-4 text-white"
            required
          />
          {error && <div className="text-red-400 text-sm mb-2 text-center">{error}</div>}
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 px-6 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 flex flex-col items-center justify-center gap-2">
          <h1 className="text-4xl font-bold text-white mb-4">Event Manager</h1>
          <p className="text-blue-200 text-lg">Manage WeCode events easily</p>
          <button onClick={handleLogout} className="mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm">Logout</button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button
            onClick={downloadTemplate}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors"
          >
            <Download size={20} />
            Download Template
          </button>
          <button
            onClick={downloadJSON}
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors"
          >
            <Download size={20} />
            Download All Events
          </button>
        </div>

        {/* Instructions */}
        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">How to Add New Events</h2>
          <div className="space-y-4 text-blue-100">
            <div className="flex gap-4">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-semibold">Download the template</p>
                <p className="text-blue-200 text-sm">Click "Download Template" to get a JSON template with all required fields</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-semibold">Fill in your event details</p>
                <p className="text-blue-200 text-sm">Edit the JSON file with your event information, images, dates, etc.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
              <div>
                <p className="font-semibold">Add to eventsData.json</p>
                <p className="text-blue-200 text-sm">Copy your event object and add it to the "events" array in <code className="bg-blue-900/50 px-2 py-1 rounded">src/data/eventsData.json</code></p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
              <div>
                <p className="font-semibold">Deploy and test</p>
                <p className="text-blue-200 text-sm">Your new event will automatically appear in the events timeline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Events */}
        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/20">
          <h2 className="text-2xl font-bold text-white mb-6">Current Events ({allEvents.length})</h2>
          <div className="grid gap-4">
            {allEvents.map((event, index) => (
              <div key={event.id} className="bg-white/5 rounded-xl p-6 border border-blue-400/10 hover:border-blue-400/30 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.type === 'upcoming' 
                          ? 'bg-green-500/20 text-green-300' 
                          : 'bg-gray-500/20 text-gray-300'
                      }`}>
                        {event.type}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                        {event.category}
                      </span>
                    </div>
                    <p className="text-blue-200 mb-2">{event.description}</p>
                    <div className="flex gap-4 text-sm text-blue-300">
                      <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                      <span>📍 {event.location}</span>
                      <span>⏱️ {event.duration}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => {
                        const eventStr = JSON.stringify(event, null, 2);
                        navigator.clipboard.writeText(eventStr);
                        alert('Event JSON copied to clipboard!');
                      }}
                      className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                      title="Copy JSON"
                    >
                      <Edit size={16} />
                    </button>
                    <a
                      href={`/event/${event.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                      title="View Event"
                    >
                      👁️
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JSON Structure Reference */}
        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/20 mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Event Structure Reference</h2>
          <div className="bg-slate-800 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-green-300">
{`{
  "id": "unique-event-id",
  "title": "Event Title",
  "shortTitle": "Short Title",
  "description": "Brief description",
  "longDescription": "Detailed description",
  "date": "2025-04-23T14:00:00",
  "type": "upcoming" | "past",
  "category": "workshop" | "hackathon" | "coding-challenge" | "orientation",
  "location": "Event Location",
  "duration": "Duration",
  "participants": "Number of participants",
  "image": "./image.jpg",
  "registrationLink": "https://...", // for upcoming events
  "highlights": [...],
  "winners": [...], // for past events
  "tracks": [...],
  "topics": [...],
  "theme": {
    "primary": "gradient classes",
    "accent": "gradient classes",
    "gradient": "gradient classes"
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManager;
