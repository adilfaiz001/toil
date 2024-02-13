import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    },
    color: {
      default: "text-gray-700",
      subtle: "text-gray-400",
      muted: "text-slate-300",
      error: "text-red-500",
    },
    weight: {
      default: "font-normal",
      thin: "font-thin",
      light: "font-light",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
  },
  defaultVariants: {
    variant: "base",
    color: "default",
    weight: "default",
  },
});

export interface TypographyProps
  extends VariantProps<typeof typographyVariants> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLSpanElement, TypographyProps>(
  ({ children, variant, color, weight, className, asChild = false }, ref) => {
    const Comp = asChild ? Slot : "span";

    return (
      <Comp
        className={cn(
          typographyVariants({ variant, color, weight, className })
        )}
        ref={ref}
      >
        {children}
      </Comp>
    );
  }
);

export { Typography, typographyVariants };
