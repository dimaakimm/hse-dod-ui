import { FC } from "react";
import {
  SImage,
  SLegend,
  SLegendIcon,
  SLegendItem,
  SLegendList,
} from "./map.styles";
import { LEFT_LEGEND } from "../model/map.types";
import { Crow } from "@/shared/assets";

export const MapLegendLeft: FC = () => {
  return (
    <SLegend>
      <SLegendList>
        {LEFT_LEGEND.map((item) => (
          <SLegendItem key={item.label}>
            <SLegendIcon>{item.icon}</SLegendIcon>
            <span>{item.label}</span>
          </SLegendItem>
        ))}
      </SLegendList>

      <SImage src={Crow.src} alt="Ворона" width={290} height={190} />
    </SLegend>
  );
};
