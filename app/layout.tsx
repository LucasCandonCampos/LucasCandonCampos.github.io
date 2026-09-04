import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import './globals.css';

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lucas-candon-campos.testlogix.chatgpt.site'),
  title: {
    default: 'Lucas Candon-Campos',
    template: '%s | Lucas Candon-Campos',
  },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Lucas Candon-Campos',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Candon-Campos',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={lora.variable}>{children}</body>
    </html>
  );
}
