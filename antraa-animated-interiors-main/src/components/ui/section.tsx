import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "elegant" | "luxury";
  size?: "sm" | "md" | "lg" | "xl";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const variants = {
      default: "bg-background",
      elegant: "elegant-gradient",
      luxury: "bg-luxury-cream",
    };

    const sizes = {
      sm: "py-12",
      md: "py-20",
      lg: "py-32",
      xl: "py-40",
    };

    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";

export { Section };