# WeCode Dynamic Event System

## Overview
The WeCode website now features a dynamic, JSON-based event management system that allows you to add new events without creating custom components for each event.

## Features
- ✅ **JSON-based events** - All event data stored in a single JSON file
- ✅ **Dynamic rendering** - One component renders all event types
- ✅ **Automatic routing** - Events get URLs like `/event/event-id`
- ✅ **Rich event types** - Support for hackathons, workshops, coding challenges, etc.
- ✅ **Admin interface** - Easy event management at `/admin/events`
- ✅ **Template generation** - Download templates for new events
- ✅ **Legacy compatibility** - Old event pages still work

## How to Add New Events

### Method 1: Using the Admin Interface
1. Go to `/admin/events` on your website
2. Click "Download Template" to get a JSON template
3. Fill in your event details in the JSON file
4. Copy the event object
5. Add it to `src/data/eventsData.json`
6. Deploy your changes

### Method 2: Manual JSON Editing
1. Open `src/data/eventsData.json`
2. Add a new event object to the `events` array
3. Follow the structure shown below

## Event Structure

```json
{
  "id": "unique-event-id",
  "title": "Event Title",
  "shortTitle": "Short Title",
  "description": "Brief description for cards",
  "longDescription": "Detailed description for event page",
  "date": "2025-04-23T14:00:00",
  "endDate": "2025-04-23T18:00:00",
  "type": "upcoming", // or "past"
  "category": "hackathon", // hackathon, workshop, coding-challenge, orientation
  "location": "Event Location",
  "duration": "4 Hours",
  "participants": "50+ Teams",
  "image": "./event-image.jpg",
  "gallery": ["./image1.jpg", "./image2.jpg"],
  
  // For upcoming events
  "registrationLink": "https://forms.google.com/...",
  
  // Event highlights (shown as cards)
  "highlights": [
    {
      "icon": "Code", // Icon name from lucide-react
      "title": "Highlight Title",
      "desc": "Description",
      "color": "from-blue-400 to-cyan-400" // Tailwind gradient
    }
  ],
  
  // For past events - winners section
  "winners": [
    {
      "position": "1st Place",
      "team": "Team Name",
      "members": ["Member 1", "Member 2"],
      "rank": 1,
      "description": "Achievement description"
    }
  ],
  
  // Optional sections (add as needed)
  "tracks": [...],
  "topics": [...],
  "activities": [...],
  "features": [...],
  "prizes": [...],
  "judging_criteria": [...],
  
  // Theme colors
  "theme": {
    "primary": "from-slate-900 via-blue-900 to-indigo-900",
    "accent": "from-blue-400 to-cyan-400",
    "gradient": "from-blue-600/20 via-cyan-600/15 to-indigo-600/20"
  }
}
```

## Event Types & Categories

### Types
- `upcoming` - Future events (shows registration buttons)
- `past` - Completed events (shows details/winners)

### Categories
- `hackathon` - 24-hour coding competitions
- `workshop` - Learning sessions
- `coding-challenge` - Programming contests
- `orientation` - Welcome/induction events

## Available Icons
Use any icon name from [Lucide React](https://lucide.dev/icons/):
- `Code`, `Users`, `Trophy`, `Calendar`, `Clock`, `MapPin`
- `Heart`, `Brain`, `Search`, `BookOpen`, `Timer`
- `Zap`, `Target`, `Lightbulb`, `Coffee`, `Rocket`
- And many more...

## Theme Colors
Choose from these preset themes or create custom ones:

### Hackathon Theme
```json
"theme": {
  "primary": "from-slate-900 via-blue-900 to-indigo-900",
  "accent": "from-blue-400 to-cyan-400",
  "gradient": "from-blue-600/20 via-cyan-600/15 to-indigo-600/20"
}
```

### Workshop Theme
```json
"theme": {
  "primary": "from-slate-900 via-green-900 to-blue-900",
  "accent": "from-green-400 to-blue-400",
  "gradient": "from-green-600/20 via-blue-600/15 to-green-600/20"
}
```

### Challenge Theme
```json
"theme": {
  "primary": "from-slate-900 via-purple-900 to-pink-900",
  "accent": "from-purple-400 to-pink-400",
  "gradient": "from-purple-600/20 via-pink-600/15 to-purple-600/20"
}
```

## File Structure
```
src/
  data/
    eventsData.json          # All event data
  hooks/
    useEvents.js             # Event management hook
  components/
    DynamicEventPage.jsx     # Main event page component
    EventManager.jsx         # Admin interface
    Events.jsx               # Updated events timeline
```

## URLs
- Home events timeline: `/`
- Dynamic event pages: `/event/event-id`
- Admin interface: `/admin/events`
- Legacy pages: `/codethon`, `/hackathon`, etc. (still work)

## Benefits
1. **No more coding** - Add events by editing JSON
2. **Consistent design** - All events use the same beautiful template
3. **Easy maintenance** - One place to manage all events
4. **SEO friendly** - Each event gets its own URL
5. **Fast loading** - No duplicate code for similar events
6. **Future proof** - Easy to add new event types and features

## Migration Notes
- Old event pages (`/codethon`, `/hackathon`, etc.) still work for backward compatibility
- New events should use the dynamic system (`/event/event-id`)
- You can gradually migrate old events to the new system
- All existing links will continue to work

## Need Help?
- Check the admin interface at `/admin/events` for templates and examples
- Look at existing events in `eventsData.json` for reference
- All events automatically get responsive design, animations, and modern UI

## Future Enhancements
- Event filtering by category/date
- Search functionality
- Event calendar view
- Registration management
- Analytics integration
