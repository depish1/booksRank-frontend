import React from 'react';

import RankTab from 'components/organisms/RankTab/RankTab';
import Tabs, { ITabsConfig } from 'components/organisms/Tabs/Tabs';
import WishListTab from 'components/organisms/WishListTab/WishListTab';

const TablesView: React.FC = () => {
  const tabsConfig: ITabsConfig[] = [
    {
      tabName: 'Ranking',
      tabId: 'rank',
      tabComponent: <RankTab />,
    },
    {
      tabName: 'Lista życzeń',
      tabId: 'wishList',
      tabComponent: <WishListTab />,
    },
  ];

  return <Tabs tabsConfig={tabsConfig} />;
};

export default TablesView;
