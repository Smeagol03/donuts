"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import type { Product } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles, Eye } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const categoryLabels = {
    glazed: "Glazed",
    filled: "Filled",
    premium: "Premium",
  };

  const categoryColors = {
    glazed: {
      bg: "from-pink-200 via-rose-100 to-pink-100",
      stroke: "#EC4899",
      accent: "#F472B6",
      badge: "bg-pink-500",
    },
    filled: {
      bg: "from-amber-200 via-yellow-100 to-orange-100",
      stroke: "#F59E0B",
      accent: "#FBBF24",
      badge: "bg-amber-500",
    },
    premium: {
      bg: "from-violet-200 via-purple-100 to-fuchsia-100",
      stroke: "#8B5CF6",
      accent: "#A78BFA",
      badge: "bg-violet-500",
    },
  };

  const handleAddToCart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addItem(product);
    setTimeout(() => setIsAdding(false), 800);
  };

  const colors = categoryColors[product.category];

  return (
    <Link 
      href={`/products/${product.slug}`} 
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/20 active:scale-[0.98] sm:active:scale-100">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <div 
            className={`aspect-square bg-linear-to-br ${colors.bg} flex items-center justify-center transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          >
            {/* Playful Donut SVG */}
            <svg 
              viewBox="0 0 120 120" 
              className={`w-32 h-32 sm:w-40 sm:h-40 transition-all duration-500 ${isHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}`}
              fill="none"
            >
              {/* Outer glow effect */}
              <circle 
                cx="60" 
                cy="60" 
                r="45" 
                fill={colors.stroke}
                className="opacity-20"
              />
              
              {/* Donut base with shadow */}
              <circle 
                cx="60" 
                cy="58" 
                r="38" 
                fill={colors.stroke}
                className="opacity-90"
              />
              
              {/* Donut top (lighter) */}
              <circle 
                cx="60" 
                cy="56" 
                r="38" 
                fill={colors.accent}
                className="opacity-80"
              />
              
              {/* Inner hole */}
              <circle cx="60" cy="56" r="18" fill="white" />
              
              {/* Shine/highlight on donut */}
              <ellipse cx="45" cy="45" rx="8" ry="5" fill="white" opacity="0.4" />
              
              {/* Sprinkles - only for best sellers */}
              {product.bestSeller && (
                <>
                  <rect x="35" y="40" width="5" height="5" rx="2" fill="#FFD700" className={`${isHovered ? 'animate-bounce' : ''}`} />
                  <rect x="75" y="35" width="4" height="6" rx="2" fill="#FF6B6B" className={`${isHovered ? 'animate-pulse' : ''}`} style={{ animationDelay: '0.1s' }} />
                  <rect x="40" y="75" width="6" height="4" rx="2" fill="#4ECDC4" className={`${isHovered ? 'animate-bounce' : ''}`} style={{ animationDelay: '0.2s' }} />
                  <rect x="80" y="70" width="5" height="5" rx="2" fill="#FFE66D" className={`${isHovered ? 'animate-pulse' : ''}`} style={{ animationDelay: '0.3s' }} />
                  <rect x="55" y="30" width="4" height="4" rx="2" fill="#FF8B94" className={`${isHovered ? 'animate-bounce' : ''}`} style={{ animationDelay: '0.15s' }} />
                  <rect x="85" y="50" width="5" height="4" rx="2" fill="#A8E6CF" className={`${isHovered ? 'animate-pulse' : ''}`} style={{ animationDelay: '0.25s' }} />
                </>
              )}
              
              {/* Drizzle for premium */}
              {product.category === "premium" && (
                <>
                  <path d="M35 45 Q45 40 50 50 T65 48" stroke="white" strokeWidth="3" fill="none" opacity="0.7" strokeLinecap="round" />
                  <path d="M70 65 Q75 55 85 60" stroke="white" strokeWidth="3" fill="none" opacity="0.7" strokeLinecap="round" />
                </>
              )}
            </svg>

            {/* Hover/Touch Overlay with View Icon */}
            <div className={`absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent flex items-end justify-center pb-4 sm:pb-8 transition-opacity duration-300 opacity-100 sm:opacity-0 ${isHovered ? 'sm:opacity-100' : ''}`}>
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 text-primary font-medium text-xs sm:text-sm shadow-lg">
                <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Lihat Detail</span>
                <span className="xs:hidden">Detail</span>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex flex-col gap-1.5 sm:gap-2">
            {product.bestSeller && (
              <Badge className={`${colors.badge} text-white border-0 flex items-center gap-1 sm:gap-1.5 shadow-lg px-2 py-1 sm:px-3 sm:py-1.5 font-headline font-semibold text-xs`}>
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline">Best Seller</span>
                <span className="sm:hidden">⭐</span>
              </Badge>
            )}
          </div>
          
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
            <Badge className="bg-white/90 text-primary border-0 shadow-lg px-2 py-1 sm:px-3 sm:py-1.5 font-headline font-semibold text-xs">
              {categoryLabels[product.category]}
            </Badge>
          </div>

          {/* Quick Add Button - Always visible on mobile, hover on desktop. Min 44x44px touch target */}
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 transition-all duration-300 opacity-100 sm:opacity-0 translate-y-0 sm:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={isAdding}
              className="shadow-xl bg-primary hover:bg-primary-container hover:text-primary text-white border-2 border-white rounded-full w-11 h-11 sm:w-12 sm:h-12 min-h-11 min-w-11 flex items-center justify-center p-0 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              {isAdding ? (
                <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 sm:p-5 bg-white">
          <h3 className="font-headline font-bold text-lg sm:text-xl text-primary mb-1.5 sm:mb-2 group-hover:text-secondary transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
          
          <p className="text-on-surface-variant text-xs sm:text-sm line-clamp-2 flex-1 mb-3 sm:mb-4 leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 pt-3 sm:pt-4 border-t-2 border-surface-container">
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-on-surface-variant mb-0.5">Harga</span>
              <span className="font-headline font-bold text-xl sm:text-2xl text-primary">
                Rp {product.price.toLocaleString("id-ID")}
              </span>
            </div>
            
            <div className={`text-xs sm:text-sm font-medium text-primary flex items-center gap-1 transition-all duration-300 opacity-100 sm:opacity-0 sm:-translate-x-2 ${isHovered ? 'sm:opacity-100 sm:translate-x-0' : ''}`}>
              <span className="hidden sm:inline">Pesan</span>
              <span className="sm:hidden">Tap untuk pesan</span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}