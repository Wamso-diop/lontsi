import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import ArticlePage from './components/ArticlePage';
import WhatsAppButton from './components/WhatsAppButton';

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Certifications />
    <Testimonials />
    <Blog />
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0c0a2e] text-white min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
