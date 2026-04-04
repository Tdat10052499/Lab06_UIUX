import type { Metadata } from "next";
import { Inter, Shippori_Mincho } from "next/font/google";
import "@/style/globals.css";
import ClockworkBackground from "@/components/motion/ClockworkBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const shippori = Shippori_Mincho({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-shippori",
});

export const metadata: Metadata = {
  title: "Teichi | Architect of Temporal Systems",
  description: "Portfolio of a Fullstack Developer & IoT Expert specializing in Smart Agriculture and Blockchain.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<any>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${shippori.variable} antialiased min-h-screen flex flex-col bg-background text-white relative`}>
        <ClockworkBackground />
        {children}
      </body>
    </html>
  );
}