import * as React from 'react';
// constants
import { TABS } from './constants';
// styles
import { NavigationTabsWrapper, Tab } from './styles';
// context
import { HeaderNavigationContext } from '../../../../../context/HeaderNavigation';

const NavigationTabs: React.FC = () => {
  const { activeTab, setActiveTab } = React.useContext(HeaderNavigationContext);

  return (
    <NavigationTabsWrapper>
      <Tab onClick={() => setActiveTab(TABS.HOME)} isActive={activeTab === TABS.HOME}>
        HOME
      </Tab>
      <Tab onClick={() => setActiveTab(TABS.FRIENDS)} isActive={activeTab === TABS.FRIENDS}>
        FRIENDS
      </Tab>
      <Tab onClick={() => setActiveTab(TABS.MESSENGER)} isActive={activeTab === TABS.MESSENGER}>
        MESSENGER
      </Tab>
    </NavigationTabsWrapper>
  );
};

export default NavigationTabs;
