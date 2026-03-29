import { DefaultTheme } from "styled-components";
import React from "react";

import { SIcon } from "../ui/toastBar.styles";
import { IToastBarItem } from "../model/toastBar.types";
import { Bell } from "@/shared/assets";

export const getToastBarStyles = (
  type: IToastBarItem["type"],
  withDescription: boolean,
) => {
  switch (type) {
    default:
      return {
        color: "rgba(255, 255, 255, 1)",
        Icon: (
          <SIcon $with={withDescription} $type={type}>
            <Bell />
          </SIcon>
        ),
        bgColor: "rgba(35, 86, 211, 1)",
      };
  }
};
