import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin'], 
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif'
});

export const metadata: Metadata = {
  title: 'Teichi Portfolio',
  description: 'The Cinematic Nocturne Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} font-body bg-surface text-on-surface antialiased selection:bg-primary-container selection:text-primary`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
