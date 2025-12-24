import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  date: string;
}

export function TestimonialCard({ name, text, rating, date }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 card-shadow hover:shadow-xl transition-all duration-300">
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-10 h-10 text-[#C9A961] opacity-50" />
      </div>

      {/* Rating */}
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "fill-[#C9A961] text-[#C9A961]"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        "{text}"
      </p>

      {/* Author Info */}
      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-serif font-bold text-charcoal">{name}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#C9A961]/10 flex items-center justify-center">
            <span className="font-serif font-bold text-[#C9A961] text-xl">
              {name.charAt(0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}