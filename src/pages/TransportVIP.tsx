import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Shield, Clock, Lock, Car, UserCheck, ChevronRight, Phone } from "lucide-react";
import { motion } from "motion/react";
import parkingVIPCars from "figma:asset/2182a5e633fc0d469fac447fb16b9d4a710c1c10.png";
import g7LogoNew from "figma:asset/bce009c2db394a74c4cd38140febfdf2abd7a3b1.png";
import blackCarParking from "figma:asset/4510fd98bd1270465160a920356de86f7900cfdc.png";
import twoMaybachs from "figma:asset/49623b88a101b90d1a251cbbe4766bdc0d771710.png";
import bodyguardsVIP from "figma:asset/d68223eed6682a322fd6092fa2f7548e62a33cc0.png";

const carInterior = parkingVIPCars;

const vipFeatures = [
  {
    icon: Car,
    title: "Véhicules Haut de Gamme",
    description: "Flotte premium avec vitres teintées, équipements de sécurité et confort absolu.",
  },
  {
    icon: UserCheck,
    title: "Gardes du Corps Formés & Discrets",
    description: "Personnel qualifié, formé aux techniques de protection rapprochée et d'intervention.",
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    description: "Service disponible jour et nuit, sept jours sur sept pour répondre à vos besoins.",
  },
  {
    icon: Lock,
    title: "Confidentialité Assurée",
    description: "Discrétion totale garantie. Vos informations personnelles restent strictement confidentielles.",
  },
];

const vtcServices = [
  {
    title: "Transfert Aéroport",
    description: "Accueil personnalisé avec suivi des vols en temps réel.",
  },
  {
    title: "Mise à Disposition",
    description: "Véhicule et chauffeur dédiés pour vos journées.",
  },
  {
    title: "Trajet Ponctuel",
    description: "Réservation à l'avance pour tout type de déplacement.",
  },
  {
    title: "Événement Business",
    description: "Transport pour séminaires, conférences et galas.",
  },
];

export default function TransportVIP() {
  return (
    <div className="min-h-screen w-full bg-transparent relative">
      {/* Hero - Dark theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0C]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={carInterior}
            alt="Service VIP"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Logo Section */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img 
                  src={g7LogoNew} 
                  alt="Golden Transport G7" 
                  className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl"
                />
              </motion.div>
            </div>
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Transport VIP & VTC
              </h1>
              
              <p className="font-sans text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                Excellence, discrétion et sécurité pour vos déplacements d'exception
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Button variant="hero" size="xl" asChild className="px-8 py-4 text-lg">
                    <Link to="/contact">
                      <MessageCircle className="w-6 h-6 mr-3" />
                      Demander un devis
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button
                    size="xl"
                    className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 px-8 py-4 text-lg backdrop-blur-sm"
                    asChild
                  >
                    <a href="tel:+33600000000">
                      <Phone className="w-6 h-6 mr-3" />
                      Appeler maintenant
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIP Section */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F1E8] mb-4">
              Service VIP
            </h2>
            <p className="text-[#F5F1E8]/60 max-w-xl mx-auto">
              Protection rapprochée et transport sécurisé pour personnalités et dirigeants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-4xl mx-auto">
            {vipFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-[#F5F1E8]/5 border border-[#F5F1E8]/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-[#C9A961]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#F5F1E8] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#F5F1E8]/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Section - Static */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F1E8] mb-6">
              Un Large Choix de Véhicules
            </h2>
            <p className="text-[#F5F1E8]/70 text-lg max-w-2xl mx-auto">
              Une flotte premium pour répondre à tous vos besoins de transport.
            </p>
          </div>

          {/* Static Images Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Main Image - Takes 2/3 of the width on desktop */}
            <div className="lg:col-span-2">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden group">
                <img
                  src={blackCarParking}
                  alt="Véhicule VIP - Parking"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </div>

            {/* Secondary Image - Takes 1/3 of the width on desktop */}
            <div className="lg:col-span-1">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden group">
                <img
                  src={twoMaybachs}
                  alt="Mercedes Maybach VIP"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                <MessageCircle className="w-5 h-5" />
                Nous Contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* VTC Section */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C9A961] text-sm font-medium tracking-wider uppercase mb-4 block">
                Service VTC
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F1E8] mb-6">
                Transport Premium
              </h2>
              <p className="text-[#F5F1E8]/70 leading-relaxed mb-8">
                Un service de transport classique mais d'exception. Formules rapides, 
                véhicules haut de gamme et professionnalisme à chaque trajet.
              </p>
              
              <div className="space-y-4">
                {vtcServices.map((service) => (
                  <div key={service.title} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-[#F5F1E8]">{service.title}</h4>
                      <p className="text-[#F5F1E8]/50 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={bodyguardsVIP}
                  alt="Service VTC"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-black/35 backdrop-blur-md border border-white/10 text-[#F5F1E8] p-6 rounded-xl shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
                <div className="font-serif text-3xl font-bold text-[#C9A961]">24/7</div>
                <div className="text-sm text-[#F5F1E8]/80">Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto text-center">
          <div className="relative mx-auto max-w-5xl rounded-[32px] bg-gradient-to-b from-black/40 via-black/25 to-black/30 backdrop-blur-md shadow-[0_30px_110px_rgba(0,0,0,0.60)] px-6 py-12 md:px-12 md:py-14 overflow-hidden">
            <div className="absolute -top-32 -right-24 w-[420px] h-[420px] bg-[#C9A961]/16 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-24 w-[520px] h-[520px] bg-[#C9A961]/10 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F1E8] mb-5">
                Besoin d'un transport sécurisé ?
              </h2>
              <p className="text-[#F5F1E8]/75 text-lg max-w-2xl mx-auto mb-10">
                Dites-nous vos contraintes (horaires, itinéraire, niveau de discrétion). Nous vous répondons rapidement avec une proposition claire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    <MessageCircle className="w-5 h-5" />
                    Demander un devis
                  </Link>
                </Button>
                <Button
                  size="xl"
                  className="bg-white/5 text-[#F5F1E8] border border-white/15 hover:bg-white/10"
                  asChild
                >
                  <a href="tel:+33600000000">
                    Appeler maintenant
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}