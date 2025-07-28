import React from 'react';
import profile from '../assets/saitejapp.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary text-center py-10">
      <motion.img
        src={profile}
        alt="SaiTeja Vemula"
        className="w-40 h-40 rounded-full shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-4xl font-bold mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        SaiTeja Vemula
      </motion.h1>

      <motion.p
        className="mt-2 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Software Engineer | DevOps Enthusiast | Cloud Engineer
      </motion.p>

      <div className="mt-4 space-x-4">
        <a href="https://github.com/saiteja9900608" target="_blank" className="text-blue-800 underline">GitHub</a>
        <a href="https://www.linkedin.com/in/saiteja-vemula-116638207/" target="_blank" className="text-blue-800 underline">LinkedIn</a>
      </div>

      {/* 🔹 Profile Summary */}
      <motion.div
        className="max-w-3xl mt-10 px-4 text-gray-800 text-lg text-justify"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        I am a passionate software engineer focused on building innovative and scalable solutions.
        With hands-on experience in full-stack development, DevOps workflows, and cloud platforms,
        I thrive on turning complex problems into elegant user-centric applications.
        I'm enthusiastic about contributing to high-impact projects and growing within collaborative,
        forward-thinking teams.
      </motion.div>

      {/* 🎓 Education */}
      <motion.div
        className="mt-10 px-4 max-w-3xl text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Education</h2>
        <p className="text-gray-700">
          <span className="font-semibold">B.Tech – Computer Science and Engineering</span><br />
          Chaitanya Deemed to be University<br />
          CGPA: 9.3 | Graduated: 2025
        </p>
      </motion.div>
    </section>
  );
};

export default Home;
