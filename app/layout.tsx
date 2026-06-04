import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flinvent - Innovación Digital",
  description: "Soluciones digitales transformadoras para tu negocio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-secondary text-white">{children}</body>
    </html>
  );
}
