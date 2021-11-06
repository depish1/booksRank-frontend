import styles from '../Table.module.scss';

interface ITableHeaderProps {
  columns: string[];
}

const TableHeader: React.FC<ITableHeaderProps> = ({ columns }) => {
  const rowCssClasses = `${styles.table__Row} ${styles.table__RowHeader} ${
    styles[`table__Row${columns.length}`]
  } ${styles[`table__RowHeader${columns.length}`]}`;
  return (
    <header className={rowCssClasses}>
      {columns.map((column) => (
        <div className={styles.table__Cell} key={column}>
          {column}
        </div>
      ))}
      <div className={styles.table__scrollbarPlaceHolder} />
    </header>
  );
};

export default TableHeader;
