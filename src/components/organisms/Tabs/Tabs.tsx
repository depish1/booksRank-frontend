import { ReactElement, useState } from 'react';

import Tab from './Tab/Tab';
import styles from './Tabs.module.scss';

export interface ITabsConfig {
  tabName: string;
  tabId: string;
  tabComponent: ReactElement;
}

interface ITabsProps {
  tabsConfig: ITabsConfig[];
}

const Tabs: React.FC<ITabsProps> = ({ tabsConfig }) => {
  const [activeTab, setActiveTab] = useState<string>(tabsConfig[0].tabId);

  const renderTab = (tabId: string) => {
    const tabToRender = tabsConfig.find((tab) => tab.tabId === tabId);
    return tabToRender?.tabComponent;
  };
  return (
    <div className={styles.tabs__Container}>
      <nav className={styles.tabs__Nav}>
        {tabsConfig.map(({ tabName, tabId }) => (
          <Tab
            isActive={activeTab === tabId}
            key={tabId}
            setActiveHandler={setActiveTab}
            tabId={tabId}
            tabName={tabName}
          />
        ))}
      </nav>
      {renderTab(activeTab)}
    </div>
  );
};

export default Tabs;
