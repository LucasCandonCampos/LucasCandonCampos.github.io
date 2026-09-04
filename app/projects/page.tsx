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

const projects = [
  {
    name: 'CampusFuel',
    description: 'Campus dining nutrition, built for real university menus.',
    href: 'https://lucascandoncampos.github.io/hokiecals-app/',
    image: '/projects/campusfuel-feature.png',
    alt: 'CampusFuel calorie and nutrition dashboard shown on an iPhone',
    width: 1080,
    height: 1350,
    mediaClass: 'campusfuel-media',
  },
  {
    name: 'UFC Fight Predictor',
    description: '7,253 fights. 65 features. 67.7% held-out accuracy.',
    href: 'https://github.com/LucasCandonCampos/ufc-predictor',
    image: '/projects/ufc-iphone.png',
    alt: 'UFC Fight Predictor inside a realistic black iPhone',
    width: 853,
    height: 1844,
    mediaClass: 'phone-project-media ufc-phone-media',
  },
  {
    name: 'Outclass',
    description: 'Canvas assignments, grades, syllabi, and deadlines inside Telegram.',
    href: 'https://github.com/LucasCandonCampos/outclass',
    image: '/projects/outclass-feature.png',
    alt: 'Outclass application icon',
    width: 1248,
    height: 1248,
    mediaClass: 'outclass-media',
  },
  {
    name: 'Kató',
    description: 'A language partner for text, voice notes, and live calls.',
    href: 'https://github.com/LucasCandonCampos/kato-agent',
    image: '/projects/kato-iphone.png',
    alt: 'Kató language practice conversation inside a realistic black iPhone',
    width: 853,
    height: 1844,
    mediaClass: 'phone-project-media kato-phone-media',
  },
  {
    name: 'BernieBot',
    description: 'An always-on market analyst for stocks and crypto inside Telegram.',
    href: 'https://github.com/LucasCandonCampos/Bernie',
    image: '/projects/berniebot-feature.png',
    alt: 'Bernard Madoff smiling at an event',
    width: 445,
    height: 445,
    mediaClass: 'berniebot-media',
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

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
          {projects.map((project, index) => (
            <article className="visual-project-card" key={project.name}>
              <div className="visual-project-heading">
                <div>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
                <a
                  className="project-arrow"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name}`}
                >
                  <ArrowIcon />
                </a>
              </div>
              <div className={`project-media ${project.mediaClass}`}>
                <img
                  src={project.image}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
