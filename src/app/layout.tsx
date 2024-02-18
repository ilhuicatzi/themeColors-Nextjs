import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Mis Colores",
  description: "Una colección de paletas de colores y estilos html y css para usar en tus proyectos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
          <Navbar />
          {children}
      </body>
    </html>
  );
}
