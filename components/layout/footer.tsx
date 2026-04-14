import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface pb-12 pt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 border-b border-primary/5 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="group mb-6 flex items-center gap-2">
              <BrandMark />
              <span className="font-headline text-2xl font-bold tracking-tight text-primary">
                Donatku<span className="text-secondary">.</span>
              </span>
            </Link>
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-on-surface-variant">
              Membangun pengalaman rasa yang jujur melalui donat artisanal yang
              dibuat harian dengan bahan-bahan pilihan terbaik.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={Camera} href="#" />
              <SocialLink icon={MessageCircle} href="#" />
              <SocialLink icon={Send} href="#" />
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-primary">
              Menu
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/">Beranda</FooterLink>
              <FooterLink href="/products">Produk</FooterLink>
              <FooterLink href="/cart">Keranjang</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-primary">
              Bantuan
            </h4>
            <ul className="space-y-4">
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="#">Pengiriman</FooterLink>
              <FooterLink href="#">Kontak Kami</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-primary">
              Kontak
            </h4>
            <ul className="space-y-4">
              <li className="group flex cursor-pointer items-start gap-3 text-sm text-on-surface-variant transition-colors hover:text-primary">
                <Phone className="mt-0.5 h-4 w-4 text-secondary" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="group flex cursor-pointer items-start gap-3 text-sm text-on-surface-variant transition-colors hover:text-primary">
                <Mail className="mt-0.5 h-4 w-4 text-secondary" />
                <span>hello@donatku.id</span>
              </li>
              <li className="group flex cursor-pointer items-start gap-3 text-sm text-on-surface-variant transition-colors hover:text-primary">
                <MapPin className="mt-0.5 h-4 w-4 text-secondary" />
                <span>Jl. Donat No. 123, Selong, Lombok Timur</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs font-medium text-on-surface-variant/60">
            (c) {new Date().getFullYear()} Donatku Artisanal. Semua hak
            dilindungi.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 transition-colors hover:text-primary"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="#"
              className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 transition-colors hover:text-primary"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-1 text-sm text-on-surface-variant transition-all hover:text-primary"
      >
        <span>{children}</span>
        <ArrowUpRight className="-translate-y-1 translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
      </Link>
    </li>
  );
}

function SocialLink({ icon: Icon, href }: { icon: LucideIcon; href: string }) {
  return (
    <Link
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
    >
      <Icon className="h-4 w-4" />
    </Link>
  );
}

function BrandMark() {
  return (
    <div
      className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-primary to-secondary shadow-[0_8px_18px_rgba(146,64,14,0.24)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none">
        <path
          d="M7 5v14"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M7 5h4.8a6.8 6.8 0 010 14H7"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.3 9.3h2.1M10.3 14.5h1.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
