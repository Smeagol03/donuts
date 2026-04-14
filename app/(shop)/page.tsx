import { ProductCard } from "@/components/shop/product-card";
import { getAllProducts } from "@/lib/products";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CakeSlice,
  Clock3,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
} from "lucide-react";

const categories = [
  {
    title: "Glazed",
    description:
      "Ringan, glossy, dan manis seimbang untuk pelanggan yang suka rasa klasik.",
    href: "/products?category=glazed",
    accent: "from-rose-200 via-white to-orange-100",
    iconWrap: "bg-rose-100 text-rose-700",
    icon: CakeSlice,
  },
  {
    title: "Filled",
    description:
      "Donat isi dengan tekstur lembut dan filling yang terasa penuh di setiap gigitan.",
    href: "/products?category=filled",
    accent: "from-amber-200 via-yellow-50 to-white",
    iconWrap: "bg-amber-100 text-amber-700",
    icon: HeartHandshake,
  },
  {
    title: "Premium",
    description:
      "Pilihan signature dengan bahan lebih kaya, finishing rapi, dan karakter rasa lebih berani.",
    href: "/products?category=premium",
    accent: "from-orange-200 via-white to-stone-100",
    iconWrap: "bg-stone-200 text-stone-700",
    icon: Star,
  },
] as const;

const qualityPillars = [
  {
    title: "Freshly glazed",
    description:
      "Diproduksi harian dalam batch kecil agar tekstur tetap empuk dan finish tetap rapi.",
    icon: Sparkles,
  },
  {
    title: "Bahan terpilih",
    description:
      "Kami fokus pada rasa bersih, butter notes hangat, dan topping yang tidak berlebihan.",
    icon: ShieldCheck,
  },
  {
    title: "Siap kirim cepat",
    description:
      "Cocok untuk snack kantor, hampers, atau repeat order harian tanpa proses yang rumit.",
    icon: Store,
  },
] as const;

const contactItems = [
  {
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20donat",
    icon: Phone,
  },
  {
    label: "Telepon",
    value: "(021) 1234-5678",
    href: "tel:+622112345678",
    icon: Phone,
  },
  {
    label: "Email",
    value: "halo@donatpremium.com",
    href: "mailto:halo@donatpremium.com",
    icon: Mail,
  },
  {
    label: "Lokasi",
    value: "Jl. Donat No. 123, Lombok",
    href: "https://maps.google.com",
    icon: MapPin,
  },
] as const;

