// Navbar.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Title */}
          <div className="flex items-center space-x-3">
            {/* Space logo: simple rocket SVG */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-tr from-indigo-400 to-sky-300 rounded-full flex items-center justify-center">
               <img src="./logo.jpeg" alt="" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">WeCode</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#events" className="hover:underline text-sm font-medium">
              Events
            </a>
              <a href="#resources" className="hover:underline text-sm font-medium">
              Resource Material
            </a>
            <a href="#openposition" className="hover:underline text-sm font-medium">
              Open Positions
            </a>
            <a href="#contact" className="hover:underline text-sm font-medium">
              Contact Us
            </a>
           
            <a
              href="https://discord.gg/dk25zDfk"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-block px-4 py-2 bg-white text-[#1e3a8a] font-semibold rounded-full shadow hover:brightness-105 transition"
            >
              Join Discord
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="menu"
              onClick={() => setOpen((o) => !o)}
              className="p-2 rounded-md hover:bg-white/20 transition"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 border-t border-white/20">
          <a
            href="#events"
            className="block text-base font-medium hover:underline"
            onClick={() => setOpen(false)}
          >
            Events
          </a>
           <a
            href="#resources"
            className="block text-base font-medium hover:underline"
            onClick={() => setOpen(false)}
          >
            Resource Material
          </a>
          <a
            href="#openposition"
            className="block text-base font-medium hover:underline"
            onClick={() => setOpen(false)}
          >
            Open Positions
          </a>
          <a
            href="#contact"
            className="block text-base font-medium hover:underline"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
         
          <a
            href="https://discord.gg/dk25zDfk"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 px-4 py-2 bg-white text-[#1e3a8a] font-semibold rounded-full text-center"
          >
            Join Discord
          </a>
        </div>
      )}
    </nav>
  );
}
