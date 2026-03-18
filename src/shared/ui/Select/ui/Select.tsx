"use client";

import { SSelect, SSelectDropdown } from "./select.styles";
import { SelectProps } from "antd";
import { FC } from "react";

export const Select: FC<SelectProps> = ({ ...props }) => {
  return (
    <SSelect
      popupStyle={{ padding: 0, borderRadius: 4 }}
      popupRender={(originNode) => (
        <SSelectDropdown>{originNode}</SSelectDropdown>
      )}
      {...props}
    />
  );
};
