import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Esaie from './components/Essaie';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
      
      

    </div>
  );
}

export default App;