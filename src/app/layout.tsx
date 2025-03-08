import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Laporan Pajak #JadiLebihMudah",
  description: "Aplikasi berbasis website untuk laporan pajak tahunan dan laporan keuangan sudah terautomatisasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}