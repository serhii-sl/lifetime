import * as React from 'react';
// constants
import { TABS } from './constants';
// components
import Posts from '../../../../../components/Posts';
import Tabs from './components/Tabs';

const NavigationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(TABS.HOME);

  return (
    <>
      <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === TABS.HOME && <Posts />}
      {activeTab === TABS.FRIENDS && <div>FRIENDS</div>}
      {activeTab === TABS.MESSENGER && <div>MESSENGER</div>}
    </>
  );
};

export default NavigationTabs;
