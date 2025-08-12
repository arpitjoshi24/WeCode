import { useState, useMemo } from 'react';
import eventsData from '../data/eventsData.json';

export const useEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Get all events
  const allEvents = eventsData.events;

  // Filter events by type (past/upcoming)
  // Prefer explicit event.type when provided; fall back to date comparison
  const getEventsByType = useMemo(() => {
    const now = new Date();

    const isUpcoming = (event) => {
      if (event.type === 'upcoming') return true;
      if (event.type === 'past') return false;
      return new Date(event.date) >= now;
    };

    const isPast = (event) => {
      if (event.type === 'past') return true;
      if (event.type === 'upcoming') return false;
      return new Date(event.date) < now;
    };
    
    return {
      upcoming: allEvents.filter(isUpcoming),
      past: allEvents.filter(isPast),
      all: allEvents
    };
  }, [allEvents]);

  // Search events
  const searchEvents = useMemo(() => {
    if (!searchTerm.trim()) return allEvents;
    
    return allEvents.filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allEvents, searchTerm]);

  // Get event by ID
  const getEventById = (id) => {
    return allEvents.find(event => event.id === id);
  };

  // Get events by category
  const getEventsByCategory = (category) => {
    return allEvents.filter(event => event.category === category);
  };

  // Get featured events (can be customized based on your criteria)
  const getFeaturedEvents = () => {
    return allEvents.filter(event => 
      event.type === 'upcoming' || 
      (event.type === 'past' && event.winners)
    ).slice(0, 6);
  };

  return {
    allEvents,
    upcomingEvents: getEventsByType.upcoming,
    pastEvents: getEventsByType.past,
    searchEvents,
    searchTerm,
    setSearchTerm,
    getEventById,
    getEventsByCategory,
    getFeaturedEvents
  };
};

export default useEvents;
