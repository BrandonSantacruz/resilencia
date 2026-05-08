import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "AshVein | Camino de Hierro",
  description:
    "AshVein es una forja digital para hombres y mujeres que dejaron de mentirse y eligieron disciplina, verdad y silencio.",
  keywords: [
    "disciplina",
    "despertar personal",
    "viking mindset",
    "estoicismo",
    "ebook transformación",
  ],
};

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Mi Camino", href: "/micamino" },
  { label: "El Camino", href: "/elcamino" },
  { label: "Blog", href: "/blog" },
  { label: "Tienda", href: "/tienda" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cinzel.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
          <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="section-title text-lg text-accent gold-hover sm:text-xl">
              AshVein
            </Link>
            <div className="flex items-center gap-3 text-sm sm:gap-6 sm:text-base">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="gold-hover rounded px-2 py-1 text-foreground/85 hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main className="flex-1 pt-16">{children}</main>

        <footer className="border-t border-border/70 bg-black/60 px-4 py-8">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-center sm:text-left">
            <p className="section-title text-sm text-accent">
              ᚠ ᚢ ᚦ ᚨ ᚱ • No naciste para encajar, naciste para forjar
            </p>
            <p className="max-w-3xl text-sm text-muted">
              Si el mundo premia la máscara, aquí se respeta la cicatriz. Ceniza en las manos,
              hierro en la espalda, verdad en la boca.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
