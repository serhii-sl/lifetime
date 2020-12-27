import * as React from 'react';
// constants
import { TABS } from '../../layouts/MainLayout/Header/components/NavigationTabs/constants';

interface IHeaderNavigationContext {
  activeTab: TABS;
  setActiveTab: (tab: TABS) => void;
  setUserName: (name: string) => void;
  userName: any;
}

export const HeaderNavigationContext = React.createContext<IHeaderNavigationContext>({
  activeTab: TABS.HOME,
  setActiveTab: () => {},
  setUserName: () => {},
  userName: ''
});

const NavigationTabsContainer: React.FC = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(TABS.HOME);

  const [userName, setUserName] = React.useState('');

  const ctxValue = {
    activeTab,
    setActiveTab,
    setUserName,
    userName
  };

  return <HeaderNavigationContext.Provider value={ctxValue}>{children}</HeaderNavigationContext.Provider>;
};

export default NavigationTabsContainer;
