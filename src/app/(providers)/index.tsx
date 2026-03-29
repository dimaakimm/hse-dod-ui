import { FC, PropsWithChildren } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { StyledComponentsProvider } from "./StyledComponentsProvider";
import { ThemeProvider } from "./ThemeProvider";
import { RQClientProvider } from "./RQClientProvider";

import "antd/dist/reset.css";
import { SSEProvider } from "./SSEProvider";
import { ToastBarProvider } from "./ToastBarProvider";

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RQClientProvider>
      <ToastBarProvider>
        <StyledComponentsProvider>
          <AntdRegistry>
            <SSEProvider />
            <ThemeProvider>{children}</ThemeProvider>
          </AntdRegistry>
        </StyledComponentsProvider>
      </ToastBarProvider>
    </RQClientProvider>
  );
};
