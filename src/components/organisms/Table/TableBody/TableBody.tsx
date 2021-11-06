import styles from '../Table.module.scss';

const TableBody: React.FC = ({ children }) => (
  <main className={styles.table__Body}>{children}</main>
);

export default TableBody;
