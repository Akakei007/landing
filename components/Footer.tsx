import styles from './Footer.module.css';

const links = ['Products', 'Prices', 'Overview', 'Contacts'];

export default function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <p>© {new Date().getFullYear()} AirPods Max. Учебный проект, не является официальным сайтом Apple.</p>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
