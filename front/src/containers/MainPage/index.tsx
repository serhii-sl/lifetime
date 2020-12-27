import * as React from 'react';
// layouts
import MainLayout from '../../layouts/MainLayout';
// components
import Posts from '../../components/Posts';
// constants
import { TABS } from '../../layouts/MainLayout/Header/components/NavigationTabs/constants';
// context
import { HeaderNavigationContext } from '../../context/HeaderNavigation';
import ProfileContainer from '../../components/Profile';

const MainPageContainer = () => {
  const { activeTab } = React.useContext(HeaderNavigationContext);

  return (
    <MainLayout>
      {activeTab === TABS.HOME && <Posts />}
      {activeTab === TABS.FRIENDS && <div>FRIENDS</div>}
      {activeTab === TABS.MESSENGER && <div>MESSENGER</div>}
      {activeTab === TABS.PROFILE && <ProfileContainer />}
    </MainLayout>
  );
}

export default MainPageContainer;
