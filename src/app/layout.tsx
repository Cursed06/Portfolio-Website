import type { Metadata } from 'next';
import { Space_Grotesk, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rama Prodjowijono — Software Engineer & Graphic Designer',
  description: 'Official portfolio of Darien Adika Rama Prodjowijono (Rama Prodjowijono) — Computer Science undergraduate at BINUS University bridging software engineering and visual design.',
  keywords: ['Darien Adika Rama Prodjowijono', 'Rama Prodjowijono', 'Darien Prodjowijono', 'Software Engineer', 'Computer Science', 'BINUS University', 'Graphic Design', 'AI', 'Next.js', 'TypeScript', 'Flutter', 'Spring Boot'],
  authors: [{ name: 'Darien Adika Rama Prodjowijono (Rama Prodjowijono)' }],
  openGraph: {
    title: 'Rama Prodjowijono (Darien Adika Rama Prodjowijono) — CS × Design',
    description: 'Bridging software engineering rigor with graphic communication.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#fcfbf7] text-[#1b1c18] font-body selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
