import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import logo from "figma:asset/4284da018276ff3ae046ab50d6d5ef6d59c172c5.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Determine si la page actuelle devrait etre noir ou blanche - essayer d'organiser un peu mieux pour plus de fluidité
  const isDarkPage = location.pathname === '/vehicules' || location.pathname === '/transport-vip';

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Véhicules", href: "/vehicules" },
    { name: "Services", href: "/services" },
    { name: "Transport VIP / VTC", href: "/transport-vip" },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-md border-b shadow-sm relative"
      style={{
        backgroundColor: isDarkPage ? 'rgba(42, 42, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: isDarkPage ? 'rgba(245, 241, 232, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        backgroundColor: isDarkPage ? 'rgba(42, 42, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: isDarkPage ? 'rgba(245, 241, 232, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      }}
      transition={{ 
        y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        backgroundColor: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        borderColor: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Logo - ABSOLUMENT tout à gauche - collé au bord du viewport */}
      <Link to="/" className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center flex-shrink-0 z-30">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={logo}
            alt="Golden Wedding"
            className="h-56 w-auto"
            style={{
              filter: isDarkPage ? 'brightness(1.1) contrast(1.1)' : 'brightness(1) contrast(1)',
            }}
          />
        </motion.div>
      </Link>

      <div className="w-full max-w-[1400px] mx-auto relative px-4">
        <div className="flex items-center justify-between h-20">
          {/* Spacer for logo */}
          <div className="w-48 md:w-64 flex-shrink-0"></div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2 z-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="font-medium relative group transition-colors duration-500"
                  style={{
                    color: isDarkPage ? '#F5F1E8' : '#374151',
                  }}
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-[#C9A961]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA - Right */}
          <motion.div
            className="hidden md:flex items-center ml-auto z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                <MessageCircle className="w-4 h-4" />
                Nous contacter
              </Link>
            </Button>
          </motion.div>

          {/* Mobile Menu Button - Right */}
          <button
            className="md:hidden p-2 flex-shrink-0 ml-auto z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transition-colors duration-500" style={{ color: isDarkPage ? '#F5F1E8' : '#374151' }} />
            ) : (
              <Menu className="w-6 h-6 transition-colors duration-500" style={{ color: isDarkPage ? '#F5F1E8' : '#374151' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t px-4 relative z-[60] bg-inherit"
              style={{
                borderColor: isDarkPage ? 'rgba(245, 241, 232, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                backgroundColor: isDarkPage ? 'rgba(42, 42, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)',
              }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className="hover:text-[#C9A961] transition-colors px-2 py-1 block"
                      style={{
                        color: isDarkPage ? '#F5F1E8' : '#374151',
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="pt-4 border-t"
                  style={{
                    borderColor: isDarkPage ? 'rgba(245, 241, 232, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Button variant="gold" className="w-full" asChild>
                    <Link to="/contact">
                      <MessageCircle className="w-4 h-4" />
                      Nous contacter
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}