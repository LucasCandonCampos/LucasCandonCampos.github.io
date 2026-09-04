import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="page-content" aria-label="About Lucas Candon-Campos">
        <div className="wrapper">
          <article className="post">
            <header className="post-header" aria-hidden="true">
              <h1 className="post-title" />
            </header>

            <div className="post-content">
              <p>
                <img
                  className="profile-image"
                  src="/lucas-candon-campos.jpg"
                  alt="The World Is Yours blimp artwork from Lucas’s GitHub profile"
                  width="460"
                  height="460"
                />
              </p>

              <p>
                I’m Lucas Candon-Campos, an entrepreneur and developer studying
                Entrepreneurship, Innovation, & Technology Management at Virginia
                Tech.
              </p>

              <p>
                I founded <a href="/projects/">CampusFuel</a>, a nutrition-tracking
                app that lets students log dining hall food. It now supports 400+
                universities representing more than 4 million students nationwide.
              </p>

              <p>
                I work on the product end to end, from the data pipeline behind
                real-time dining menus to the marketing and growth strategy that
                helped CampusFuel scale to thousands of users.
              </p>

              <p>
                I’m also an OpenAI Campus Lead at Virginia Tech, where I lead
                workshops, build sessions, and events that help students use AI to
                make things. Previously, I built AI automation systems at SHRM and
                the Spanish Association Against Cancer.
              </p>

              <p>
                I like turning messy problems into useful products. My recent work
                includes a portfolio-monitoring system that connects to my
                Robinhood account and a machine learning model trained on more than
                7,000 UFC fights. You can see more on my{' '}
                <a href="/projects/">projects page</a>.
              </p>

              <p>
                I’m active on{' '}
                <a
                  href="https://github.com/LucasCandonCampos"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{' '}
                and{' '}
                <a
                  href="https://www.linkedin.com/in/lucascandon"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                . I speak English, Spanish, and Portuguese.
              </p>

              <p>
                I enjoy meeting people building thoughtful products.{' '}
                <a href="mailto:lucascandoncampos@gmail.com">Reach out to me</a>{' '}
                if you want to work together or just want to chat.
              </p>
            </div>
          </article>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
