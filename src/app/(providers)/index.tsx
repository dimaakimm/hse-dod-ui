import { FC, PropsWithChildren } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { StyledComponentsProvider } from "./StyledComponentsProvider";
import { ThemeProvider } from "./ThemeProvider";
import { RQClientProvider } from "./RQClientProvider";

import "antd/dist/reset.css";
import { SSEProvider } from "./SSEProvider";

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RQClientProvider>
      <StyledComponentsProvider>
        <AntdRegistry>
          <SSEProvider />
          <ThemeProvider>{children}</ThemeProvider>
        </AntdRegistry>
      </StyledComponentsProvider>
    </RQClientProvider>
  );
};
