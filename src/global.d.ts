import 'styled-components';
import ru from '../locales/ru.json';

type Messages = typeof ru;

declare global {
    type IntlMessages = Messages;
}

export interface IBreakpointsTheme {
    maxMobile: string;
    maxTablets: string;
    maxLaptops: string;
    maxOldDesktops: string;
    maxDesktops: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: IBreakpointsTheme;
    }
}
