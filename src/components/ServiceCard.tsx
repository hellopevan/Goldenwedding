import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  priceLevel: 1 | 2 | 3 | 4 | 5;
  href: string;
  icon: LucideIcon;
}

export function ServiceCard({
  title,
  description,
  image,
  priceLevel,
  href,
  icon: Icon,
}: ServiceCardProps) {
  // Check if it's the Transport VIP service to apply special styling
  const isTransportVIP = title === "Transport VIP / VTC";
  
  return (
    <motion.div
      className="group bg-white rounded-xl overflow-hidden card-shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image */}
      <div className={`relative h-64 overflow-hidden ${isTransportVIP ? 'bg-[#1a1a1a]' : ''}`}>
        <motion.img
          src={image}
          alt={title}
          className={`w-full h-full ${isTransportVIP ? 'object-contain p-8' : 'object-cover'}`}
          whileHover={{ scale: isTransportVIP ? 1.05 : 1.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className={`absolute inset-0 ${isTransportVIP ? 'bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60' : 'bg-gradient-to-t from-black/60 to-transparent'}`} />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <motion.div
            className="bg-[#C9A961] text-charcoal p-2 rounded-full"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className={`font-medium text-sm ${
                  i < priceLevel ? "text-[#C9A961]" : "text-white/30"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                €
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        <Button
          variant="outline"
          className="w-full group-hover:bg-[#C9A961] group-hover:text-charcoal group-hover:border-[#C9A961]"
          asChild
        >
          <Link to={href}>
            En savoir plus
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}