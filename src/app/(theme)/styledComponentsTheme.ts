import { DefaultTheme } from "styled-components";

import { breakpoints as breakpointsValues } from "@/shared/config";
import { IBreakpointsTheme } from "@/global";

const breakpoints: IBreakpointsTheme = {
  maxMobile: `${breakpointsValues.maxMobile}px`,
  maxTablets: `${breakpointsValues.maxTablets}px`,
  maxLaptops: `${breakpointsValues.maxLaptops}px`,
  maxOldDesktops: `${breakpointsValues.maxOldDesktops}px`,
  maxDesktops: `${breakpointsValues.maxDesktops}px`,
};

const AppFonts = {
  Geologica: "var(--font-hse-sans)",
  Golos: "var(--font-golos)",
};

export const appTheme: DefaultTheme = {
  breakpoints,
};
