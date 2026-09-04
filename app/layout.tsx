import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lucas-candon-campos.testlogix.chatgpt.site'),
  title: 'Lucas Candon-Campos — Founder & Developer',
  description:
    'Lucas Candon-Campos builds useful products at the intersection of AI, data, and people.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lucas Candon-Campos — Founder & Developer',
    description:
      'Building useful products where AI, data, and people meet.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Lucas Candon-Campos — Founder, Developer, AI Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Candon-Campos — Founder & Developer',
    description: 'Building useful products where AI, data, and people meet.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
