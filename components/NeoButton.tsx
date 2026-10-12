import styles from './NeoButton.module.css';

type Props = {
  children?: React.ReactNode;
  variant?: 'pill' | 'round';
  href?: string;
  label?: string;
};

export default function NeoButton({ children, variant = 'pill', href = '#', label }: Props) {
  return (
    <a href={href} className={`${styles.btn} ${styles[variant]}`} aria-label={label}>
      {children}
    </a>
  );
}
