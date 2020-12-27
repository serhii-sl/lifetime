import * as React from 'react';
// constants
import { PROFILE_TABS } from './constants';
// components
import Tabs from './components/Tabs';
import About from '../About';

const ProfileTabs: React.FC = () => {
  const [profileTab, setProfileTab] = React.useState(PROFILE_TABS.ABOUT);

  return (
    <>
      <Tabs profileTab={profileTab} setProfileTab={setProfileTab} />
      {profileTab === PROFILE_TABS.ABOUT && <About />}
      {profileTab === PROFILE_TABS.FRIENDS && <div>Profile</div>}
      {profileTab === PROFILE_TABS.PHOTOS && <div>Photos</div>}
    </>
  );
};

export default ProfileTabs;
