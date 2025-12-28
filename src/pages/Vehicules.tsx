import { SectionTitle } from "../components/SectionTitle";
import { PriceIndicator } from "../components/PriceIndicator";
import { Button } from "../components/ui/button";
import { Users, Sparkles, MessageCircle, Sofa, Music, Wind, UserCircle, Flower2, Crown, Car, Shield, Mountain, Package, Star, Zap, Gem } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import weddingCarHero from "figma:asset/6e897d68a39825979f9453ab12b42194231a1e02.png";
import maybachBlack from "figma:asset/0ff9a3086aef89b231c6a2e1724af84ae1f983e4.png";
import rollsRoycePhantom from "figma:asset/73ebab3648dde08f0af6ed4376d784101fe2f8fd.png";
import mercedesGWagon from "figma:asset/41cb0eaf4d26299cebdb2286d7faf2017f64e2c8.png";
import lamborghiniUrus from "figma:asset/d392dff1deaed2da4cc2674bf75921c7d5e4ccdc.png";
import mercedesClasseE from "figma:asset/80f7a2ab05bb5e5a9c8f3ae8e41075747ade16d8.png";
import lamborghiniUrusBlack from "figma:asset/b6f81d2061cbc585cce61f654d63bd633084d30a.png";
import mercedesGLSMaybach from "figma:asset/8e363c33d833ed6fe9f7704d74d8a75511ee200e.png";
import bmwM760 from "figma:asset/c76ff929fa3d904cfd53eecfd9367f30b7f4c564.png";
import rollsRoycePhantomBlack from "figma:asset/d7ec3423f8d4ed39e1e402ace1633f5d2997f318.png";

const weddingCar = weddingCarHero;
const maybachCarImage = maybachBlack;
const heroBackground = lamborghiniUrus;

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-50px" }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-100px" }
};

interface Vehicle {
  name: string;
  image: string;
  seats: number;
  features: { text: string; icon: string }[];
  priceLevel: 1 | 2 | 3 | 4 | 5;
}

const vehicles: Vehicle[] = [
  {
    name: "Rolls-Royce Ghost",
    image: rollsRoycePhantom,
    seats: 4,
    features: [
      { text: "Luxe inégalé", icon: "crown" },
      { text: "Intérieur haut de gamme", icon: "sofa" },
      { text: "Confort exceptionnel", icon: "wind" },
    ],
    priceLevel: 5,
  },
  {
    name: "BMW M760",
    image: bmwM760,
    seats: 4,
    features: [
      { text: "571 chevaux de puissance", icon: "zap" },
      { text: "Design sportif élégant", icon: "car" },
      { text: "Luxe et performance", icon: "star" },
    ],
    priceLevel: 3,
  },
  {
    name: "Mercedes Classe E",
    image: mercedesClasseE,
    seats: 4,
    features: [
      { text: "Design élégant", icon: "star" },
      { text: "Confort raffiné", icon: "sofa" },
      { text: "Technologie avancée", icon: "zap" },
    ],
    priceLevel: 1,
  },
  {
    name: "Lamborghini Urus",
    image: lamborghiniUrusBlack,
    seats: 4,
    features: [
      { text: "Performances exceptionnelles", icon: "zap" },
      { text: "Design sportif luxueux", icon: "gem" },
      { text: "SUV super-sportif", icon: "car" },
    ],
    priceLevel: 4,
  },
  {
    name: "Mercedes-Maybach",
    image: maybachCarImage,
    seats: 4,
    features: [
      { text: "Confort ultime", icon: "sofa" },
      { text: "Décoration florale incluse", icon: "flower" },
      { text: "Prestige absolu", icon: "crown" },
    ],
    priceLevel: 4,
  },
  {
    name: "Mercedes GLS Maybach",
    image: mercedesGLSMaybach,
    seats: 4,
    features: [
      { text: "Luxe et espace ultime", icon: "crown" },
      { text: "Confort de première classe", icon: "sofa" },
      { text: "Technologie premium", icon: "star" },
    ],
    priceLevel: 4,
  },
  {
    name: "Rolls-Royce Phantom",
    image: rollsRoycePhantomBlack,
    seats: 5,
    features: [
      { text: "Summum du luxe automobile", icon: "crown" },
      { text: "Raffinement absolu", icon: "gem" },
      { text: "Prestige incomparable", icon: "star" },
    ],
    priceLevel: 4,
  },
  {
    name: "Mercedes Classe S",
    image: weddingCar,
    seats: 4,
    features: [
      { text: "Intérieur cuir Nappa", icon: "sofa" },
      { text: "Système audio Burmester", icon: "music" },
      { text: "Climatisation 4 zones", icon: "wind" },
    ],
    priceLevel: 2,
  },
  {
    name: "Mercedes Classe G",
    image: mercedesGWagon,
    seats: 5,
    features: [
      { text: "Puissance tout-terrain", icon: "mountain" },
      { text: "Design iconique", icon: "shield" },
      { text: "Espace et polyvalence", icon: "package" },
    ],
    priceLevel: 3,
  },
];

