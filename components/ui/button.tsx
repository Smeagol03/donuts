import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-gradient-to-br from-primary to-primary-container text-on-primary hover:brightness-110 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]":
              variant === "primary",
            "bg-surface-high text-foreground hover:bg-surface-highest hover:shadow-md active:scale-[0.98]":
              variant === "secondary",
            "bg-transparent text-primary hover:bg-primary-fixed/50 active:scale-[0.98]": variant === "ghost",
          },
          {
            "h-9 px-4 text-sm rounded-full": size === "sm",
            "h-11 px-6 text-base rounded-full": size === "md",
            "h-14 px-8 text-lg rounded-full": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";