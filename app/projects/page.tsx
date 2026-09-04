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
    period: 'February 2026 — present',
    name: 'CampusFuel',
    description:
      'A nutrition-tracking app that lets students log dining hall food using real-time, campus-specific menu data. I built the core product and data pipeline, recruited product and marketing contributors, and led the rollout from Virginia Tech to nationwide availability.',
    result:
      'Available across 400+ universities representing 4M+ students; acquired 1,000+ paid users in the first month nationwide.',
  },
  {
    period: 'January 2026 — May 2026',
    name: 'BernieBot',
    context: 'IBM Experiential Learning Lab',
    description:
      'An agentic AI system that monitors portfolios for high-signal price, news, and volume events, then produces personalized investor insights. Its event-triggered architecture calls deeper analysis only when a meaningful change occurs.',
    result:
      'Led a four-person team from ideation through deployment, including the roadmap, standups, and task delegation.',
  },
  {
    period: 'January 2026',
    name: 'UFC Fight Predictor',
    href: 'https://github.com/LucasCandonCampos/ufc-predictor',
    description:
      'An end-to-end machine learning pipeline built from more than 7,000 fights and 65 matchup features across fighter performance, ratings, style, cardio, and durability. The project includes automated data collection, model retraining, SHAP explanations, and live prediction-market comparisons.',
    result: 'Reached 67.7% winner-prediction accuracy on held-out 2023–2026 data.',
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
          <ul className="post-list project-page-list">
            {projects.map((project) => (
              <li key={project.name}>
                <span className="post-meta">{project.period}</span>
                <h2>
                  {project.href ? (
                    <a
                      className="post-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                    </a>
                  ) : (
                    <span className="post-link plain-title">{project.name}</span>
                  )}
                </h2>
                {project.context ? <p className="project-context">{project.context}</p> : null}
                <p>{project.description}</p>
                <p className="project-result">{project.result}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
