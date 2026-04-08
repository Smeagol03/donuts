import { getAllProducts, getProductsByCategory } from "@/lib/products";
import { ProductCard } from "@/components/shop/product-card";
import Link from "next/link";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category as "glazed" | "filled" | "premium" | undefined;
  const products = category ? getProductsByCategory(category) : getAllProducts();

  const categories = [
    { key: undefined, label: "Semua", emoji: "🍩" },
    { key: "glazed" as const, label: "Glazed", emoji: "✨" },
    { key: "filled" as const, label: "Filled", emoji: "🍓" },
    { key: "premium" as const, label: "Premium", emoji: "👑" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-surface to-background">
      {/* Decorative Elements - Hidden on mobile */}
      <div className="hidden sm:block fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-tertiary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8">
          <ol className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-body">
            <li>
              <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors duration-200">
                Beranda
              </Link>
            </li>
            <li className="text-on-surface-variant">/</li>
            <li className="text-primary font-semibold">Produk</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="text-3xl sm:text-4xl">🍩</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-primary">
                  Menu Donat
                </h1>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-on-surface-variant font-body max-w-lg">
                {category
                  ? `Temukan ${products.length} donat ${category} terbaik kami`
                  : `Pilih dari ${products.length} varian donat lezat yang siap memanjakan lidah Anda`
                }
              </p>
            </div>

            {/* Stats - Compact on mobile */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-md w-full sm:w-auto">
              <div className="flex-1 sm:flex-none text-center">
                <div className="font-headline font-bold text-xl sm:text-2xl text-primary">12+</div>
                <div className="text-[10px] sm:text-xs text-on-surface-variant">Varian</div>
              </div>
              <div className="w-px h-8 sm:h-10 bg-outline-variant" />
              <div className="flex-1 sm:flex-none text-center">
                <div className="font-headline font-bold text-xl sm:text-2xl text-primary">4.9</div>
                <div className="text-[10px] sm:text-xs text-on-surface-variant">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter - Horizontal Scroll on Mobile */}
        <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {categories.map((cat) => (
            <Link
              key={cat.key ?? "all"}
              href={cat.key ? `/products?category=${cat.key}` : "/products"}
              className={`group flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-headline font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                category === cat.key || (!category && !cat.key)
                  ? "bg-primary text-white shadow-lg scale-[1.02]"
                  : "bg-white text-on-surface-variant hover:bg-surface-container hover:text-primary shadow-md hover:shadow-lg"
              }`}
            >
              <span className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-200">{cat.emoji}</span>
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-16 sm:py-20">
            <div className="text-5xl sm:text-6xl mb-4">🔍</div>
            <p className="text-sm sm:text-lg text-on-surface-variant font-body mb-6 px-4">
              Tidak ada produk dalam kategori ini.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-white rounded-full font-headline font-semibold text-sm sm:text-base hover:bg-primary-container hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Lihat semua produk
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <h2 className="font-headline font-bold text-xl sm:text-2xl md:text-3xl text-primary mb-2 sm:mb-3">
              Ingin Memesan dalam Jumlah Banyak?
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant font-body mb-4 sm:mb-6 max-w-md mx-auto px-2 sm:px-0">
              Kami menerima pesanan untuk acara, kantor, atau pesta dengan harga spesial!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-full font-headline font-bold text-sm sm:text-base hover:bg-primary-container hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Hubungi Kami
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
