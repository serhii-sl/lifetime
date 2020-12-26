import * as React from 'react';
// constants
import { TABS } from '../../layouts/MainLayout/Header/components/NavigationTabs/constants';

interface INavigationTabsContext {
  activeTab: TABS;
  setActiveTab: (tab: TABS) => void;
}

export const NavigationTabsContext = React.createContext<INavigationTabsContext>({
  activeTab: TABS.HOME,
  setActiveTab: () => {}
});

const NavigationTabsContainer: React.FC = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(TABS.HOME);

  const ctxValue = {
    activeTab,
    setActiveTab
  };
  return <NavigationTabsContext.Provider value={ctxValue}>{children}</NavigationTabsContext.Provider>;
};

export default NavigationTabsContainer;
