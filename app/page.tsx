type Project = {
  name: string;
  meta: string;
  description: string;
  proof: string;
  href?: string;
  linkLabel?: string;
};

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Now', href: '#now' },
];

const projects: Project[] = [
  {
    name: 'CampusFuel',
    meta: 'Founder & developer · 2026—now',
    description:
      'Nutrition tracking built around the food students actually see in their dining halls, with real-time menus and campus-specific data.',
    proof: '400+ universities · 4M+ students represented · 1,000+ paid users in month one',
  },
  {
    name: 'BernieBot',
    meta: 'Team lead · IBM Experiential Learning Lab',
    description:
      'An event-driven AI system that watches portfolios for meaningful price, news, and volume changes, then generates personalized investor insights.',
    proof: 'Led a four-person team from idea to deployment',
  },
  {
    name: 'UFC Fight Predictor',
    meta: 'Independent project · Python + XGBoost',
    description:
      'A calibrated prediction pipeline trained on more than 7,000 fights and 65 matchup features, with SHAP explanations and market comparisons.',
    proof: '67.7% held-out accuracy on 2023–2026 fights',
    href: 'https://github.com/LucasCandonCampos/ufc-predictor',
    linkLabel: 'View the repository',
  },
];

const notes = [
  {
    number: '01',
    title: 'Build the trigger, not the noise',
    copy: 'What portfolio alerts taught me about designing agents that know when not to run.',
    tag: 'AI systems',
  },
  {
    number: '02',
    title: 'A campus product for every campus',
    copy: 'Notes from taking CampusFuel from one university to hundreds without losing the local feel.',
    tag: 'Building products',
  },
  {
    number: '03',
    title: 'Measure the work that disappears',
    copy: 'A practical way to think about ROI when automation gives people hours back.',
    tag: 'AI at work',
  },
];

const experience = [
  ['OpenAI', 'Campus Lead', '2026—now'],
  ['SHRM', 'Digital Transformation Intern', '2026'],
  ['AECC', 'Strategy & Operations Intern', '2025'],
  ['Virginia Tech', 'B.S., EIT Management', '2024—2028'],
];

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label="Lucas Candon-Campos, home">
            Lucas Candon-Campos
          </a>
          <nav aria-label="Primary navigation">
            {links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="page-shell" id="top">
        <section className="intro" id="about" aria-labelledby="intro-title">
          <div className="intro-copy">
            <p className="eyebrow">Founder · builder · Virginia Tech</p>
            <h1 id="intro-title">
              I’m Lucas. I build useful products where <em>AI, data, and people</em>{' '}
              meet.
            </h1>
            <div className="bio-copy">
              <p>
                I’m an entrepreneur and developer studying Entrepreneurship,
                Innovation, & Technology Management at Virginia Tech.
              </p>
              <p>
                I founded <a href="#projects">CampusFuel</a>, a nutrition-tracking
                app now available across 400+ universities, and grew it to 1,000+
                paid users in its first month nationwide.
              </p>
              <p>
                I’m also an OpenAI Campus Lead. I like turning messy problems into
                simple tools, especially in AI automation, consumer products, and
                applied machine learning.
              </p>
            </div>
            <div className="intro-links" aria-label="Contact and social links">
              <a href="mailto:lucascandoncampos@gmail.com">Email</a>
              <a
                href="https://www.linkedin.com/in/lucascandon"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ExternalArrow />
              </a>
              <a
                href="https://github.com/LucasCandonCampos"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ExternalArrow />
              </a>
            </div>
          </div>

          <figure className="profile-figure">
            <img
              src="/lucas-candon-campos.jpg"
              alt="The World Is Yours blimp artwork from Lucas's GitHub profile"
              width="460"
              height="460"
            />
            <figcaption>Building from Blacksburg, Virginia.</figcaption>
          </figure>
        </section>

        <section className="signal-row" aria-label="At a glance">
          <div>
            <strong>400+</strong>
            <span>universities reached</span>
          </div>
          <div>
            <strong>1,000+</strong>
            <span>paid users in month one</span>
          </div>
          <div>
            <strong>3</strong>
            <span>languages spoken</span>
          </div>
        </section>

        <section className="section-block" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-title">Things I’ve built</h2>
            <p>
              Products and systems that turn ambitious ideas into something people
              can actually use.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.name}>
                <span className="project-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="project-body">
                  <p className="project-meta">{project.meta}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p className="project-proof">{project.proof}</p>
                  {project.href ? (
                    <a
                      className="text-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.linkLabel} <ExternalArrow />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block split-section" aria-labelledby="experience-title">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Along the way</p>
            <h2 id="experience-title">Experience</h2>
          </div>
          <div className="experience-list">
            {experience.map(([place, role, years]) => (
              <div className="experience-row" key={`${place}-${role}`}>
                <div>
                  <strong>{place}</strong>
                  <span>{role}</span>
                </div>
                <time>{years}</time>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block" id="writing" aria-labelledby="writing-title">
          <div className="section-heading writing-heading">
            <div>
              <p className="eyebrow">Open notebook</p>
              <h2 id="writing-title">Ideas I’m writing about</h2>
            </div>
            <p className="side-note">
              The first essays are in progress. These are the questions currently
              on my desk.
            </p>
          </div>

          <div className="notes-grid">
            {notes.map((note) => (
              <article className="note-card" key={note.number}>
                <div className="note-topline">
                  <span>{note.number}</span>
                  <span>{note.tag}</span>
                </div>
                <h3>{note.title}</h3>
                <p>{note.copy}</p>
                <span className="draft-label">Drafting now</span>
              </article>
            ))}
          </div>
        </section>

        <section className="now-block" id="now" aria-labelledby="now-title">
          <div>
            <p className="eyebrow">Now · September 2026</p>
            <h2 id="now-title">Currently building, learning, and looking closer.</h2>
          </div>
          <div className="now-list">
            <p>
              <span>Building</span>
              CampusFuel’s nationwide dining data pipeline and student experience.
            </p>
            <p>
              <span>Teaching</span>
              Hands-on AI workshops as an OpenAI Campus Lead at Virginia Tech.
            </p>
            <p>
              <span>Curious about</span>
              Agentic products, distribution, and the small details that make tools
              feel obvious.
            </p>
          </div>
        </section>

        <section className="contact-block" aria-labelledby="contact-title">
          <p className="eyebrow">Let’s compare notes</p>
          <h2 id="contact-title">
            I enjoy ambitious problems and people who care about the details.
          </h2>
          <a className="contact-link" href="mailto:lucascandoncampos@gmail.com">
            lucascandoncampos@gmail.com <span aria-hidden="true">→</span>
          </a>
        </section>
      </div>

      <footer>
        <div className="footer-inner">
          <p>© 2026 Lucas Candon-Campos</p>
          <p className="footer-colophon">
            Designed with restraint. Built with curiosity.
          </p>
          <div>
            <a href="mailto:lucascandoncampos@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/lucascandon"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/LucasCandonCampos"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
