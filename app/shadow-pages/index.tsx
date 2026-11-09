import type { FunctionalComponent } from 'react';
import type { Request } from 'express';
import type { PlatformId } from 'frontend-platform_detection';

import { getDemoWordings, type DemoWordings } from '../wordings/demo';
import { PrivateNavigation } from '../../services/types/navigation';
import { navigationData } from '../helpers/page-navigation';

export type DemoProps = {
  wording: DemoWordings;
};

const Demo: FunctionalComponent<DemoProps> = ({ wording }) => (
  <div viewName="demo-page">
    <h1>{wording.title}</h1>
  </div>
);

type PageSettings = {
  title: string;
  platformId: PlatformId;
};

export const getServerSideProps = (req: Request) => {
  const wording = getDemoWordings(req.i18n!);

  return {
    props: {
      wording,
    },
    settings: {
      title: wording.title,
      platformId: req.platform.id,
    },
  };
};

export const setPageSettings: ShadowPage.PageSettingsFunction<PageSettings> = ({
  settings,
}) => ({
  title: settings.title,
  className: 'demo-page',
  navigation: navigationData(
    PrivateNavigation.HEADER_ONLY,
    settings.platformId,
    settings.title,
  ),
});

export default Demo;
