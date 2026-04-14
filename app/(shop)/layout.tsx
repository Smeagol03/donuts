import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 sm:pt-28">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  );
}
