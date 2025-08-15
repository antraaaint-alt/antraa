import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", ...props }, ref) => {
    const sizes = {
      sm: "max-w-4xl",
      md: "max-w-6xl",
      lg: "max-w-7xl",
      xl: "max-w-screen-2xl",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-6 sm:px-8 lg:px-12",
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container };