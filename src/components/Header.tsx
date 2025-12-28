import { useState, useRef } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
// @ts-ignore - Temporary ignore for the logo import
import gwLogo from "../assets/4284da018276ff3ae046ab50d6d5ef6d59c172c5.png";

// Add TypeScript interfaces for the component props
interface NavItem {
  name: string;
  href: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });
  const { scrollY } = useScroll();
  
  // Smooth scroll animation for header
  const headerY = useTransform(scrollY, [0, 140], [0, -6]);
  
  // Determine if the current page should have a dark theme
  const isDarkPage = location.pathname === '/vehicules' || location.pathname === '/transport-vip';

  const navItems: NavItem[] = [
    { name: "Accueil", href: "/" },
    { name: "Véhicules", href: "/vehicules" },
    { name: "Services", href: "/services" },
    { name: "Transport VIP / VTC", href: "/transport-vip" },
  ];

  return (
    <motion.header
      ref={headerRef}
      className="sticky top-0 z-50 border-b relative overflow-hidden"
      style={{
        y: headerY,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{
          background: isDarkPage 
            ? 'linear-gradient(45deg, #2a2a2a 0%, #1a1a1a 100%)' 
            : 'linear-gradient(45deg, #ffffff 0%, #f8f8f8 100%)',
          opacity: 0.95,
        }}
        animate={{
          background: isDarkPage 
            ? [
                'linear-gradient(45deg, #2a2a2a 0%, #1a1a1a 100%)',
                'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
                'linear-gradient(225deg, #2a2a2a 0%, #1a1a1a 100%)',
                'linear-gradient(315deg, #2a2a2a 0%, #1a1a1a 100%)',
                'linear-gradient(45deg, #2a2a2a 0%, #1a1a1a 100%)',
              ]
            : [
                'linear-gradient(45deg, #ffffff 0%, #f8f8f8 100%)',
                'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                'linear-gradient(225deg, #ffffff 0%, #f8f8f8 100%)',
                'linear-gradient(315deg, #ffffff 0%, #f8f8f8 100%)',
                'linear-gradient(45deg, #ffffff 0%, #f8f8f8 100%)',
              ]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Glow effect */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(201, 169, 97, 0.4) 0%, transparent 50%)',
          transform: 'translateY(-50%)',
          height: '200%',
        }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      {/* Logo with enhanced animation */}
      <Link to="/" className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center flex-shrink-0 z-30 px-0 md:px-3">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { 
            scale: 1, 
            opacity: 1,
            transition: { 
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: 0.2
            }
          } : {}}
          whileHover={{ 
            scale: 1.05,
            transition: { 
              type: 'spring',
              stiffness: 400,
              damping: 10 
            }
          }}
          whileTap={{ 
            scale: 0.98,
            transition: { 
              type: 'spring',
              stiffness: 400,
              damping: 20 
            }
          }}
        >
          <img
            src={gwLogo}
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

          {/* Desktop Navigation - Centered with enhanced animations */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2 z-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }
                } : {}}
                whileHover={{ 
                  y: -2,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
              >
                <Link
                  to={item.href}
                  className={`font-medium relative group transition-colors duration-500 ${
                    location.pathname === item.href 
                      ? 'text-[#C9A961]' 
                      : isDarkPage ? 'text-[#F5F1E8]' : 'text-[#374151]'
                  }`}
                >
                  {item.name}
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-0.5 ${
                      location.pathname === item.href ? 'bg-[#C9A961]' : 'bg-transparent'
                    }`}
                    initial={{ width: location.pathname === item.href ? '100%' : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ 
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA - Right with enhanced animation */}
          <motion.div
            className="hidden md:flex items-center ml-auto z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.6, 
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }
            } : {}}
          >
            <motion.div
              whileHover={{ 
                scale: 1.03,
                transition: { 
                  type: 'spring',
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { 
                  type: 'spring',
                  stiffness: 400,
                  damping: 20
                }
              }}
            >
              <Button 
                variant="gold" 
                size="lg"
                className="relative overflow-hidden group"
                asChild
              >
                <Link to="/contact" className="relative">
                  <motion.span 
                    className="absolute inset-0 bg-white/20 rounded-md"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ 
                      opacity: [0, 0.2, 0],
                      scale: 2,
                      transition: { duration: 1 }
                    }}
                  />
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Contactez-nous
                  </span>
                </Link>
              </Button>
            </motion.div>
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