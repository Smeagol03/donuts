"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/types";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-on-surface">Jumlah:</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-high transition-colors flex items-center justify-center text-on-surface"
          >
            −
          </button>
          <span className="w-12 text-center text-lg font-medium text-on-surface">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-high transition-colors flex items-center justify-center text-on-surface"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAdd}
        disabled={added}
        className={`h-14 px-8 rounded-full font-semibold text-lg transition-all ${
          added
            ? "bg-tertiary text-white"
            : "bg-gradient-to-br from-primary to-primary-container text-on-primary hover:brightness-110 hover:shadow-[0_8px_24px_rgba(149,65,110,0.3)]"
        }`}
      >
        {added ? "✓ Ditambahkan!" : `Tambah ke Keranjang - Rp ${(product.price * quantity).toLocaleString("id-ID")}`}
      </button>
    </div>
  );
}