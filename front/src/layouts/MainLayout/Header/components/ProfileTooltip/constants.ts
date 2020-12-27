import { TABS } from '../NavigationTabs/constants';

interface IOptionProfile {
  label: TABS
  name: string
}

export const PROFILE_TOOLTIP_OPTIONS: IOptionProfile[] = [
  {
    label: TABS.PROFILE,
    name: 'Profile'
  },
  {
    label: TABS.PROFILE,
    name: 'Settings'
  },
  {
    label: TABS.PROFILE,
    name: 'Sign Out'
  }
];
