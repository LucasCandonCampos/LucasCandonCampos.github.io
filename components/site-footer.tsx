export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrapper footer-columns">
        <ul className="contact-list">
          <li>
            <a href="mailto:lucascandoncampos@gmail.com">
              <span className="contact-icon" aria-hidden="true">@</span>
              <span>lucascandoncampos@gmail.com</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lucascandon"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon" aria-hidden="true">in</span>
              <span>lucascandon</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/LucasCandonCampos"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon" aria-hidden="true">gh</span>
              <span>LucasCandonCampos</span>
            </a>
          </li>
        </ul>
        <p className="footer-description">
          I build products at the intersection of AI, data, and people.
        </p>
      </div>
    </footer>
  );
}
