/* oxlint-disable next/no-img-element -- vinext's next/image shim currently breaks hydration. */
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

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

const additionalProjects = [
  {
    name: 'Outclass',
    label: 'AI assistant',
    description:
      'Canvas assignments, grades, syllabi, and deadlines inside Telegram.',
    href: 'https://github.com/LucasCandonCampos/outclass',
    tone: 'outclass-placeholder',
  },
  {
    name: 'Bernie',
    label: 'Market intelligence',
    description:
      'An always-on market analyst for stocks and crypto inside Telegram.',
    href: 'https://github.com/LucasCandonCampos/Bernie',
    tone: 'bernie-placeholder',
  },
  {
    name: 'Kató',
    label: 'Language learning',
    description:
      'A language partner for text, voice notes, and live calls.',
    href: 'https://github.com/LucasCandonCampos/kato-agent',
    tone: 'kato-placeholder',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="projects-page" aria-labelledby="projects-title">
        <div className="wrapper projects-intro">
          <h1 className="page-heading" id="projects-title">
            Projects
          </h1>
          <p>A selection of products, experiments, and systems I have built.</p>
        </div>

        <div className="wrapper projects-gallery">
          <article className="visual-project-card campus-card">
            <div className="visual-project-heading">
              <div>
                <p className="project-eyebrow">Featured project</p>
                <h2>CampusFuel</h2>
                <p>Campus dining nutrition, built for real university menus.</p>
              </div>
              <a
                className="project-arrow"
                href="https://lucascandoncampos.github.io/hokiecals-app/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open CampusFuel"
              >
                <ArrowIcon />
              </a>
            </div>

            <div className="campus-screens" aria-label="CampusFuel product screens">
              <figure className="phone-shot phone-shot-left">
                <img
                  src="/projects/campusfuel-progress.webp"
                  alt="CampusFuel progress and streak screen"
                  width={946}
                  height={2048}
                  loading="lazy"
                />
              </figure>
              <figure className="phone-shot phone-shot-center">
                <img
                  src="/projects/campusfuel-home.webp"
                  alt="CampusFuel calorie and macro dashboard"
                  width={946}
                  height={2048}
                  fetchPriority="high"
                />
              </figure>
              <figure className="phone-shot phone-shot-right">
                <img
                  src="/projects/campusfuel-menu.webp"
                  alt="CampusFuel dining hall selection screen"
                  width={946}
                  height={2048}
                  loading="lazy"
                />
              </figure>
              <span className="image-note">Early HokieCals product screens</span>
            </div>
          </article>

          <article className="visual-project-card ufc-card">
            <div className="visual-project-heading">
              <div>
                <p className="project-eyebrow">Machine learning</p>
                <h2>UFC Fight Predictor</h2>
                <p>7,253 fights. 65 features. 67.7% held-out accuracy.</p>
              </div>
              <a
                className="project-arrow"
                href="https://github.com/LucasCandonCampos/ufc-predictor"
                target="_blank"
                rel="noreferrer"
                aria-label="View UFC Fight Predictor on GitHub"
              >
                <ArrowIcon />
              </a>
            </div>

            <div className="ufc-visuals">
              <figure className="data-figure calibration-figure">
                <img
                  src="/projects/ufc-calibration.png"
                  alt="Calibration chart comparing UFC model probabilities before and after isotonic correction"
                  width={900}
                  height={900}
                  loading="lazy"
                />
              </figure>
              <figure className="data-figure feature-figure">
                <img
                  src="/projects/ufc-feature-importance.png"
                  alt="Ranked feature importance chart for the UFC prediction model"
                  width={1200}
                  height={2925}
                  loading="lazy"
                />
              </figure>
            </div>
          </article>

          <article className="visual-project-card kalshi-card">
            <div className="visual-project-heading">
              <div>
                <p className="project-eyebrow">AI agent</p>
                <h2>Kalshi Agent</h2>
                <p>A prediction-market trading agent that lives in iMessage.</p>
              </div>
              <a
                className="project-arrow"
                href="https://github.com/LucasCandonCampos/kalshi-agent"
                target="_blank"
                rel="noreferrer"
                aria-label="View Kalshi Agent on GitHub"
              >
                <ArrowIcon />
              </a>
            </div>

            <div className="kalshi-visual">
              <figure className="message-shot">
                <img
                  src="/projects/kalshi-imessage.png"
                  alt="Kalshi Agent answering market and portfolio questions in iMessage"
                  width={1816}
                  height={1828}
                  loading="lazy"
                />
              </figure>
            </div>
          </article>

          {additionalProjects.map((project) => (
            <article className="visual-project-card pending-visual-card" key={project.name}>
              <div className="visual-project-heading">
                <div>
                  <p className="project-eyebrow">{project.label}</p>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
                <a
                  className="project-arrow"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <ArrowIcon />
                </a>
              </div>
              <div className={`project-image-placeholder ${project.tone}`}>
                <span>Project image coming soon</span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
