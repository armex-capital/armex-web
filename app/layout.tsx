import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

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
  verification: {
    google: "_V_aHASVKgKp4NJqzc7S-A_tz5N6itiiKcVJoMUfDKY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#080C18] text-[#F0EDE6] antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
