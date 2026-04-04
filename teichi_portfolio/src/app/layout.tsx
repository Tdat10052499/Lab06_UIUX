import type { Metadata } from "next";
import { Inter, Shippori_Mincho } from "next/font/google";
import "@/style/globals.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const shippori = Shippori_Mincho({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-shippori",
});

export const metadata: Metadata = {
  title: "Teichi | Architect of Temporal Systems",
  description: "Portfolio of a Fullstack Developer & IoT Expert specializing in Smart Agriculture and Blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
