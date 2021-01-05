export const colors = {
  // blue
  blue100: '#bad6fb',
  blue150: '#74adf7',
  blue200: '#f0f7ff',
  blue700: '#203758',
  blue800: '#1877f2',
  // gray
  gray100: '#bfbfbf',
  gray150: '#c3bfd7',
  gray180: '#c7c6cd',
  gray200: '#f1f2f6',
  gray400: '#36383a',
  gray500: '#788292',
  // black
  black400: '#788292',
  // purple
  purple500: '#735cdc',
  purple800: '#2a2a72',

  white: '#fff',
  red: '#ff0000'
}

export const SIZE = {
  MOBILE_S: '320px',
  MOBILE_M: '480px',
  MOBILE_L: '600px',
  TABLET_XS: '720px',
  TABLET_S: '768px',
  TABLET_M: '960px',
  TABLET_L: '1280px',
  DESKTOP_M: '1440px',
  DESKTOP_L: '1920px',
}

export const screenSizes = {
  MOBILE_S: `(max-width: ${SIZE.MOBILE_S})`,
  MOBILE_M: `(max-width: ${SIZE.MOBILE_M})`,
  MOBILE_L: `(max-width: ${SIZE.MOBILE_L})`,
  TABLET_XS: `(max-width: ${SIZE.TABLET_XS})`,
  TABLET_S: `(max-width: ${SIZE.TABLET_S})`,
  TABLET_M: `(max-width: ${SIZE.TABLET_M})`,
  TABLET_L: `(max-width: ${SIZE.TABLET_L})`,
  DESKTOP_M: `(max-width: ${SIZE.DESKTOP_M})`,
  DESKTOP_L: `(max-width: ${SIZE.DESKTOP_L})`,
}

export const theme = {
  colors,
  screenSizes,
}
