import { ReactNode } from 'react';

export type LanguageType = 'ru';

export interface LocaleProviderAsyncProps {
    children: ReactNode;
    params: Promise<{ locale: LanguageType }>;
}
