import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "interactive";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-surface-low rounded-xl overflow-hidden",
          {
            "shadow-none": variant === "default",
            "shadow-[0_12px_32px_rgba(149,65,110,0.08)]": variant === "elevated",
            "transition-all duration-300 hover:shadow-[0_16px_40px_rgba(149,65,110,0.12)] cursor-pointer":
              variant === "interactive",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardImage = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("aspect-square overflow-hidden", className)} {...props} />
  )
);

CardImage.displayName = "CardImage";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-4 flex flex-col gap-2", className)} {...props} />
  )
);

CardContent.displayName = "CardContent";

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-lg font-semibold text-on-surface font-headline", className)} {...props} />
  )
);

CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-on-surface-variant line-clamp-2", className)} {...props} />
  )
);

CardDescription.displayName = "CardDescription";

export const CardPrice = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn("text-lg font-bold text-primary", className)} {...props} />
  )
);

CardPrice.displayName = "CardPrice";