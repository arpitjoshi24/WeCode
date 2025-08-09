import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from "./components/ContactUs"
import Events from "./components/Events"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OpenPosition from "./components/OpenPosition"
import Resources from "./components/Resources"
import WebDev from "./components/WebDev";
import AI from './components/AI';
import DynamicEventPage from "./components/DynamicEventPage";
import EventManager from "./components/EventManager";
// Legacy event pages (keeping for backward compatibility)
import Codethon from "./pages/codethon"
import Hackathon from "./pages/hackathon"
import Induction from "./pages/induction"
import Openbook from "./pages/openbook"
import AboutUs from './components/AboutUs';


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
              <AboutUs />
              <OpenPosition />
              <ContactUs />
            </>
          }
        />

        {/* Roadmap Pages */}
        <Route path="/WebDev" element={<WebDev />} />
        <Route path="/AI" element={<AI />} />
        
        {/* Dynamic Event Pages */}
        <Route path="/event/:eventId" element={<DynamicEventPage />} />
        
        {/* Event Management (for admins) */}
        <Route path="/admin/events" element={<EventManager />} />
        
        {/* Legacy Event Pages (keeping for backward compatibility) */}
        <Route path="/codethon" element={<Codethon />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/induction" element={<Induction />} />
        <Route path="/openbook" element={<Openbook />} />

      </Routes>
    </>
  );
}

export default App