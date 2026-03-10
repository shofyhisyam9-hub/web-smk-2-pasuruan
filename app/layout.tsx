import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMK Negeri 2 Pasuruan",
  description:
    "Lembaga pendidikan berkualitas untuk mencetak generasi tenaga teknik profesional",
  keywords:
    "SMK Negeri 2 Pasuruan, Teknik, Pendidikan, Sekolah Menengah Kejuruan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head />
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
