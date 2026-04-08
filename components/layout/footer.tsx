import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-headline text-primary mb-4">
              Donatku
            </h3>
            <p className="text-on-surface-variant max-w-md">
              Donat premium artisanal dengan berbagai varian rasa yang lezat. 
              Dibuat dengan bahan berkualitas tinggi dan cinta dalam setiap gigitan.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-on-surface mb-4">Tautan</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-on-surface-variant hover:text-primary transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-on-surface-variant hover:text-primary transition-colors">
                  Keranjang
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-on-surface mb-4">Kontak</h4>
            <ul className="space-y-2 text-on-surface-variant">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.85-1.091l-4.244-1.061a.75.75 0 00-.86.325l-.872 1.452a.75.75 0 01-.813.352A10.443 10.443 0 013.1 8.55a.75.75 0 01.352-.813l1.452-.872a.75.75 0 00.325-.86L4.17 3.1a.75.75 0 00-.86-.348A2.25 2.25 0 001.5 4.5v2.25z" />
                </svg>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>hello@donatku.id</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Lombok Timur</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-on-surface-variant text-sm">
          <p>© {new Date().getFullYear()} Donatku. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}