import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected projects by Lucas Candon-Campos.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects | Lucas Candon-Campos',
    description: 'Selected projects by Lucas Candon-Campos.',
  },
};

const projects = [
  {
    name: 'CampusFuel',
    description:
      'A campus dining nutrition app built around real university menus, making it easier for students to understand and track what they eat.',
    href: 'https://lucascandoncampos.github.io/hokiecals-app/',
  },
  {
    name: 'UFC Fight Predictor',
    description:
      'A machine-learning system trained on 7,253 fights and 65 features, reaching 67.7% held-out prediction accuracy.',
    href: 'https://github.com/LucasCandonCampos/ufc-predictor',
  },
  {
    name: 'Outclass',
    description:
      'An AI assistant that brings Canvas assignments, grades, syllabi, and deadlines into a useful conversation inside Telegram.',
    href: 'https://github.com/LucasCandonCampos/outclass',
  },
  {
    name: 'Kató',
    description:
      'A language-learning partner for practicing Spanish and Portuguese through text, voice notes, and live calls.',
    href: 'https://github.com/LucasCandonCampos/kato-agent',
  },
  {
    name: 'BernieBot',
    description:
      'An always-on market analyst that monitors stocks and crypto, identifies meaningful events, and delivers investor briefings in Telegram.',
    href: 'https://github.com/LucasCandonCampos/Bernie',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-content" aria-labelledby="projects-title">
        <div className="wrapper">
          <h1 className="page-heading" id="projects-title">
            Projects
          </h1>
          <ul className="post-list minimalist-project-list">
            {projects.map((project) => (
              <li key={project.name}>
                <h2>
                  <a
                    className="post-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.name}
                    <span className="project-link-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </h2>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
