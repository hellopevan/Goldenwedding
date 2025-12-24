import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Shield, Clock, Lock, Car, UserCheck, ChevronRight, Phone } from "lucide-react";
import { motion } from "motion/react";
import parkingVIPCars from "figma:asset/2182a5e633fc0d469fac447fb16b9d4a710c1c10.png";
import weddingCarHero from "figma:asset/6e897d68a39825979f9453ab12b42194231a1e02.png";
import g7Logo from "figma:asset/86ee35915206fbd18dff24940a2fde6cb309989a.png";
import maybachBlack from "figma:asset/0ff9a3086aef89b231c6a2e1724af84ae1f983e4.png";
import bodyguardsVIP from "figma:asset/d68223eed6682a322fd6092fa2f7548e62a33cc0.png";
import blackCarParking from "figma:asset/4510fd98bd1270465160a920356de86f7900cfdc.png";
import twoMaybachs from "figma:asset/49623b88a101b90d1a251cbbe4766bdc0d771710.png";

const carInterior = parkingVIPCars;
const weddingCar = weddingCarHero;

// Array of vehicle images for the carousel - ONLY these 2 images
const vehicleImages = [
  blackCarParking,
  twoMaybachs,
];

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
    <div className="min-h-screen w-full bg-[#2A2A2A] relative">
      <Header />
      
      {/* Hero - Dark theme */}
      <section className="pt-32 pb-20 relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={carInterior}
            alt="Service VIP"
            className="w-full h-full object-cover opacity-40 brightness-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A2A]/70 via-[#2A2A2A]/80 to-[#2A2A2A]" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          {/* Logo G7 - Bien visible */}
          <div className="flex justify-center mb-8">
            <img 
              src={g7Logo} 
              alt="Golden Transport G7" 
              className="h-50 md:h-44 w-auto drop-shadow-2xl"
            />
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F1E8] mb-6">
            Transport VIP & VTC
          </h1>
          <p className="text-lg text-[#F5F1E8]/80 max-w-2xl mx-auto mb-10">
            Excellence, discrétion et sécurité pour vos déplacements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                <MessageCircle className="w-5 h-5" />
                Demander un devis
              </Link>
            </Button>
            <Button size="xl" className="bg-[#F5F1E8]/10 text-[#F5F1E8] border border-[#F5F1E8]/30 hover:bg-[#F5F1E8]/20" asChild>
              <a href="tel:+33600000000">
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* VIP Section */}
      <section className="py-24 bg-[#2A2A2A]">
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
                  <feature.icon className="w-5 h-5 text-primary" />
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
      <section className="py-24 bg-[#2A2A2A]/50 relative overflow-hidden">
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
              <Link to="/vehicules">
                <Car className="w-5 h-5" />
                Découvrir toute notre flotte
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* VTC Section */}
      <section className="py-24 bg-[#2A2A2A]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
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
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
              <div className="absolute -bottom-6 -left-6 bg-primary text-[#1a1a1a] p-6 rounded-lg">
                <div className="font-serif text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
            Besoin d'un transport sécurisé ?
          </h2>
          <p className="text-[#1a1a1a]/90 text-lg max-w-xl mx-auto mb-10">
            Contactez-nous pour un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              className="bg-[#2A2A2A] text-[#F5F1E8] hover:bg-[#2A2A2A]/90"
              asChild
            >
              <Link to="/contact">
                <MessageCircle className="w-5 h-5" />
                Nous contacter
              </Link>
            </Button>
            <Button 
              size="xl" 
              variant="outline"
              className="border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-[#F5F1E8]"
              asChild
            >
              <Link to="/vehicules">
                Voir nos véhicules
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}