function VehicleCardWithColor({ vehicle, index }: { vehicle: Vehicle; index: number }) {
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      sofa: Sofa,
      music: Music,
      sparkles: Sparkles,
      wind: Wind,
      user: UserCircle,
      flower: Flower2,
      crown: Crown,
      car: Car,
      shield: Shield,
      mountain: Mountain,
      package: Package,
      star: Star,
      zap: Zap,
      gem: Gem,
    };
    const IconComponent = icons[iconName] || Sparkles;
    return <IconComponent className="w-4 h-4 text-[#C9A961] flex-shrink-0" />;
  };

  return (
    <motion.div
      className="opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
      variants={fadeInUp}
    >
      <div className="group bg-gradient-to-br from-[#1a1a1a] to-[#2A2A2A] rounded-2xl overflow-hidden border border-[#C9A961]/20 hover:border-[#C9A961]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C9A961]/10">
        <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 ${ 
              vehicle.name === "Mercedes Classe G" ? "object-[50%_60%]" : 
              vehicle.name === "Mercedes Classe E" ? "object-[50%_70%]" :
              vehicle.name === "BMW M760" ? "object-[50%_45%]" : ""
            }`}
          />
          {/* Gradient overlay pour améliorer le contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 p-[0px]" />
          
          <div className="absolute top-4 right-4">
            <PriceIndicator 
              level={vehicle.priceLevel} 
              size="md" 
              className="bg-[#1a1a1a]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#C9A961]/30" 
            />
          </div>
        </div>
        
        <div className="p-6 bg-gradient-to-b from-[#2A2A2A] to-[#1a1a1a]">
          <h3 className="font-serif text-2xl font-semibold text-[#F5F1E8] mb-4 group-hover:text-[#C9A961] transition-colors duration-300">
            {vehicle.name}
          </h3>
          
          <div className="flex items-center gap-4 mb-5 text-[#F5F1E8]/60">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#C9A961]" />
              <span className="text-sm">{vehicle.seats} places</span>
            </div>
          </div>

          <ul className="space-y-2.5 mb-6">
            {vehicle.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-[#F5F1E8]/70">
                {getIcon(feature.icon)}
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          <Button 
            variant="gold" 
            size="default" 
            className="w-full group-hover:shadow-lg group-hover:shadow-[#C9A961]/20 transition-shadow" 
            asChild
          >
            <Link to="/contact">
              <MessageCircle className="w-4 h-4" />
              Réserver ce véhicule
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Vehicules() {
  return (
    <div className="min-h-screen w-full bg-transparent relative">
      {/* Hero */}
      <section className="pt-32 pb-20 relative min-h-[40vh] flex items-center z-10">
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt="Nos Véhicules"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2A2A2A]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16 lg:py-24 bg-transparent relative z-10">
        <div className="container mx-auto">
          <div className="mb-12 lg:mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#C9A961]">
              Nos Véhicules
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#F5F1E8]/70">
              Des véhicules sélectionnés avec soin pour vous offrir le meilleur du luxe.
            </p>
            <div className="mt-6 w-20 h-1 bg-[#C9A961] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <VehicleCardWithColor key={vehicle.name} vehicle={vehicle} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-transparent relative z-10">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F1E8] mb-6">
            Vous ne trouvez pas votre bonheur ?
          </h2>
          <p className="text-[#F5F1E8]/80 text-lg max-w-xl mx-auto mb-10">
            Contactez-nous pour discuter de vos besoins spécifiques.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              <MessageCircle className="w-5 h-5" />
              Nous contacter
            </Link>
          </Button>
        </div>
      </section>

      </div>
  );
}
