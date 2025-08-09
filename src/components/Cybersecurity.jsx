import React, { useState, useCallback } from "react";
import ReactFlow, { Background, Controls, Handle } from "reactflow";
import "reactflow/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";

// Topics DATA
const topics = [
  // CTFs
  { id: "hackthebox", label: "HackTheBox", desc: "Hands-on penetration testing labs.", link: "https://www.hackthebox.com/", section: "CTFs" },
  { id: "tryhackme", label: "TryHackMe", desc: "Cybersecurity learning platform with labs.", link: "https://tryhackme.com/", section: "CTFs" },
  { id: "vulnhub", label: "VulnHub", desc: "Download vulnerable VMs for practice.", link: "https://www.vulnhub.com/", section: "CTFs" },
  { id: "picotf", label: "picoCTF", desc: "Beginner-friendly CTF challenges.", link: "https://picoctf.org/", section: "CTFs" },
  { id: "sans", label: "SANS Holiday Hack Challenge", desc: "Annual festive CTF competition.", link: "https://holidayhackchallenge.com/", section: "CTFs" },

  // Fundamental IT Skills
  { id: "hardware", label: "Computer Hardware Components", desc: "Understand basic hardware parts.", link: "#", section: "Fundamental IT Skills" },
  { id: "connections", label: "Connection Types & Functions", desc: "NFC, WiFi, Bluetooth, Infrared.", link: "#", section: "Fundamental IT Skills" },
  { id: "troubleshoot", label: "OS-Independent Troubleshooting", desc: "Generic troubleshooting skills.", link: "#", section: "Fundamental IT Skills" },
  { id: "popularsuites", label: "Basics of Popular Suites", desc: "MS Office, Google Suite, iCloud.", link: "#", section: "Fundamental IT Skills" },
  { id: "networking", label: "Basics of Computer Networking", desc: "Core networking concepts.", link: "#", section: "Fundamental IT Skills" },

  // Networking Knowledge
  { id: "subnetting", label: "Basics of Subnetting", desc: "Understand network segmentation.", link: "#", section: "Networking Knowledge" },
  { id: "iptypes", label: "Public vs Private IP Addresses", desc: "IP classification.", link: "#", section: "Networking Knowledge" },
  { id: "ipterms", label: "IP Terminology", desc: "CIDR, localhost, loopback, etc.", link: "#", section: "Networking Knowledge" },
  { id: "vlans", label: "Understand the Terminology", desc: "VLAN, DMZ, DHCP, DNS, NAT, VPN.", link: "#", section: "Networking Knowledge" },
  { id: "topologies", label: "Network Topologies", desc: "Star, Ring, Mesh, Bus.", link: "#", section: "Networking Knowledge" },
  { id: "protocols", label: "Network Protocols", desc: "HTTP, HTTPS, SSH, FTP, TLS.", link: "#", section: "Networking Knowledge" },

  // Security Skills and Knowledge
  { id: "hackingtools", label: "Understand Common Hacking Tools", desc: "nmap, Wireshark, Metasploit, etc.", link: "#", section: "Security Skills and Knowledge" },
  { id: "zerotrust", label: "Core Concepts of Zero Trust", desc: "Never trust, always verify.", link: "#", section: "Security Skills and Knowledge" },
  { id: "vulnmgmt", label: "Basics of Vulnerability Management", desc: "Identify and fix security flaws.", link: "#", section: "Security Skills and Knowledge" },
  { id: "idsips", label: "Basics of IDS and IPS", desc: "Intrusion detection & prevention.", link: "#", section: "Security Skills and Knowledge" },
  { id: "websec", label: "Web Based Attacks", desc: "SQLi, XSS, CSRF, etc.", link: "#", section: "Security Skills and Knowledge" },

  // Cloud Skills and Knowledge
  { id: "cloudconcept", label: "Understand Security in the Cloud", desc: "Cloud security principles.", link: "#", section: "Cloud Skills and Knowledge" },
  { id: "iac", label: "Infrastructure as Code", desc: "Automating cloud deployment.", link: "#", section: "Cloud Skills and Knowledge" },
  { id: "cloudtypes", label: "Cloud Models", desc: "SaaS, PaaS, IaaS, Hybrid.", link: "#", section: "Cloud Skills and Knowledge" },

  // Programming Skills
  { id: "python", label: "Python", desc: "Widely used in cybersecurity scripting.", link: "https://www.python.org/", section: "Programming Skills" },
  { id: "go", label: "Go", desc: "Efficient for network tools.", link: "https://go.dev/", section: "Programming Skills" },
  { id: "bash", label: "Bash", desc: "Shell scripting for automation.", link: "#", section: "Programming Skills" },
  { id: "js", label: "JavaScript", desc: "Web security and pentesting.", link: "#", section: "Programming Skills" },
  { id: "c", label: "C", desc: "Low-level exploits & security tools.", link: "#", section: "Programming Skills" }
];

// Section X positions
const positionMap = {
  "CTFs": 0,
  "Fundamental IT Skills": 300,
  "Networking Knowledge": 600,
  "Security Skills and Knowledge": 900,
  "Cloud Skills and Knowledge": 1200,
  "Programming Skills": 1500
};

// Custom Node
const CustomNode = ({ data }) => (
  <div style={{
    padding: "8px 12px",
    borderRadius: 8,
    background: "rgba(255,255,255,0.1)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.3)",
    cursor: "pointer",
    textAlign: "center",
    minWidth: 150
  }}>
    <strong>{data.label}</strong>
    <Handle type="target" position="top" style={{ background: "#555" }} />
    <Handle type="source" position="bottom" style={{ background: "#555" }} />
  </div>
);

// Heading Node
const HeadingNode = ({ data }) => (
  <div style={{
    padding: "4px 8px",
    borderRadius: 4,
    background: "#3b82f6",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    minWidth: 180
  }}>
    {data.label}
  </div>
);

export default function CyberSecurityRoadmap() {
  const [selected, setSelected] = useState(null);

  const headingNodes = Object.keys(positionMap).map((section) => ({
    id: `heading-${section}`,
    type: "heading",
    position: { x: positionMap[section], y: 0 },
    data: { label: section },
    draggable: false
  }));

  const topicNodes = [];
  Object.keys(positionMap).forEach((section) => {
    const sectionTopics = topics.filter((t) => t.section === section);
    sectionTopics.forEach((t, index) => {
      topicNodes.push({
        id: t.id,
        type: "custom",
        position: { x: positionMap[section], y: 80 + index * 90 },
        data: { label: t.label, desc: t.desc, link: t.link }
      });
    });
  });

  const nodes = [...headingNodes, ...topicNodes];

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
