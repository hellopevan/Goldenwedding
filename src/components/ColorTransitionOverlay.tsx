import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function ColorTransitionOverlay() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevPath, setPrevPath] = useState(location.pathname);
  
  const isDarkPage = (path: string) => path === '/vehicules' || path === '/transport-vip';
  const wasDarkPage = isDarkPage(prevPath);
  const isNowDarkPage = isDarkPage(location.pathname);
  
  useEffect(() => {
    if (prevPath !== location.pathname) {
      setIsTransitioning(true);
      
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setPrevPath(location.pathname);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, prevPath]);
  
  // Only show overlay when transitioning between different color schemes
  const shouldShowOverlay = wasDarkPage !== isNowDarkPage;
  
  return (
    <AnimatePresence>
      {isTransitioning && shouldShowOverlay && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          initial={{ 
            background: wasDarkPage 
              ? 'linear-gradient(135deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0) 100%)'
              : 'linear-gradient(135deg, rgba(245, 241, 232, 0) 0%, rgba(245, 241, 232, 0) 100%)'
          }}
          animate={{ 
            background: isNowDarkPage
              ? 'linear-gradient(135deg, rgba(42, 42, 42, 1) 0%, rgba(30, 30, 30, 1) 100%)'
              : 'linear-gradient(135deg, rgba(245, 241, 232, 1) 0%, rgba(255, 251, 243, 1) 100%)'
          }}
          exit={{ 
            background: isNowDarkPage
              ? 'linear-gradient(135deg, rgba(42, 42, 42, 0) 0%, rgba(30, 30, 30, 0) 100%)'
              : 'linear-gradient(135deg, rgba(245, 241, 232, 0) 0%, rgba(255, 251, 243, 0) 100%)'
          }}
          transition={{ 
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {/* Golden shimmer effect during transition */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            style={{
              background: 'radial-gradient(circle at center, rgba(201, 169, 97, 0.2) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
