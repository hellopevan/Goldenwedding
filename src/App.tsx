import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { ScrollToTop } from "./components/ScrollToTop";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import Index from "./pages/Index";
import Vehicules from "./pages/Vehicules";
import Services from "./pages/Services";
import TransportVIP from "./pages/TransportVIP";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { AppLayout } from "./components/AppLayout";

function AnimatedRoutes() {
  const location = useLocation();
  const { setTheme } = useTheme();
  const darkRoutes = ['/vehicules', '/transport-vip'];
  const isDark = darkRoutes.includes(location.pathname);

  useEffect(() => {
    setTheme(isDark ? 'dark' : 'light');
  }, [location, setTheme]);

  return (
    <AppLayout isDark={isDark}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Index />
            </motion.div>
          } />
          <Route path="/vehicules" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Vehicules />
            </motion.div>
          } />
          <Route path="/services" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Services />
            </motion.div>
          } />
          <Route path="/transport-vip" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <TransportVIP />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Contact />
            </motion.div>
          } />
          <Route path="*" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <NotFound />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </AppLayout>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <BrowserRouter>
        <Toaster position="top-center" />
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
