import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://donat.alpiant.my.id"),
  title: "Donatku - Donat",
  description: "Donat premium dengan berbagai varian rasa yang lezat. Pesan sekarang untuk pengalaman rasa yang tak terlupakan.",
  keywords: ["donat", "donat premium", "donat enak", "artisan donut", "donat fresh"],
  authors: [{ name: "Donatku" }],
  creator: "Donatku",
  publisher: "Donatku",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://donat.alpiant.my.id",
    siteName: "Donatku",
    title: "Donatku - Donat",
    description: "Donat premium dengan berbagai varian rasa yang lezat. Pesan sekarang untuk pengalaman rasa yang tak terlupakan.",
    locale: "id_ID",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Donatku - Donat Premium Artisanal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donatku - Donat",
    description: "Donat premium dengan berbagai varian rasa yang lezat. Pesan sekarang untuk pengalaman rasa yang tak terlupakan.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [
      { url: "/favicon.ico" },
    ],
  },
  verification: {
    google: "", // Add your Google verification code here if needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${fredoka.variable} ${nunito.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
