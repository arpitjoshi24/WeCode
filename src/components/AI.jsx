import React, { useState, useCallback } from "react";
import ReactFlow, { Background, Controls, Handle } from "reactflow";
import "reactflow/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Topic Data
const topics = [
 // AI Fundamentals
 
  {
    id: "whatisai",
    label: "What is AI?",
    desc: "Understand artificial intelligence and its core principles.",
    link: "https://www.ibm.com/cloud/learn/what-is-artificial-intelligence",
    section: "Fundamentals"
  },
  {
    id: "typesai",
    label: "Types of AI",
    desc: "Narrow AI, General AI, Super AI explained.",
    link: "https://builtin.com/artificial-intelligence/types-of-artificial-intelligence",
    section: "Fundamentals"
  },
  {
    id: "aifields",
    label: "AI Fields",
    desc: "Explore ML, DL, NLP, CV, Robotics.",
    link: "https://www.geeksforgeeks.org/domains-of-artificial-intelligence/",
    section: "Fundamentals"
  },
  {
    id: "aiusecases",
    label: "AI Use Cases",
    desc: "Real-world applications of AI.",
    link: "https://www.simplilearn.com/tutorials/artificial-intelligence-tutorial/artificial-intelligence-applications",
    section: "Fundamentals"
  }
,

 // Math & Stats for AI
 { id: "linearalgebra", label: "Linear Algebra", desc: "Vectors, matrices, and operations for ML.", link: "https://www.khanacademy.org/math/linear-algebra", section: "MATHS" },
 { id: "probability", label: "Probability & Stats", desc: "Understand uncertainty and data distribution.", link: "https://www.khanacademy.org/math/statistics-probability", section: "MATHS" },
 { id: "calculus", label: "Calculus", desc: "Derivatives, gradients, partial derivatives.", link: "https://www.mathsisfun.com/calculus/index.html", section: "MATHS" },
 { id: "optimization", label: "Optimization", desc: "Gradient descent, loss functions in ML.", link: "https://towardsdatascience.com/optimization-in-machine-learning-7f3b7e3c34f6", section: "MATHS" },

 // Programming Essentials
 { id: "python", label: "Learn Python", desc: "The most used language in AI.", link: "https://www.learnpython.org/", section: "Essentials" },
 { id: "numpy", label: "NumPy", desc: "Numerical computing library for arrays and math.", link: "https://numpy.org/learn/", section: "Essentials" },
 { id: "pandas", label: "Pandas", desc: "Analyze, clean and manipulate data.", link: "https://pandas.pydata.org/docs/", section: "Essentials" },
 { id: "matplotlib", label: "Matplotlib", desc: "Plot graphs and visualize data.", link: "https://matplotlib.org/stable/gallery/index.html", section: "Essentials" },
 { id: "git", label: "Git & GitHub", desc: "Version control essentials.", link: "https://www.atlassian.com/git/tutorials", section: "Essentials" },
 { id: "jupyter", label: "Jupyter Notebooks", desc: "Interactive code + markdown notebook.", link: "https://jupyter.org/", section: "Essentials" },

 // Machine Learning
 { id: "mltypes", label: "Supervised vs Unsupervised", desc: "Classification, regression, clustering basics.", link: "https://scikit-learn.org/stable/tutorial/basic/tutorial.html", section: "ML" },
 { id: "mlalgos", label: "ML Algorithms", desc: "Linear Regression, KNN, SVM, Trees.", link: "https://scikit-learn.org/stable/supervised_learning.html", section: "ML" },
 { id: "modeltraining", label: "Model Training", desc: "Training, testing, validation processes.", link: "https://machinelearningmastery.com/train-test-split-for-evaluating-machine-learning-algorithms/", section: "ML" },
  { id: "sklearn", label: "Scikit-learn", desc: "Popular Python ML library.", link: "https://scikit-learn.org/stable/user_guide.html", section: "ML" },

 // Deep Learning
 { id: "neuralnets", label: "Neural Networks", desc: "Basics of perceptrons and MLP.", link: "https://www.ibm.com/topics/neural-networks", section: "DL" },
 { id: "activations", label: "Activation Functions", desc: "ReLU, Sigmoid, Tanh, Softmax etc.", link: "https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6", section: "DL" },
 { id: "backprop", label: "Backpropagation", desc: "Train deep nets with gradient descent.", link: "https://en.wikipedia.org/wiki/Backpropagation", section: "DL" },
 { id: "tf", label: "TensorFlow", desc: "Deep learning framework by Google.", link: "https://www.tensorflow.org/tutorials", section: "DL" },
 { id: "pytorch", label: "PyTorch", desc: "Flexible deep learning framework by Meta.", link: "https://pytorch.org/tutorials/", section: "DL" },
 { id: "cnn", label: "CNNs", desc: "Convolutional Neural Networks for images.", link: "https://cs231n.github.io/convolutional-networks/", section: "DL" },
 { id: "rnn", label: "RNNs & LSTMs", desc: "Sequence modeling for time series, text.", link: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/", section: "DL" },

 // Natural Language Processing
 { id: "textclean", label: "Text Preprocessing", desc: "Cleaning, tokenizing, removing stopwords.", link: "https://www.nltk.org/", section: "NLP" },
 { id: "wordembed", label: "Word Embeddings", desc: "Word2Vec, GloVe for semantic similarity.", link: "https://jalammar.github.io/illustrated-word2vec/", section: "NLP" },
 { id: "transformers", label: "Transformers & BERT", desc: "NLP models using attention.", link: "https://huggingface.co/transformers/", section: "NLP" },
 { id: "gpt", label: "GPT Models", desc: "Language generation with GPT family.", link: "https://platform.openai.com/docs", section: "NLP" },
 { id: "chatbots", label: "Chatbots", desc: "Rule-based and AI-based bot creation.", link: "https://www.ibm.com/cloud/learn/chatbots-explained", section: "NLP" },

 // Computer Vision
 { id: "imageclass", label: "Image Classification", desc: "Predict image categories using CNNs.", link: "https://www.tensorflow.org/tutorials/images/classification", section: "CV" },
 { id: "objdetect", label: "Object Detection", desc: "Detect & locate objects in images.", link: "https://opencv.org/", section: "CV" },
 { id: "augmentation", label: "Image Augmentation", desc: "Improve model robustness with transformations.", link: "https://www.tensorflow.org/tutorials/images/data_augmentation", section: "CV" },
 { id: "facerecog", label: "Face Recognition", desc: "Identify people using facial features.", link: "https://face-api.js.org/", section: "CV" },
 { id: "ocr", label: "OCR", desc: "Extract text from images.", link: "https://github.com/tesseract-ocr/tesseract", section: "CV" },
 { id: "yolo", label: "YOLO", desc: "Real-time object detection algorithm.", link: "https://pjreddie.com/darknet/yolo/", section: "CV" }
];


// X positions for sections
// X positions for sections
const positionMap = {
  Fundamentals: 0,
  MATHS: 200,
  Essentials:400,
  ML : 600,
  DL : 900,
  NLP: 1100,
  CV : 1300
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
      <div className="max-w-7xl mx-auto px-6 mb-6">
        {/* Fixed Back Button (adjusted for navbar) */}
        <div className="fixed top-20 left-8 z-50">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-white font-semibold shadow transition"
          >
            ← Back to Homepage
          </Link>
        </div>
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