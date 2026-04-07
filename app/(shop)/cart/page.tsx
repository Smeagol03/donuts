"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice, generateWhatsAppLink, generateOrderId } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import type { Customer } from "@/types";

export default function CartPage() {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const [customer, setCustomer] = useState<Customer>({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!customer.name.trim()) {
      newErrors.name = "Nama harus diisi";
    }

    if (!customer.phone.trim()) {
      newErrors.phone = "Nomor telepon harus diisi";
    } else if (!/^(\+62|62|0)8[1-9][0-9]{7,10}$/.test(customer.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Format nomor telepon tidak valid";
    }

    if (!customer.address.trim()) {
      newErrors.address = "Alamat harus diisi";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateOrderMessage = (): string => {
    const orderId = generateOrderId();
    const itemsList = state.items
      .map((item) => {
        const variantText = item.variant ? ` (${item.variant.name})` : "";
        return `- ${item.product.name}${variantText} x${item.quantity} = ${formatPrice(
          (item.product.price + (item.variant?.priceModifier || 0)) * item.quantity
        )}`;
      })
      .join("\n");

    return `🛒 *PESANAN BARU*
Order ID: ${orderId}

📦 *Detail Pesanan:*
${itemsList}

💰 *Total: ${formatPrice(state.total)}*

👤 *Data Pelanggan:*
Nama: ${customer.name}
Telepon: ${customer.phone}
Alamat: ${customer.address}
${customer.notes ? `Catatan: ${customer.notes}` : ""}

_Terima kasih telah berbelanja di Donatku!_`;
  };

  const handleCheckout = () => {
    if (!validateForm()) return;
    if (state.items.length === 0) {
      alert("Keranjang kosong!");
      return;
    }

    const message = generateOrderMessage();
    const whatsappUrl = generateWhatsAppLink("6281234567890", message);
    window.open(whatsappUrl, "_blank");
    clearCart();
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <span className="text-8xl mb-6 block">🍩</span>
          <h1 className="text-3xl font-bold font-headline text-on-surface mb-4">
            Keranjang Kosong
          </h1>
          <p className="text-on-surface-variant mb-8">
            Belum ada donat di keranjang. Yuk mulai pilih donat favoritmu!
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-semibold text-lg transition-all hover:brightness-110"
          >
            Lihat Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">
                Beranda
              </Link>
            </li>
            <li className="text-on-surface-variant">/</li>
            <li className="text-on-surface font-medium">Keranjang</li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold font-headline text-on-surface mb-8">
          Keranjang Belanja
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div
                key={`${item.productId}-${item.variantId || "default"}`}
                className="flex gap-4 p-4 bg-surface-low rounded-2xl"
              >
                <div className="w-24 h-24 bg-surface-container rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">🍩</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-on-surface">{item.product.name}</h3>
                  {item.variant && (
                    <p className="text-sm text-on-surface-variant">{item.variant.name}</p>
                  )}
                  <p className="text-primary font-medium mt-1">
                    {formatPrice(item.product.price + (item.variant?.priceModifier || 0))}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => removeItem(item.productId, item.variantId)}
                    className="text-on-surface-variant hover:text-error transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-high transition-colors flex items-center justify-center text-on-surface"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-on-surface">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-high transition-colors flex items-center justify-center text-on-surface"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-surface-low rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-bold font-headline text-on-surface mb-6">
                Data Pengiriman
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCheckout();
                }}
                className="space-y-4"
              >
                <Input
                  id="name"
                  label="Nama Lengkap"
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  error={errors.name}
                  placeholder="John Doe"
                />

                <Input
                  id="phone"
                  label="Nomor Telepon"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  error={errors.phone}
                  placeholder="08123456789"
                />

                <Textarea
                  id="address"
                  label="Alamat Lengkap"
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  error={errors.address}
                  placeholder="Jl. Contoh No. 123, Jakarta"
                />

                <Textarea
                  id="notes"
                  label="Catatan (Opsional)"
                  value={customer.notes}
                  onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                  placeholder="Catatan untuk pesanan..."
                />

                <div className="pt-4 spaces-y-4">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>{formatPrice(state.total)}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Ongkir</span>
                    <span className="text-secondary">Gratis</span>
                  </div>
                  <div className="h-px bg-outline-variant" />
                  <div className="flex justify-between text-xl font-bold text-on-surface">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(state.total)}</span>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Pesan via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}