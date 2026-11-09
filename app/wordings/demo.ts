import type { I18n } from 'nazgul/i18n';

export type DemoWordings = ReturnType<typeof getDemoWordings>;

export const getDemoWordings = (i18n: I18n) => ({
  title: i18n.gettext('Demo Page Title'),
});
