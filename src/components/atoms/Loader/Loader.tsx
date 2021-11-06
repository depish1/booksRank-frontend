import styles from './Loader.module.scss';

const Loader: React.FC = () => (
  <div className={styles.loader__Container}>
    <div className={styles.loader__Loader}>
      <span className={styles.loader__Spinner} />
    </div>
  </div>
);

export default Loader;
