import { motion } from "framer-motion";
import { Code, Cpu, Brain, Zap, Shield } from "lucide-react";

const roles = [
  {
    id: "webdev",
    title: "Web Development",
    tag: "Web Dev",
    icon: <Code size={20} />,
    description:
      "Design interactive websites, build responsive layouts, and learn best practices in frontend development with tools like React and Tailwind CSS.",
    color: "from-[#6366f1] to-[#3b82f6]",
    highlights: ["React", "Tailwind", "Live Projects"],
  },
  {
    id: "aiml",
    title: "AI/ML",
    tag: "AI/ML",
    icon: <Brain size={20} />,
    description:
      "Work with real datasets to train ML models, understand neural networks, and build intelligent prototypes using Python and TensorFlow.",
    color: "from-[#10b981] to-[#06b6d4]",
    highlights: ["Python", "TensorFlow", "Prototyping"],
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    tag: "DSA",
    icon: <Zap size={20} />,
    description:
      "Master problem-solving techniques, participate in mock interviews, and deepen your understanding of core algorithms and data structures.",
    color: "from-[#f59e0b] to-[#f43f5e]",
    highlights: ["Problem Solving", "Mock Interviews", "Coding"],
  },
  {
    id: "competitive",
    title: "Competitive Programming",
    tag: "CP",
    icon: <Cpu size={20} />,
    description:
      "Practice coding under pressure, optimize logic, and solve time-based challenges through real contests and peer training.",
    color: "from-[#8b5cf6] to-[#6366f1]",
    highlights: ["Contests", "Fast Thinking", "Teamwork"],
  },
  {
    id: "cybersecurity",
    title: "Cyber Security",
    tag: "Security",
    icon: <Shield size={20} />,
    description:
      "Explore ethical hacking, solve CTF challenges, and understand system vulnerabilities and secure software design.",
    color: "from-[#f97316] to-[#ea580c]",
    highlights: ["CTFs", "Ethical Hacking", "Defense"],
  },
];

export default function OpenPosition() {
  return (
    <section
      id="openposition"
      className="relative py-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-2">Open Positions</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join a role that aligns with your passion—build, solve, secure, and innovate with WeCode.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl flex flex-col justify-between w-full min-h-[280px] transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${role.color}`}>
                    <span className="text-white">{role.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                </div>

                <p className="text-sm text-white/90 mb-4">{role.description}</p>

                <div className="flex flex-wrap gap-2">
                  {role.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/10">
                <span className="text-xs uppercase tracking-wide bg-white/10 px-3 py-1 rounded-full">
                  {role.tag}
                </span>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeAq5A02UHxWQ8PmGn-GvkxxX5NCx66ES-s2LRKDPxZSKFuHQ/viewform?usp=sharing&ouid=100110423182068132962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold bg-gradient-to-r from-[#3b82f6] to-[#6366f1] px-3 py-1.5 rounded-full hover:scale-105 transition"
                >
                  Apply
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
