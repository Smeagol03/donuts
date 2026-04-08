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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(149,65,110,0.1)] py-3" 
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-primary-container flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="4" />
                  <circle cx="12" cy="12" r="4" fill="currentColor" />
                </svg>
              </div>
              <span className="text-2xl font-bold font-headline tracking-tight text-primary group-hover:text-primary-container transition-colors">
                Donatku
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="/">Beranda</NavLink>
              <NavLink href="/products">Produk</NavLink>
              <NavLink href="/cart">Keranjang</NavLink>
            </div>

            {/* Cart Button & Mobile Menu */}
            <div className="flex items-center gap-3">
              <Link
                href="/cart"
                className="relative inline-flex items-center justify-center h-11 px-4 bg-linear-to-br from-primary to-primary-container text-on-primary rounded-full font-medium transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="ml-2 hidden sm:inline">Keranjang</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-tertiary text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                    {itemCount > 9 ? "9+" : itemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-surface-container transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-on-surface" />
                ) : (
                  <Menu className="w-6 h-6 text-on-surface" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 pt-20">
          <nav className="flex flex-col gap-4">
            <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Beranda
            </MobileNavLink>
            <MobileNavLink href="/products" onClick={() => setIsMobileMenuOpen(false)}>
              Produk
            </MobileNavLink>
            <MobileNavLink href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
              Keranjang
              {itemCount > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-primary text-white text-xs rounded-full">
                  {itemCount}
                </span>
              )}
            </MobileNavLink>
          </nav>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm font-medium text-on-surface-variant hover:text-primary transition-colors py-2",
        "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-primary after:to-primary-container",
        "after:transition-all after:duration-300 hover:after:w-full"
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