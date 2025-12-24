interface SectionTitleProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({ title, subtitle, centered = true, light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? "text-[#F5F1E8]" : "text-charcoal"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${
          light ? "text-[#F5F1E8]/70" : "text-gray-600"
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 w-20 h-1 bg-[#C9A961] ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}