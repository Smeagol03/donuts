import { getProductBySlug, getAllProducts } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductCard } from "@/components/shop/product-card";
import { AddToCartButton } from "./add-to-cart-button";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getAllProducts()
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const categoryLabels = {
    glazed: "Glazed",
    filled: "Filled",
    premium: "Premium",
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">
                Beranda
              </Link>
            </li>
            <li className="text-on-surface-variant">/</li>
            <li>
              <Link href="/products" className="text-on-surface-variant hover:text-primary transition-colors">
                Produk
              </Link>
            </li>
            <li className="text-on-surface-variant">/</li>
            <li className="text-on-surface font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-linear-to-br from-surface-container to-surface-high rounded-3xl overflow-hidden flex items-center justify-center">
            <span className="text-[200px]">🍩</span>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container text-sm font-medium rounded-full">
                {categoryLabels[product.category]}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-headline text-on-surface mb-4">
              {product.name}
            </h1>

            <p className="text-lg text-on-surface-variant mb-6">
              {product.description}
            </p>

            <div className="mb-8">
              <span className="text-4xl font-bold text-primary">
                Rp {product.price.toLocaleString("id-ID")}
              </span>
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-on-surface mb-3">Pilihan Varian</h3>
<div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <VariantButton
                    key={variant.id}
                    variant={variant}
                  />
                ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <AddToCartButton product={product} />

            {/* Additional Info */}
            <div className="mt-8 pt-8 spaces-y-4">
              <div className="flex items-center gap-3 text-on-surface-variant">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.905c0-.914-.893-1.58-1.775-1.32-2.015.59-4.036 1.143-6.06 1.63-.76.183-1.165.893-1.165 1.665v1.7" />
                </svg>
                <span>Pengiriman same day untuk area Jakarta</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <span>Garansi kualitas dan kesegaran</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold font-headline text-on-surface mb-8">
              Produk Serupa
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function VariantButton({
  variant,
}: {
  variant: { id: string; name: string; priceModifier: number };
}) {
  return (
    <div className="flex flex-col items-center p-4 rounded-xl bg-surface-container hover:bg-surface-high transition-colors cursor-pointer group">
      <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">
        {variant.name}
      </span>
      {variant.priceModifier > 0 && (
        <span className="text-xs text-on-surface-variant mt-1">
          +Rp {variant.priceModifier.toLocaleString("id-ID")}
        </span>
      )}
    </div>
  );
}