"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import type { Product } from "@/types";
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardPrice } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const categoryLabels = {
    glazed: "Glazed",
    filled: "Filled",
    premium: "Premium",
  };

  const categoryVariants = {
    glazed: "secondary" as const,
    filled: "primary" as const,
    premium: "tertiary" as const,
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addItem(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  // Generate gradient based on category
  const getGradient = (category: string) => {
    switch (category) {
      case "glazed":
        return "from-pink-100 via-rose-50 to-pink-50";
      case "filled":
        return "from-amber-100 via-yellow-50 to-orange-50";
      case "premium":
        return "from-purple-100 via-violet-50 to-fuchsia-50";
      default:
        return "from-surface-container to-surface-high";
    }
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <Card variant="interactive" className="h-full flex flex-col overflow-hidden">
        <CardImage className="relative overflow-hidden">
          <div 
            className={`aspect-square bg-gradient-to-br ${getGradient(product.category)} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
          >
            {/* Abstract Donut SVG Representation */}
            <svg 
              viewBox="0 0 100 100" 
              className="w-32 h-32 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
              fill="none"
            >
              {/* Donut base */}
              <circle 
                cx="50" 
                cy="50" 
                r="35" 
                stroke={product.category === "premium" ? "#8B5CF6" : product.category === "filled" ? "#F59E0B" : "#EC4899"}
                strokeWidth="20"
                className="opacity-90"
              />
              {/* Inner hole */}
              <circle cx="50" cy="50" r="20" fill="white" className="opacity-80" />
              {/* Sprinkles */}
              {product.bestSeller && (
                <>
                  <rect x="30" y="35" width="4" height="4" rx="1" fill="#FFD700" className="animate-pulse" />
                  <rect x="65" y="40" width="4" height="4" rx="1" fill="#FF6B6B" />
                  <rect x="35" y="65" width="4" height="4" rx="1" fill="#4ECDC4" />
                  <rect x="60" y="60" width="4" height="4" rx="1" fill="#FFE66D" />
                </>
              )}
            </svg>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.bestSeller && (
              <Badge variant="tertiary" className="flex items-center gap-1 shadow-lg">
                <Sparkles className="w-3 h-3" />
                Best Seller
              </Badge>
            )}
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant={categoryVariants[product.category]} className="shadow-lg">
              {categoryLabels[product.category]}
            </Badge>
          </div>

          {/* Quick Add Button - appears on hover */}
          <div className="absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={isAdding}
              className="shadow-lg backdrop-blur-sm bg-white/90 text-primary hover:bg-white"
            >
              {isAdding ? (
                <span className="flex items-center gap-1">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </span>
              ) : (
                <ShoppingCart className="w-4 h-4" />
              )}
            </Button>
          </div>
        </CardImage>

        <CardContent className="flex flex-col flex-1">
          <CardTitle className="group-hover:text-primary transition-colors duration-300">
            {product.name}
          </CardTitle>
          <CardDescription className="line-clamp-2 flex-1">
            {product.description}
          </CardDescription>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-outline-variant/30">
            <CardPrice className="text-xl">
              Rp {product.price.toLocaleString("id-ID")}
            </CardPrice>
            <span className="text-xs text-on-surface-variant flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Lihat detail
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}