// app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Laybuy - Shop Now, Pay Later',
  description: 'Flexible payment solutions for buyers and sellers',
  icons: {
    icon: [
      {
        url: '/laybuy6.png',
        type: 'image/png',
      },
    ],
    apple: '/laybuy6.png',
  },
  // manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        {/* You can also add the favicon directly in head for better compatibility */}
        <link rel="icon" href="/laybuy6.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/laybuy6.png" />
      </head>
      <body className="bg-gray-50" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}