import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import eiffelCouple from "figma:asset/26b2222f0e369e3ba49f896e73d3bb4511d37e94.png";
import luxuryCarInterior from "figma:asset/3ded3523e4898196a073dd5d1d3968d52411ab48.png";
import brideWithMercedes from "figma:asset/be46dc1cf4993d58a3fd6428f1219a32073bdf5d.png";
import gwagonPhotographer from "figma:asset/7d3d7e3d20159bbf1ae31fd2011b8f51cbd7b776.png";

const slides = [
  {
    image: luxuryCarInterior,
    title: "Élégance & Prestige",
    subtitle: "Des véhicules d'exception pour votre jour J",
    cta: "Découvrir nos véhicules",
    href: "/vehicules",
  },
  {
    image: brideWithMercedes,
    title: "Passion & Raffinement",
    subtitle: "Vivez un moment unique avec nos véhicules d'exception",
    cta: "Réserver maintenant",
    href: "/contact",
  },
  {
    image: eiffelCouple,
    title: "Moments Inoubliables",
    subtitle: "Créez des souvenirs mémorables avec nos services",
    cta: "Nos prestations",
    href: "/services",
  },
  {
    image: gwagonPhotographer,
    title: "Votre Mariage de Rêve",
    subtitle: "Un accompagnement complet de A à Z",
    cta: "Nos services mariage",
    href: "/services",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const loadedRef = useRef<Record<number, boolean>>({});
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    loadedRef.current = loaded;
  }, [loaded]);

  const markLoaded = useCallback((index: number) => {
    setLoaded((prev) => {
      if (prev[index]) return prev;
      return { ...prev, [index]: true };
    });
  }, []);

  const preloadSlide = useCallback(
    (index: number) => {
      if (loadedRef.current[index]) return;
      const img = new Image();
      img.src = slides[index]?.image;
      img.onload = async () => {
        try {
          // decode() prevents swapping to a slide whose bytes are loaded but not yet decoded
          // (which can look like a blank flash on large images)
          if (typeof img.decode === "function") {
            await img.decode();
          }
        } catch {
          // ignore
        }
        markLoaded(index);
      };
      img.onerror = () => markLoaded(index);
    },
    [markLoaded]
  );

  useEffect(() => {
    slides.forEach((_, idx) => preloadSlide(idx));
  }, [preloadSlide]);

  useEffect(() => {
    preloadSlide((currentSlide + 1) % slides.length);
    preloadSlide((currentSlide + 2) % slides.length);

    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % slides.length;
        if (!loadedRef.current[next]) {
          preloadSlide(next);
          return prev;
        }
        return next;
      });
    }, 5000);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [currentSlide, preloadSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length;
      if (!loadedRef.current[next]) {
        preloadSlide(next);
        return prev;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const next = (prev - 1 + slides.length) % slides.length;
      if (!loadedRef.current[next]) {
        preloadSlide(next);
        return prev;
      }
      return next;
    });
  };

  return (
    <div className="relative h-[600px] lg:h-[700px] overflow-hidden bg-black">
      <AnimatePresence mode="sync">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: index === 0 ? "50% 25%" : "center" }}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  onLoad={() => markLoaded(index)}
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              
              <div className="relative h-full flex items-center justify-center text-center">
                <div className="container mx-auto px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                      {slide.subtitle}
                    </p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Button variant="hero" size="xl" asChild>
                        <Link to={slide.href}>
                          {slide.cta}
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Arrows - Bottom */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center gap-4 z-10">
        <motion.button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
          aria-label="Next slide"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-[#C9A961] w-8"
                : "bg-white/50 hover:bg-white/70 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}