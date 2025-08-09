import React, { useState, useCallback } from "react";
import ReactFlow, { Background, Controls, Handle } from "reactflow";
import "reactflow/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";

// Topics DATA
const topics = [
  // Pick a Language
  { id: "javascript", label: "JavaScript", desc: "Popular for web and backend with Node.js.", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", section: "Pick a Language" },
  { id: "java", label: "Java", desc: "Object-oriented and widely used for DSA.", link: "https://docs.oracle.com/javase/tutorial/", section: "Pick a Language" },
  { id: "cpp", label: "C++", desc: "Fast and powerful for competitive programming.", link: "https://cplusplus.com/doc/tutorial/", section: "Pick a Language" },
  { id: "python", label: "Python", desc: "Beginner-friendly and versatile.", link: "https://docs.python.org/3/tutorial/", section: "Pick a Language" },

  // Programming Fundamentals
  { id: "syntax", label: "Language Syntax", desc: "Learn basic syntax of your chosen language.", link: "https://www.geeksforgeeks.org/programming-language-introduction/", section: "Programming Fundamentals" },
  { id: "control", label: "Control Structures", desc: "if-else, loops, switch-case, etc.", link: "https://www.geeksforgeeks.org/control-structures-in-cpp/", section: "Programming Fundamentals" },
  { id: "functions", label: "Functions", desc: "Reusable blocks of code.", link: "https://www.geeksforgeeks.org/functions-in-c/", section: "Programming Fundamentals" },
  { id: "oop", label: "OOP Basics", desc: "Encapsulation, Inheritance, Polymorphism.", link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/", section: "Programming Fundamentals" },
  { id: "pseudocode", label: "Pseudo Code", desc: "Algorithm representation before coding.", link: "https://www.geeksforgeeks.org/how-to-write-pseudo-code/", section: "Programming Fundamentals" },
  { id: "whyds", label: "What are DS?", desc: "Intro to Data Structures and importance.", link: "https://www.geeksforgeeks.org/data-structures/", section: "Programming Fundamentals" },

  // Basic Data Structures
  { id: "array", label: "Array", desc: "Sequential data storage.", link: "https://www.geeksforgeeks.org/array-data-structure/", section: "Basic Data Structures" },
  { id: "linkedlist", label: "Linked List", desc: "Dynamic data structure using nodes.", link: "https://www.geeksforgeeks.org/linked-list-set-1-introduction/", section: "Basic Data Structures" },
  { id: "stack", label: "Stack", desc: "LIFO data structure.", link: "https://www.geeksforgeeks.org/stack-data-structure/", section: "Basic Data Structures" },
  { id: "queue", label: "Queue", desc: "FIFO data structure.", link: "https://www.geeksforgeeks.org/queue-data-structure/", section: "Basic Data Structures" },
  { id: "hashtable", label: "Hash Table", desc: "Key-value storage for fast lookups.", link: "https://www.geeksforgeeks.org/hash-table-data-structure/", section: "Basic Data Structures" },

  // Algorithmic Complexity
  { id: "timevs", label: "Time vs Space Complexity", desc: "Performance trade-offs in algorithms.", link: "https://www.geeksforgeeks.org/g-fact-86/", section: "Algorithmic Complexity" },
  { id: "runtimes", label: "Common Runtimes", desc: "Constant, Linear, Logarithmic, etc.", link: "https://www.bigocheatsheet.com/", section: "Algorithmic Complexity" },
  { id: "bigo", label: "Big-O Notation", desc: "Upper bound of algorithm performance.", link: "https://www.geeksforgeeks.org/analysis-of-algorithms-big-o-big-omega-and-big-theta/", section: "Algorithmic Complexity" },

  // Sorting Algorithms
  { id: "bubble", label: "Bubble Sort", desc: "Repeated swapping until sorted.", link: "https://www.geeksforgeeks.org/bubble-sort/", section: "Sorting Algorithms" },
  { id: "merge", label: "Merge Sort", desc: "Divide and merge technique.", link: "https://www.geeksforgeeks.org/merge-sort/", section: "Sorting Algorithms" },
  { id: "quick", label: "Quick Sort", desc: "Divide and conquer using pivot.", link: "https://www.geeksforgeeks.org/quick-sort/", section: "Sorting Algorithms" },

  // Search Algorithms
  { id: "linearsearch", label: "Linear Search", desc: "Check each element one by one.", link: "https://www.geeksforgeeks.org/linear-search/", section: "Search Algorithms" },
  { id: "binarysearch", label: "Binary Search", desc: "Efficient search in sorted arrays.", link: "https://www.geeksforgeeks.org/binary-search/", section: "Search Algorithms" },

  // Tree Data Structures
  { id: "binarytree", label: "Binary Tree", desc: "Hierarchical structure with two children max.", link: "https://www.geeksforgeeks.org/binary-tree-data-structure/", section: "Tree Data Structures" },
  { id: "bst", label: "Binary Search Tree", desc: "Ordered binary tree.", link: "https://www.geeksforgeeks.org/binary-search-tree-data-structure/", section: "Tree Data Structures" },
  { id: "avl", label: "AVL Tree", desc: "Self-balancing BST.", link: "https://www.geeksforgeeks.org/avl-tree-set-1-insertion/", section: "Tree Data Structures" },

  // Graph Data Structures
  { id: "graph", label: "Graph Basics", desc: "Nodes connected by edges.", link: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/", section: "Graph Data Structures" },
  { id: "bfs", label: "BFS", desc: "Breadth First Search traversal.", link: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/", section: "Graph Data Structures" },
  { id: "dfs", label: "DFS", desc: "Depth First Search traversal.", link: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/", section: "Graph Data Structures" },
  { id: "dijkstra", label: "Dijkstra's Algorithm", desc: "Shortest path in weighted graph.", link: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/", section: "Graph Data Structures" },

  // Advanced Data Structures
  { id: "trie", label: "Trie", desc: "Efficient for string matching.", link: "https://www.geeksforgeeks.org/trie-insert-and-search/", section: "Advanced Data Structures" },
  { id: "segmenttree", label: "Segment Tree", desc: "Range queries and updates.", link: "https://www.geeksforgeeks.org/segment-tree-data-structure/", section: "Advanced Data Structures" },
  { id: "dsu", label: "Disjoint Set", desc: "Union-Find algorithm.", link: "https://www.geeksforgeeks.org/disjoint-set-data-structures/", section: "Advanced Data Structures" },

  // Problem Solving Techniques
  { id: "bruteforce", label: "Brute Force", desc: "Try all possibilities.", link: "https://www.geeksforgeeks.org/brute-force-approach-and-its-pros-and-cons/", section: "Problem Solving Techniques" },
  { id: "backtracking", label: "Backtracking", desc: "Explore all possibilities with pruning.", link: "https://www.geeksforgeeks.org/backtracking-algorithms/", section: "Problem Solving Techniques" },
  { id: "dp", label: "Dynamic Programming", desc: "Optimize with overlapping subproblems.", link: "https://www.geeksforgeeks.org/dynamic-programming/", section: "Problem Solving Techniques" },

  // Platforms to Practice
  { id: "leetcode", label: "LeetCode", desc: "Best for interview preparation.", link: "https://leetcode.com/", section: "Platforms to Practice" },
  { id: "gfg", label: "GeeksforGeeks", desc: "Learn and practice problems.", link: "https://www.geeksforgeeks.org/", section: "Platforms to Practice" },
  { id: "cn", label: "Coding Ninjas Studio", desc: "Guided problem-solving for beginners.", link: "https://www.codingninjas.com/studio", section: "Platforms to Practice" }
];

// Section X positions
const positionMap = {
  "Pick a Language": 0,
  "Programming Fundamentals": 300,
  "Basic Data Structures": 600,
  "Algorithmic Complexity": 900,
  "Sorting Algorithms": 1200,
  "Search Algorithms": 1500,
  "Tree Data Structures": 1800,
  "Graph Data Structures": 2100,
  "Advanced Data Structures": 2400,
  "Problem Solving Techniques": 2700,
  "Platforms to Practice": 3000
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
    minWidth: 120
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
    minWidth: 150
  }}>
    {data.label}
  </div>
);

export default function DSARoadmap() {
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
