import * as React from 'react';
// layouts
import MainLayout from '../../layouts/MainLayout';
// components
import Posts from '../../components/Posts';
// constants
import { TABS } from '../../layouts/MainLayout/Header/components/NavigationTabs/constants';
// context
import { NavigationTabsContext } from '../../context/NavigationTabs';

const MainPageContainer = () => {
  const { activeTab } = React.useContext(NavigationTabsContext);

  return (
    <MainLayout>
      {activeTab === TABS.HOME && <Posts />}
      {activeTab === TABS.FRIENDS && <div>FRIENDS</div>}
      {activeTab === TABS.MESSENGER && <div>MESSENGER</div>}
    </MainLayout>
  );
}

export default MainPageContainer;
