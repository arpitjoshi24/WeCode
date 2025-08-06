import React, { useState, useCallback } from "react";
import ReactFlow, { Background, Controls, Handle } from "reactflow";
import "reactflow/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";

// Topic Data
const topics = [
  { id: "html", label: "HTML", desc: "Structure of web pages.", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", section: "Fundamentals" },
  { id: "css", label: "CSS", desc: "Style your web pages.", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", section: "Fundamentals" },
  { id: "js", label: "JavaScript", desc: "Programming language of the web.", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", section: "Fundamentals" },
  { id: "git", label: "Git & GitHub", desc: "Version control & collaboration.", link: "https://git-scm.com/doc", section: "Fundamentals" },
  { id: "npm", label: "npm", desc: "Package manager for JavaScript.", link: "https://docs.npmjs.com/", section: "Fundamentals" },
  { id: "responsive", label: "Responsive Design", desc: "Make sites adapt to screen sizes.", link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design", section: "Fundamentals" },
  { id: "devtools", label: "Browser DevTools", desc: "Debug & inspect web apps.", link: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools", section: "Fundamentals" },

  { id: "es6", label: "ES6+", desc: "Modern JavaScript features.", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference", section: "Frontend" },
  { id: "dom", label: "DOM Manipulation", desc: "Interact with HTML elements via JS.", link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model", section: "Frontend" },
  { id: "react", label: "React.js", desc: "Build UIs with components.", link: "https://react.dev", section: "Frontend" },
  { id: "tailwind", label: "Tailwind CSS", desc: "Utility-first CSS framework.", link: "https://tailwindcss.com/docs", section: "Frontend" },
  { id: "nextjs", label: "Next.js", desc: "React framework for SSR & SSG.", link: "https://nextjs.org/docs", section: "Frontend" },
  { id: "state", label: "State Management", desc: "Manage global state with Redux, Zustand.", link: "https://redux.js.org/", section: "Frontend" },
  { id: "testing", label: "Testing (Jest)", desc: "Test JS apps.", link: "https://jestjs.io/docs/getting-started", section: "Frontend" },
  // Backend
  { id: "node", label: "Node.js", desc: "JavaScript runtime for backend.", link: "https://nodejs.org/en/docs", section: "Backend" },
  { id: "express", label: "Express.js", desc: "Fast Node.js web framework.", link: "https://expressjs.com/", section: "Backend" },
  { id: "restapi", label: "REST APIs", desc: "API design principles.", link: "https://restfulapi.net/", section: "Backend" },
  { id: "auth", label: "Authentication", desc: "JWT, OAuth for security.", link: "https://jwt.io/introduction", section: "Backend" },
  { id: "sql", label: "SQL (PostgreSQL)", desc: "Relational database.", link: "https://www.postgresql.org/docs/", section: "Backend" },
  { id: "nosql", label: "NoSQL (MongoDB)", desc: "Document-based database.", link: "https://www.mongodb.com/docs/", section: "Backend" },
  { id: "orm", label: "ORM/ODM", desc: "Database abstraction (Prisma/Mongoose).", link: "https://www.prisma.io/docs", section: "Backend" },
  { id: "swagger", label: "Swagger", desc: "API documentation tool.", link: "https://swagger.io/docs/", section: "Backend" },
  { id: "fileupload", label: "File Uploads", desc: "Upload & manage files.", link: "https://developer.mozilla.org/en-US/docs/Web/API/File_API", section: "Backend" },

  // DevOps
  { id: "linux", label: "Linux Basics", desc: "Command line & shell scripting.", link: "https://linuxjourney.com/", section: "DevOps" },
  { id: "docker", label: "Docker", desc: "Containerization platform.", link: "https://docs.docker.com/", section: "DevOps" },
  { id: "aws", label: "AWS", desc: "Cloud computing services.", link: "https://aws.amazon.com/getting-started/", section: "DevOps" },
  { id: "nginx", label: "Nginx", desc: "Web server & reverse proxy.", link: "https://nginx.org/en/docs/", section: "DevOps" },
  { id: "cicd", label: "CI/CD", desc: "Continuous integration/deployment.", link: "https://docs.github.com/en/actions", section: "DevOps" },
  { id: "monitoring", label: "Monitoring", desc: "System monitoring tools.", link: "https://prometheus.io/docs/", section: "DevOps" },
  { id: "deployment", label: "Deployment", desc: "Deploy to Vercel, Netlify, AWS.", link: "https://vercel.com/docs", section: "DevOps" },
  { id: "security", label: "Web Security", desc: "OWASP guidelines.", link: "https://owasp.org/www-project-top-ten/", section: "DevOps" },
]
;

// X positions for sections
const positionMap = {
  Fundamentals: 0,
  Frontend: 400,
  Backend: 800,
  DevOps: 1200
};

// Custom node for topics
const CustomNode = ({ data }) => (
  <div style={{
    padding: "8px 12px",
    borderRadius: 8,
    background: "rgba(255,255,255,0.1)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.3)",
    cursor: "pointer",
    textAlign: "center",
    minWidth: 120
  }}>
    <strong>{data.label}</strong>
    <Handle type="target" position="top" style={{ background: "#555" }} />
    <Handle type="source" position="bottom" style={{ background: "#555" }} />
  </div>
);

// Heading node for sections
const HeadingNode = ({ data }) => (
  <div style={{
    padding: "4px 8px",
    borderRadius: 4,
    background: "#3b82f6",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    minWidth: 150
  }}>
    {data.label}
  </div>
);

export default function WebDevRoadmap() {
  const [selected, setSelected] = useState(null);

  // Heading nodes
  const headingNodes = Object.keys(positionMap).map((section) => ({
    id: `heading-${section}`,
    type: "heading",
    position: { x: positionMap[section], y: 0 },
    data: { label: section },
    draggable: false
  }));

  // Topic nodes (start right after heading with small gap)
  const topicNodes = topics.map((t, i) => {
    const sectionIndex = topics.filter(top => top.section === t.section).findIndex(top => top.id === t.id);
    return {
      id: t.id,
      type: "custom",
      position: { x: positionMap[t.section], y: 60 + sectionIndex * 90 },
      data: { label: t.label, desc: t.desc, link: t.link }
    };
  });

  const nodes = [...headingNodes, ...topicNodes];

  // Edges inside each section
  const edges = topics.map((t, i) => {
    const next = topics[i + 1];
    if (!next || next.section !== t.section) return null;
    return {
      id: `e${t.id}-${next.id}`,
      source: t.id,
      target: next.id,
      style: { stroke: "#fff" }
    };
  }).filter(Boolean);

  const onNodeClick = useCallback((_, node) => {
    const topic = topics.find((t) => t.id === node.id);
    if (topic) setSelected(topic);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] min-h-screen text-white">
      <div style={{ height: "80vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={{ custom: CustomNode, heading: HeadingNode }}
          fitView
          onNodeClick={onNodeClick}
          panOnScroll
          zoomOnScroll
          proOptions={{ hideAttribution: true }}
        >
          <Controls />
          <Background color="#ffffff20" gap={20} />
        </ReactFlow>
      </div>

      {/* Modern Glassmorphism Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-xl max-w-sm w-full text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-3">{selected.label}</h3>
              <p className="text-white/80 mb-5">{selected.desc}</p>
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}