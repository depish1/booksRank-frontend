import styles from './Tab.module.scss';

interface ITabProps {
  isActive: boolean;
  tabId: string;
  tabName: string;
  setActiveHandler: (id: string) => void;
}

const Tab: React.FC<ITabProps> = ({
  isActive,
  tabId,
  tabName,
  setActiveHandler,
}) => {
  const tabButtonCssClasses = `${styles.tab__Tab} ${
    isActive && styles.tab__TabActive
  }`;
  return (
    <div className={styles.tab__Container}>
      <button
        className={tabButtonCssClasses}
        onClick={() => setActiveHandler(tabId)}
      >
        {tabName}
      </button>
    </div>
  );
};

export default Tab;
