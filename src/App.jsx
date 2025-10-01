import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import Skills from './components/Skills'
import ProjectDeck from './components/ProjectDeck'
import TerminalContact from './components/TerminalContact'
import ProjectsShowcase from './components/ProjectsShowcase'
import Footer from './components/Footer'
import VerticalSplitSection from './components/VerticalSplitSection'

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Skills />
      <TerminalContact />
      {!isMobile && <VerticalSplitSection />}
      <ProjectDeck />
      <Footer/>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsShowcase />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App