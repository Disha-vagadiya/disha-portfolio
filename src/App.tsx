import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device is desktop
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Soft elastic follow lag for the ring
  useEffect(() => {
    if (isMobile) return;
    let frameId: number;
    const followCursor = () => {
      setRingPos(prev => {
        const dx = cursorPos.x - prev.x;
        const dy = cursorPos.y - prev.y;
        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16
        };
      });
      frameId = requestAnimationFrame(followCursor);
    };
    followCursor();
    return () => cancelAnimationFrame(frameId);
  }, [cursorPos, isMobile]);

  return (
    <ThemeProvider>
      <div className="app">
        {/* Custom Premium Desktop Cursor */}
        {!isMobile && (
          <>
            <div
              className="custom-cursor"
              style={{ left: cursorPos.x, top: cursorPos.y }}
            />
            <div
              className="custom-cursor-ring"
              style={{ left: ringPos.x, top: ringPos.y }}
            />
          </>
        )}

        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
