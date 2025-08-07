import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; 
import WebDev from "./WebDev";
import Ai from "./AI";

const domains = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn frontend, backend, and full-stack development with modern tools.",
    link: "/WebDev"
  },
  {
    id: 2,
    title: "AI / Machine Learning",
    description: "Dive into AI concepts, model building, and machine learning workflows.",
    link: "/Ai"
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    description: "Master problem-solving and algorithmic thinking.",
    link: "/resources/dsa"
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Understand ethical hacking, penetration testing, and network security.",
    link: "/resources/cybersecurity"
  },
  {
    id: 5,
    title: "Competitive Programming",
    description: "Sharpen your problem-solving speed and accuracy for contests.",
    link: "/resources/competitive-programming"
  }
];

export default function Resources() {
  return (
    <section
      id="resources"
      className="pt-24 pb-16 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] min-h-screen text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Resource Materials</h2>
          <p className="mt-2 text-white/80">
            Explore roadmaps and curated learning resources for each domain.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 rounded-lg shadow-md p-5 hover:scale-105 transition-transform"
            >
              <h3 className="text-lg font-semibold">{domain.title}</h3>
              <p className="text-xs text-white/80 mt-1">{domain.description}</p>

              <Link
                to={domain.link} // ✅ internal navigation
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold bg-gradient-to-r from-[#3b82f6] to-[#6366f1] px-3 py-1.5 rounded-full shadow hover:brightness-105 transition"
              >
                View Roadmap <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
