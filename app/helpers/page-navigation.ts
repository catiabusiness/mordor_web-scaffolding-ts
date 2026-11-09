import type { Response } from 'express';
import type { PrivateNavigationType } from '../../services/types/navigation';

export interface PrivateNavigation {
  navigationData: {
    privateNavigationOptions:{
      title: string;
      type: string;
      active?: string;
      hideNotifications?: boolean;
    };
  };
}

export interface PublicNavigation {
  navigationId: string;
  navigationData: {
    type: string;
    active: string;
  };
}

export const navigationData = (
  type: string,
  platformId: string,
  title?: string,
): PrivateNavigation | PublicNavigation => {
  const showTitle = type === 'header-only';

  if(platformId === 'Private' && (type === 'header-only' || type === 'omni-channel')) {
    return {
      navigationId: platformId,
      navigationData: {
        type: 'clean',
        active: 'demo',
    },
  };
}

  return {
    navigationData: {
      privateNavigationOptions: {
        type,
        title: (showTitle && title) || '',
        active: 'demo',
        hideNotifications: true,
      },
    },
  };
};

export const setNavigationErrorPage = (
  res: Response,
  navigationType: PrivateNavigationType,
): void => {
  res.locals.navigationType = navigationType;
}
