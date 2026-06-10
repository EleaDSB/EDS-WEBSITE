import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EDS Web Solutions — Développeuse Web Freelance à Toulouse",
  description: "Développeuse web freelance à Toulouse. Création de sites vitrine, e-commerce et applications web pour indépendants et artisans. Devis gratuit sous 24h.",
  metadataBase: new URL("https://eds-web.dev"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://eds-web.dev",
    siteName: "EDS Web Solutions",
    title: "EDS Web Solutions — Développeuse Web Freelance à Toulouse",
    description: "Développeuse web freelance à Toulouse. Création de sites vitrine, e-commerce et applications web pour indépendants et artisans. Devis gratuit sous 24h.",
    images: [{ url: "/heroimage.jpg", width: 1200, height: 630, alt: "EDS Web Solutions — Développeuse Web Freelance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EDS Web Solutions — Développeuse Web Freelance à Toulouse",
    description: "Création de sites vitrine, e-commerce et applications web pour indépendants et artisans. Devis gratuit sous 24h.",
    images: ["/heroimage.jpg"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
