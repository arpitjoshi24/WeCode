import { useState, useMemo } from "react";
import { CalendarDays, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useEvents from "../hooks/useEvents";


// Utility to format date
function formatDate(dt) {
  const d = new Date(dt);
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}




export default function Events() {
  const [tab, setTab] = useState("upcoming");
  const [search, setSearch] = useState("");
  const { upcomingEvents, pastEvents } = useEvents();

  const filtered = useMemo(() => {
    const events = tab === "upcoming" ? upcomingEvents : pastEvents;
    return events.filter((e) =>
      e.title.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [tab, search, upcomingEvents, pastEvents]);

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
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center">
            {tab === "upcoming" ? "Upcoming Events" : "Past Events"}
          </h3>

          {filtered.length === 0 ? (
            <div className="mt-6 text-center">
              <p className="text-lg">
                {tab === "upcoming" ? "No upcoming events." : "No past events match your search."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto scrollbar-hide border-t-2 border-white/30">
              <div className="relative flex gap-16 px-6 py-8 min-w-[800px] w-max">
                {filtered.map((e) => (
                  <div
                    key={e.id}
                    className="relative flex flex-col items-center text-center min-w-[288px]"
                  >
                    {/* Date */}
                    <div className="text-sm text-white/70 mb-2">
                      {formatDate(e.date)}
                    </div>
                    {e.type === "past" ? (
                      <Link
                        to={`/event/${e.id}`}
                        className="bg-white/10 rounded-xl p-4 shadow-lg backdrop-blur-lg block hover:brightness-110 transition w-72 h-[320px] flex flex-col text-left"
                      >
                        {e.image && (
                          <img
                            src={e.image}
                            alt={e.title}
                            className="w-full h-32 object-cover rounded-md mb-2"
                          />
                        )}
                        <h3 className="text-lg font-semibold truncate">{e.title}</h3>
                        <p className="text-sm text-white/80 mt-1 overflow-hidden h-[60px]">{e.description}</p>
                        <div className="text-xs mt-auto text-white/60">{formatDate(e.date)}</div>
                      </Link>
                    ) : (
                      <div className="bg-white/10 rounded-xl p-4 shadow-lg backdrop-blur-lg w-72 h-[320px] flex flex-col text-left">
                        <h3 className="text-lg font-semibold truncate">{e.title}</h3>
                        <p className="text-sm text-white/80 mt-1 overflow-hidden h-[60px]">{e.description}</p>
                        <div className="mt-auto">
                          <div className="text-xs text-white/60 mb-2">{formatDate(e.date)}</div>
                          {e.registrationLink ? (
                            <a
                              href={e.registrationLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-semibold bg-gradient-to-r from-[#3b82f6] to-[#6366f1] px-4 py-2 rounded-full shadow hover:brightness-105 transition"
                            >
                              Register <ArrowRight size={16} />
                            </a>
                          ) : (
                            <Link
                              to={`/event/${e.id}`}
                              className="inline-flex items-center gap-1 text-sm font-semibold bg-gradient-to-r from-[#3b82f6] to-[#6366f1] px-4 py-2 rounded-full shadow hover:brightness-105 transition"
                            >
                              View Details <ArrowRight size={16} />
                            </Link>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
