import React, { useState, useCallback } from "react";
import ReactFlow, { Background, Controls, Handle } from "reactflow";
import "reactflow/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Topics DATA for Competitive Programming
const topics = [
  // Pick a Language
  { id: "cpp", label: "C++ (recommended)", desc: "Fast, STL-rich — most used in contests.", link: "https://en.cppreference.com/w/", section: "Pick a Language" },
  { id: "python", label: "Python", desc: "Readable; good for rapid prototyping (slower).", link: "https://docs.python.org/3/tutorial/", section: "Pick a Language" },
  { id: "java", label: "Java", desc: "Robust standard library; used by many.", link: "https://docs.oracle.com/javase/tutorial/", section: "Pick a Language" },

  // Contest Strategy & Tools (Moved up here)
  { id: "templates", label: "Templates & Snippets", desc: "Prepared code for fast submissions.", link: "https://codeforces.com/blog/entry/18051", section: "Contest Strategy & Tools" },
  { id: "problem_tags", label: "Problem Classification", desc: "Tag-based practice (greedy, dp, graph).", link: "https://codeforces.com/problemset", section: "Contest Strategy & Tools" },
  { id: "time_manage", label: "Time Management", desc: "Which problems to attempt when.", link: "https://codeforces.com/blog/entry/156100", section: "Contest Strategy & Tools" },
  { id: "tools", label: "Local Tools & Debuggers", desc: "idf, gdb, online judges, custom tests.", link: "https://codeforces.com/blog/entry/6819", section: "Contest Strategy & Tools" },

  // Basics & Problem Solving
  { id: "fastio", label: "Fast I/O & Templates", desc: "Scanner/fast input and starter templates.", link: "https://codeforces.com/blog/entry/59606", section: "Basics & Problem Solving" },
  { id: "complexity", label: "Complexity Analysis", desc: "Big-O, time/space tradeoffs.", link: "https://www.bigocheatsheet.com/", section: "Basics & Problem Solving" },
  { id: "debugging", label: "Debugging & Testing", desc: "Local tests, assertions, dbg prints.", link: "https://codeforces.com/blog/entry/18051", section: "Basics & Problem Solving" },
  { id: "stl", label: "Standard Library (STL)", desc: "Vectors, sets, maps, algorithms.", link: "https://en.cppreference.com/w/cpp/container", section: "Basics & Problem Solving" },

  // Mathematics
  { id: "gcd", label: "GCD / LCM", desc: "Euclid algorithm; basics for many problems.", link: "https://cp-algorithms.com/algebra/gcd.html", section: "Mathematics" },
  { id: "sieve", label: "Primes & Sieve", desc: "Sieve of Eratosthenes and prime checks.", link: "https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html", section: "Mathematics" },
  { id: "modular", label: "Modular Arithmetic", desc: "Mod inverse, exponentiation, mod tricks.", link: "https://cp-algorithms.com/algebra/module-inverse.html", section: "Mathematics" },
  { id: "combinatorics", label: "Combinatorics", desc: "nCr, permutations, combinatorial identities.", link: "https://cp-algorithms.com/algebra/binomial-coefficients.html", section: "Mathematics" },

  // Core Data Structures
  { id: "arrays_strings", label: "Arrays & Strings", desc: "Basics and common operations.", link: "https://www.geeksforgeeks.org/array-data-structure/", section: "Core Data Structures" },
  { id: "heaps", label: "Heaps / Priority Queue", desc: "Kth, running medians, greedy helpers.", link: "https://en.cppreference.com/w/cpp/container/priority_queue", section: "Core Data Structures" },
  { id: "hashmaps", label: "Hashing / Hashmaps", desc: "Frequency maps, unordered_map usage.", link: "https://en.cppreference.com/w/cpp/container/unordered_map", section: "Core Data Structures" },
  { id: "fenwick", label: "Fenwick Tree (BIT)", desc: "Point update / prefix query.", link: "https://cp-algorithms.com/data_structures/fenwick.html", section: "Core Data Structures" },
  { id: "segtree", label: "Segment Tree", desc: "Range queries & lazy propagation.", link: "https://cp-algorithms.com/data_structures/segment_tree.html", section: "Core Data Structures" },
  { id: "dsu", label: "Disjoint Set (DSU)", desc: "Union-Find for components / Kruskal.", link: "https://cp-algorithms.com/data_structures/disjoint_set_union.html", section: "Core Data Structures" },

  // Algorithms & Techniques
  { id: "sorting", label: "Sorting & Order Statistics", desc: "Sorts, nth_element, custom comparators.", link: "https://en.cppreference.com/w/cpp/algorithm/sort", section: "Algorithms & Techniques" },
  { id: "binarysearch", label: "Binary Search (incl. on answer)", desc: "Classic search pattern.", link: "https://cp-algorithms.com/search/binary_search.html", section: "Algorithms & Techniques" },
  { id: "two_pointers", label: "Two Pointers", desc: "Useful for paired/interval problems.", link: "https://www.geeksforgeeks.org/two-pointers-technique/", section: "Algorithms & Techniques" },
  { id: "sliding_window", label: "Sliding Window", desc: "Subarray/subsequence problems.", link: "https://www.geeksforgeeks.org/window-sliding-techniques/", section: "Algorithms & Techniques" },
  { id: "divide_conquer", label: "Divide & Conquer", desc: "Split problem into subproblems.", link: "https://en.wikipedia.org/wiki/Divide_and_conquer_algorithm", section: "Algorithms & Techniques" },
  { id: "greedy", label: "Greedy Techniques", desc: "Local-optimum-first heuristics.", link: "https://cp-algorithms.com/greedy/", section: "Algorithms & Techniques" },

  // Graph Algorithms
  { id: "bfs", label: "BFS", desc: "Shortest path in unweighted graphs.", link: "https://cp-algorithms.com/graph/breadth-first-search.html", section: "Graph Algorithms" },
  { id: "dfs", label: "DFS", desc: "Traversal, backtracking, tree stuff.", link: "https://cp-algorithms.com/graph/depth-first-search.html", section: "Graph Algorithms" },
  { id: "dijkstra", label: "Dijkstra", desc: "Shortest paths for weighted graphs.", link: "https://cp-algorithms.com/graph/dijkstra.html", section: "Graph Algorithms" },
  { id: "toposort", label: "Topological Sort", desc: "DAG ordering & DP on DAG.", link: "https://cp-algorithms.com/graph/topological-sort.html", section: "Graph Algorithms" },
  { id: "mst", label: "MST (Kruskal/Prim)", desc: "Minimum spanning trees.", link: "https://cp-algorithms.com/graph/mst_kruskal.html", section: "Graph Algorithms" },
  { id: "scc", label: "SCC / Bridges / Articulation", desc: "Advanced connectivity topics.", link: "https://cp-algorithms.com/graph/cutpoints.html", section: "Graph Algorithms" },

  // Dynamic Programming
  { id: "dp_basics", label: "DP Basics", desc: "Memoization & tabulation patterns.", link: "https://cp-algorithms.com/dynamic_programming/", section: "Dynamic Programming" },
  { id: "knapsack", label: "Knapsack & Variants", desc: "0/1, unbounded knapsack families.", link: "https://www.geeksforgeeks.org/knapsack-problem/", section: "Dynamic Programming" },
  { id: "lis", label: "LIS (Longest Increasing Subsequence)", desc: "Classical DP with patience sorting.", link: "https://cp-algorithms.com/sequences/longest_increasing_subsequence.html", section: "Dynamic Programming" },
  { id: "bitmask_dp", label: "Bitmask DP", desc: "DP over subsets for small N.", link: "https://cp-algorithms.com/dynamic_programming/submask_enumeration.html", section: "Dynamic Programming" },

  // Advanced Topics
  { id: "string_algo", label: "String Algorithms (KMP/Z)", desc: "Pattern matching and suffix tools.", link: "https://cp-algorithms.com/string/", section: "Advanced Topics" },
  { id: "fft", label: "FFT & Convolution", desc: "Polynomial multiplication techniques.", link: "https://cp-algorithms.com/algebra/fft.html", section: "Advanced Topics" },
  { id: "geometry", label: "Geometry Basics", desc: "Vectors, convex hull, intersections.", link: "https://cp-algorithms.com/geometry/", section: "Advanced Topics" },

  // Practice Platforms
  { id: "codeforces", label: "Codeforces", desc: "Regular contests & problemset." , link: "https://codeforces.com/", section: "Practice Platforms" },
  { id: "atcoder", label: "AtCoder", desc: "Well-structured contests; beginner → expert.", link: "https://atcoder.jp/", section: "Practice Platforms" },
  { id: "leetcode", label: "LeetCode (Contests)", desc: "Interview-style problems & weekly contests.", link: "https://leetcode.com/contest/", section: "Practice Platforms" },
  { id: "spoj", label: "SPOJ / UVA", desc: "Classic problems for practice.", link: "https://www.spoj.com/", section: "Practice Platforms" }
];

