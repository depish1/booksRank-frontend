import styles from './Footer.module.scss';

const Footer: React.FC = ({ children }) => (
  <footer className={styles.footer}>{children}</footer>
);

export default Footer;
