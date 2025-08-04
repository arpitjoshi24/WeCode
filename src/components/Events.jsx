
import { useState, useMemo } from "react";
import { CalendarDays, ArrowRight } from "lucide-react";

// Utility to format date
function formatDate(dt) {
  const d = new Date(dt);
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Sample events (replace with real fetch/data)
const sampleEvents = [
  {
    id: 1,
    title: "Hackathon Kickoff",
    description:
      "Gear up for a 24-hour coding sprint. Teams, challenges, and prizes await!",
    date: "2025-09-05T10:00:00",
    type: "upcoming",
    link: "#",
  },
  {
    id: 2,
    title: "Git & GitHub Workshop",
    description:
      "Learn version control from basics to advanced workflows with hands-on labs.",
    date: "2025-08-20T15:00:00",
    type: "upcoming",
    link: "#",
  },
  {
    id: 3,
    title: "Codethon – Hack the Spring",
    description:
      "A coding sprint where students tackled problem-solving challenges under time pressure. Part of our Hack the Spring event series.",
    date: "2025-04-22T18:00:00",
    type: "past",
    link: "#",
    image: "/e2.JPG"
  },
  {
    id: 4,
    title: "Hackathon – Hack the Spring",
    description:
      "Teams collaborated to build creative tech solutions in 24 hours. Innovation, teamwork, and caffeine powered this thrilling event.",
    date: "2025-04-23T14:00:00",
    type: "past",
    link: "#",
    image: "/public/e3.JPG"
  },
];

export default function Events() {
  const [tab, setTab] = useState("upcoming"); // "upcoming" or "past"
  const [search, setSearch] = useState("");

  // Filtered list
  const filtered = useMemo(() => {
    const now = new Date();
    return sampleEvents
      .filter((e) => {
        if (tab === "upcoming") return new Date(e.date) >= now;
        else return new Date(e.date) < now;
      })
      .filter((e) => e.title.toLowerCase().includes(search.trim().toLowerCase()));
  }, [tab, search]);

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold">Events</h2>
            <p className="mt-1 text-sm text-white/80">
              Stay in the loop — upcoming workshops, hackathons, and meetups.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-3 items-center">
            {/* Tabs */}
            <div className="flex rounded-full bg-white/10 p-1">
              {["upcoming", "past"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    tab === t
                      ? "bg-white text-[#1e3a8a]"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  {t === "upcoming" ? "Upcoming" : "Past"}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full bg-white/10 placeholder-white/60 focus:outline-none text-sm"
              />
              <div className="absolute left-3 top-2.5">
                <CalendarDays size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Event grid */}
        {filtered.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-lg">No {tab} events match your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((e) => (
              <div
                key={e.id}
                className="relative flex flex-col justify-between bg-white/5 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.01] transition"
              >
                {/* Event Image (for past events) */}
                {e.type === "past" && e.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={e.image} 
                      alt={e.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-sky-400/30 p-2 rounded-full">
                        <CalendarDays size={20} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-white/70">
                          {e.type === "upcoming" ? "Upcoming" : "Past"}
                        </p>
                        <h3 className="text-xl font-semibold">{e.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 mb-4">{e.description}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-white/70">
                      <span className="font-medium">{formatDate(e.date)}</span>
                    </div>
                    {e.type === "upcoming" && (
                      <a
                        href={e.link}
                        className="inline-flex items-center gap-1 text-sm font-semibold bg-gradient-to-r from-[#3b82f6] to-[#6366f1] px-4 py-2 rounded-full shadow hover:brightness-105 transition"
                      >
                        Register <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load more placeholder */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-white text-[#1e3a8a] font-semibold rounded-full shadow hover:brightness-105 transition">
            Load More Events
          </button>
        </div>
      </div>
    </div>
  );
}