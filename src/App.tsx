import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "./components/about";
import BackgroundObject from "./components/BackgroundObject";
import Contact from "./components/contact";
import Container from "./components/container";
import Education from "./components/education";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Project from "./components/ProjectShow/project";
import Skills from "./components/Skills/skills";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom cursor (optional)
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full pointer-events-none z-50 opacity-0 transition-opacity duration-300';
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 8 + 'px';
      cursor.style.top = e.clientY - 8 + 'px';
      cursor.style.opacity = '0.8';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      const existingCursor = document.getElementById('custom-cursor');
      if (existingCursor) {
        existingCursor.remove();
      }
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      <LoadingScreen />
      
      <motion.div 
        className="relative min-h-screen font-sans text-gray-300 overflow-x-hidden"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.8 }}
      >
        {/* Scroll Progress Bar */}
        <ScrollProgress />
        
        {/* Background Components */}
        <BackgroundObject />
        
        {/* Fixed Elements */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <Profile />
          
          {/* Content Sections */}
          <Container className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-32">
            <About />
            <Skills />
            <Project />
            <Education />
            <Experience />
            <Contact />
          </Container>
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
