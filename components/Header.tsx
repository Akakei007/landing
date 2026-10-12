import styles from './Header.module.css';

const links = ['Products', 'Prices', 'Overview', 'Contacts'];

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo} aria-label="Apple">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M16.37 12.6c-.03-2.72 2.22-4.03 2.32-4.09-1.26-1.85-3.23-2.1-3.93-2.13-1.67-.17-3.26.98-4.11.98-.85 0-2.16-.96-3.55-.93-1.83.03-3.51 1.06-4.45 2.7-1.9 3.29-.49 8.17 1.36 10.84.9 1.31 1.98 2.78 3.39 2.73 1.36-.05 1.88-.88 3.52-.88 1.64 0 2.11.88 3.55.85 1.47-.03 2.4-1.33 3.29-2.65 1.04-1.52 1.47-3 1.49-3.07-.03-.01-2.86-1.1-2.89-4.35zM13.67 4.6c.75-.91 1.25-2.17 1.11-3.43-1.08.04-2.38.72-3.15 1.62-.69.8-1.3 2.08-1.14 3.31 1.2.09 2.43-.61 3.18-1.5z" />
        </svg>
      </a>
      <nav aria-label="Основная навигация">
        <ul className={styles.nav}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
