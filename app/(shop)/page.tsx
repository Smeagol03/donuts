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
      {/* Hero Section - Anti Mainstream */}
      <section className="relative py-16 sm:py-20 min-h-[90vh] sm:min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        {/* Decorative Half Donuts Background - Hidden on mobile, reduced on tablet */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top Left Cluster - Hidden on small screens */}
          <div className="hidden lg:block absolute -top-20 -left-20 w-[500px] h-[500px] opacity-30">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full animate-spin-slow"
              style={{ animationDuration: "60s" }}
            >
              <defs>
                <linearGradient
                  id="pinkGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F472B6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="90" fill="url(#pinkGrad)" />
              <circle cx="100" cy="100" r="40" fill="#FEF3C7" />
            </svg>
          </div>

          {/* Top Right Donut - Reduced size on tablet */}
          <div className="hidden md:block absolute -top-16 sm:-top-32 right-5 sm:right-10 w-[200px] sm:w-[250px] md:w-[300px] opacity-15 md:opacity-20">
            <div className="animate-float" style={{ animationDelay: "0s" }}>
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                style={{ transform: "rotate(45deg)" }}
              >
                <circle cx="100" cy="100" r="80" fill="#F59E0B" opacity="0.9" />
                <circle cx="100" cy="100" r="35" fill="#FEF3C7" />
              </svg>
            </div>
          </div>

          {/* Right Side Giant Half Donut - Desktop only */}
          <div className="hidden xl:block absolute right-[-200px] top-1/4 w-[600px] h-[600px] opacity-40">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <linearGradient
                  id="purpleGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="95" fill="url(#purpleGrad)" />
              <circle cx="100" cy="100" r="45" fill="#FEF3C7" />
              <rect x="60" y="30" width="8" height="8" rx="2" fill="#FFD700" />
              <rect
                x="120"
                y="35"
                width="8"
                height="10"
                rx="2"
                fill="#FF6B6B"
              />
              <rect x="45" y="80" width="10" height="6" rx="2" fill="#4ECDC4" />
            </svg>
          </div>

          {/* Bottom decorations - Hidden on mobile */}
          {/* Bottom Left Cluster */}
          <div className="hidden lg:block absolute -bottom-40 -left-20 w-[450px] h-[450px] opacity-35">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              style={{ transform: "rotate(-30deg)" }}
            >
              <circle cx="100" cy="100" r="88" fill="#FCD34D" opacity="0.85" />
              <circle cx="100" cy="100" r="38" fill="#FEF3C7" />
            </svg>
          </div>

          {/* Bottom Right Small Donuts - Tablet and up */}
          <div
            className="hidden md:block absolute bottom-16 sm:bottom-20 right-10 sm:right-40 w-[120px] sm:w-[180px] h-[120px] sm:h-[180px] opacity-20 md:opacity-25 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="85" fill="#EC4899" />
              <circle cx="100" cy="100" r="35" fill="#FEF3C7" />
            </svg>
          </div>

          <div
            className="hidden sm:block absolute bottom-48 md:bottom-60 right-5 md:right-10 w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] opacity-15 sm:opacity-20 animate-float"
            style={{ animationDelay: "4s" }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="#F59E0B" />
              <circle cx="100" cy="100" r="30" fill="#FEF3C7" />
            </svg>
          </div>

          {/* Floating Sprinkles - Desktop only */}
          <div className="hidden xl:block absolute top-1/4 left-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-60 animate-bounce-subtle" />
          <div
            className="hidden xl:block absolute top-1/3 right-1/4 w-3 h-3 bg-amber-400 rounded-full opacity-50 animate-bounce-subtle"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="hidden xl:block absolute bottom-1/3 left-1/3 w-5 h-5 bg-violet-400 rounded-full opacity-40 animate-bounce-subtle"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="hidden xl:block absolute top-1/2 right-1/3 w-3 h-3 bg-yellow-300 rounded-full opacity-50 animate-bounce-subtle"
            style={{ animationDelay: "1.5s" }}
          />

          {/* Decorative Circles - Blurred gradient circles */}
          <div className="absolute top-20 sm:top-40 left-1/4 sm:left-1/3 w-24 sm:w-32 h-24 sm:h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-24 sm:bottom-40 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-secondary/10 rounded-full blur-3xl" />
          <div className="hidden sm:block absolute top-1/3 right-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-tertiary/10 rounded-full blur-3xl" />
        </div>

        {/* Main Content - Centered */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-white/80 backdrop-blur-md border border-primary/20 rounded-full mb-6 sm:mb-8 shadow-lg animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">
              Premium Artisanal Donuts
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight mb-4 sm:mb-6 leading-tight">
            <span className="block text-primary">Lezat dalam</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mt-1 sm:mt-2">
              Setiap Gigitan
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-3xl sm:text-4xl">🍩</span>
            <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant mb-8 sm:mb-10 max-w-lg sm:max-w-2xl mx-auto leading-relaxed px-2">
            Donat premium dengan berbagai varian rasa yang dibuat dengan bahan
            berkualitas tinggi.
            <br className="hidden sm:block" />
            <span className="font-semibold text-primary">
              Rasakan kelembutan dan cita rasa yang tak terlupakan.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 bg-primary text-white rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 active:scale-95"
            >
              <span>Lihat Menu</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#featured"
              className="group inline-flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 bg-white/90 backdrop-blur-sm text-primary rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:bg-white hover:shadow-xl border-2 border-primary/20 active:scale-95"
            >
              <span>Produk Unggulan</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 md:gap-16">
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-primary mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform">
                12+
              </div>
              <div className="text-xs sm:text-sm text-on-surface-variant font-medium">
                Varian Rasa
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 sm:h-16 bg-primary/20" />
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-primary mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-xs sm:text-sm text-on-surface-variant font-medium">
                Bahan Asli
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-medium rounded-full mb-3 sm:mb-4">
              <Cake className="w-3 h-3" />
              Kategori
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-on-surface mb-3 sm:mb-4">
              Pilihan Varian
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto px-4">
              Tiga kategori donat spesial untuk memenuhi selera Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <CategoryCard
              title="Glazed"
              description="Donat dengan glasir manis yang mengkilap. Sempurna untuk pecinta rasa klasik."
              icon={<Cake className="w-6 h-6 sm:w-8 sm:h-8" />}
              href="/products?category=glazed"
              gradient="from-pink-100 to-rose-50"
              iconBg="bg-pink-200"
            />
            <CategoryCard
              title="Filled"
              description="Donat berisi dengan berbagai pilihan filling yang meledak di mulut."
              icon={<Heart className="w-6 h-6 sm:w-8 sm:h-8" />}
              href="/products?category=filled"
              gradient="from-amber-100 to-yellow-50"
              iconBg="bg-amber-200"
            />
            <CategoryCard
              title="Premium"
              description="Donat premium dengan bahan eksklusif dan rasa sophisticated."
              icon={<Star className="w-6 h-6 sm:w-8 sm:h-8" />}
              href="/products?category=premium"
              gradient="from-purple-100 to-violet-50"
              iconBg="bg-purple-200"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-12 sm:py-16 lg:py-20 bg-surface-low">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-8 sm:mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 bg-primary-container text-on-primary-container text-xs font-medium rounded-full mb-3 sm:mb-4">
                <Sparkles className="w-3 h-3" />
                Unggulan
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-on-surface mb-1 sm:mb-2">
                Produk Unggulan
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center sm:hidden">
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
        <section className="py-12 sm:py-16 lg:py-20 bg-surface">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 bg-tertiary-container text-tertiary text-xs font-medium rounded-full mb-3 sm:mb-4">
                <Star className="w-3 h-3" />
                Best Seller
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-on-surface mb-3 sm:mb-4">
                Favorit Pelanggan
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto px-4">
                Donat yang paling dicintai oleh pelanggan kami
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {bestSellers.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary via-primary-container to-secondary-container relative overflow-hidden">
        {/* Background Pattern - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <pattern
              id="dots"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-on-primary mb-3 sm:mb-4">
            Pesan Sekarang
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-on-primary/80 mb-6 sm:mb-8 max-w-xl mx-auto">
            Hubungi kami via WhatsApp untuk pemesanan cepat dan informasi lebih
            lanjut
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20donat"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-white text-primary rounded-full font-semibold text-base sm:text-lg transition-all hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
      <div
        className={`p-5 sm:p-8 bg-gradient-to-br ${gradient} rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-[0_12px_32px_rgba(149,65,110,0.08)] hover:-translate-y-1 h-full`}
      >
        <div
          className={`w-12 h-12 sm:w-16 sm:h-16 ${iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 text-on-surface group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
        >
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold font-headline text-on-surface mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          {description}
        </p>
        <div className="mt-3 sm:mt-4 flex items-center text-primary text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Lihat Produk
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
