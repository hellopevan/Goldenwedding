import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroSlider } from "../components/HeroSlider";
import { ServiceCard } from "../components/ServiceCard";
import { SectionTitle } from "../components/SectionTitle";
import { TestimonialCard } from "../components/TestimonialCard";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Car, Camera, Shield, MessageCircle } from "lucide-react";
import weddingCarHero from "figma:asset/6e897d68a39825979f9453ab12b42194231a1e02.png";
import weddingCoupleImg from "figma:asset/732d70fcee8373cdd4a383e6ee27dfa71a22e947.png";
import maybachBlack from "figma:asset/0ff9a3086aef89b231c6a2e1724af84ae1f983e4.png";
import g7LogoNew from "figma:asset/bce009c2db394a74c4cd38140febfdf2abd7a3b1.png";

const weddingCar = maybachBlack;
const weddingDance = weddingCoupleImg;
const carInterior = "https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjU1NzIwODF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const gWagon = "https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjU1NzIwODF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const rollsRoyceImg = "https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjU1NzIwODF8MA&ixlib=rb-4.1.0&q=80&w=1080";

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

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const services = [
  {
    title: "Location de Véhicules",
    description: "Découvrez notre flotte de véhicules haut de gamme pour votre mariage ou événement.",
    image: weddingCar,
    priceLevel: 3 as const,
    href: "/vehicules",
    icon: Car,
  },
  {
    title: "Services Mariage",
    description: "Un accompagnement complet : coiffure, maquillage, photographie et bien plus.",
    image: weddingDance,
    priceLevel: 2 as const,
    href: "/services",
    icon: Camera,
  },
  {
    title: "Transport VIP / VTC",
    description: "Sécurité, discrétion et confort pour vos déplacements professionnels.",
    image: g7LogoNew,
    priceLevel: 4 as const,
    href: "/transport-vip",
    icon: Shield,
  },
];

const testimonials = [
  {
    name: "Yacine Bousklaf",
    text: "J'ai loué une classe S pour mon mariage avec Goldenwedding et je ne regrette absolument pas ! Le chauffeur nous a directement mis à l'aise et a été professionnel pour faciliter notre journée. Merci beaucoup d'avoir apporté du style et du confort ce jour là, Je recommande !",
    rating: 5,
    date: "Novembre 2024",
  },
  {
    name: "Lufuadiaya Mbalu",
    text: "Merci pour votre professionnalisme et votre patience. Nous avons passé une excellente après midi. Je vous recommanderais à tout mon entourage sans hésitations !",
    rating: 5,
    date: "Octobre 2024",
  },
  {
    name: "Cassis ES",
    text: "J'ai récemment loué une voiture chez Goldenwedding avec chauffeur et je suis hyper contente de mon expérience. Le service était impeccable, le chauffeur accueillant et professionnel. La voiture était en excellent état, propre et prête à partir à l'heure convenue. La facilité de réservation et la transparence des tarifs ont vraiment fait la différence. Je recommande vivement ce prestataire !",
    rating: 5,
    date: "Septembre 2024",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="relative z-10">
        <Header />
        
        {/* Hero Slider */}
        <HeroSlider />

        {/* Services Section */}
        <section id="services" className="py-20 lg:py-28 bg-[#F5F1E8] relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <SectionTitle
              title="Nos Prestations"
              subtitle="Des services d'excellence pour faire de vos moments les plus précieux des souvenirs inoubliables."
            />
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              animate="animate"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={weddingCar}
                  alt="Véhicule de luxe Golden Wedding"
                  className="rounded-xl card-shadow w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#C9A961] text-[#2A2A2A] px-8 py-4 rounded-lg shadow-lg">
                  <span className="font-serif text-2xl font-bold">+500</span>
                  <span className="block text-sm">Événements réalisés</span>
                </div>
              </div>
              <div>
                <SectionTitle
                  title="L'Excellence au Service de Vos Événements"
                  subtitle=""
                  centered={false}
                />
                <p className="text-gray-600 leading-relaxed mb-6">
                  Depuis notre création, Golden Wedding s'est imposé comme la référence en matière de 
                  location de véhicules de prestige et de services haut de gamme pour les mariages et 
                  événements VIP en région parisienne.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Notre philosophie : offrir un service irréprochable où chaque détail compte. 
                  De la sélection minutieuse de nos véhicules à la formation de nos chauffeurs, 
                  nous mettons tout en œuvre pour que votre expérience soit exceptionnelle.
                </p>
                <Button variant="gold" size="lg" asChild>
                  <Link to="/contact">
                    <MessageCircle className="w-5 h-5" />
                    Discuter de votre projet
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 lg:py-28 bg-[#E8E2D5]">
          <div className="container mx-auto">
            <SectionTitle
              title="Ils nous font confiance"
              subtitle="Découvrez les témoignages de nos clients satisfaits."
            />
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              animate="animate"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  variants={fadeInUp}
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 lg:py-28 bg-[#2A2A2A] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A961] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A961] rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto relative z-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F1E8] mb-6">
              Prêt à créer des moments <span className="text-[#C9A961]">inoubliables</span> ?
            </h2>
            <p className="text-[#F5F1E8]/80 text-lg max-w-2xl mx-auto mb-10">
              Contactez-nous dès maintenant pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                <MessageCircle className="w-5 h-5" />
                Contactez-nous
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}