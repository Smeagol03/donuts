"use client";

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react";
import type { Product, ProductVariant, CartItem } from "@/types";

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; variantId?: string; variant?: ProductVariant } }
  | { type: "REMOVE_ITEM"; payload: { productId: string; variantId?: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; variantId?: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

const CartContext = createContext<{
  state: CartState;
  addItem: (product: Product, variantId?: string, variant?: ProductVariant) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, variantId: string | undefined, quantity: number) => void;
  clearCart: () => void;
} | null>(null);

function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => {
    const basePrice = item.product.price;
    const variantPrice = item.variant?.priceModifier || 0;
    return total + (basePrice + variantPrice) * item.quantity;
  }, 0);
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, variantId, variant } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.productId === product.id && item.variantId === variantId
      );

      let newItems: CartItem[];
      if (existingIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [
          ...state.items,
          { productId: product.id, product, variantId, variant, quantity: 1 },
        ];
      }

      return { items: newItems, total: calculateTotal(newItems) };
    }

    case "REMOVE_ITEM": {
      const { productId, variantId } = action.payload;
      const newItems = state.items.filter(
        (item) => !(item.productId === productId && item.variantId === variantId)
      );
      return { items: newItems, total: calculateTotal(newItems) };
    }

    case "UPDATE_QUANTITY": {
      const { productId, variantId, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = state.items.filter(
          (item) => !(item.productId === productId && item.variantId === variantId)
        );
        return { items: newItems, total: calculateTotal(newItems) };
      }
      const newItems = state.items.map((item) =>
        item.productId === productId && item.variantId === variantId
          ? { ...item, quantity }
          : item
      );
      return { items: newItems, total: calculateTotal(newItems) };
    }

    case "CLEAR_CART":
      return { items: [], total: 0 };

    case "LOAD_CART":
      return { items: action.payload, total: calculateTotal(action.payload) };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product: Product, variantId?: string, variant?: ProductVariant) => {
    dispatch({ type: "ADD_ITEM", payload: { product, variantId, variant } });
  };

  const removeItem = (productId: string, variantId?: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { productId, variantId } });
  };

  const updateQuantity = (productId: string, variantId: string | undefined, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, variantId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}