import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Armex Capital — Inversiones Privadas",
  description: "Firma mexicana de inversiones privadas con rendimientos mensuales desde 1.75%. Capital Protegido, Capital Planificado, Capital Superior.",
  keywords: "inversiones, Cuernavaca, Morelos, rendimientos, capital, Armex",
  openGraph: {
    title: "Armex Capital — Inversiones Privadas",
    description: "Rendimientos mensuales desde 1.75%. Tu capital, tu futuro.",
    url: "https://armexcapital.com",
    siteName: "Armex Capital",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#080C18] text-[#F0EDE6] antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
