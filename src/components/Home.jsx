import React from 'react';
import saitejapp from '../assets/saitejapp.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary text-center">
      <motion.img
        src={profile}
        alt="SaiTeja Vemula"
        className="w-40 h-40 rounded-full shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.h1 className="text-4xl font-bold mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>SaiTeja Vemula</motion.h1>
      <motion.p className="mt-2 text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        Software Engineer | DevOps Enthusiast | Cloud Engineer
      </motion.p>
      <div className="mt-4 space-x-4">
        <a href="https://github.com/saiteja9900608" target="_blank" className="text-blue-800 underline">GitHub</a>
        <a href="https://www.linkedin.com/in/saiteja-vemula-116638207/" target="_blank" className="text-blue-800 underline">LinkedIn</a>
      </div>
    </section>
  );
};
export default Home;

