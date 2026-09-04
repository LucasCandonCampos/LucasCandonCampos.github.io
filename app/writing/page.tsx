import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Writing',
  alternates: { canonical: '/writing' },
};

export default function WritingPage() {
  return <SiteHeader />;
}
