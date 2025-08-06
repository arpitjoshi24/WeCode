// import ContactUs from "./components/ContactUs"
// import Events from "./components/Events"
// import Hero from "./components/Hero"
// import Navbar from "./components/Navbar"
// import OpenPosition from "./components/OpenPosition"


// function App() {
  

//   return (
//     <>
//       <Navbar/>
//       <Hero/>
//       <Events/>
//       <OpenPosition/>
//       <ContactUs/>
//     </>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from "./components/ContactUs"
import Events from "./components/Events"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OpenPosition from "./components/OpenPosition"
// Import your page components
import Codethon from "./pages/codethon"
import Hackathon from "./pages/hackathon"
import Induction from "./pages/induction"
import Openbook from "./pages/openbook"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Hero/>
            <Events/>
            <OpenPosition/>
            <ContactUs/>
          </>
        } />
        <Route path="/codethon" element={<Codethon />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/induction" element={<Induction />} />
        <Route path="/openbook" element={<Openbook />} />
      </Routes>
    </Router>
  )
}

export default App