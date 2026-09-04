import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes on building products, applied AI, and entrepreneurship.',
  alternates: { canonical: '/writing' },
  openGraph: {
    title: 'Writing | Lucas Candon-Campos',
    description: 'Notes on building products, applied AI, and entrepreneurship.',
  },
};

const drafts = [
  {
    topic: 'AI systems',
    title: 'Build the trigger, not the noise',
    description:
      'What a portfolio-monitoring agent taught me about designing systems that know when not to run.',
  },
  {
    topic: 'Building products',
    title: 'A campus product for every campus',
    description:
      'Notes from taking a dining-hall product from one university to hundreds without losing the local feel.',
  },
  {
    topic: 'AI at work',
    title: 'Measure the work that disappears',
    description:
      'A practical way to think about ROI when automation gives people hours back.',
  },
];

export default function WritingPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-content" aria-labelledby="writing-title">
        <div className="wrapper">
          <h1 className="page-heading" id="writing-title">
            Writing
          </h1>
          <p className="page-intro">
            I’m working on the first essays. For now, these are the questions on my
            desk.
          </p>
          <ul className="post-list writing-list">
            {drafts.map((draft) => (
              <li key={draft.title}>
                <span className="post-meta">Draft · {draft.topic}</span>
                <h2 className="post-link plain-title">{draft.title}</h2>
                <p>{draft.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
