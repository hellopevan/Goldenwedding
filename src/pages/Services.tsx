import { SectionTitle } from "../components/SectionTitle";
import { PriceIndicator } from "../components/PriceIndicator";
import { Button } from "../components/ui/button";
import { MessageCircle, Check, Camera, Palette, Gift, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import weddingCoupleImg from "figma:asset/732d70fcee8373cdd4a383e6ee27dfa71a22e947.png";
import weddingCarHero from "figma:asset/6e897d68a39825979f9453ab12b42194231a1e02.png";
import eiffelCouple from "figma:asset/26b2222f0e369e3ba49f896e73d3bb4511d37e94.png";
import robeDeSoireeImg from "figma:asset/0fae296ad32778ccd1445490f818a153cd903426.png";
import brideMakeupImg from "figma:asset/db40ce69c16363ff128a604a0e6ea59a5c39e1af.png";
import cameraGimbalImg from "figma:asset/9b2f10312ace5cadc910628683526b74b45e5f76.png";
import coupleChateauHero from "figma:asset/298a3e6aeec302c4ad4554b1abc020915b4d52e9.png";
import weddingDressNew from "figma:asset/f61848f9cd24d6a673f843a49e14bfe2d79e4b96.png";
import newServicesHero from "figma:asset/7872430d1b243fb5e87d71d9e72434ca86b8c0de.png";

const serviceDress = weddingDressNew;
const serviceMakeupNew = brideMakeupImg;
const weddingDance = cameraGimbalImg;
const weddingCoupleChateau = coupleChateauHero;
const weddingCar = weddingCarHero;

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const services = [
  {
    id: 1,
    title: "Robe de Soirée",
    description: "Une sélection de robes de soirée élégantes pour les événements les plus prestigieux. Nos créations allient raffinement et confort pour vous sublimer.",
    image: serviceDress,
    priceLevel: 2 as const,
    features: [
      "Large choix de modèles",
      "Retouches incluses",
      "Essayage sur rendez-vous",
      "Conseils personnalisés",
    ],
  },
  {
    id: 2,
    title: "Coiffure & Maquillage",
    description: "Nos experts beauté se déplacent chez vous pour vous sublimer le jour J. Un service personnalisé pour être parfaite en toute occasion.",
    image: serviceMakeupNew,
    priceLevel: 2 as const,
    features: [
      "Essai coiffure disponible",
      "Maquillage longue tenue",
      "Coiffure sur mesure",
      "Service professionnel",
    ],
  },
  {
    id: 3,
    title: "Photographie & Vidéo",
    description: "Immortalisez chaque instant avec nos photographes et vidéastes professionnels. Des souvenirs qui durent toute une vie.",
    image: weddingDance,
    priceLevel: 3 as const,
    features: [
      "Reportage complet",
      "Album photo premium",
      "Film cinématique",
      "Qualité professionnelle",
    ],
  },
];

const additionalServices = [
  {
    title: "Photobooth",
    description: "Animation photo interactive pour vos invités avec impressions instantanées",
    priceLevel: 1 as const,
    icon: Camera,
    image: weddingDance,
  },
  {
    title: "Tapis Rouge",
    description: "Installation complète avec drapeau présidentiel pour une arrivée spectaculaire",
    priceLevel: 1 as const,
    icon: Star,
    image: weddingCoupleChateau,
  },
  {
    title: "Plaques Personnalisées",
    description: "Plaques d'immatriculation personnalisées pour le jour J",
    priceLevel: 1 as const,
    icon: Palette,
    image: weddingCar,
  },
  {
    title: "Décoration Florale",
    description: "Bouquets et compositions florales sur mesure pour sublimer vos véhicules",
    priceLevel: 1 as const,
    icon: Gift,
    image: serviceMakeupNew,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Hero */}
      <section className="pt-32 pb-20 relative min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={newServicesHero}
            alt="Services Mariage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2A2A2A]/65" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F1E8] mb-6">
            Nos Services Mariage
          </h1>
          <p className="text-lg text-[#F5F1E8]/90 max-w-2xl mx-auto">
            Un accompagnement complet pour faire de votre mariage un moment unique.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-0">
        <div className="container mx-auto pt-32 lg:pt-36 pb-8">
          <SectionTitle
            title="Prestations Principales"
            subtitle="Des services d'exception pour sublimer votre événement."
          />
        </div>

        {services.map((service, index) => (
          <div
            key={service.id}
            className={
              (index % 2 === 0 ? "bg-white" : "bg-[#F5F1E8]") +
              " py-20 lg:py-28"
            }
          >
            <div className="container mx-auto">
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-20 items-center`}
              >
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="group relative rounded-2xl overflow-hidden border border-black/5 shadow-[0_22px_70px_rgba(0,0,0,0.16)]"
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <PriceIndicator
                        level={service.priceLevel}
                        size="lg"
                        className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-black/10"
                      />
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="gold" size="lg" asChild>
                    <Link to="/contact">
                      <MessageCircle className="w-5 h-5" />
                      Demander un devis
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-28 bg-[#F5F1E8] relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <SectionTitle
            title="Services Complémentaires"
            subtitle="Des prestations additionnelles pour parfaire votre événement."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl overflow-hidden border border-black/5 shadow-[0_18px_50px_rgba(0,0,0,0.10)] hover:shadow-[0_26px_70px_rgba(0,0,0,0.14)] transition-all duration-500"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#C9A961]/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#C9A961]/10 rounded-full blur-3xl" />
                </div>

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#C9A961]/15 border border-[#C9A961]/25 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#C9A961]" />
                    </div>
                    <PriceIndicator level={service.priceLevel} size="sm" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#2A2A2A]">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F1E8] mb-6">
            Créez votre package sur mesure
          </h2>
          <p className="text-[#F5F1E8]/80 text-lg max-w-2xl mx-auto mb-10">
            Combinez nos services pour bénéficier de tarifs préférentiels. 
            Nous nous adaptons à vos besoins et à votre budget.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              <MessageCircle className="w-5 h-5" />
              Discuter de votre projet
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}