import { FC } from "react";
import { SLegendIcon, SLegendItem, SLegendList } from "./map.styles";
import { LEFT_LEGEND } from "../model/map.types";

export const MapLegendLeft: FC = () => {
  return (
    <SLegendList>
      {LEFT_LEGEND.map((item) => (
        <SLegendItem key={item.label}>
          <SLegendIcon>{item.icon}</SLegendIcon>
          <span>{item.label}</span>
        </SLegendItem>
      ))}
    </SLegendList>
  );
};
