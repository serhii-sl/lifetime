import * as React from 'react';
// constants
import { PROFILE_TABS } from '../../constants';
// styles
import { TabsWrapper, Tab } from './styles';

interface ITabs {
  profileTab: PROFILE_TABS
  setProfileTab: (tab: PROFILE_TABS) => void
}


const Tabs: React.FC<ITabs> = ({profileTab, setProfileTab}) => {
  return (
    <TabsWrapper>
      <Tab onClick={() => setProfileTab(PROFILE_TABS.ABOUT)} isActive={profileTab === PROFILE_TABS.ABOUT}>
        About
      </Tab>
      <Tab onClick={() => setProfileTab(PROFILE_TABS.FRIENDS)} isActive={profileTab === PROFILE_TABS.FRIENDS}>
        Friends
      </Tab>
      <Tab onClick={() => setProfileTab(PROFILE_TABS.PHOTOS)} isActive={profileTab === PROFILE_TABS.PHOTOS}>
        Photos
      </Tab>
    </TabsWrapper>
  );
};

export default Tabs;
