export type Navigation ={
  client_type: string;
  site_id: string;
  platform: string;
  os?: string;
  version?: string;
};

export const NavigationClient = {
  WEB: 'WEB',
  MOBILE: 'MOBILE',
};

export type NavigationClientType = (typeof NavigationClient)[keyof typeof NavigationClient];

export const NavigationOs = {
  IOS: 'iOS',
  ANDROID: 'Android',
};

export type NavigationOsType = (typeof NavigationOs)[keyof typeof NavigationOs];

export const PrivateNavigation ={
  HEADER_ONLY:'header-only',
  FULL: 'full',
  OMNI_CHANNEL: 'omni-channel',
};

export type PrivateNavigationType = (typeof PrivateNavigation)[keyof typeof PrivateNavigation];
