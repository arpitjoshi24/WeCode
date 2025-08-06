// OpenPosition.jsx
import { motion } from "framer-motion";
import { Code, Cpu, Brain, Zap,Shield } from "lucide-react";

const roles = [
  {
    id: "webdev",
    title: "Web Development",
    icon: <Code size={24} />,
    description:
      "Build the club's digital presence—landing pages, dashboards, and interactive experiences.Work on real projects using modern web technologies.",
    color: "from-[#6366f1] to-[#3b82f6]",
  },
  {
    id: "aiml",
    title: "AI/ML",
    icon: <Brain size={24} />,
    description:
      "Explore machine learning by building smart, data-driven features and AI prototypes.Contribute to research-based projects and hands-on workshops.",
    color: "from-[#10b981] to-[#06b6d4]",
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    icon: <Zap size={24} />,
    description:
      "Strengthen core programming logic through hands-on sessions and challenges.Host workshops and help peers crack technical interviews.",
    color: "from-[#f59e0b] to-[#f43f5e]",
  },
  {
    id: "competitive",
    title: "Competitive Programming",
    icon: <Cpu size={24} />,
    description:
      "Prepare for coding contests with structured practice and peer mentoring.Organize campus-level competitions and curate problems.",
    color: "from-[#8b5cf6] to-[#6366f1]",
  },
  {
  id: "cybersecurity",
  title: "Cyber Security",
  icon: <Shield size={24} />,
  description:
    "Learn about ethical hacking, network security, and secure coding practices. Participate in CTFs and workshops to enhance your skills.",
  color: "from-[#f97316] to-[#ea580c]",
}
];

export default function OpenPosition() {
  return (
    <section
      id="openposition"
      className="relative py-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-2">Open Positions</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join a team that matches your passion. Pick a role, contribute, and grow—whether it's crafting interfaces,
            building smart systems, mastering algorithms, or competing at the top. Apply now and be part of WeCode's
            core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
              className="relative group bg-white/10 rounded-2xl p-6 overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr opacity-0 group-hover:opacity-30 transition pointer-events-none rounded-2xl from-white/5 to-white/10"></div>

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${role.color} bg-origin-border`}
                  aria-hidden="true"
                >
                  {role.icon}
                </div>
                <h3 className="text-xl font-semibold">{role.title}</h3>
              </div>
              <p className="text-sm text-white/90 mb-6">{role.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                  {role.title.split(" ").join("-").toLowerCase()}
                </span>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeAq5A02UHxWQ8PmGn-GvkxxX5NCx66ES-s2LRKDPxZSKFuHQ/viewform?usp=sharing&ouid=100110423182068132962"
                  className="inline-flex items-center gap-1 text-sm font-semibold bg-gradient-to-r from-[#3b82f6] to-[#6366f1] px-4 py-2 rounded-full shadow hover:scale-[1.03] transition"
                >
                  Apply
                </a>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-white/20 mix-blend-overlay blur-md" />
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
