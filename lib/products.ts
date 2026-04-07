import productsData from "@/data/products.json";
import type { Product } from "@/types";

export function getAllProducts(): Product[] {
  return productsData as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter((p) => p.featured);
}

export function getBestSellerProducts(): Product[] {
  return getAllProducts().filter((p) => p.bestSeller);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return getAllProducts().filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return getAllProducts().filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
  );
}