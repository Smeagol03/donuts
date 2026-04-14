"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const { state } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
        <header 
          className={cn(
            "mx-auto max-w-7xl w-full transition-all duration-500 pointer-events-auto rounded-full border border-white/40",
            isScrolled 
              ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(146,64,14,0.12)] py-2.5 px-6" 
              : "bg-transparent py-4 px-2 border-transparent"
          )}
        >
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0"
            >
              <BrandMark className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105" />
              <span className="text-xl font-headline font-bold tracking-tight text-primary transition-colors">
                Donatku<span className="text-secondary text-2xl leading-none">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center bg-primary/5 rounded-full px-1.5 py-1">
              <NavLink href="/">Beranda</NavLink>
              <NavLink href="/products">Produk</NavLink>
              <NavLink href="/cart">Keranjang</NavLink>
            </div>

            {/* Right Side: Cart & Mobile Toggle */}
            <div className="flex items-center gap-2">
              <Link
                href="/cart"
                className="relative group flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-white transition-all hover:bg-secondary hover:shadow-lg hover:shadow-primary/20 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 transition-transform group-hover:-rotate-12" />
                <span className="hidden sm:inline">Bag</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-black text-white ring-2 ring-white">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 md:hidden items-center justify-center rounded-full bg-white/50 text-primary transition-colors hover:bg-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-primary/20 backdrop-blur-md transition-opacity duration-500 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-4 right-4 bottom-4 z-50 w-72 origin-right overflow-hidden rounded-[2.5rem] bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden",
          isMobileMenuOpen ? "translate-x-0 scale-100 opacity-100" : "translate-x-12 scale-95 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex h-full flex-col p-8 pt-16">
          <div className="mb-8 border-b border-primary/5 pb-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-4">Menu</p>
            <nav className="flex flex-col gap-2">
              <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Beranda
              </MobileNavLink>
              <MobileNavLink href="/products" onClick={() => setIsMobileMenuOpen(false)}>
                Produk
              </MobileNavLink>
              <MobileNavLink href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                Keranjang
              </MobileNavLink>
            </nav>
          </div>
          
          <div className="mt-auto rounded-3xl bg-primary/5 p-6">
            <p className="text-xs font-bold text-primary mb-2">Butuh Bantuan?</p>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Hubungi kami via WhatsApp untuk respon cepat.
            </p>
          </div>
        </div>
      </div>

      {/* Spacer removed for floating header effect, using padding on main if needed */}
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-full px-5 py-2 text-sm font-bold text-primary/70 transition-all hover:text-primary",
        "hover:bg-white/50"
      )}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center px-4 py-3 text-lg font-medium text-on-surface hover:text-primary hover:bg-surface-low rounded-xl transition-all"
    >
      {children}
    </Link>
  );
}

function BrandMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-secondary shadow-[0_8px_20px_rgba(146,64,14,0.25)]",
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
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
