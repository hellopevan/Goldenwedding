import { Button } from "../components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Instagram } from "lucide-react";
import { motion } from "motion/react";
import weddingCoupleImg from "figma:asset/732d70fcee8373cdd4a383e6ee27dfa71a22e947.png";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-50px" }
};

const shimmer = {
  initial: { backgroundPosition: "-100% 0" },
  animate: { 
    backgroundPosition: "200% 0",
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export default function Contact() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Hero Section with Motion */}
      <motion.section
        className="pt-32 pb-20 bg-[#F5F1E8] relative overflow-hidden min-h-[40vh] flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background image behind title */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${weddingCoupleImg})` }}
        />
        
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2A2A2A] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contactez-nous
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Prêt à réaliser votre projet ? Parlons-en ensemble.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info - Left Side */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2A2A2A] mb-6">
                  Nos Coordonnées
                </h2>
              </motion.div>

              <motion.div 
                className="space-y-6"
                initial="initial"
                whileInView="animate"
                variants={staggerContainer}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-start gap-4 bg-white p-6 rounded-xl card-shadow hover:shadow-lg transition-shadow relative overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 relative z-10">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-serif font-semibold text-[#2A2A2A] mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/33624762144" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      +33 06 24 76 21 44
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 bg-white p-6 rounded-xl card-shadow hover:shadow-lg transition-shadow relative overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 relative z-10">
                    <Instagram className="w-5 h-5 text-primary"/>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-serif font-semibold text-[#2A2A2A] mb-1">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/goldenweddingparis/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      @goldenweddingparis
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 bg-white p-6 rounded-xl card-shadow hover:shadow-lg transition-shadow relative overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 relative z-10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-serif font-semibold text-[#2A2A2A] mb-1">Adresse</h3>
                    <p className="text-gray-600">46 Rue Hoche, 92400 Courbevoie</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Map - Right Side */}
            <motion.div 
              className="h-full min-h-[600px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="h-full rounded-xl overflow-hidden card-shadow sticky top-24">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.9346084848545!2d2.251827476873584!3d48.896771671332514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66598e75e1e95%3A0x7e3f7a5b4c5d8e9f!2s46%20Rue%20Hoche%2C%2092400%20Courbevoie%2C%20France!5e0!3m2!1sfr!2sfr!4v1702467891234!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Golden Wedding - 46 Rue Hoche, 92400 Courbevoie"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}