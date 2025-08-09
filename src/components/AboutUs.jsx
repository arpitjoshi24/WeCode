// AboutUs.jsx
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const features = [
    { name: 'Motivation', description: 'Inspiring and motivating students to achieve their full potential.' },
    { name: 'Environment', description: 'Fostering a supportive and collaborative community where everyone can thrive.' },
    { name: 'Professional Staff', description: 'Learning from the best and growing alongside accomplished peers.' },
    { name: 'Strong Alumni Network', description: 'Connecting with a powerful network of professionals who have made their mark.' },
  ];
  
  const stats = [
    { label: "Members", value: "350+" },
    { label: "Events", value: "10+" },
    { label: "Placements", value: "100+" },
    { label: "Years of Experience", value: "6+" },
  ];

  return (
    <div id="about-us" className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            About Us
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
            Welcome to We Code, where tech meets excellence! As the biggest and most vibrant club in the college, we are a passionate community of students on a mission to ignite the tech culture and empower our peers to reach new heights. Our core values revolve around fostering a love for coding and honing cutting-edge skills. We are here to inspire and motivate you every step of the way, providing a platform to learn from the best and grow alongside accomplished peers who have already made their mark in the field. Join us to unlock your potential, code, create, design, and conquer together!
          </p>
        </motion.div>

        <div className="mt-16 text-center">
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-3xl font-bold text-white"
          >
            Our Achievements
          </motion.h3>
        </div>
        
        {/* Stats Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              className="bg-white/10 rounded-lg shadow-md p-4 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
              <p className="mt-1 text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-3xl font-bold text-white"
          >
            What we offer
          </motion.h3>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              className="bg-white/10 rounded-lg shadow-md p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="flex justify-center items-center h-16 w-16 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] rounded-full mx-auto mb-4 shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="mt-2 text-lg font-semibold text-white text-center">{feature.name}</h4>
              <p className="mt-2 text-white/80 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
