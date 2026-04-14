import { ProductCard } from "@/components/shop/product-card";
import { getAllProducts, getProductsByCategory } from "@/lib/products";
import {
  ArrowRight,
  CakeSlice,
  ChevronRight,
  Layers3,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";

type CategoryKey = "glazed" | "filled" | "premium";

const categories: Array<{
  key?: CategoryKey;
  label: string;
  helper: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
    {
      key: undefined,
      label: "Semua",
      helper: "Semua varian",
      icon: Layers3,
    },
    {
      key: "glazed",
      label: "Glazed",
      helper: "Ringan dan klasik",
      icon: Sparkles,
    },
    {
      key: "filled",
      label: "Filled",
      helper: "Isi lebih rich",
      icon: CakeSlice,
    },
    {
      key: "premium",
      label: "Premium",
      helper: "Signature series",
      icon: Star,
    },
  ];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category as CategoryKey | undefined;
  const products = category ? getProductsByCategory(category) : getAllProducts();
  const categoryLabel = category
    ? categories.find((item) => item.key === category)?.label
    : "Semua";

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-background via-surface to-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-52 w-52 rounded-full bg-tertiary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <nav aria-label="Breadcrumb" className="mb-7">
          <ol className="flex items-center gap-1.5 text-sm text-on-surface-variant">
            <li>
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Beranda
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="font-semibold text-primary">Produk</li>
          </ol>
        </nav>

        <header className="mb-8 rounded-[1.8rem] border border-primary/10 bg-white/75 p-6 shadow-[0_18px_50px_rgba(120,53,15,0.10)] backdrop-blur-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Product Catalogue
              </p>
              <h1 className="mt-3 font-headline text-4xl text-primary sm:text-5xl">
                Pilih donat sesuai mood.
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <StatCard label="Kategori aktif" value={categoryLabel ?? "Semua"} />
              <StatCard label="Total produk" value={`${products.length}`} />
            </div>
          </div>
        </header>

        <section aria-label="Filter kategori" className="mb-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((item) => {
              const isActive =
                (item.key === undefined && !category) || item.key === category;
              const Icon = item.icon;

              return (
                <Link
                  key={item.key ?? "all"}
                  href={item.key ? `/products?category=${item.key}` : "/products"}
                  className={`group inline-flex min-w-50 items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isActive
                    ? "border-primary bg-primary text-white shadow-lg"
                    : "border-primary/12 bg-white/85 text-primary hover:border-primary/25 hover:bg-white"
                    }`}
                >
                  <span
                    className={`rounded-xl p-2 ${isActive ? "bg-white/20" : "bg-primary/8"
                      }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-semibold">{item.label}</span>
                    <span
                      className={`block text-xs ${isActive ? "text-white/75" : "text-on-surface-variant"
                        }`}
                    >
                      {item.helper}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {products.length > 0 ? (
          <section aria-label="Daftar produk">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-on-surface-variant">
                Menampilkan{" "}
                <span className="font-semibold text-primary">{products.length}</span>{" "}
                produk
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="rounded-[1.8rem] border border-primary/10 bg-white/75 p-8 text-center shadow-[0_16px_45px_rgba(120,53,15,0.08)] backdrop-blur-sm sm:p-12">
            <div className="mx-auto mb-4 w-fit rounded-2xl bg-primary/8 p-3 text-primary">
              <Layers3 className="h-7 w-7" />
            </div>
            <h2 className="font-headline text-3xl text-primary">Produk tidak ditemukan</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-on-surface-variant sm:text-base">
              Kategori ini belum memiliki produk aktif. Anda bisa kembali ke
              semua kategori untuk melihat varian yang tersedia.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Lihat semua produk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        )}

        <section className="mt-12 rounded-[2rem] border border-primary/10 bg-[linear-gradient(130deg,rgba(255,251,235,0.9),rgba(254,215,170,0.8))] p-6 shadow-[0_20px_55px_rgba(120,53,15,0.10)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Bulk Order
              </p>
              <h2 className="mt-2 font-headline text-3xl text-primary sm:text-4xl">
                Butuh pesanan untuk acara atau kantor?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-on-surface-variant sm:text-base">
                Kami menerima pesanan jumlah besar dengan penjadwalan produksi
                dan pengemasan yang konsisten.
              </p>
            </div>
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20pesan%20donat%20dalam%20jumlah%20besar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Hubungi via WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-primary/10 bg-white/85 p-4">
      <p className="text-xs text-on-surface-variant">{label}</p>
      <p className="mt-2 line-clamp-1 font-headline text-2xl font-semibold text-primary">
        {value}
      </p>
    </div>
  );
}
