import styles from './Description.module.scss';

const Description: React.FC = ({ children }) => (
  <p className={styles.description}>{children}</p>
);

export default Description;