export default function HomePage() {
  const products = getAllProducts();
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);
  const bestSellers = products
    .filter((product) => product.bestSeller)
    .slice(0, 3);

  return (
    <div className="overflow-hidden bg-background text-foreground">
      {/* hero section */}

      <section className="relative isolate min-h-[92vh] flex items-center">
        {/* Background elements refined */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.15),transparent_30%),linear-gradient(180deg,#fff8eb_0%,#fef3c7_50%,#fff7ed_100%)]" />
        <div className="absolute left-[-10%] top-[10%] h-100 w-100 rounded-full bg-white/40 blur-[100px]" />
        <div className="absolute right-[-5%] bottom-[10%] h-87.5 w-87.5 rounded-full bg-secondary/10 blur-[80px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Content: Text Stack */}
            <div className="flex flex-col">
              <div className="animate-fade-in group mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-white/60 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary shadow-xs backdrop-blur-md transition-all hover:bg-white/80">
                <Sparkles className="h-3.5 w-3.5 text-secondary" />
                Premium Artisanal Donuts
              </div>

              <h1 className="max-w-2xl font-headline text-5xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl leading-[1.05]">
                Donat yang terasa{" "}
                <span className="text-secondary italic">hangat</span>, halus,
                dan layak diingat.
              </h1>

              <p className="mt-8 max-w-lg text-lg leading-relaxed text-on-surface-variant/90">
                Halaman ini dirancang sebagai storefront yang lebih dewasa:
                visual bersih, navigasi intuitif, dan produk yang menonjol tanpa
                kehilangan kehangatan khas toko kami.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:bg-secondary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span className="relative z-10">Jelajahi Menu</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#best-sellers"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-white/40 px-8 py-4 text-sm font-bold text-primary backdrop-blur-md transition-all hover:bg-white/60 hover:border-primary/40"
                >
                  Paling Laris
                </Link>
              </div>

              {/* Stats moved to a cleaner row with subtle dividers */}
              <div className="mt-16 flex items-center gap-8 border-t border-primary/10 pt-8">
                <div>
                  <div className="font-headline text-3xl font-bold text-primary">
                    12+
                  </div>
                  <div className="text-xs uppercase tracking-widest text-on-surface-variant/70 mt-1">
                    Varian Rasa
                  </div>
                </div>
                <div className="h-10 w-px bg-primary/10" />
                <div>
                  <div className="font-headline text-3xl font-bold text-primary">
                    100%
                  </div>
                  <div className="text-xs uppercase tracking-widest text-on-surface-variant/70 mt-1">
                    Fresh Daily
                  </div>
                </div>
                <div className="h-10 w-px bg-primary/10" />
                <div>
                  <div className="font-headline text-3xl font-bold text-primary">
                    8AM
                  </div>
                  <div className="text-xs uppercase tracking-widest text-on-surface-variant/70 mt-1">
                    Open Hours
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content: Refined Visual Card */}
            <div className="relative lg:ml-auto">
              <div className="absolute -inset-4 rounded-[3rem] bg-white/30 blur-2xl lg:-inset-8" />
              <div className="relative animate-float aspect-square w-full max-w-120 overflow-hidden rounded-[2.5rem] border border-white/80 bg-linear-to-br from-white/60 to-white/20 p-8 shadow-2xl backdrop-blur-2xl">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">
                        Signature Selection
                      </span>
                      <h2 className="mt-2 font-headline text-3xl font-bold text-primary leading-tight">
                        Crafted with <br />
                        heart & butter.
                      </h2>
                    </div>
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <CakeSlice className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="relative my-8 flex flex-1 items-center justify-center">
                    <div className="absolute h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
                    <div className="relative scale-110 lg:scale-125">
                      <DonutVisual />
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-primary px-6 py-4 text-white shadow-lg shadow-primary/20">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-white/70">
                        Starting at
                      </span>
                      <span className="font-headline text-2xl font-bold">
                        Rp 18.000
                      </span>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] uppercase tracking-widest text-white/70">
                        Texture
                      </span>
                      <span className="font-bold">Ultra Soft</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge Detail */}
              <div className="absolute -bottom-6 -left-6 animate-bounce-subtle rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-secondary/20 p-2 text-secondary">
                    <Clock3 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary/60">
                      Delivery
                    </p>
                    <p className="text-sm font-bold text-primary">
                      Ready in 15m
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-[2rem] border border-primary/10 bg-white/70 p-4 shadow-[0_18px_50px_rgba(120,53,15,0.08)] backdrop-blur-sm md:grid-cols-3 md:p-6">
          {qualityPillars.map((pillar) => (
            <FeaturePanel key={pillar.title} {...pillar} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
              Explore categories
            </p>
            <h2 className="mt-3 font-headline text-4xl text-primary sm:text-5xl">
              Pilih mood rasa yang sesuai dengan pelanggan Anda.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-on-surface-variant sm:text-base">
            Saya ubah section kategori menjadi lebih editorial: tiap kartu
            memberi arah rasa dan langsung mengarahkan user ke listing produk.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      <section
        id="featured"
        className="bg-linear-to-b from-transparent via-white/45 to-transparent py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                Featured selection
              </p>
              <h2 className="mt-3 font-headline text-4xl text-primary sm:text-5xl">
                Produk unggulan yang paling cepat menjelaskan kualitas toko.
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-200 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Lihat semua menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {bestSellers.length > 0 && (
        <section
          id="best-sellers"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[2rem] bg-primary p-8 text-white shadow-[0_24px_60px_rgba(120,53,15,0.24)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                Best sellers
              </p>
              <h2 className="mt-4 font-headline text-4xl sm:text-5xl">
                Pilihan yang paling sering dipesan ulang.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/80 sm:text-base">
                Section ini saya jadikan titik konversi kedua. Setelah user
                melihat hero dan unggulan, mereka langsung diarahkan ke produk
                yang sudah tervalidasi oleh pembelian berulang.
              </p>
              <div className="mt-8 space-y-4">
                <InfoRow
                  label="Cocok untuk"
                  value="meeting, gift box, snack table"
                />
                <InfoRow label="Karakter" value="aman untuk first order" />
                <InfoRow
                  label="Checkout"
                  value="langsung ke katalog atau WhatsApp"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {bestSellers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(255,251,235,0.95),rgba(254,215,170,0.88))] p-8 shadow-[0_24px_60px_rgba(120,53,15,0.12)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                Order channel
              </p>
              <h2 className="mt-3 font-headline text-4xl text-primary sm:text-5xl">
                Pesan lebih cepat tanpa harus mencari info toko ke banyak
                tempat.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-on-surface-variant sm:text-base">
                CTA penutup saya rapikan menjadi satu area kontak yang jelas:
                WhatsApp untuk order cepat, telepon untuk kebutuhan langsung,
                dan email untuk kerja sama atau pesanan skala lebih besar.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Buka katalog
                </Link>
                <a
                  href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20donat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-primary/15 bg-white/80 px-6 py-3.5 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Pesan via WhatsApp
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => (
                <ContactCard key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturePanel({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-[1.5rem] border border-primary/8 bg-surface p-5 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-primary/8 p-3 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-headline text-2xl text-primary">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-on-surface-variant">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({
  title,
  description,
  href,
  accent,
  iconWrap,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  accent: string;
  iconWrap: string;
  icon: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-[2rem] border border-primary/10 bg-linear-to-br ${accent} p-6 shadow-[0_16px_40px_rgba(120,53,15,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(120,53,15,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
    >
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-white/50 blur-2xl transition-transform duration-300 group-hover:scale-110" />
      <div className={`inline-flex rounded-[1.25rem] p-3 ${iconWrap}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-headline text-3xl text-primary">{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-7 text-on-surface-variant">
        {description}
      </p>
      <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        Lihat kategori
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

function ContactCard({
  label,
  value,
  href,
  icon: Icon,
}: {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group rounded-[1.5rem] border border-primary/10 bg-white/75 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-primary/8 p-3 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-primary">{label}</p>
          <p className="mt-1 text-sm leading-6 text-on-surface-variant">
            {value}
          </p>
        </div>
      </div>
    </a>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm">
      <span className="text-white/65">{label}</span>
      <span className="text-right font-medium text-white">{value}</span>
    </div>
  );
}

function DonutVisual() {
  return (
    <div className="relative flex aspect-[1.05/1] items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_18%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.12),transparent_20%)]" />
      <svg
        viewBox="0 0 240 240"
        className="relative h-52 w-52 drop-shadow-[0_24px_34px_rgba(0,0,0,0.28)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="donutBase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FED7AA" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="donutGlaze" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="100%" stopColor="#FDBA74" />
          </linearGradient>
        </defs>
        <circle cx="120" cy="126" r="74" fill="#7C2D12" opacity="0.18" />
        <circle cx="120" cy="118" r="74" fill="url(#donutBase)" />
        <path
          d="M55 113c0-40 29-69 65-69 17 0 32 5 44 14 8 6 14 15 19 24-11-5-23-7-36-7-16 0-33 4-50 11-18 8-31 10-38 8-2 7-4 13-4 19z"
          fill="url(#donutGlaze)"
          opacity="0.92"
        />
        <circle cx="120" cy="118" r="31" fill="#8B4513" opacity="0.28" />
        <circle cx="120" cy="116" r="30" fill="#FFF7ED" />
        <ellipse cx="90" cy="88" rx="16" ry="8" fill="#FFFFFF" opacity="0.38" />
        <rect x="82" y="58" width="10" height="5" rx="2.5" fill="#FB7185" />
        <rect x="108" y="52" width="8" height="6" rx="3" fill="#FCD34D" />
        <rect x="136" y="63" width="9" height="5" rx="2.5" fill="#FDBA74" />
        <rect x="159" y="93" width="10" height="5" rx="2.5" fill="#FBBF24" />
        <rect x="72" y="132" width="9" height="5" rx="2.5" fill="#F59E0B" />
        <rect x="147" y="145" width="10" height="5" rx="2.5" fill="#FB7185" />
      </svg>
    </div>
  );
}
