"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import type { Product } from "@/types";
import { ArrowUpRight, Eye, ShoppingCart, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const categoryLabels = {
  glazed: "Glazed",
  filled: "Filled",
  premium: "Premium",
} as const;

const categoryTheme = {
  glazed: {
    panel: "from-rose-200/80 via-rose-100 to-orange-50",
    icing: "#FB7185",
    dough: "#FDBA74",
    badge: "bg-rose-600",
  },
  filled: {
    panel: "from-amber-200/85 via-amber-100 to-yellow-50",
    icing: "#F59E0B",
    dough: "#FCD34D",
    badge: "bg-amber-600",
  },
  premium: {
    panel: "from-stone-200/90 via-stone-100 to-orange-50",
    icing: "#B45309",
    dough: "#F59E0B",
    badge: "bg-stone-700",
  },
} as const;

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const theme = categoryTheme[product.category];

  const handleAddToCart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addItem(product);
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block h-full rounded-[1.6rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-primary/10 bg-white/92 shadow-[0_14px_40px_rgba(120,53,15,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_55px_rgba(120,53,15,0.14)]">
        <div className="relative overflow-hidden">
          <div
            className={`relative aspect-square bg-linear-to-br ${theme.panel} p-4`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.35),transparent_25%)]" />
            <div className="relative flex h-full items-center justify-center">
              <DonutIcon icing={theme.icing} dough={theme.dough} />
            </div>

            <div className="absolute left-3 top-3 flex gap-2">
              <Badge className="border-0 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-primary">
                {categoryLabels[product.category]}
              </Badge>
              {product.bestSeller && (
                <Badge
                  className={`${theme.badge} border-0 px-2.5 py-1 text-[11px] font-semibold text-white`}
                >
                  <Sparkles className="mr-1 h-3 w-3" />
                  Best Seller
                </Badge>
              )}
            </div>

            <div className="absolute right-3 top-3 rounded-full border border-black/5 bg-white/85 p-2 text-primary shadow-sm">
              <Eye className="h-4 w-4" />
            </div>

            <div className="absolute bottom-3 right-3">
              <Button
                size="sm"
                onClick={handleAddToCart}
                disabled={isAdding}
                className="h-11 w-11 min-h-11 min-w-11 rounded-full border border-white/70 bg-primary p-0 text-white shadow-lg transition-colors duration-200 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-white"
              >
                {isAdding ? (
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                ) : (
                  <ShoppingCart className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3 className="line-clamp-1 font-headline text-xl font-semibold text-primary transition-colors duration-200 group-hover:text-secondary">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-on-surface-variant">
            {product.description}
          </p>

          <div className="mt-4 flex items-end justify-between border-t border-primary/10 pt-4">
            <div>
              <p className="text-xs text-on-surface-variant">Harga</p>
              <p className="font-headline text-2xl font-semibold text-primary">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>
            <div className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Detail
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

function DonutIcon({ icing, dough }: { icing: string; dough: string }) {
  return (
    <svg
      viewBox="0 0 180 180"
      className="h-40 w-40 transition-transform duration-300 group-hover:scale-[1.04]"
      aria-hidden="true"
    >
      <circle cx="90" cy="96" r="52" fill="#7C2D12" opacity="0.16" />
      <circle cx="90" cy="90" r="52" fill={dough} />
      <circle cx="90" cy="88" r="50" fill="#FED7AA" opacity="0.45" />
      <path
        d="M42 86c0-27 21-47 47-47 15 0 28 6 37 16 4 5 8 10 10 16-7-3-14-4-22-4-14 0-28 3-41 9-14 6-23 8-29 6-1 4-2 8-2 13z"
        fill={icing}
        opacity="0.86"
      />
      <circle cx="90" cy="90" r="22" fill="#FFF7ED" />
      <ellipse cx="72" cy="67" rx="10" ry="5" fill="#FFFFFF" opacity="0.36" />
      <rect x="64" y="54" width="6" height="3" rx="1.5" fill="#FB7185" />
      <rect x="86" y="48" width="7" height="3" rx="1.5" fill="#FCD34D" />
      <rect x="110" y="58" width="6" height="3" rx="1.5" fill="#FDBA74" />
      <rect x="64" y="108" width="7" height="3" rx="1.5" fill="#F59E0B" />
      <rect x="114" y="102" width="6" height="3" rx="1.5" fill="#FB7185" />
    </svg>
  );
}
