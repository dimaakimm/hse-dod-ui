import { SButtonLink } from "./buttonLink.styles";
import { FC } from "react";
import { ButtonProps } from "antd";

export const ButtonLink: FC<ButtonProps> = ({ ...args }) => {
  return <SButtonLink {...args} />;
};
