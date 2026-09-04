const pages = [
  { href: '/projects', label: 'Projects' },
  { href: '/writing', label: 'Writing' },
];

function MenuLinks() {
  return pages.map((page) => (
    <a className="page-link" href={page.href} key={page.href}>
      {page.label}
    </a>
  ));
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrapper header-wrapper">
        <a className="site-title" href="/">
          Lucas Candon-Campos
        </a>

        <nav className="site-nav desktop-nav" aria-label="Main navigation">
          <MenuLinks />
        </nav>

        <details className="site-nav mobile-nav">
          <summary aria-label="Open navigation menu">
            <svg viewBox="0 0 18 15" width="18" height="15" aria-hidden="true">
              <path d="M18 1.484c0 .82-.665 1.484-1.484 1.484H1.484C.665 2.969 0 2.304 0 1.484S.665 0 1.484 0h15.032C17.335 0 18 .665 18 1.484ZM18 7.516C18 8.335 17.335 9 16.516 9H1.484C.665 9 0 8.335 0 7.516s.665-1.484 1.484-1.484h15.032C17.335 6.032 18 6.696 18 7.516ZM18 13.516C18 14.335 17.335 15 16.516 15H1.484C.665 15 0 14.335 0 13.516s.665-1.484 1.484-1.484h15.032C17.335 12.032 18 12.696 18 13.516Z" />
            </svg>
          </summary>
          <div className="mobile-links">
            <MenuLinks />
          </div>
        </details>
      </div>
    </header>
  );
}
