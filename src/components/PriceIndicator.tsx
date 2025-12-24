import { cn } from "./ui/utils";

interface PriceIndicatorProps {
  level: 1 | 2 | 3 | 4 | 5;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PriceIndicator({ level, size = "md", className }: PriceIndicatorProps) {
  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const gaps = {
    sm: "gap-0.5",
    md: "gap-1",
    lg: "gap-1",
  };

  return (
    <div className={cn("flex items-center", gaps[size], className)}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={cn(
            "font-medium transition-all",
            textSizes[size],
            i < level ? "text-[#C9A961]" : "text-gray-300"
          )}
        >
          €
        </span>
      ))}
    </div>
  );
}