import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full",
          {
            "bg-primary-container text-on-primary-container": variant === "primary",
            "bg-secondary-container text-on-secondary-container": variant === "secondary",
            "bg-tertiary-container text-tertiary": variant === "tertiary",
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export function CategoryBadge({ category }: { category: "glazed" | "filled" | "premium" }) {
  const labels = {
    glazed: "Glazed",
    filled: "Filled",
    premium: "Premium",
  };

  const variants = {
    glazed: "secondary" as const,
    filled: "primary" as const,
    premium: "tertiary" as const,
  };

  return (
    <Badge variant={variants[category]}>
      {labels[category]}
    </Badge>
  );
}