import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs"
import Events from "./components/Events"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OpenPosition from "./components/OpenPosition"
import Resources from "./components/Resources"
import WebDev from "./components/WebDev";
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
        {/* You can add other roadmap pages here in the future */}
      </Routes>
    </>
  );
}

export default App
