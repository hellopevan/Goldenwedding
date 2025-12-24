import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  
  // Determine background color based on route
  const isDarkPage = location.pathname === '/vehicules' || location.pathname === '/transport-vip';
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {/* Background color transition overlay */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-[5]"
          initial={{ 
            backgroundColor: isDarkPage ? 'rgba(42, 42, 42, 0)' : 'rgba(245, 241, 232, 0)'
          }}
          animate={{ 
            backgroundColor: isDarkPage ? 'rgba(42, 42, 42, 0)' : 'rgba(245, 241, 232, 0)'
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        />
        
        {/* Page content with slide effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
