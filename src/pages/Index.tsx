import { HeroSlider } from "../components/HeroSlider";
import { ServiceCard } from "../components/ServiceCard";
import { SectionTitle } from "../components/SectionTitle";
import { TestimonialCard } from "../components/TestimonialCard";
import { TractLinesBackground } from "../components/TractLinesBackground";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Car, Camera, Shield, MessageCircle } from "lucide-react";
import weddingCoupleImg from "figma:asset/732d70fcee8373cdd4a383e6ee27dfa71a22e947.png";
import maybachBlack from "figma:asset/0ff9a3086aef89b231c6a2e1724af84ae1f983e4.png";
import g7LogoNew from "figma:asset/bce009c2db394a74c4cd38140febfdf2abd7a3b1.png";
import { useRef, type ReactNode } from "react";

const weddingCar = maybachBlack;
const weddingDance = weddingCoupleImg;

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

function ScrollChapter({
  id,
  tone,
  children,
}: {
  id?: string;
  tone: "light" | "dark";
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={
        "relative overflow-hidden py-24 lg:py-32 " +
        (tone === "dark"
          ? "bg-[#0B0B0C] text-[#F5F1E8]"
          : "bg-[#F7F3EA] text-[#2A2A2A]")
      }
    >
      <TractLinesBackground tone={tone} mode="absolute" />
      <div className="container mx-auto relative z-10">{children}</div>
      <div
        className={
          "pointer-events-none absolute inset-0 z-0 " +
          (tone === "dark" ? "opacity-[0.22]" : "opacity-[0.18]")
        }
        style={{
          background:
            tone === "dark"
              ? "radial-gradient(800px circle at 20% 10%, rgba(201,169,97,0.18), transparent 60%), radial-gradient(900px circle at 80% 60%, rgba(201,169,97,0.12), transparent 65%)"
              : "radial-gradient(900px circle at 20% 10%, rgba(201,169,97,0.16), transparent 60%), radial-gradient(900px circle at 80% 60%, rgba(201,169,97,0.12), transparent 65%)",
        }}
      />
    </motion.section>
  );
}

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
  const aboutImageRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutImageRef,
    offset: ["start end", "center center"],
  });
  const aboutScale = useTransform(aboutProgress, [0, 1], [1.35, 1]);
  const aboutY = useTransform(aboutProgress, [0, 1], [140, 0]);
  const aboutOpacity = useTransform(aboutProgress, [0, 1], [0.15, 1]);

  return (
    <div className="min-h-screen w-full relative">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Section */}
      <ScrollChapter id="services" tone="light">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="Nos Prestations"
            subtitle="Des services d'excellence pour faire de vos moments les plus précieux des souvenirs inoubliables."
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-20%" }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeInUp}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </ScrollChapter>

      {/* About Section */}
      <ScrollChapter tone="dark">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            ref={aboutImageRef}
            className="relative"
            style={{ scale: aboutScale, y: aboutY, opacity: aboutOpacity }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#C9A961]/20 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
              <img
                src={weddingCar}
                alt="Véhicule de luxe Golden Wedding"
                className="w-full h-[420px] lg:h-[520px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#C9A961] text-[#2A2A2A] px-8 py-4 rounded-xl shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
              <span className="font-serif text-2xl font-bold">+500</span>
              <span className="block text-sm">Événements réalisés</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-25%" }}
          >
            <div className="max-w-xl">
              <SectionTitle
                title="L'Excellence au Service de Vos Événements"
                subtitle=""
                centered={false}
                light={true}
              />
              <p className="text-[#F5F1E8]/75 leading-relaxed mb-6">
                Depuis notre création, Golden Wedding s'est imposé comme la référence en matière de
                location de véhicules de prestige et de services haut de gamme pour les mariages et
                événements VIP en région parisienne.
              </p>
              <p className="text-[#F5F1E8]/65 leading-relaxed mb-10">
                Notre philosophie : offrir un service irréprochable où chaque détail compte.
                De la sélection minutieuse de nos véhicules à la formation de nos chauffeurs,
                nous mettons tout en œuvre pour que votre expérience soit exceptionnelle.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/contact">
                    <MessageCircle className="w-5 h-5" />
                    Discuter de votre projet
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-white/5 text-[#F5F1E8] border border-white/15 hover:bg-white/10"
                  asChild
                >
                  <Link to="/vehicules">Voir notre flotte</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </ScrollChapter>

      {/* Testimonials Section */}
      <ScrollChapter tone="light">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="Ils nous ont fait confiance"
            subtitle="Découvrez les témoignages de nos clients satisfaits."
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-20%" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeInUp}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </ScrollChapter>

      {/* CTA Section */}
      <ScrollChapter id="contact" tone="dark">
        <div className="relative">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-[-120px] left-1/4 w-[520px] h-[520px] bg-[#C9A961] rounded-full blur-3xl" />
            <div className="absolute bottom-[-160px] right-1/4 w-[560px] h-[560px] bg-[#C9A961] rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F1E8] mb-6">
              Prêt à créer des moments <span className="text-[#C9A961]">inoubliables</span> ?
            </h2>
            <p className="text-[#F5F1E8]/80 text-lg mx-auto mb-10">
              Contactez-nous dès maintenant pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  <MessageCircle className="w-5 h-5" />
                  Contactez-nous
                </Link>
              </Button>
              <Button
                size="xl"
                className="bg-white/5 text-[#F5F1E8] border border-white/15 hover:bg-white/10"
                asChild
              >
                <Link to="/services">Voir nos prestations</Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollChapter>
    </div>
  );
}
