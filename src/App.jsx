import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Passwords from './components/Passwords'
import About from './components/About'
import Footer from './components/Footer';

function App() {
  

  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);
  const [direction, setDirection] = useState(1); // 1: right, -1: left
  const routeOrder = ['/', '/passwords', '/about'];

  React.useEffect(() => {
    const prevIdx = routeOrder.indexOf(prevPath);
    const currIdx = routeOrder.indexOf(location.pathname);
    if (prevIdx !== -1 && currIdx !== -1) {
      setDirection(currIdx > prevIdx ? 1 : -1);
    }
    setPrevPath(location.pathname);
  }, [location.pathname]);

  const variants = {
    initial: (dir) => ({
      opacity: 0,
      x: dir === 1 ? 120 : -120
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir === 1 ? -120 : 120,
      transition: { duration: 0.3, ease: 'easeInOut' }
    })
  };

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <>
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: '100vh' }}
            >
              <Home />
            </motion.div>
          } />
          <Route path="/passwords" element={
            <motion.div
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: '100vh' }}
            >
              <Passwords />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ minHeight: '100vh' }}
            >
              <About />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />

    </>
  )
}

export default App
 