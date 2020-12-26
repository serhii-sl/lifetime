interface IOptionProfile {
  name: string
  onClick: () => void
}

export const PROFILE_TOOLTIP_OPTIONS: IOptionProfile[] = [
  {
    name: 'Profile',
    onClick: () => {}
  },
  {
    name: 'Settings',
    onClick: () => {}
  },
  {
    name: 'Sign Out',
    onClick: () => {}
  }
];