// Section X positions
const positionMap = {
  "Pick a Language": 0,
  "Contest Strategy & Tools": 300,  // moved here
  "Basics & Problem Solving": 600,
  "Mathematics": 900,
  "Core Data Structures": 1200,
  "Algorithms & Techniques": 1500,
  "Graph Algorithms": 1800,
  "Dynamic Programming": 2100,
  "Advanced Topics": 2400,
  "Practice Platforms": 2700
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
    background: "#10b981",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    minWidth: 150
  }}>
    {data.label}
  </div>
);

export default function CompetitiveProgrammingRoadmap() {
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
    <div className="pt-24 pb-16 bg-gradient-to-br from-[#071124] via-[#092a4a] to-[#064b7a] min-h-screen text-white">
      {/* Fixed Back Button (adjusted for navbar) */}
      <div className="fixed top-20 left-8 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-white font-semibold shadow transition"
        >
          ← Back to Homepage
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-white font-semibold shadow transition mb-6"
        >
          ← Back to Homepage
        </Link>
      </div>
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
                className="bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Highlighted REFERENCE LINKS Section */}
      <div className="mt-10 p-4 bg-yellow-400 text-black font-bold text-center rounded-lg shadow-lg">
        <div>
          REFERENCE LINK 1 :{" "}
          <a
            href="https://youkn0wwho.academy/topic-list"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-700"
          >
            https://youkn0wwho.academy/topic-list
          </a>
        </div>
        <div>
          REFERENCE LINK 2 :{" "}
          <a
            href="https://usaco.guide/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-700"
          >
            https://usaco.guide/
          </a>
        </div>
      </div>
    </div>
  );
}
