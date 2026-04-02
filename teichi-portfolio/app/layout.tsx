import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

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
      <body className={`${inter.variable} ${instrumentSerif.variable} font-body bg-surface text-on-surface antialiased`}>
        {children}
      </body>
    </html>
  );
}
