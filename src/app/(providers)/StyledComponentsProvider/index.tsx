"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

import { appTheme } from "../../(theme)/styledComponentsTheme";

export const StyledComponentsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    return (
      <StyledThemeProvider theme={appTheme}>{children}</StyledThemeProvider>
    );
  }

  return (
    <StyledThemeProvider theme={appTheme}>
      <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
    </StyledThemeProvider>
  );
};
