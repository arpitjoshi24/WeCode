import { useState, useMemo } from "react";
import { CalendarDays, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


// Utility to format date
function formatDate(dt) {
  const d = new Date(dt);
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}


const sampleEvents = [
  {
    id: 1,
    title: "Hackathon Kickoff",
    description:
      "Gear up for a 24-hour coding sprint. Teams, challenges, and prizes await!",
    date: "2025-09-05T10:00:00",
    type: "upcoming",
    link: "https://forms.google.com/your-hackathon-form-id",  // repace with actual google form url
  },
  {
    id: 2,
    title: "Git & GitHub Workshop",
    description:
      "Learn version control from basics to advanced workflows with hands-on labs.",
    date: "2025-08-20T15:00:00",
    type: "upcoming",
    link: "https://forms.google.com/your-hackathon-form-id",  // repace with actual google form url,
  },
  {
    id: 3,
    title: "Codethon – Hack the Spring",
    description:
      "A coding sprint where students tackled problem-solving challenges under time pressure.",
    date: "2025-04-22T18:00:00",
    type: "past",
    link: "https://forms.google.com/your-hackathon-form-id",  // repace with actual google form url
    image: "/e2.JPG",
  },
  {
    id: 4,
    title: "Hackathon – Hack the Spring",
    description:
      "Teams collaborated to build creative tech solutions in 24 hours.",
    date: "2025-04-23T14:00:00",
    type: "past",
    link: "https://forms.google.com/your-hackathon-form-id",  // repace with actual google form url
    image: "./e3.jpg",
  },
  {
    id: 5,
    title: "Induction Program",
    description:
      "Welcome session for new members with club orientation, core intro, and ice-breaking games.",
    date: "2025-04-15T10:00:00",
    type: "past",
    link: "https://forms.google.com/your-hackathon-form-id",  // repace with actual google form url
    image: "./e1.JPG",
  },
  {
    id: 6,
    title: "Open Book Challenge",
    description:
      "An open-book coding challenge that tests logic, not memory. Think, search, and solve!",
    date: "2025-04-18T11:00:00",
    type: "past",
    link: "https://forms.google.com/your-hackathon-form-id",  // repace with actual google form url
    image: "/e2.JPG",
  }
];

export default function Events() {
  const [tab, setTab] = useState("upcoming");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const now = new Date();
    return sampleEvents
      .filter((e) =>
        tab === "upcoming" ? new Date(e.date) >= now : new Date(e.date) < now
      )
      .filter((e) =>
        e.title.toLowerCase().includes(search.trim().toLowerCase())
      );
  }, [tab, search]);

  return (
    <div
      id="events"
      className="pt-24 pb-16 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] min-h-screen text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold">Events Timeline</h2>
            <p className="mt-1 text-sm text-white/80">
              Scroll through the journey of our workshops, hackathons, and
              meetups.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap items-center">
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

        {/* Timeline */}
        {tab === "upcoming" ? (
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold">Upcoming Events</h3>
          </div>
        ) : filtered.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-lg">No past events match your search.</p>
          </div>
        ) : (
          <div className="overflow-x-auto scrollbar-hide">
            <div className="relative flex gap-16 px-6 py-8 min-w-[800px] w-fit border-t-2 border-white/30">
              {filtered.map((e) => (
                <div
                  key={e.id}
                  className="relative flex flex-col items-center text-center min-w-[250px]"
                >
                  {/* Date */}
                  <div className="text-sm text-white/70 mb-2">
                    {formatDate(e.date)}
                  </div>  
                  {e.type === "past" ? (
  <a
    href={e.link}
    className="bg-white/10 rounded-xl p-4 shadow-lg backdrop-blur-lg block hover:brightness-110 transition"
  >
    {e.image && (
      <img
        src={e.image}
        alt={e.title}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
    )}
    <h3 className="text-lg font-semibold">{e.title}</h3>
    <p className="text-sm text-white/80 mt-1">{e.description}</p>
    <div className="text-xs mt-2 text-white/60">{formatDate(e.date)}</div>
  </a>
) : (
  <div className="bg-white/10 rounded-xl p-4 shadow-lg backdrop-blur-lg">
    <h3 className="text-lg font-semibold">{e.title}</h3>
    <p className="text-sm text-white/80 mt-1">{e.description}</p>
    <div className="text-xs mt-2 text-white/60">{formatDate(e.date)}</div>
    <a
      href={e.link}
      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold bg-gradient-to-r from-[#3b82f6] to-[#6366f1] px-4 py-2 rounded-full shadow hover:brightness-105 transition"
    >
      Register <ArrowRight size={16} />
    </a>
  </div>
)}
</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
