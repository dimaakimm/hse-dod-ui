import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ru'],
  defaultLocale: 'ru',
  pathnames: {},
});

export const { useRouter, Link } = createNavigation(routing);
