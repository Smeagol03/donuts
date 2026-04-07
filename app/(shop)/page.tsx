import { getAllProducts } from "@/lib/products";
import { ProductCard } from "@/components/shop/product-card";
import Link from "next/link";
import { ArrowRight, Sparkles, Cake, Star, Heart } from "lucide-react";

export default function HomePage() {
  const products = getAllProducts();
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
  const bestSellers = products.filter((p) => p.bestSeller);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-surface via-surface-low to-surface-container min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-container/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-secondary-container/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-10 w-48 h-48 bg-tertiary-container/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-container/80 text-on-primary-container text-sm font-medium rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Premium Artisanal Donuts
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight text-on-surface mb-6 leading-tight">
              Lezat dalam
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                Setiap Gigitan
              </span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-8 max-w-lg leading-relaxed">
              Donat premium dengan berbagai varian rasa yang dibuat dengan bahan berkualitas tinggi. 
              Rasakan kelembutan dan cita rasa yang tak terlupakan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-semibold text-lg transition-all hover:brightness-110 hover:shadow-[0_8px_30px_rgba(149,65,110,0.4)] active:scale-95"
              >
                Lihat Menu
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#featured"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-on-surface rounded-full font-semibold text-lg transition-all hover:bg-white hover:shadow-lg border border-outline-variant/30"
              >
                Produk Unggulan
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-outline-variant/30">
              <div>
                <div className="text-3xl font-bold text-primary">12+</div>
                <div className="text-sm text-on-surface-variant">Varian Rasa</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-on-surface-variant">Bahan Premium</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5K+</div>
                <div className="text-sm text-on-surface-variant">Pelanggan Puas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image/Visual */}
        <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2">
          <div className="relative w-[500px] h-[500px]">
            <svg viewBox="0 0 400 400" className="w-full h-full animate-spin-slow">
              <defs>
                <linearGradient id="donutGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F472B6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="donutGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FCD34D" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
              {/* Main Donut */}
              <circle cx="200" cy="200" r="120" fill="url(#donutGrad1)" />
              <circle cx="200" cy="200" r="60" fill="#fff8f5" />
              {/* Floating Donuts */}
              <circle cx="80" cy="100" r="40" fill="url(#donutGrad2)" opacity="0.8" />
              <circle cx="80" cy="100" r="20" fill="#fff8f5" opacity="0.8" />
              <circle cx="320" cy="300" r="50" fill="#8B5CF6" opacity="0.7" />
              <circle cx="320" cy="300" r="25" fill="#fff8f5" opacity="0.7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-medium rounded-full mb-4">
              <Cake className="w-3 h-3" />
              Kategori
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-on-surface mb-4">
              Pilihan Varian
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Tiga kategori donat spesial untuk memenuhi selera Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CategoryCard
              title="Glazed"
              description="Donat dengan glasir manis yang mengkilap. Sempurna untuk pecinta rasa klasik."
              icon={<Cake className="w-8 h-8" />}
              href="/products?category=glazed"
              gradient="from-pink-100 to-rose-50"
              iconBg="bg-pink-200"
            />
            <CategoryCard
              title="Filled"
              description="Donat berisi dengan berbagai pilihan filling yang meledak di mulut."
              icon={<Heart className="w-8 h-8" />}
              href="/products?category=filled"
              gradient="from-amber-100 to-yellow-50"
              iconBg="bg-amber-200"
            />
            <CategoryCard
              title="Premium"
              description="Donat premium dengan bahan eksklusif dan rasa sophisticated."
              icon={<Star className="w-8 h-8" />}
              href="/products?category=premium"
              gradient="from-purple-100 to-violet-50"
              iconBg="bg-purple-200"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-20 bg-surface-low">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container text-on-primary-container text-xs font-medium rounded-full mb-4">
                <Sparkles className="w-3 h-3" />
                Unggulan
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-on-surface mb-2">
                Produk Unggulan
              </h2>
              <p className="text-on-surface-variant">
                Pilihan terbaik dari koleksi kami
              </p>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center text-primary font-medium hover:text-primary-container transition-colors group"
            >
              Lihat Semua
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/products"
              className="inline-flex items-center text-primary font-medium hover:text-primary-container transition-colors"
            >
              Lihat Semua Produk
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      {bestSellers.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container text-tertiary text-xs font-medium rounded-full mb-4">
                <Star className="w-3 h-3" />
                Best Seller
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-on-surface mb-4">
                Favorit Pelanggan
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Donat yang paling dicintai oleh pelanggan kami
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {bestSellers.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-container to-secondary-container relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-on-primary mb-4">
            Pesan Sekarang
          </h2>
          <p className="text-on-primary/80 mb-8 max-w-xl mx-auto text-lg">
            Hubungi kami via WhatsApp untuk pemesanan cepat dan informasi lebih lanjut
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20donat"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg transition-all hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 mr-2"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Kami
          </a>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({
  title,
  description,
  icon,
  href,
  gradient,
  iconBg,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  gradient: string;
  iconBg: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className={`p-8 bg-gradient-to-br ${gradient} rounded-2xl transition-all duration-300 hover:shadow-[0_12px_32px_rgba(149,65,110,0.08)] hover:-translate-y-1 h-full`}>
        <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-4 text-on-surface group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold font-headline text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Lihat Produk
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}