import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
export default App;

