import { getAllProducts } from "@/lib/products";
import { ProductCard } from "@/components/shop/product-card";
import Link from "next/link";

export default function HomePage() {
  const products = getAllProducts();
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
  const bestSellers = products.filter((p) => p.bestSeller);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-surface via-surface-low to-surface-container min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container text-sm font-medium rounded-full mb-6">
              Premium Artisanal Donuts
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight text-on-surface mb-6">
              Lezat dalam
              <br />
              <span className="text-primary">Setiap Gigitan</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-8 max-w-lg">
              Donat premium dengan berbagai varian rasa yang dibuat dengan bahan berkualitas tinggi. 
              Rasakan kelembutan dan cita rasa yang tak terlupakan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-semibold text-lg transition-all hover:brightness-110 hover:shadow-[0_8px_24px_rgba(149,65,110,0.3)]"
              >
                Lihat Menu
              </Link>
              <Link
                href="#featured"
                className="inline-flex items-center justify-center px-8 py-4 bg-surface-highest text-on-surface rounded-full font-semibold text-lg transition-all hover:bg-surface-container"
              >
                Produk Unggulan
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary-container/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl" />
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
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
              emoji="🍩"
              href="/products?category=glazed"
            />
            <CategoryCard
              title="Filled"
              description="Donat berisi dengan berbagai pilihan filling yang meledak di mulut."
              emoji="🔴"
              href="/products?category=filled"
            />
            <CategoryCard
              title="Premium"
              description="Donat premium dengan bahan eksklusif dan rasa sophisticated."
              emoji="⭐"
              href="/products?category=premium"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-20 bg-surface-low">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-on-surface mb-2">
                Produk Unggulan
              </h2>
              <p className="text-on-surface-variant">
                Pilihan terbaik dari koleksi kami
              </p>
            </div>
            <Link
              href="/products"
              className="text-primary font-medium hover:text-primary-container transition-colors"
            >
              Lihat Semua →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      {bestSellers.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-tertiary-container text-tertiary text-sm font-medium rounded-full mb-4">
                Best Seller
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-on-surface mb-4">
                Favorit Pelanggan
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Donat yang paling dicintai oleh pelanggan kami
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestSellers.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-container to-secondary-container">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-on-primary mb-4">
            Pesan Sekarang
          </h2>
          <p className="text-on-primary/80 mb-8 max-w-xl mx-auto">
            Hubungi kami via WhatsApp untuk pemesanan cepat dan informasi lebih lanjut
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20donat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-surface text-primary rounded-full font-semibold text-lg transition-all hover:shadow-[0_8px_24px_rgba(255,255,255,0.3)]"
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
  emoji,
  href,
}: {
  title: string;
  description: string;
  emoji: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="group p-8 bg-surface rounded-2xl transition-all duration-300 hover:shadow-[0_12px_32px_rgba(149,65,110,0.08)] hover:bg-surface-low">
        <span className="text-5xl mb-4 block">{emoji}</span>
        <h3 className="text-xl font-bold font-headline text-on-surface mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm">{description}</p>
      </div>
    </Link>
  );
}