export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: "glazed" | "filled" | "premium";
  variants?: ProductVariant[];
  featured: boolean;
  bestSeller?: boolean;
}

export interface ProductVariant {
  id: string;
  name: string;
  priceModifier: number;
}

export interface CartItem {
  productId: string;
  product: Product;
  variantId?: string;
  variant?: ProductVariant;
  quantity: number;
}

export interface Customer {
  name: string;
  phone: string;
  address: string;
  notes?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: Customer;
  total: number;
  status: "pending" | "confirmed" | "processing" | "delivered";
  createdAt: Date;
}