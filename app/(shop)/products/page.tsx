import { getAllProducts, getProductsByCategory } from "@/lib/products";
import { ProductCard } from "@/components/shop/product-card";
import Link from "next/link";

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category as "glazed" | "filled" | "premium" | undefined;
  const products = category ? getProductsByCategory(category) : getAllProducts();

  const categories = [
    { key: undefined, label: "Semua" },
    { key: "glazed" as const, label: "Glazed" },
    { key: "filled" as const, label: "Filled" },
    { key: "premium" as const, label: "Premium" },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">
                Beranda
              </Link>
            </li>
            <li className="text-on-surface-variant">/</li>
            <li className="text-on-surface font-medium">Produk</li>
          </ol>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-on-surface mb-2">
              Menu Donat
            </h1>
            <p className="text-on-surface-variant">
              {category ? `${products.length} donat dalam kategori ${category}` : `${products.length} donat tersedia`}
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <Link
              key={cat.key ?? "all"}
              href={cat.key ? `/products?category=${cat.key}` : "/products"}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                category === cat.key || (!category && !cat.key)
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-high"
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-on-surface-variant text-lg">
              Tidak ada produk dalam kategori ini.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center mt-4 text-primary hover:text-primary-container transition-colors"
            >
              Lihat semua produk →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}