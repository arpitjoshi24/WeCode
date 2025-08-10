import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from "./components/ContactUs";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OpenPosition from "./components/OpenPosition";
import Resources from "./components/Resources";
import WebDev from "./components/WebDev";
import AI from './components/AI';
import DSA from './components/DSA';
import Cybersecurity from './components/Cybersecurity';
import CP from './components/CP'; // ✅ Added CP import
import DynamicEventPage from "./components/DynamicEventPage";
import EventManager from "./components/EventManager";
// Legacy event pages



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Events />
              <Resources />
              
              <OpenPosition />
              <ContactUs />
            </>
          }
        />

        {/* Roadmap Pages */}
        <Route path="/WebDev" element={<WebDev />} />
        <Route path="/AI" element={<AI />} />
        <Route path="/DSA" element={<DSA />} />
        <Route path="/Cybersecurity" element={<Cybersecurity />} />
        <Route path="/CP" element={<CP />} /> {/* ✅ New CP route */}

        {/* Dynamic Event Pages */}
        <Route path="/event/:eventId" element={<DynamicEventPage />} />

        {/* Event Management (for admins) */}
        <Route path="/admin/events" element={<EventManager />} />

        {/* Legacy Event Pages */}
      
      </Routes>
    </>
  );
}

export default App;
