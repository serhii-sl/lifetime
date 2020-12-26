import * as React from 'react';
// styles
import { Tab } from './styles';
// constants
import { TABS } from '../../constants';

interface ITabs {
  activeTab: TABS;
  setActiveTab: (tab: TABS) => void;
}

const Tabs: React.FC<ITabs> = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <Tab onClick={() => setActiveTab(TABS.HOME)} isActive={activeTab === TABS.HOME}>
        HOME
      </Tab>
      <Tab onClick={() => setActiveTab(TABS.FRIENDS)} isActive={activeTab === TABS.FRIENDS}>
        FRIENDS
      </Tab>
      <Tab onClick={() => setActiveTab(TABS.MESSENGER)} isActive={activeTab === TABS.MESSENGER}>
        MESSENGER
      </Tab>
    </>
  );
};

export default Tabs;
