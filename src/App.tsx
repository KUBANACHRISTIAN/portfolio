import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import LoadingScreen from './components/ui/LoadingScreen';
import CustomCursor from './components/ui/CustomCursor';
import NotFound from './pages/NotFound';
import { useScrollProgress } from './hooks';

function ScrollProgress() {
  const progress = useScrollProgress();
  return <div id="scroll-progress" style={{ width: `${progress}%` }} />;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}
