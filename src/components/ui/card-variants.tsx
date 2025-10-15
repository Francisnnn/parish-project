import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground transition-smooth",
  {
    variants: {
      variant: {
        default: "shadow-card",
        elevated: "shadow-elegant hover:shadow-2xl hover:-translate-y-1",
        feature: "shadow-card hover:shadow-elegant hover:border-primary/50 hover:-translate-y-2",
        ministry: "shadow-card hover:shadow-xl hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
