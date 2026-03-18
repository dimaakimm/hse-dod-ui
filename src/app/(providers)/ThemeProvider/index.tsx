'use client';

import React, { FC, PropsWithChildren } from 'react';
import ru from 'dayjs/locale/ru';
import ruRU from 'antd/locale/ru_RU';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { ConfigProvider } from 'antd';

import { getAntdTheme } from '../../(theme)/antDesignTheme';

dayjs.locale(ru);
dayjs.extend(utc);
dayjs.extend(timezone);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const antDesign = getAntdTheme();

  return (
    <ConfigProvider locale={ruRU} theme={antDesign}>
      {children}
    </ConfigProvider>
  );
};
